import { getAllPosts } from "@/app/lib/api";
import Post from "./Post";

const BlogPosts = async () => {
  const posts = await getAllPosts();

  return (
    <div className="space-y-10 lg:pl-16 xl:pl-24 flex flex-col">
      <Post
        // @ts-expect-error
        post={posts.items[0]}
      />
    </div>
  );
};

export default BlogPosts;
