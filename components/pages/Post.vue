<template>
  <div class="post">
    <header>
      <div class="row">
        <h1 class="title">{{ post.title }}</h1>
        <spin-fade-out-in>
          <font-awesome-icon
            :class="['copy-link', linkCopied && 'disabled']"
            :icon="copyIcon"
            :key="new Date().getTime()"
            @click.prevent="copyLink"
            aria-label="copy-link"
            title="Copy Link"
          />
        </spin-fade-out-in>
      </div>

      <div class="row">
        <tags :tags="post.tags" />
        <date :utc="post.postedAt" />
      </div>
    </header>
    <main class="post-content">
      <slot />
    </main>
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  ref,
  useContext,
  useRoute,
} from "@nuxtjs/composition-api";
import { getPostBySlug } from "~/composables/posts";
import { getPostLink } from "~/util/links";
import Date from "../atoms/Date.vue";
import Tags from "../atoms/Tags.vue";
import SpinFadeOutIn from "@/components/transitions/SpinFadeOutIn.vue";
import { getSlug } from "~/data/titles";

export default defineComponent({
  components: { Tags, Date, SpinFadeOutIn },
  setup() {
    const route = useRoute();
    const { error } = useContext();
    const post = computed(() => getPostBySlug(getSlug(route.value.path)));

    if (post.value === undefined)
      return error({ statusCode: 404, message: "Post not found" });

    const linkCopied = ref(false);

    const copyLink = () => {
      if (linkCopied.value) return;
      linkCopied.value = true;
      setTimeout(() => (linkCopied.value = false), 2500);
      navigator.clipboard.writeText(getPostLink(post?.value?.slug ?? ""));
    };

    const copyIcon = computed(() =>
      linkCopied.value ? "check" : "clipboard-list"
    );

    return { post, copyLink, copyIcon, linkCopied };
  },
});
</script>

<style lang="scss" scoped>
.post {
  width: min(40rem, 75vw);
  background-color: var(--body-bg);
  margin: 1rem auto;
  padding: 1rem;
  overflow-y: auto;
  height: calc(100vh - 4rem);
  header {
    display: flex;
    flex-direction: column;
    .row {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      h1.title {
        margin: 0;
      }
      .copy-link {
        padding: 1rem;
        &:not(.disabled) {
          cursor: pointer;
        }
      }
    }
  }

  main.post-content > * {
    overflow-y: auto;
  }
}
</style>