
<template>
  <access-control token="a">
    <div class="container">
      <h1>
        Charlie <br />
        Thomson
      </h1>

      <div class="socials">
        <a
          :href="to"
          v-for="{ to, is, id, alt } in socials"
          :key="id"
          :aria-label="alt"
        >
          <component :is="is" />
        </a>
      </div>
      <nav>
        <nuxt-link
          class="friendly-link"
          :to="to"
          v-for="{ to, label, id } in links"
          :key="id"
        >
          {{ label }}
        </nuxt-link>
      </nav>
    </div>
  </access-control>
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";
import AccessControl from "~/components/atoms/AccessControl.vue";
import { devLinks, socials } from "@/data/index";

export default defineComponent({
  components: { AccessControl },
  setup: () => ({ links: devLinks, socials }),
});
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  padding-right: 1.25rem;
  height: 100vh;
  gap: 1.25rem;

  h1 {
    text-align: right;
    line-height: 3.5rem;
    font-size: 4rem;
    width: fit-content;
    margin: 0;
  }

  .socials {
    display: flex;
    justify-content: flex-end;
    gap: 1.25rem;
    a {
      display: flex;
      justify-content: center;
      align-items: center;
      svg {
        fill: var(--link);
        width: 3rem;
        height: 3rem;
      }
    }
  }

  nav {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    gap: 1.25rem;
    a {
      text-decoration: none;
      font-size: 2.5rem;
      width: fit-content;
    }
  }
}
@media screen and (min-width: 10.5in) {
  .container {
    margin-right: 27.5%;

    h1 {
    }
  }
}
</style>