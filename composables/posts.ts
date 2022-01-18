import { Ref, ref } from "@nuxtjs/composition-api";
import { idify, WithId } from "~/util/idify";
import { v4 as uuidv4 } from "uuid";

export interface Tag {
  label: string;
  link: string;
  id: string;
}

export const newTag = (label: string): Tag => ({
  label,
  link: `/blog/tags/${label}`,
  id: uuidv4(),
});

export interface Post {
  title: string;
  slug: string;
  // use Date.now() to get this
  postedAt: number;
  tags: WithId<Tag>[];
}
const posts: Ref<WithId<Post>[]> = ref([]);

export const addPost = (post: Post) => posts.value.push(idify(post));
export const getPosts = (): Ref<WithId<Post>[]> => posts;
export const getPostBySlug = (slug: string): WithId<Post> | undefined =>
  posts.value.find((post) => post.slug === slug);
export const getPostsByTag = (tag: string): WithId<Post>[] =>
  posts.value.filter((post) => post.tags.map((tag) => tag.label).includes(tag));
