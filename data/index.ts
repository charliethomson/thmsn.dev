import { ComponentInstance } from "@vue/composition-api";
import { idify, WithId } from "~/util/idify";
import Github from "../assets/icons/Github.vue";
import LinkedIn from "../assets/icons/LinkedIn.vue";
import WakaTime from "../assets/icons/WakaTime.vue";
import Twitter from "../assets/icons/Twitter.vue";

export interface SocialLink {
  to: string;
  is: Object;
  alt: string;
}
export interface IndexLink {
  to: string;
  label: string;
}

export const links: WithId<IndexLink>[] = idify([
  {
    to: "/resume",
    label: "resume",
  },
  {
    to: "/projects",
    label: "projects",
  },
]);

export const devLinks: WithId<IndexLink>[] = [
  ...links.map((link) => ({
    ...link,
    to: "/dev" + link.to,
    label: link.label.slice(0, 1).toUpperCase() + link.label.slice(1),
  })),
  idify({
    to: "/dev/blog",
    label: "Blog",
  }),
];

export const socials: WithId<SocialLink>[] = idify([
  {
    to: "https://www.github.com/charliethomson",
    is: Github,
    alt: "github",
  },
  {
    to: "https://www.linkedin.com/in/charliecthomson",
    is: LinkedIn,
    alt: "linkedin",
  },
  {
    to: "https://wakatime.com/@charliethomson",
    is: WakaTime,
    alt: "wakatime",
  },
  {
    to: "https://twitter.com/poetayetoe",
    is: Twitter,
    alt: "twitter",
  },
]);
