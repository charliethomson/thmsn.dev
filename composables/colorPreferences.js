import { ref } from "@nuxtjs/composition-api";

let initialColor;
if (process.browser) {
  const defaultColor = window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
  initialColor = window.localStorage.getItem("colorTheme") ?? defaultColor;
}

export const color = ref(initialColor ?? "light");

export const setColor = (col) => {
  color.value = col;
  window.localStorage.setItem("colorTheme", col);
};
