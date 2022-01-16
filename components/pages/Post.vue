<template>
  <div class="post">
    <header>
      <div class="row">
        <h1 class="title">{{ title }}</h1>

        <font-awesome-icon
          class="copy-link"
          icon="clipboard-list"
          @click.prevent="copyLink"
          aria-label="copy-link"
          title="Copy Link"
        />
      </div>

      <div class="row">
        <tags :tags="tags" />
        <date :utc="post.postedAt" />
      </div>
    </header>
    <main class="post-content">
      <slot />
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent, useContext } from "@nuxtjs/composition-api";
import { getPostLink } from "~/util/links";
import Date from "../atoms/Date.vue";
import Tags from "../atoms/Tags.vue";

export default defineComponent({
  components: { Tags, Date },
  props: { post: { type: Object, required: true } },
  setup({ post }) {
    if (post === undefined)
      useContext().error({ statusCode: 404, message: "Post not found" });

    const copyLink = () =>
      navigator.clipboard.writeText(getPostLink(post.slug));

    return { ...post, copyLink };
  },
});
</script>
