<script setup lang="ts">
import { onMounted } from "vue";
import { Toaster, toast } from "@steveyuowo/vue-hot-toast";
import "@steveyuowo/vue-hot-toast/vue-hot-toast.css";
import CustomIcon from './assets/icon.png';
import './custom.css';

onMounted(() => {
  const id = toast.loading("Loading...")
  setTimeout(() => {
    toast.update(id, {
      type: "success",
      message: "Execution Success!"
    })
  }, 1000)
});

function toastCustomImages() {
  toast.success("LFG!", {
    icon: CustomIcon
  })
}
</script>
<template>
  <button @click="toastCustomImages">
    Click Me
  </button>
  <Toaster />
</template>
