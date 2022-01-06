import { ref, Ref } from '@nuxtjs/composition-api'

export type ColorOption = "light" | "dark";

export const color: Ref<ColorOption> = ref('light')

export const setColor = (col: ColorOption) => {
  color.value = col
}
