import BlogDetailPage from "@/app/components/Blog/BlogDetailPage";

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
