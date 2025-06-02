<script setup lang="ts">
import { ToastProps } from "../core/type";
import { ref, watchEffect } from "vue";

const props = defineProps<ToastProps>();
const emit = defineEmits(["close"]);

const timer = ref<ReturnType<typeof setTimeout> | null>(null);
const startedAt = ref<number>(0);
const delay = ref<number>(0);
const isLeaving = ref(false);

const close = () => {
  if (isLeaving.value) return;
  isLeaving.value = true;

  // Wait for exit animation to complete before emitting close
  setTimeout(() => {
    emit("close");
  }, 400); // Match the exit animation duration
};

watchEffect(() => {
  if (props.autoClose) {
    startedAt.value = Date.now();
    delay.value = props.duration;
    timer.value = setTimeout(close, delay.value);
  }
});
</script>
<template>
  <div
    class="VueHotToast__toast"
    :class="{ leaving: isLeaving }"
    :style="`--toast-duration: ${duration}s;`"
    @click.prevent="close"
  >
    <div class="VueHotToast__icon">
      <div v-if="icon">
        <img
          class="VueHotToast__custom-icon"
          :src="icon"
          :width="24"
          :height="24"
          alt="Toast Icon"
        />
      </div>
      <div class="VueHotToast__checkmark" v-else-if="type === 'success'" />
      <div class="VueHotToast__error" v-else-if="type === 'error'" />
      <div class="VueHotToast__loading" v-else-if="type === 'loading'" />
    </div>
    <div class="content">
      <div class="content-message">{{ message }}</div>
    </div>
  </div>
</template>
