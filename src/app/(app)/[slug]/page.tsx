import dayjs from "dayjs";
import { ChevronLeftIcon } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BlogPosting as PageSchema, WithContext } from "schema-dts";

import { MDX } from "@/components/mdx";
import { Button } from "@/components/ui/button";
import { Prose } from "@/components/ui/typography";
import { SITE_INFO } from "@/config/site";
import { getAllPosts } from "@/data/blog";
import { USER } from "@/data/user";
import { Post } from "@/types/blog";

// Define the exact interface that Next.js 15 expects
interface PageProps {
  params?: Promise<{ slug: string }>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  if (!props.params) {
    return {};
  }
  
  const { slug } = await props.params;
  const post = getAllPosts().find((post) => post.slug === slug);

  if (!post) {
    return {};
  }

  const { title, description, image, createdAt, updatedAt } = post.metadata;
  const ogImage = image || `/og/simple?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    alternates: {
      canonical: `/${post.slug}`,
    },
    openGraph: {
      url: `/${post.slug}`,
      type: "article",
      publishedTime: dayjs(createdAt).toISOString(),
      modifiedTime: dayjs(updatedAt).toISOString(),
      images: {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: title,
      },
    },
    twitter: {
      card: "summary_large_image",
      images: [ogImage],
    },
  };
}

function getPageJsonLd(post: Post): WithContext<PageSchema> {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.metadata.title,
    description: post.metadata.description,
    image:
      post.metadata.image ||
      `${SITE_INFO.url}/og/simple?title=${encodeURIComponent(post.metadata.title)}`,
    url: `${SITE_INFO.url}/${post.slug}`,
    datePublished: dayjs(post.metadata.createdAt).toISOString(),
    dateModified: dayjs(post.metadata.updatedAt).toISOString(),
    author: {
      "@type": "Person",
      name: USER.displayName,
      identifier: USER.username,
      image: SITE_INFO.url + USER.avatar,
    },
  };
}

// Match the exact signature that Next.js 15 is expecting
export default async function Page(props: PageProps) {
  if (!props.params) {
    notFound();
  }
  
  const { slug } = await props.params;
  const post = getAllPosts().find((post) => post.slug === slug);

  if (!post) {
    notFound();
  }

  const websiteJsonLd = getPageJsonLd(post);

  return (
    <>
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        type="application/ld+json"
      />

      <div className="screen-line-after flex pb-4">
        <Button variant="link" className="px-2 text-base" asChild>
          <Link href="/">
            <ChevronLeftIcon className="size-5" />
            Home
          </Link>
        </Button>
      </div>

      <div className="screen-line-after px-4 py-1">
        <time
          className="font-mono text-sm text-muted-foreground"
          dateTime={dayjs(post.metadata.createdAt).toISOString()}
        >
          {dayjs(post.metadata.createdAt).format("YYYY.MM.DD")}
        </time>
      </div>

      <Prose className="px-4">
        <div className="screen-line-after">
          <h1 className="mb-6 font-heading font-medium">
            {post.metadata.title}
          </h1>
        </div>

        <div className="screen-line-before">
          <p className="lead mt-0 pt-1">{post.metadata.description}</p>
        </div>

        <div>
          <MDX code={post.content} />
        </div>
      </Prose>

      <div className="screen-line-before h-4 w-full" />
    </>
  );
}