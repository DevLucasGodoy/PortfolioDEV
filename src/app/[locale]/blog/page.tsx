import { Mailchimp } from "@/components";
import { Posts } from "@/components/blog/Posts";
import { baseURL, getContent } from "@/resources";
import { getPosts } from "@/utils/utils";
import { Column, Heading, Meta, Schema } from "@once-ui-system/core";
import { getLocale, getTranslations, setRequestLocale } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const { blog } = getContent(locale);
  return Meta.generate({
    title: blog.title,
    description: blog.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(blog.title)}`,
    path: blog.path,
  });
}

export default async function Blog({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const { blog, person } = getContent(locale);
  const t = await getTranslations("Blog");

  const total = getPosts(["src", "posts", "blog"], await getLocale()).length;

  return (
    <Column maxWidth="m" paddingTop="24" paddingX="l" gap="xl" horizontal="center">
      <Schema
        as="blogPosting"
        baseURL={baseURL}
        title={blog.title}
        description={blog.description}
        path={`/${locale}${blog.path}`}
        image={`/api/og/generate?title=${encodeURIComponent(blog.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}/${locale}/blog`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Heading variant="heading-strong-xl">
        {blog.title}
      </Heading>
      <Column fillWidth gap="40">
        <Posts range={[1, 1]} thumbnail />
        {total > 1 && <Posts range={[2, 3]} columns="2" thumbnail direction="column" />}
      </Column>

      {total > 3 && (
        <Column fillWidth gap="24">
          <Heading as="h2" variant="heading-strong-xl">
            {t("recentPosts")}
          </Heading>
          <Posts range={[4]} columns="2" />
        </Column>
      )}

      <Mailchimp marginTop="l" marginBottom="l" />
    </Column>
  );
}
