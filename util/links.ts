import nuxtConfig from "~/nuxt.config";

export const loginUri = nuxtConfig.dev
  ? "http://localhost:8080/e/auth/login"
  : "https://thcdn.dev/e/auth/login";
const baseUrl = nuxtConfig.dev ? "http://localhost:3000" : "https://thmsn.dev";

export const getPostLink = (slug: string): string =>
  `${baseUrl}/blog/posts/${slug}`;

export const getTagLink = (slug: string): string =>
  `${baseUrl}/blog/tags/${slug}`;
