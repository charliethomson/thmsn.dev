<template>
  <div class="center">
    <div class="container">
      <h1>charlie thomson</h1>
      <nav>
        <nuxt-link :to="to" v-for="{ to, label, id } in links" :key="id">
          {{ label }}
        </nuxt-link>
      </nav>
      <div class="socials">
        <a
          :href="to"
          v-for="{ to, is, id, alt } in socials"
          :key="id"
          :aria-describedby="alt"
        >
          <component :is="is" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { v4 as uuidv4 } from 'uuid'
import Github from '@/assets/icons/Github.vue'
import LinkedIn from '@/assets/icons/LinkedIn.vue'
export default {
  setup: () => ({
    links: [
      {
        to: '/resume',
        label: 'resume',
      },
      {
        to: '/projects',
        label: 'projects',
      },
    ].map((_) => ({ ..._, id: uuidv4() })),
    socials: [
      {
        to: 'https://www.github.com/charliethomson',
        is: Github,
        alt: 'github',
      },
      {
        to: 'https://www.linkedin.com/in/charliecthomson',
        is: LinkedIn,
        alt: 'linkedin',
      },
    ].map((_) => ({ ..._, id: uuidv4() })),
  }),
}
</script>

<style lang="scss" scoped>
.center {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .container {
    width: min(40rem, 75%);
    height: 24rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2rem;

    h1 {
      font-size: 2.4rem;
      text-align: center;
      margin: 0;
      color: var(--text);
    }
    nav {
      display: flex;
      justify-content: center;
      gap: 2rem;
      a {
        font-size: 1.4rem;
        color: var(--link);
        text-decoration: none;
      }
    }

    .socials {
      display: flex;
      justify-content: center;
      gap: 3rem;
      a {
        svg {
          fill: var(--link);
          width: 2rem;
          height: 2rem;
        }
      }
    }
  }
}
</style>
