import { getSingleBlogPost } from "@/app/lib/api";

type SlugProps = {
  slug: string;
};

const BlogDetailPage = async ({ slug }: SlugProps) => {
  console.log("SLUG", slug);
  const blogPost = await getSingleBlogPost(slug);

  console.log("BLOG POST === ", blogPost);

  return <div>BlogDetailPage</div>;
};

export default BlogDetailPage;
