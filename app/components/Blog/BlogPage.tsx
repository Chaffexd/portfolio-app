import { getAllPosts } from "@/app/lib/api";
import Post from "./Post";

const BlogPage = async () => {
  const data = await getAllPosts();
  // @ts-expect-error
  const sortedBlogPosts = data.items.sort((a, b) => new Date(b.sys.createdAt) - new Date(a.sys.createdAt));

  return (
    <div className="mx-auto w-full max-w-7xl mt-20">
      <div className="relative px-4 sm:px-8">
        <div className="max-w-2xl lg:max-w-5xl px-12">
          <header className="max-w-2xl">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              Here is where I dabble in writing my thoughts, I reflect, and I
              review what I&apos;ve been up to...
            </h1>
          </header>
          <div className="mt-16 sm:mt-20">
            <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
              <div className="flex max-w-3xl flex-col space-y-16">
                {sortedBlogPosts.map((post) => (
                  // @ts-expect-error
                  <Post key={post.sys.id} post={post} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
