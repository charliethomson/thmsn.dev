<template>
  <div class="hire-me">
    <div
      class="offset-bg"
      :style="{ '--offset-x': offsetX, '--offset-y': offsetY }"
    />
    <div class="content">
      <h2>For hire!</h2>
      <a href="mailto:charlie@thmsn.dev">Reach out 😀</a>
    </div>
  </div>
</template>

<script>
import { ref } from '@nuxtjs/composition-api'
const remap = (value, old_min, old_max, new_min, new_max) =>
  new_min + (new_max - new_min) * ((value - old_min) / (old_max - old_min))

const remapX = (value) => remap(value, 0, document.body.clientWidth, -0.5, -1.5)
const remapY = (value) => remap(value, 0, document.body.clientHeight, 0, -1.5)

export default {
  setup: () => {
    let offsetX = ref('0.125rem')
    let offsetY = ref('-1.5rem')
    return {
      offsetX,
      offsetY,
      updateOffset: (ev) => {
        offsetX.value = `${remapX(ev.clientX)}rem`
        offsetY.value = `${remapY(ev.clientY)}rem`
      },
    }
  },
  mounted() {
    document.addEventListener('mousemove', this.updateOffset)
  },
  destroyed() {
    document.removeEventListener('mousemove', this.updateOffset)
  },
}
</script>

<style lang="scss" scoped>
.hire-me {
  position: absolute;
  bottom: 0;
  left: 0;
  margin: 2rem;
  .content {
    position: relative;
    z-index: 5;
    display: flex;
    justify-content: right;
    flex-direction: column;
    a,
    h2 {
      margin: 0;
      text-align: left;
      color: var(--app-bg);
    }
    h2 {
      font-size: 1.3rem;
    }
  }
  .offset-bg {
    position: absolute;
    width: 7.5rem;
    height: 3rem;
    &::before {
      content: '';
      position: absolute;
      z-index: 2;
      top: -0.5rem;
      left: -0.5rem;
      width: 7.5rem;
      height: 4rem;
      background-color: var(--text);
      opacity: 0.2;
    }
    &::after {
      content: '';
      position: absolute;
      left: var(--offset-x);
      top: var(--offset-y);
      width: 9rem;
      height: 5rem;
      background-color: var(--text);
      opacity: 0.6;
      z-index: 1;
    }
  }
}

@media print {
  .hire-me {
    display: none;
  }
}

@media screen and (max-width: 10.5in) {
  .hire-me {
    left: unset;
  }
}
</style>
