<template>
  <ErrorPage :errorCode="error.statusCode" :errorText="error.message" />
</template>

<script>
import ErrorPage from "@/components/pages/ErrorPage.vue";
export default {
  props: ["error"],
  layout: "error",
  components: { ErrorPage },
};
</script>
