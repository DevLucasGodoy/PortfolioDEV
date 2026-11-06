import { MDXRemote, type MDXRemoteProps } from "next-mdx-remote/rsc";
import Link from "next/link";
import type React from "react";
import { slugify as transliterate } from "transliteration";

// Plain HTML elements, styled by the `.prose` class in globals.css.

function CustomLink({
  href = "",
  children,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  if (href.startsWith("/")) {
    return (
      <Link href={href} {...props}>
        {children}
      </Link>
    );
  }
  if (href.startsWith("#")) {
    return (
      <a href={href} {...props}>
        {children}
      </a>
    );
  }
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
      {children}
    </a>
  );
}

function slugify(str: string): string {
  return transliterate(str.replace(/&/g, " and "), { lowercase: true, separator: "-" }).replace(
    /--+/g,
    "-",
  );
}

function createHeading(Tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6") {
  const Heading = ({ children }: { children?: React.ReactNode }) => {
    const id = typeof children === "string" ? slugify(children) : undefined;
    return (
      <Tag id={id} className="group">
        {id ? (
          <a href={`#${id}`} className="!text-inherit !no-underline">
            {children}
            <span className="ml-2 text-primary opacity-0 transition-opacity group-hover:opacity-100">
              #
            </span>
          </a>
        ) : (
          children
        )}
      </Tag>
    );
  };
  Heading.displayName = Tag;
  return Heading;
}

function MdxImage({ src, alt = "" }: React.ImgHTMLAttributes<HTMLImageElement>) {
  if (!src) return null;
  return <img src={String(src)} alt={alt} loading="lazy" className="w-full" />;
}

const components = {
  h1: createHeading("h1"),
  h2: createHeading("h2"),
  h3: createHeading("h3"),
  h4: createHeading("h4"),
  h5: createHeading("h5"),
  h6: createHeading("h6"),
  a: CustomLink,
  img: MdxImage,
};

export function CustomMDX(props: MDXRemoteProps) {
  return (
    <MDXRemote
      options={{ blockJS: false }}
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  );
}
