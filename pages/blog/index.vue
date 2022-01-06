<template>
  <div class="container" v-if="allowAccess">
    <div class="post" v-for="post in posts" :key="post.id">
      <div class="info">
        <nuxt-link :to="`/blog/${post.slug}`">
          {{ post.title }}
        </nuxt-link>
        <p class="posted">{{ new Date(post.postedAt).toLocaleString() }}</p>
      </div>
      <div class="tags" v-if="post.tags">
        <nuxt-link
          class="tag"
          v-for="tag in post.tags"
          :key="tag.id"
          :to="tag.link"
        >
          {{ tag.label }}
        </nuxt-link>
      </div>
    </div>
  </div>
  <div v-else>
    <div class="center">
      <h1>You shouldn't be here yet</h1>
      <nuxt-link to="/">Go back</nuxt-link>
    </div>
  </div>
</template>


<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";
import { getPosts } from "@/data/registeredPosts";
import { accessControl } from "@/util/accessControl";

export default defineComponent({
  setup() {
    const { allowAccess } = accessControl("no");

    const posts = getPosts();

    return { posts, allowAccess: true };
  },
});
</script>

<style lang="scss" scoped>
.container {
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
