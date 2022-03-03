
<template>
  <div class="projects">
    <div
      class="project"
      v-for="{ name, description, url, demoUrl, id } in projects"
      :key="id"
    >
      <h1 class="title">{{ name }}</h1>
      <p class="about" v-html="description" />
      <div class="links">
        <a :href="url" v-if="url" class="source-link">
          <github aria-label="source-link" />
        </a>

        <a
          :href="demoUrl"
          v-if="demoUrl"
          class="demo-link"
          aria-label="demo-link"
        >
          <font-awesome-icon class="demo-link-icon" icon="link" />
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";
import Github from "~/assets/icons/Github.vue";
import { devProjects } from "@/data/projects";

export default defineComponent({
  components: { Github },
  setup: () => {
    return { projects: devProjects };
  },
});
</script>

<style lang="scss" scoped>
.projects {
  height: calc(100vh - 2rem);
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 0.5rem;

  .project {
    h1.title {
      font-size: 1.5rem;
    }
    p.about {
      text-indent: 1rem;
      font-size: 1.125rem;
      line-height: 1.5rem;
    }
    .links {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      gap: 1rem;
      a {
        * {
          width: 2.25rem;
          height: 2.25rem;
          fill: var(--link);
        }
      }
    }
  }
}
@media screen and (min-width: 10.5in) {
  .projects {
    width: min(40rem, 75vw);
    margin: auto;

    .project {
      .links {
        a {
          * {
            width: 1.75rem;
            height: 1.75rem;
            fill: var(--link);
          }
        }
      }
    }
  }
}
</style>
