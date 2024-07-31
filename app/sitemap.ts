import { getBlogPosts } from "~/app/db/blog";

export default async function sitemap() {
  const blogs = getBlogPosts().map((post) => ({
    url: `https://www.omrimor.co.il/blog/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));

  const routes = ["", "/blog"].map((route) => ({
    url: `https://www.omrimor.co.il${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...blogs];
}
