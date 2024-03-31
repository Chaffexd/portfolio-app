import { getSingleBlogPost } from "@/app/lib/api";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { richTextOptions } from "@/app/lib/richTextOptions";
import Author from "./Author";

type SlugProps = {
  slug: string;
};

const BlogDetailPage = async ({ slug }: SlugProps) => {
  console.log("SLUG", slug);
  const blogPost = await getSingleBlogPost(slug);

  console.log("BLOG POST === ", blogPost);
  const { content, author, tags } = blogPost[0].fields;

  return (
    <section>
      <Author author={author} />
      {content && documentToReactComponents(content, richTextOptions)}
    </section>
  );
};

export default BlogDetailPage;
