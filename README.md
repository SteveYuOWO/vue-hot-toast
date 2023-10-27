<img src="./public/header.gif" />

<div align="center">
  <img src="https://img.shields.io/npm/l/%40steveyuowo%2Fvue-hot-toast" />
  <img src="https://img.shields.io/npm/v/%40steveyuowo%2Fvue-hot-toast" />
  <img src="https://img.shields.io/github/last-commit/steveyuowo/vue-hot-toast/main"/>
</div>
<p style="font-weight: bold;" align="center">Vue Hot Toast - A neat toast for vue3</p>

<p style="font-style: italic;" align="center">Cooked by <a href="https://github.com/SteveYuOWO">Steve Yu</a>👨🏼‍🍳</p>

## Features

- **Simplicity and Ease of Use**: Just  `loading` / `success` / `error` 

- **Toast Updating Capability:** Vue Hot Toast allows you to update existing toast messages dynamically using a toast ID. 

- **Promise Handling:** Display loading, success, and error toasts based on the resolution of your promises.

  

## Installation

- pnpm

```bash
pnpm install @steveyuowo/vue-hot-toast
```

- npm

```bash
npm install @steveyuowo/vue-hot-toast
```

## Documentation

This documentation provides a clear and concise overview of how to use the Vue Hot Toast library to display toast notifications in a Vue application. By following the examples provided, developers can quickly implement toast notifications in their projects and customize them to fit their requirements.

##### 1. Simple Usage

To get started with Vue Hot Toast, import the `Toaster` and `toast` objects from `@steveyuowo/vue-hot-toast` and include the necessary CSS file for styling the toasts.

```vue
<script setup lang="ts">
import { Toaster, toast } from "@steveyuowo/vue-hot-toast";
import "@steveyuowo/vue-hot-toast/vue-hot-toast.css";
</script>
<template>
  <button
    @click="
      toast.success('Execution Success!');
    "
  >
    Success
  </button>
  <button
    @click="
      toast.loading('Loading...');
    "
  >
    Loading
  </button>
  <button
    @click="
      toast.error('Execution Error!');
    "
  >
    Error
  </button>
  <Toaster />
</template>
```

##### 2. Passing Options

You can pass options to the `toast` function to customize the appearance and behavior of the toast message.

```ts
toast({
  message: 'Execution Success!',
  type: 'success',
});
```

##### 3. Updating Toasts

You can pass options to the `toast` function to customize the appearance and behavior of the toast message.

```ts
const id = toast.loading("Loading...")
setTimeout(() => {
  toast.update(id, {
    type: "success",
    message: "Execution Success!"
  })
}, 1000)
```

##### 4. Promise API

Vue Hot Toast provides a `promise` method to handle promise states and show corresponding toast messages for loading, success, and error states.

```ts
toast.promise(yourPromise, {
  success: 'Success!',
  error: 'Error!',
  loading: 'Loading!',
});

// random loading => success/error by promise api
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
```

With the `promise` method, you can easily handle promise states and provide user feedback on the progress of async operations in a declarative manner.

