import Link from "next/link";
import { Metadata } from "next";

import { getBlogPosts } from "~/app/db/writing";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Random thoughts on software development, design, life and more.",
};

export default function BlogPage() {
  const allBlogs = getBlogPosts();

  return (
    <section>
      <h1 className="text-2xl font-medium font-serif mb-8">Latest entires</h1>
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col space-y-1 mb-4"
            href={`/writing/${post.slug}`}
          >
            <div className="w-full flex flex-col">
              <p className="text-stone-500 dark:text-stone-400 text-lg">
                {post.metadata.title}
              </p>
            </div>
          </Link>
        ))}
    </section>
  );
}
