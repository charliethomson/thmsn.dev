<template>
  <div class="user">
    <header>
      <h1>{{ user.name }}</h1>
      <nuxt-link :to="`/blog/users/${user.username}`">
        link to this page
      </nuxt-link>
      <p>{{ posts.length }} posts</p>
    </header>
    <section class="posts" v-if="posts && posts.length">
      <post-preview v-for="post in posts" :key="post.id" :post="post" />
    </section>
    <section class="no-posts" v-else>
      <p class="no-posts-text">No posts found</p>
    </section>
  </div>
</template>

<script>
import axios from "@/util/axios";
import PostPreview from "@/components/atoms/PostPreview.vue";
export default {
  components: { PostPreview },
  props: {
    username: String,
  },
  async asyncData({ params, error }) {
    const { user, posts } = await axios
      .get(`/blog-users`, {
        params: {
          "filters[username][$eq]": params.username,
          "populate[posts][populate]": "*",
        },
      })
      .then((response) => {
        if (response?.status !== 200) {
          error({
            statusCode: response.status,
            message: response.statusText,
          });
        } else if (response?.data?.data[0]?.attributes === undefined) {
          error({
            statusCode: 404,
            message: `User ${params.username} not found`,
          });
        } else return response?.data?.data[0]?.attributes;
      })
      .then((user) => ({ user, posts: user?.posts?.data ?? [] }));

    return {
      user,
      posts,
    };
  },
};
</script>

<style lang="scss">
.appContainer {
  overflow-y: auto;
}
</style>

<style lang="scss" scoped>
.user {
  width: min(40rem, 75%);
  margin: 1rem auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>