
<template>
  <div class="access-control">
    <slot v-if="allowAccess" />
    <div class="center" v-else>
      <h1>You shouldn't be here yet</h1>
      <nuxt-link to="/">Go back</nuxt-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";
import { accessControl } from "@/util/accessControl";

export default defineComponent({
  props: {
    token: { type: String, default: "no" },
  },
  setup(props) {
    const { allowAccess } = accessControl(props.token);

    return { allowAccess };
  },
});
</script>


<style lang="scss" scoped>
.access-control {
  width: 100vw;
  height: 100vh;

  .center {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>