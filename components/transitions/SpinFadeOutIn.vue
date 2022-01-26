<template>
  <transition name="spin-fade" mode="out-in">
    <slot />
  </transition>
</template>

<style lang="scss" scoped>
.spin-fade-enter-to,
.spin-fade-leave {
  transform: rotate(0deg);
}
.spin-fade-enter-active {
  transition: all 0.25s ease;
}
.spin-fade-leave-active {
  transition: all 0.25s cubic-bezier(1, 0.5, 0.8, 1);
}
.spin-fade-enter {
  opacity: 0;
  transform: rotate(-180deg);
}
.spin-fade-leave-to {
  opacity: 0;
  transform: rotate(180deg);
}
</style>