<img src="./public/header.gif" />

<div align="center">
  <img src="https://img.shields.io/npm/l/%40steveyuowo%2Fvue-hot-toast" />
  <img src="https://img.shields.io/npm/v/%40steveyuowo%2Fvue-hot-toast
" />
  <img src="https://img.shields.io/github/last-commit/steveyuowo/vue-hot-toast/main"/>
</div>

## Installation

- pnpm

```bash
pnpm install @steveyuowo/vue-hot-toast
```

- npm

```bash
npm install @steveyuowo/vue-hot-toast
```

## Getting Started

Add the Toast and call the toast function. 

```vue
<script setup lang="ts">
import { Toast, toast } from "@steveyuowo/vue-hot-toast";
import "@steveyuowo/vue-hot-toast/vue-hot-toast.css";
</script>

<template>
  <button
    @click="
      toast({
        type: 'success',
        duration: 9000,
        autoClose: false
      })
    "
  >
    Success
  </button>
  <Toast />
</template>
```

