import { createClient } from "contentful";

const accessToken = process.env.CONTENTFUL_CDA_KEY!;
const space = process.env.CONTENTFUL_SPACE_ID!;
const environment = process.env.CONTENTFUL_ENV;

export const client = createClient({
  accessToken,
  space,
  environment,
});

export const getAllPosts = async () => {
  const posts = await client.getEntries({
    content_type: "blogPost",
  });

  return posts;
};

export const getSingleBlogPost = async (slug: string) => {
  const post = await client.getEntries({
    content_type: "blogPost",
    "fields.slug[match]": slug,
  });

  return post.items;
};

export function formatDate(ogPostDate: string) {
  const date = new Date(ogPostDate);
  const month = date.toLocaleString("en-US", { month: "long" });
  const day = date.getDate();
  const year = date.getFullYear();

  // to add the date suffix
  let dayWithSuffix;
  if (day === 1 || day === 21 || day === 31) {
    dayWithSuffix = `${day}st`;
  } else if (day === 2 || day === 22) {
    dayWithSuffix = `${day}nd`;
  } else if (day === 3 || day === 23) {
    dayWithSuffix = `${day}rd`;
  } else {
    dayWithSuffix = `${day}th`;
  }

  return `${month} ${dayWithSuffix}, ${year}`;
}
