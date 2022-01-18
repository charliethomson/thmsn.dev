<template>
  <div class="buttons">
    <nuxt-link
      class="back-button"
      :class="{ hidden: !showBackButton }"
      :aria-hidden="!showBackButton"
      :to="backTo"
    >
      <left-chevron />
    </nuxt-link>
    <div class="container">
      <div
        v-for="{ id, alt, handler, is, disabled, show } in buttons"
        :key="id"
        class="button"
        :class="{ dim: getValue(disabled), hidden: !getValue(show) }"
        role="button"
        :aria-disabled="getValue(disabled)"
        :aria-hidden="!getValue(show)"
        :aria-label="alt"
        @click.prevent="handleClick(disabled, handler)"
      >
        <component class="icon" :is="is" />
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
interface Button {
  alt: string;
  handler: () => void;
  is: Object;
  show: ComputedRef<boolean>;
  disabled?: ComputedRef<boolean>;
}

import PrintIcon from "@/assets/buttons/PrintIcon.vue";
import PaintBrush from "@/assets/buttons/PaintBrush.vue";
import DarkMode from "@/assets/buttons/DarkMode.vue";
import LightMode from "@/assets/buttons/LightMode.vue";
import LeftChevron from "@/assets/buttons/LeftChevron.vue";
import {
  ref,
  computed,
  useRoute,
  defineComponent,
  ComputedRef,
} from "@nuxtjs/composition-api";
import { color, setColor } from "~/composables/colorPreferences";
import { idify, WithId } from "~/util/idify";
import {
  routerMap,
  routerMapGetKey,
  routerMapHasKey,
} from "@/util/routeMapping";
export default defineComponent({
  setup() {
    const expanded = ref(false);
    const route = useRoute();

    const expand = () => (expanded.value = !expanded.value);

    const printButton: Button = {
      alt: "print",
      handler: () => {
        if (process.browser) window.print();
        else alert("Failed to print, email me @ charlie@thmsn.dev");
      },
      is: PrintIcon,
      show: computed(() => route.value.name === "resume"),
    };

    const expandButton: Button = {
      alt: "expand theme buttons",
      handler: expand,
      is: PaintBrush,
      show: computed(() => true),
    };

    const darkThemeButton: Button = {
      alt: "select dark theme",
      handler: () => {
        setColor("dark");
        expand();
      },
      is: DarkMode,
      show: computed(() => expanded.value),
      disabled: computed(() => color.value === "dark"),
    };

    const lightThemeButton: Button = {
      alt: "select light theme",
      handler: () => {
        setColor("light");
        expand();
      },
      is: LightMode,
      show: computed(() => expanded.value),
      disabled: computed(() => color.value === "light"),
    };

    const buttons: WithId<Button>[] = idify([
      printButton,
      expandButton,
      darkThemeButton,
      lightThemeButton,
    ]);

    const handleClick = (
      disabled: { value: boolean } | undefined,
      handler: () => void
    ) => {
      if (!disabled?.value) return handler();
    };

    const getValue = <T>(
      r: { value: T | undefined } | undefined,
      def: T | boolean = false
    ): T | boolean => r?.value ?? def;

    const showBackButton = computed(() => route.value.name !== "index");
    const backTo = computed(() => {
      // /foo/bar?baz=10 => /foo, '/foo' => ''
      let routeParent = route.value.fullPath.split("/").slice(0, -1).join("/");

      return routerMap[routeParent] ?? routeParent;
    });

    return {
      buttons,
      handleClick,
      getValue,
      showBackButton,
      backTo,
    };
  },

  components: {
    LeftChevron,
  },
});
</script>

<style lang="scss" scoped>
.back-button {
  position: absolute;
  top: 1rem;
  left: 0.5rem;
  svg {
    width: 2rem;
    height: 2rem;
    fill: var(--text);
  }
}

.container {
  position: absolute;
  right: 1rem;
  bottom: 1rem;

  display: flex;
  flex-direction: column-reverse;
  gap: 0.5rem;
  .button {
    width: 2rem;
    height: 2rem;
    padding: 0.5rem;

    border-radius: 100%;

    cursor: pointer;

    &.dim {
      opacity: 0.6;
      cursor: default;
    }

    .icon {
      stroke: var(--text);
      fill: var(--text);
    }
  }
}
.hidden {
  display: none;
}

@media print {
  .container,
  .back-button {
    display: none;
  }
}

@media screen and (max-width: 10.5in) {
  .back-button,
  .container {
    display: none;
  }
}
</style>
