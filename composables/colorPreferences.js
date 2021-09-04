import { ref } from '@nuxtjs/composition-api'

export const color = ref('light')

export const setColor = (col) => {
  color.value = col
}
