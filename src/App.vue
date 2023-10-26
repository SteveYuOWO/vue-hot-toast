<script setup lang="ts">
import { Toaster, toast } from "./index";
import "./styles/index.scss";
</script>

<template>
  <div :style="{ display: 'flex', gap: '10px'}">
    <button
      @click="
        toast({
          message: `Here's your toast`,
          type: 'success',
          autoClose: false
        })
      "
    >
      Success
    </button>
    <button
      @click="
        toast({
          message: `Here's your toast`,
          type: 'loading',
        })
      "
    >
      Loading
    </button>
    <button
      @click="
        toast({
          message: `Here's your toast`,
          type: 'error',
        })
      "
    >
      Error
    </button>
  </div>
  <Toaster />
</template>

