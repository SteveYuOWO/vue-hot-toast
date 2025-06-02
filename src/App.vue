<script setup lang="ts">
import { Toaster, toast } from "./index.ts";
import "./styles/index.scss";
import { toastLoading, toastSuccess } from "./helper";

function handlePromise() {
  toast.promise(
    new Promise((resolve, reject) => {
      setTimeout(() => {
        const random = Math.floor(Math.random() * 100);
        if (random > 90) {
          reject(new Error("An error occurred after 1 seconds"));
        } else {
          resolve("Here's your toast");
        }
      }, 1000);
    }),
    {
      success: "Here's your toast!",
      error: "Whoops, it burnt!",
      loading: "Oh no, it's loading...",
      position: "top-center",
    },
  );
}

function handleSuccess() {
  const id = toastLoading("Loading...", "top-center");
  toastSuccess("Here's your toast", id, "top-center");
}
</script>
<style>
body {
  background: #fff8e5;
}
</style>
<template>
  <div>
    <button @click="handlePromise">Promise</button>
    <button @click="handleSuccess">Success</button>
  </div>
  <Toaster />
</template>
