<template>
  <div class="appContainer" :class="color">
    <Nuxt class="app" />
    <Buttons />
  </div>
</template>

<script>
import { color } from '@/composables/colorPreferences.js'
export default {
  setup: () => ({ color }),
}
</script>

<style lang="scss">
@import url('@/scss/_globals.scss');
@import url('@/scss/_vars.scss');
@import url('@/scss/_fonts.scss');

.page-enter-active,
.page-leave-active {
  transition: opacity 0.25s;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}
</style>
