<template>
  <div class="appContainer" :class="color">
    <Nuxt class="app" />
    <Buttons />
  </div>
</template>

<script lang='ts'>
import { color, getDefaultColor } from "~/composables/colorPreferences";
import Buttons from "@/components/atoms/Buttons.vue";
import { defineComponent, onMounted, useRoute } from "@nuxtjs/composition-api";
import { bindTitle } from "@/composables/title";
import "~/data/posts";
export default defineComponent({
  setup: () => {
    onMounted(() => setTimeout(getDefaultColor, 25));
    bindTitle(useRoute());
    return {
      color,
    };
  },
  head: {},
  components: { Buttons },
});
</script>

<style lang="scss">
@import url("@/scss/_globals.scss");
@import url("@/scss/_vars.scss");
/* Google fonts */
@import url("https://fonts.googleapis.com/css2?family=Noto+Serif:ital,wght@0,400;0,700;1,400;1,700&family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700;1,900&display=swap");

.page-enter-active,
.page-leave-active {
  transition: opacity 0.25s;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}
</style>
