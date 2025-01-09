import { formatDate, getSingleBlogPost } from "@/app/lib/api";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { richTextOptions } from "@/app/lib/richTextOptions";
import Author from "./Author";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { documentToPlainTextString } from "@contentful/rich-text-plain-text-renderer";
import { readingTime } from "reading-time-estimator";

type SlugProps = {
  slug: string;
};

const BlogDetailPage = async ({ slug }: SlugProps) => {
  const blogPost = await getSingleBlogPost(slug);
  const { content, author, tags, dateOfEntry } = blogPost[0].fields;

  // @ts-expect-error
  const text = documentToPlainTextString(content);
  const timeToRead = readingTime(text, 250);

  // convert date to readable format I want
  const date = formatDate(dateOfEntry as string);

  return (
    <section>
      <Author
        // @ts-expect-error
        author={author}
        timeToRead={timeToRead}
      />
      <Link href={"/blog"} className="inline-block">
        <ArrowLeftIcon className="h-6 w-6 text-slate-600 mb-4 dark:text-slate-200" />
      </Link>
      <time className="mb-2 block text-zinc-400 dark:text-slate-200">
        {date}
      </time>
      {content &&
        // @ts-expect-error: ignore because it attempts to infer
        documentToReactComponents(content, richTextOptions)}
      <p className="mt-12">Technology used: </p>
      <div className="flex flex-wrap">
      {
        // @ts-expect-error: ignore because it attempts to infer
        tags?.map((tag, idx) => (
          <span
            key={idx}
            className="mr-2 mt-2 flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300"
          >
            {tag as string}
          </span>
        ))
      }
      </div>
    </section>
  );
};

export default BlogDetailPage;
