import { ref, Ref } from '@nuxtjs/composition-api'

export type ColorVariant = "light" | "dark" | "pre";

const defaultColor = "pre";


export const color: Ref<ColorVariant> = ref(defaultColor)

export const setColor = (col: ColorVariant) => {
  window.localStorage.setItem("thmsn-dev-color-pref", col);
  color.value = col
}
