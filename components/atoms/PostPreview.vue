<template>
  <div class="post-preview">
    <h1 @click="navigateToPost">{{ title }}</h1>
    <div class="tags" v-if="tags">
      <p class="tag" v-for="tag in tags" :key="tag">{{ tag }}</p>
    </div>
    <p class="posted">{{ postedAtText }}</p>
    <p class="updated" v-if="updatedAt !== postedAt">
      Edited at {{ updatedAtText }}
    </p>
    <author :author="author" />
    <nuxt-link :to="postHref"> See More </nuxt-link>
  </div>
</template>
<script>
import { useRouter } from "@nuxtjs/composition-api";
import Author from "./Author.vue";
export default {
  components: { Author },
  props: {
    post: { type: Object },
  },
  setup(props) {
    const router = useRouter();
    const postHref = `/blog/posts/${props.post.id}`;
    const [postedAt, updatedAt] = [
      props.post.attributes.createdAt,
      props.post.attributes.updatedAt,
    ].map(Date.parse);
    const [postedAtText, updatedAtText] = [postedAt, updatedAt].map((d) =>
      new Date(d).toLocaleString()
    );

    return {
      ...props.post.attributes,
      author: props.post.attributes.author.data.attributes,
      postHref,
      navigateToPost: () => {
        router.push(postHref);
      },
      postedAtText,
      updatedAtText,
      postedAt,
      updatedAt,
      tags: ["test", "test 2", "politics", "tech"],
    };
  },
};
</script>

<style lang='scss' scoped>
.post-preview {
  padding: 1rem;
  display: grid;
  grid-template-areas: "title tags" "posted updated" "author see-more";
  align-items: center;
  h1,
  p {
    margin: 0;
  }
  h1 {
    grid-area: title;
    text-overflow: ellipsis;
    cursor: pointer;
  }

  .tags {
    display: flex;
    flex-direction: row-reverse;
    gap: 0.5rem;
    grid-area: tags;
    margin-top: auto;
    .tag {
      background: var(--body-bg);
      padding: 0.125rem 0.5rem;
      border-radius: 0.25rem;
    }
  }

  .updated {
    grid-area: updated;
    font-size: 0.8rem;
    text-align: right;
  }
  .posted {
    grid-area: posted;
  }
  .author {
    grid-area: author;
  }
  a {
    grid-area: see-more;
    text-align: right;
  }
}
</style>