import { MetadataRoute } from "next";
import { getAllPosts } from "./lib/api";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogPosts = await getAllPosts();

  const posts: MetadataRoute.Sitemap = blogPosts.items.map((post) => ({
    url: `https://www.chaffe.dev/blog/${post.fields.slug}`,
    lastModified: post.sys.updatedAt,
    changeFrequency: "weekly",
    priority: 1,
  }));

  return [
    {
      url: "https://www.chaffe.dev",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "https://www.chaffe.dev/about",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://www.chaffe.dev/blog",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://www.chaffe.dev/projects",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    ...posts
  ];
}
