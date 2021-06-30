<template>
  <div class="appContainer" :class="color">
    <Nuxt class="app" />
    <Buttons />
  </div>
</template>

<script>
import { color } from '@/composables/colorPreferences.js'

export default {
  setup() {
    return {
      color,
    }
  },
}
</script>

<style lang="scss">
html,
body,
#__nuxt,
#__layout,
.appContainer {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background: var(--app-bg);
}
.app {
  overflow-y: auto;
  scrollbar-width: thin;
  background: var(--app-bg);
}

* {
  font-family: 'Source Sans Pro', sans-serif;
}

.back-button {
  width: 2rem;
  height: 2rem;
  position: absolute;
  top: 1rem;
  left: 0.5rem;
}

.appContainer.dark {
  --text: white;
  --link: yellow;
  --body-bg: black;
  --app-bg: black;
  --accent: #060028;
}
.appContainer.light {
  --text: black;
  --link: #000;
  --body-bg: #ddd;
  --app-bg: white;
  --accent: yellow;
}
</style>
