import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  modules: ['@nuxt/eslint'],
  css: ['~/assets/css/main.css', '~/assets/css/default-theme.css'],
  ssr: false,
  vite: {
    plugins: [tailwindcss()],
  },
  devtools: { enabled: true }
})
