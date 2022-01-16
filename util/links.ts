import nuxtConfig from "~/nuxt.config";

const baseUrl = nuxtConfig.dev ? "localhost:3000" : "https://thmsn.dev";

export const getPostLink = (slug: string): string => `${baseUrl}/blog/${slug}`;

export const getTagLink = (slug: string): string =>
  `${baseUrl}/blog/tags/${slug}`;
