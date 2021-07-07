<template>
  <div class="appContainer" :class="color">
    <Nuxt class="app" />
    <Buttons />
  </div>
</template>

<script>
import { color } from "@/composables/colorPreferences.js";

export default {
  setup() {
    return {
      color,
    };
  },
};
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
  font-family: "Source Sans Pro", sans-serif;
}

a {
  color: var(--link);
  text-decoration: dashed underline;
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

::selection {
  background-color: yellow;
  color: black;
}

@media print {
  @page {
    margin: 0;
  }

  .appContainer {
    --text: black !important;
    --link: #000 !important;
    --body-bg: #ddd !important;
    --app-bg: white !important;
    --accent: yellow !important;
  }
  a {
    text-decoration: none !important;
  }
}
</style>
