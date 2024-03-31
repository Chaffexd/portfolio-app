import { formatDate, getSingleBlogPost } from "@/app/lib/api";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { richTextOptions } from "@/app/lib/richTextOptions";
import Author from "./Author";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

type SlugProps = {
  slug: string;
};

const BlogDetailPage = async ({ slug }: SlugProps) => {
  const blogPost = await getSingleBlogPost(slug);

  const { content, author, tags, dateOfEntry } = blogPost[0].fields;

  const date = formatDate(dateOfEntry as string);

  return (
    <section>
      <Author
        // @ts-expect-error
        author={author}
      />
      <time className="mb-2 block text-zinc-400">{date}</time>
      <Link href={"/blog"}>
        <ArrowLeftIcon className="h-6 w-6 text-slate-600 mb-8" />
      </Link>
      {content &&
        // @ts-expect-error: ignore because it attempts to infer
        documentToReactComponents(content, richTextOptions)}
      <p className="mt-12">Technology used: </p>
      {
        // @ts-expect-error: ignore because it attempts to infer
        tags?.map((tag, idx) => (
          <span
            key={idx}
            className="inline-block mt-2 mr-4 rounded bg-sky-400 p-2 text-white font-bold"
          >
            {tag as string}
          </span>
        ))
      }
    </section>
  );
};

export default BlogDetailPage;
