<template>
  <div>
    <post-previews :posts="posts" />
  </div>
</template>


<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";
import { getPostsByTag } from "@/composables/posts";
import PostPreviews from "~/components/pages/PostPreviews.vue";

export default defineComponent({
  components: { PostPreviews },
  asyncData({ params }) {
    const posts = getPostsByTag(params.slug);
    return { posts };
  },
});
</script>

