import BlogDetailPage from "@/app/components/Blog/BlogDetailPage";
import { getSingleBlogPost } from "@/app/lib/api";

type Props = {
  params: { blogId: string };
};

export async function generateMetadata({ params }: Props) {
  const blogId = params.blogId;
  const blogPost = await getSingleBlogPost(blogId);

  return {
    // @ts-expect-error
    title: blogPost[0].fields.seoMetadata.fields.titleTag,
    // @ts-expect-error
    description: blogPost[0].fields.seoMetadata.fields.description,
    // @ts-expect-error
    keywords: blogPost[0].fields.seoMetadata.fields.keywords,
    // @ts-expect-error
    creator: blogPost[0].fields.seoMetadata.fields.author,
    // @ts-expect-error
    publisher: blogPost[0].fields.seoMetadata.fields.author,
  };
}

const PostDetailPage = ({ params }: { params: { blogId: string } }) => {
  const { blogId } = params;

  return (
    <div className="mx-auto w-full max-w-7xl lg:px-8 mt-20">
      <div className="mx-12 max-w-1xl lg:max-w-5xl">
        <div className="xl:relative">
          <BlogDetailPage slug={blogId} />
        </div>
      </div>
    </div>
  );
};

export default PostDetailPage;
