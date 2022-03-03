
<template>
  <access-control token="a">
    <div class="container">New resume</div>
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
