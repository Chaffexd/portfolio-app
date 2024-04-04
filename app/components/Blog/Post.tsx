import { formatDate } from "@/app/lib/api";
import Link from "next/link";
import { documentToPlainTextString } from "@contentful/rich-text-plain-text-renderer";
import { readingTime } from "reading-time-estimator";

type PostProps = {
  post: {
    metadata: { tags: [] };
    sys: {
      space: { sys: {} };
      id: string;
      type: string;
      createdAt: string;
      updatedAt: string;
      environment: { sys: {} };
      revision: number;
      contentType: { sys: {} };
      locale: string;
    };
    fields: {
      title: string;
      slug: string;
      dateOfEntry: string;
      author: {
        metadata: {};
        sys: {};
        fields: {};
      };
      content: {
        nodeType: string;
        data: {};
        content: {};
      };
      tags: [];
    };
  };
};

const Post = ({ post }: PostProps) => {
  const formattedDate = formatDate(post?.fields?.dateOfEntry);
  const pageSlug = post?.fields?.slug;
  const { content } = post.fields; 
  // convert rich text to plain string, then it can be read
  // @ts-expect-error
  const text = documentToPlainTextString(content);
  const timeToRead = readingTime(text);

  return (
    <article className="relative flex flex-col items-start hover:bg-zinc-50 rounded-lg p-8 dark:hover:bg-zinc-700">
      <time className="relative z-10 order-first mb-3 flex flex-col md:flex-row md:items-center text-sm text-zinc-400 dark:text-white pl-3.5">
        <span className="absolute inset-y-0 left-0 flex items-center">
          <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500"></span>
        </span>
        {formattedDate}
        <span className="ml-1">- {`${timeToRead.minutes} min read 📖`}</span>
      </time>
      <h2 className="text-base font-semibold text-zinc-800 dark:text-white">
        {post?.fields?.title}
      </h2>
      <Link href={`/blog/${pageSlug}`} aria-label="article">
        <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
        <span className="relative z-10"></span>
      </Link>
      <div className="relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500">
        <span>Read article</span>
      </div>
    </article>
  );
};

export default Post;
