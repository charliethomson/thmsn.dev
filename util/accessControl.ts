import { onMounted, onUnmounted, Ref, ref } from "@vue/composition-api";

export interface AccessControl {
  allowAccess: Ref<boolean>;
  addListener: () => void;
  removeListener: () => void;
}

export const registerAccessControl = (key: string): AccessControl => {
  let buffer = "";

  const allowAccess = ref(false);
  const onKeyPressed = (ev: KeyboardEvent) => {
    buffer += ev.key;
    if (buffer.toLowerCase().endsWith(key.toLowerCase())) {
      removeListener();
      allowAccess.value = true;
    }
  };
  const addListener = () => window.addEventListener("keypress", onKeyPressed);
  const removeListener = () =>
    window.removeEventListener("keypress", onKeyPressed);

  onMounted(addListener);
  onUnmounted(removeListener);

  return {
    allowAccess,
    addListener,
    removeListener,
  };
};
