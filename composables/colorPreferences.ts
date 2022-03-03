import { ref, Ref } from "@nuxtjs/composition-api";

export type ColorOption = "light" | "dark" | "preload";
const COLOR_KEY = "thmsn-dev-color-preferences";

export const color: Ref<ColorOption> = ref("preload");

export const setColor = (col: ColorOption) => {
  color.value = col;
  window.localStorage.setItem(COLOR_KEY, col);
};

export const getDefaultColor = () => {
  if (process.client) {
    color.value =
      (window.localStorage.getItem(COLOR_KEY) as ColorOption) ??
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light");
  }
};
