<template>
  <ErrorPage :errorCode="error.statusCode" :errorText="error.message" />
</template>

<script lang='ts'>
import ErrorPage from "@/components/pages/ErrorPage.vue";
import { defineComponent } from "@nuxtjs/composition-api";
export default defineComponent({
  props: ["error"],
  layout: "error",
  components: { ErrorPage },
});
</script>
