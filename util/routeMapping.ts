export const routerMap: Record<string, string> = {
    "/blog/posts": "/blog",
    "/blog/tags": "/blog",
    "": '/'
}

export const routerMapHasKey = (path: string): boolean => routerMap[path] !== undefined;
export const routerMapGetKey = (path: string): string | undefined => routerMap[path]