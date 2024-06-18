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
          resolve("success");
        }
      }, 1000);
    }),
    {
      success: "Success!",
      error: "Error!",
      loading: "Loading!",
      position: "top-center",
    },
  );
}

function handleSuccess() {
  const id = toastLoading("Loading...", "top-center");
  toastSuccess("Success", id, "top-center");
}
</script>

<template>
  <div>
    <button @click="handlePromise">Promise</button>
    <button @click="handleSuccess">Success</button>
  </div>
  <Toaster />
</template>
