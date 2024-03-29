<template>
  <div class="center">
    <div class="resume">
      <header>
        <h1>charlie thomson</h1>
        <div class="info">
          <div class="left">
            <a
              :class="`umami--click--resume-email-link`"
              href="mailto:charlie@thmsn.dev"
              >charlie@thmsn.dev</a
            >
            <a :class="`umami--click--resume-phone-link`" href="tel:5402292296"
              >(540) 229-2296</a
            >
          </div>
          <div class="sep"></div>
          <div class="right">
            <a
              :class="`umami--click--resume-site-link`"
              href="https://thmsn.dev"
              >thmsn.dev</a
            >
            <a
              :class="`umami--click--resume-github-link`"
              href="https://www.github.com/charliethomson"
            >
              github/charliethomson
            </a>
          </div>
        </div>
      </header>
      <div class="main">
        <section class="skills-container" role="list">
          <h2>technologies</h2>

          <div class="skills">
            <div
              class="skill"
              v-for="{ id, name, items } in skills"
              :key="id"
              role="listitem"
            >
              <h3>{{ name }}</h3>
              <ul role="list">
                <li v-for="{ id, item } in items" :key="id" role="listitem">
                  {{ item }}
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section class="expertise" role="list">
          <h2>expertise</h2>
          <div
            v-for="{ name, id, items } in expertise"
            :key="id"
            role="listitem"
          >
            <h3>{{ name }}</h3>
            <p v-for="{ item, id } in items" :key="id" role="listitem">
              {{ item }}
            </p>
          </div>
        </section>
        <section class="work" role="list">
          <h2>employment</h2>
          <div
            v-for="{ id, company: { name, link }, position, dates } in work"
            :key="id"
            role="listitem"
          >
            <a
              :class="[
                `umami--click-${name.replace(/\s+/g, '-')}--link`,
                'company',
              ]"
              :href="link"
            >
              <h3>{{ name }}</h3>
            </a>
            <p class="position">{{ position }}</p>
            <p class="dates">{{ dates }}</p>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { resume } from "@/data/resume";
import { defineComponent } from "@nuxtjs/composition-api";
export default defineComponent({
  setup: () => resume,
});
</script>

<style lang="scss">
.center {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  .resume {
    color: var(--text);
    background-color: var(--body-bg);
    padding: 2rem;
    height: calc(11in - 4rem);
    width: calc(8.5in - 4rem);
    h2,
    h3,
    p {
      margin: 0;
    }

    header {
      display: flex;
      justify-content: space-between;

      h1 {
        font-family: "Noto Serif", serif;
        font-weight: 800;
        margin: 0;
      }

      .info {
        display: flex;
        flex-direction: column;
        justify-content: center;

        div {
          display: flex;
          justify-content: center;
          gap: 1rem;

          a {
            font-size: 1.2rem;
          }
        }
      }
    }

    .main {
      margin-top: 1rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      row-gap: 1rem;
      section h2 {
        font-family: "Noto Serif", serif;
        text-align: center;
      }

      .skills {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
        grid-template-rows: 1fr;
        margin: 1rem 0;
        .skill {
          text-align: center;
          h3 {
            margin-bottom: 0.5rem;
          }
          ul {
            list-style: none;
            padding: 0;
            margin: 0;
            li {
              margin: 0;
              line-height: 1.3;
            }
          }
        }
      }
      .expertise {
        grid-area: expertise;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        div {
          display: flex;
          flex-direction: column;
          gap: 0.1rem;
          h3 {
            font-size: 1.3rem;
          }

          p {
            line-height: 1.6;
            font-size: 1.075rem;
            margin-left: 0.5rem;
            &::before {
              content: "-";
            }
          }
        }
      }
      .work {
        grid-area: work;

        display: flex;
        flex-direction: column;
        gap: 0.25rem;

        div {
          display: grid;
          grid-template-areas:
            "company dates"
            "position position";
          p {
            padding-left: 0;
          }

          .company {
            grid-area: company;
            font-size: 1.05rem;
            width: fit-content;
            max-width: 85%;
          }
          .position {
            grid-area: position;
            font-style: italic;
            padding-left: 0.5rem;
          }
          .dates {
            grid-area: dates;
            text-align: right;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 10.5in) {
  .center {
    .resume {
      height: fit-content;
      header {
        flex-direction: column;
        align-items: center;
      }
      .main {
        .skills {
          grid-template-columns: 1fr 1fr 1fr;
          grid-template-rows: 1fr 1fr;
          gap: 1rem;
          margin-top: 1rem;
        }

        .body {
          grid-template-columns: 1fr;
        }
      }
    }
  }
}
</style>
