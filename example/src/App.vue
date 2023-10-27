<script setup lang="ts">
import { onMounted } from "vue";
import { Toaster, toast } from "@steveyuowo/vue-hot-toast";
import "@steveyuowo/vue-hot-toast/vue-hot-toast.css";

onMounted(() => {
  const id = toast.loading("Loading...")
  setTimeout(() => {
    toast.update(id, {
      type: "success",
      message: "Execution Success!"
    })
  }, 1000)
})
</script>
<template>
  <Toaster />
</template>
