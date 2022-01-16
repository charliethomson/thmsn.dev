import { ref, Ref } from "@nuxtjs/composition-api";

export type ColorOption = "light" | "dark" | "preload";
const COLOR_KEY = "thmsn-dev-color-preferences";

export const color: Ref<ColorOption> = ref("preload");

export const setColor = (col: ColorOption) => {
  color.value = col;
  window.localStorage.setItem(COLOR_KEY, col);
};

if (process.client) {
  setColor(
    window.localStorage.getItem(COLOR_KEY) ??
      window.matchMedia("prefers-dark-interface").matches
      ? "dark"
      : "light"
  );
  console.log(color.value);
}
