<template>
  <div class="tags">
    <nuxt-link class="tag" v-for="tag in tags" :key="tag.id" :to="tag.link">
      {{ tag.label }}
    </nuxt-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";

export default defineComponent({
  props: {
    tags: { type: Array, required: true },
  },
  setup() {},
});
</script>

<style lang="scss" scoped>
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
</style>