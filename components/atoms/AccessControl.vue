
<template>
  <div class="access-control">
    <slot v-if="allowAccess" />
    <error-page
      errorCode="401"
      errorText="Access to this page is restricted."
      v-else
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";
import { accessControl } from "@/util/accessControl";
import ErrorPage from "@/components/pages/ErrorPage.vue";

export default defineComponent({
  components: { ErrorPage },
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