<template>
  <p class="posted">{{ new Date(utc).toLocaleDateString() }}</p>
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";

export default defineComponent({
  props: { utc: { type: Number, required: true } },
});
</script>
