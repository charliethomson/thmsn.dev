import { titles } from "~/data/titles";

export const getNextTitle = (path: string): string => {
  const longestMatchingPath = Object.keys(titles)
    .filter((currentPath) => path.startsWith(currentPath))
    .reduce(
      (acc: string, cur: string) => (acc.length < cur.length ? cur : acc),
      ""
    );

  const titleMapping = titles[longestMatchingPath];

  switch (typeof titleMapping) {
    case "string":
      return titleMapping;
    case "function":
      return titleMapping(path);
    default:
      return "developer";
  }
};
