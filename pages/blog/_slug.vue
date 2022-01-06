<template>
  <div>
    <h1>Post</h1>
    <p class="title">{{ post.title }}</p>
  </div>
</template>


<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";
import { getPostBySlug } from "@/data/registeredPosts";

export default defineComponent({
  asyncData({ params, error }) {
    const post = getPostBySlug(params.slug);

    if (post === undefined)
      error({
        statusCode: 404,
        message: "Post not found",
        path: `/blog/${params.slug}`,
      });

    return { post };
  },
});
</script>

