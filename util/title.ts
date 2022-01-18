import { titles } from "~/data/titles";


export const getSlug = (path: string): string =>
    path.split("/").slice(-1).join("/")



export const getNextTitle = (path: string): string => {

    let longestMatchingPath = "";
    const matchingPath = (path: string) => longestMatchingPath = longestMatchingPath.length < path.length ? path : longestMatchingPath;
    for (const currentPath of Object.keys(titles)) {
        if (!path.startsWith(currentPath)) continue;

        matchingPath(currentPath);
    }

    if (longestMatchingPath.length === 0) return 'developer';
    const titleMapping = titles[longestMatchingPath]
    return typeof titleMapping === 'string' ? titleMapping : titleMapping(path)
}
