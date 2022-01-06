<template></template>

<script>
import { useRouter } from "@nuxtjs/composition-api";
export default {
  setup() {
    const router = useRouter();
    router.push("/");
  },
};
</script>