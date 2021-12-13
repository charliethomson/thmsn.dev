<template>
  <div class="error-page">
    <div class="error-container">
      <section class="error-code">
        <h1>{{ errorCode }}</h1>
      </section>
      <div class="sep" />
      <section class="content">
        <h2>{{ errorText }}</h2>
      </section>
    </div>
    <nuxt-link class="go-home" to="/">Go Home</nuxt-link>
    <p class="report-bug">
      Think you found a bug? Let me know!
      <br />
      <a href="mailto:charlie@thmsn.dev">charlie@thmsn.dev</a>
    </p>
  </div>
</template>

<script>
export default {
  props: {
    errorCode: { default: "000" },
    errorText: { type: String, default: "An error occurred" },
  },
};
</script>

<style lang="scss" scoped>
.error-page {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  .error-container {
    display: flex;
    justify-content: center;
    align-items: center;
    .error-code {
      font-size: 3rem;
    }
    .sep {
      width: 0.25rem;
      height: 8rem;
      margin: 0 2rem;
      background-color: var(--link);
    }
    .content {
      h2 {
        font-size: 2rem;
      }
    }
  }
  .go-home {
    font-size: 1.25rem;
  }
  .report-bug {
    position: absolute;
    bottom: 1rem;
    width: 100vw;
    text-align: center;
    font-size: 0.85rem;
  }
}

@media only screen and (max-width: 600px) {
  .error-page {
    .error-container {
      flex-direction: column;
      h1 {
        margin: 0;
      }
      .sep {
        width: 70%;
        height: 0.25rem;
        margin: 2rem 0;
      }
      .content {
        width: max(10rem, 75%);
        display: block;
        text-align: center;
        h2 {
          margin: 0;
          margin-bottom: 1rem;
        }
      }
    }
  }
}
</style>