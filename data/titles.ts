import { getPostBySlug } from "~/composables/posts";
import { getSlug } from "~/util/title";

export const titles: Record<string, string | ((path: string) => string)> = {
    "/blog": "blog",
    '/resume': 'resume',
    '/projects': 'projects',
    '/blog/posts/': (path: string) => {
        const post = getPostBySlug(getSlug(path))

        return post?.title ?? "not found"
    },
    '/blog/tags/': (path: string) => {
        const tagName = getSlug(path);
        return `posts tagged with '${tagName}'` ?? 'not found';
    },
};