<template>
  <access-control>
    <post-previews :posts="posts" />
  </access-control>
</template>


<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";
import { getPosts } from "@/composables/posts";
import AccessControl from "~/components/atoms/AccessControl.vue";
import PostPreviews from "~/components/pages/PostPreviews.vue";

export default defineComponent({
  components: { AccessControl, PostPreviews },
  setup() {
    const posts = getPosts();

    return { posts };
  },
});
</script>

<style lang="scss">
.posts {
  display: flex;
  justify-content: center;
  align-items: top;
  height: 100vh;
  overflow-y: auto;
  .post {
    width: min(20rem, 75%);
    height: 4rem;
    margin: 1rem;
    .info {
      display: flex;
      justify-content: space-between;
      align-items: center;
      a {
        font-size: 1.5rem;
      }
      .posted {
        font-size: 0.9rem;
      }
    }

    .tags {
      display: flex;
      align-items: flex-start;
      gap: 1rem;
      .tag {
        font-size: 0.7rem;
        background-color: var(--body-bg);
        padding: 0.125rem 0.25rem;
        border-radius: 15%;
      }
    }
  }
}
</style>
