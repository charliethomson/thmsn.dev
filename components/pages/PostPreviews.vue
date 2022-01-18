<template>
  <div class="preview-posts">
    <div class="post" v-for="post in posts" :key="post.id">
      <div class="info">
        <nuxt-link :to="`/blog/posts/${post.slug}`">
          {{ post.title }}
        </nuxt-link>
        <date :utc="post.postedAt" />
      </div>
      <tags v-if="post.tags" :tags="post.tags" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";
import Date from "../atoms/Date.vue";
import Tags from "../atoms/Tags.vue";

export default defineComponent({
  components: { Tags, Date },
  props: { posts: { type: Array, required: true } },
});
</script>



<style lang="scss" scoped>
.preview-posts {
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
  }
}
</style>
