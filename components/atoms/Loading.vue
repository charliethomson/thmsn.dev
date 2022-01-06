<template>
  <div class="loading">
    <i class="loader" />
  </div>
</template>


<style lang="scss" scoped>
.loading {
  width: 100vw;
  height: 100vh;
  display: flex;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  i.loader {
    border-top: 0.25rem solid var(--link);
    border-radius: 100%;
    width: 2.5rem;
    height: 2.5rem;
    animation: spin 1s linear infinite;
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>