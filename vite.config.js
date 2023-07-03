import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '^/undefined': {
        target: undefined,
      },
      '^/null': {
        target: null,
      },
      '^/empty': {
        target: '',
      },
    },
  },
});
