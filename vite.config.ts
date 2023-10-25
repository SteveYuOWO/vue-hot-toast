import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig(({ command }) => (({
  publicDir: command === 'build' ? false : 'public',
  plugins: [
    vue(),
    dts({
      exclude: ['src/main.ts'],
      insertTypesEntry: true,
    }),
  ],
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'vue-hot-toast',
      fileName: (format) => `vue-hot-toast.${format}.js`,
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  },
})))
