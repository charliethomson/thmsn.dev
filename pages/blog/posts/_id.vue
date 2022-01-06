<template>
  <div v-if="post">
    {{ post.attributes.title }}
  </div>
  <loading v-else />
</template>

<script>
import Loading from "~/components/atoms/Loading.vue";
export default {
  components: {
    Loading,
  },
  async asyncData({ params, store, error }) {
    if (!store.state.initialGetCompleted || store.state.posts.length === 0)
      await store.dispatch("getPosts");

    const post = store.state.posts.find((p) => p.id == params.id);

    if (post === undefined) {
      error({
        statusCode: 404,
        message: `Post ${params.id} not found`,
      });
    }

    return {
      post,
    };
  },
};
</script>