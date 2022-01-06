<template>
  <div>
    <h1>{{ posts.length }}</h1>
  </div>
</template>


<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";
import { getPostsByTag } from "@/data/registeredPosts";

export default defineComponent({
  asyncData({ params }) {
    const posts = getPostsByTag(params.slug);
    return { posts };
  },
});
</script>

