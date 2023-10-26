<script setup lang="ts">
import { Toaster, toast } from "./index";
import "./styles/index.scss";
</script>

<template>
  <div class="container">
    <button
      @click="
        toast({
          type: 'loading',
          duration: 9000000
        })
      "
    >
      Loading
    </button>
    <button
      @click="
        toast({
          type: 'success',
          autoClose:false
        })
      "
    >
      Success
    </button>
    <button
      @click="
        toast({
          type: 'error',
        })
      "
    >
      Error
    </button>
  </div>
  <Toaster />
</template>

<style lang="scss" scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  height: 100vh;
  width: 100vw;
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.container {
  display: flex;
  gap: 20px;
  button {
    color: #101010;
    padding: 10px 20px;
    background: white;
    border-radius: 8px;
    border: none;
    box-shadow: 2px 2px 2px 0 rgba(0, 0, 0, 0.2);
  }
}
</style>
