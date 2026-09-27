import type { MetadataRoute } from "next";
import { getAllPosts } from "@/data/posts";
import { SITE_URL } from "@/data/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();
  const currentDate = new Date();

  const blogUrls: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: currentDate,
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  return [
    {
      url: SITE_URL,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 0.9,
    },
    ...blogUrls,
  ];
}
