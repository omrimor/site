import { getBlogPosts } from "~/app/db/writing";

export default async function sitemap() {
  const posts = getBlogPosts().map((post) => ({
    url: `https://www.omrimor.co.il/writing/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));

  const routes = ["", "/writing"].map((route) => ({
    url: `https://www.omrimor.co.il${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...posts];
}
