import { NextResponse } from 'next/server';
import { assertSafeUrl } from '@/utils/ssrf';
import { clientIp, rateLimit } from '@/utils/rateLimit';

export const runtime = 'edge';

const MAX_HTML_BYTES = 512 * 1024; // cap response body to 512 KB

function decodeHTMLEntities(text: string): string {
  return text.replace(/&(#?[a-zA-Z0-9]+);/g, (match, entity) => {
    const entities: { [key: string]: string } = {
      'amp': '&',
      'lt': '<',
      'gt': '>',
      'quot': '"',
      'apos': "'",
      '#x27': "'",
      '#39': "'",
      '#x26': '&',
      '#38': '&'
    };
    
    if (entity.startsWith('#')) {
      const code = entity.startsWith('#x') ? 
        parseInt(entity.slice(2), 16) : 
        parseInt(entity.slice(1), 10);
      return String.fromCharCode(code);
    }
    
    return entities[entity] || match;
  });
}

async function fetchWithTimeout(url: string, timeout = 5000) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);

  try {
    const response = await fetch(url, { 
      signal: controller.signal,
      headers: {
        'User-Agent': 'bot'
      }
    });
    clearTimeout(timeoutId);
    return response;
  } catch (error) {
    clearTimeout(timeoutId);
    throw error;
  }
}

async function extractMetadata(html: string) {
  const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i);
  const descMatch = html.match(/<meta[^>]*name="description"[^>]*content="([^"]+)"[^>]*>/i) 
    || html.match(/<meta[^>]*content="([^"]+)"[^>]*name="description"[^>]*>/i)
    || html.match(/<meta[^>]*property="og:description"[^>]*content="([^"]+)"[^>]*>/i);
  const imageMatch = html.match(/<meta[^>]*property="og:image"[^>]*content="([^"]+)"[^>]*>/i)
    || html.match(/<meta[^>]*content="([^"]+)"[^>]*property="og:image"[^>]*>/i);

  const title = titleMatch?.[1]?.trim() || '';
  const description = descMatch?.[1]?.trim() || '';
  const image = imageMatch?.[1]?.trim() || '';

  return {
    title: decodeHTMLEntities(title),
    description: decodeHTMLEntities(description),
    image: image,
  };
}

export async function GET(request: Request) {
  const limit = rateLimit(`ogfetch:${clientIp(request)}`, 20, 60 * 1000);
  if (!limit.allowed) {
    return NextResponse.json({ error: 'Too many requests' }, { status: 429 });
  }

  const { searchParams } = new URL(request.url);
  const url = searchParams.get('url');

  if (!url) {
    return NextResponse.json({ error: 'URL is required' }, { status: 400 });
  }

  let safeUrl: URL;
  try {
    safeUrl = assertSafeUrl(url);
  } catch {
    return NextResponse.json({ error: 'Invalid or blocked URL' }, { status: 400 });
  }

  try {
    const response = await fetchWithTimeout(safeUrl.toString());

    if (!response.ok) {
      throw new Error(`Failed to fetch URL: ${response.status}`);
    }

    const contentType = response.headers.get('content-type') || '';
    if (!contentType.includes('text/html') && !contentType.includes('application/xhtml')) {
      return NextResponse.json({ error: 'Unsupported content type' }, { status: 415 });
    }

    const html = (await response.text()).slice(0, MAX_HTML_BYTES);
    const metadata = await extractMetadata(html);

    return NextResponse.json({
      ...metadata,
      url,
    });
  } catch (error) {
    console.error('Error fetching metadata:', error instanceof Error ? error.message : String(error));
    
    return NextResponse.json({ 
      error: 'Failed to fetch metadata',
      message: error instanceof Error ? error.message : 'Unknown error occurred',
    }, { status: 500 });
  }
}