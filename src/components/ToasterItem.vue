<script setup lang="ts">
import { ToastProps } from "../core/type";
import { ref, watchEffect } from "vue";

const props = defineProps<ToastProps>();
const emit = defineEmits(["close"]);

const timer = ref<ReturnType<typeof setTimeout> | null>(null);
const startedAt = ref<number>(0);
const delay = ref<number>(0);

watchEffect(() => {
  if (props.autoClose) {
    startedAt.value = Date.now();
    delay.value = props.duration;
    timer.value = setTimeout(close, delay.value);
  }
});

const close = () => {
  emit("close");
};
</script>
<template>
  <div
    class="VueHotToast__toast"
    :style="`--toast-duration: ${duration}s;`"
    @click.prevent="close"
  >
    <div class="VueHotToast__icon">
      <div class="VueHotToast__checkmark" v-if="type === 'success'" />
      <div class="VueHotToast__error" v-if="type === 'error'" />
      <div class="VueHotToast__loading" v-if="type === 'loading'" />
    </div>
    <div class="content">
      <div class="content-message">{{ message }}</div>
    </div>
  </div>
</template>
