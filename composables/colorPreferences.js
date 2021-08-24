import { ref } from '@nuxtjs/composition-api'

let initialColor
if (process.browser)
  initialColor = window.localStorage.getItem('colorTheme') ?? 'light'

export const color = ref(initialColor ?? 'light')

export const setColor = (col) => {
  color.value = col
  window.localStorage.setItem('colorTheme', col)
}
