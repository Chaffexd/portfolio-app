import { getAllPosts } from "@/app/lib/api";
import Post from "./Post";

const BlogPosts = async () => {
  const posts = await getAllPosts();
  // console.log("Posts sort = ", posts.items.sort((a, b) => a.sys.createdAt > b.sys.createdAt));

  // @ts-expect-error
  const sortedPosts = posts.items.sort((a, b) => new Date(b.sys.createdAt) - new Date(a.sys.createdAt));

  // console.log("Sorted Posts = ", sortedPosts[0]);

  return (
    <div className="space-y-10 lg:pl-16 xl:pl-24 flex flex-col h-fit">
      <Post
        // @ts-expect-error
        post={sortedPosts[0]}
      />
      <Post
        // @ts-expect-error
        post={sortedPosts[1]}
      />
      <Post
        // @ts-expect-error
        post={sortedPosts[2]}
      />
    </div>
  );
};

export default BlogPosts;
