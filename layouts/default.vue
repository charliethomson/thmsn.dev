<template>
  <div class="appContainer" :class="color">
    <Nuxt class="app" />
    <Buttons />
  </div>
</template>

<script>
import { color } from "~/composables/colorPreferences.ts";
import Buttons from "@/components/atoms/Buttons.vue";
import Loading from "@/components/atoms/Loading.vue";
import { setColor } from "~/composables/colorPreferences";
export default {
  setup: () => {
    return { color };
  },
  components: { Buttons, Loading },
  mounted() {
    let configuredColor = undefined;
    configuredColor =
      window.localStorage.getItem("thmsn-dev-color-pref") ??
      (window.matchMedia("(prefers-color-scheme: dark)") ? "dark" : "light");

    if (configuredColor) setColor(configuredColor ?? "light");
  },
};
</script>

<style lang="scss">
@import url("@/scss/_globals.scss");
@import url("@/scss/_vars.scss");
/* Google fonts */
@import url("https://fonts.googleapis.com/css2?family=Noto+Serif:ital,wght@0,400;0,700;1,400;1,700&family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700;1,900&display=swap");

.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}
.hide {
  display: none;
}
</style>
