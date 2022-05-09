<template>
  <div class="container">
    <article v-for="project in projects" :key="project.id">
      <header>
        <h2>
          {{ project.name }}
        </h2>
        <ul>
          <li v-for="{ item, id } in project.tools" :key="id">{{ item }}</li>
        </ul>
      </header>
      <section v-if="project.description">
        <h5>what it is:</h5>
        <p v-html="project.description"></p>
      </section>
      <section v-if="project.learned">
        <h5>what i learned:</h5>
        <p v-html="project.learned"></p>
      </section>
      <footer>
        <a
          :class="`umami--click--${project.name.replace(
            /\s+/g,
            '-'
          )}-demo-link`"
          :href="project.liveUrl"
          v-if="project.liveUrl"
          >demo</a
        >
        <a
          :class="`umami--click--${project.name.replace(
            /\s+/g,
            '-'
          )}-source-link`"
          :href="project.url"
          >source</a
        >
      </footer>
    </article>
  </div>
</template>

<script lang="ts">
import { projects } from "@/data/projects";
import { defineComponent } from "@nuxtjs/composition-api";
export default defineComponent({
  setup: () => ({ projects }),
});
</script>

<style lang="scss" scoped>
.container {
  height: 100vh;
  width: 100vw;
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--text);

  article {
    width: min(40rem, 75vw);
    padding: 2rem;
    margin: 1rem;
    background: var(--body-bg);
    border-radius: 0.25rem;
    header {
      width: 100%;
      display: grid;
      grid-template-areas: "title title tools tools tools";
      h2 {
        font-family: "Noto Serif", serif;
        grid-area: title;
        height: fit-content;
        margin: auto 0;
      }
      ul {
        grid-area: tools;
        list-style: none;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        padding-left: 0;
        margin: 0;
        justify-content: flex-end;
        gap: 0.5rem;
        row-gap: 0.25rem;
      }
    }
    section {
      margin: 1.5rem 0;
      h5 {
        margin: 0;
      }
      p {
        line-height: 1.5;
        text-indent: 0.5rem;
      }
    }
    footer {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      gap: 0.5rem;
      a {
        font-size: 0.8rem;
      }
    }
  }
}
</style>
