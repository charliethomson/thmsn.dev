<template>
  <div class="author">
    <nuxt-link :to="`/blog/users/${author.username}`">
      {{ author.name }}
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    author: { type: Object },
  },
};
</script>