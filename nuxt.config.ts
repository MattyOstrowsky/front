import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/tailwind.css'],
  runtimeConfig: {
      public: {
        authUrl: process.env.NUXT_PUBLIC_AUTH_URL || 'http://localhost:8080',
        clientId: process.env.NUXT_PUBLIC_CLIENT_ID || '',
        redirectUri: process.env.NUXT_PUBLIC_REDIRECT_URI || 'http://localhost:3000/callback'
      }
    },
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  modules: [
    '@nuxtjs/color-mode',
    'shadcn-nuxt',
  ],
  colorMode: {
    // dołącza klasę 'dark' bez dodatkowego przyrostka
    classSuffix: '',
  },
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui'
  }
})