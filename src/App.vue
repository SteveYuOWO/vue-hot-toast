<script setup lang="ts">
import { Toaster, toast } from "./index";
import "./styles/index.scss";

function handlePromise() {
  toast.promise(new Promise((resolve, reject) => {
    setTimeout(() => {
      const random =Math.floor( Math.random() * 100);
      if(random > 90) {
        reject(new Error('An error occurred after 1 seconds'));
      } else {
        resolve("success")
      }
    }, 1000);
  }), {
    success: 'Success!',
    error: 'Error!',
    loading: 'Loading!',
  })
}
</script>

<template>
  <div>
    <button
      @click="handlePromise"
    >
      Promise
    </button>
  </div>
  <Toaster />
</template>

