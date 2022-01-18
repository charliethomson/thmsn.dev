
<template>
  <access-control token="dev-projects">
    <div class="container">New projects</div>
  </access-control>
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";
import AccessControl from "~/components/atoms/AccessControl.vue";

export default defineComponent({
  components: { AccessControl },
  setup() {},
});
</script>
