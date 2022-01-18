<template>
  <ErrorPage :errorCode="error.statusCode" :errorText="error.message" />
</template>

<script lang='ts'>
import ErrorPage from "@/components/pages/ErrorPage.vue";
import { defineComponent, useMeta } from "@nuxtjs/composition-api";
import { setTitle } from "~/composables/title";
export default defineComponent({
  props: ["error"],
  layout: "error",
  components: { ErrorPage },
  setup: (props: { error: { message: string } }) => {
    console.log(props.error.message);
    setTitle(props.error.message);
  },
  head: {},
});
</script>
