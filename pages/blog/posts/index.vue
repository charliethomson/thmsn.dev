<template>
  <div class="blog-posts-preview" v-if="posts">
    <post-preview v-for="post in posts.value" :key="post.id" :post="post" />
  </div>
  <loading v-else />
</template>

<script>
import PostPreview from "@/components/atoms/PostPreview.vue";
import Loading from "@/components/atoms/Loading.vue";
import { computed } from "@vue/composition-api";
export default {
  async asyncData({ store, error }) {
    if (!store.state.initialGetCompleted || store.state.posts.length === 0)
      await store.dispatch("getPosts");
    const posts = computed(() => store.state.posts);
    const pagination = computed(() => store.state.pagination);

    if (!posts.value || !posts.value.length)
      error({ statusCode: "500", message: "Failed to get posts" });

    return { posts, pagination };
  },
  components: { PostPreview, Loading },
};
</script>


<style lang='scss'>
.appContainer {
  overflow-y: auto;
}
</style>

<style lang='scss' scoped>
.blog-posts-preview {
  width: min(40rem, 75%);
  margin: 1rem auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>