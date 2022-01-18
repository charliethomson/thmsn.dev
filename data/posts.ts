import TestPost from "@/components/posts/TestPost.vue";
import { addPost, newTag } from "~/composables/posts";

[
  {
    title: "Test post",
    slug: "test-post",
    postedAt: 1641502950368,
    tags: ["rust", "test", "traits"].map(newTag),
  },
].forEach(addPost);
