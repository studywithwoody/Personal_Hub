// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  modules: [
    "@nuxt/content",
    "@nuxt/eslint",
    "@nuxt/ui",
    "@nuxt/image",
    "@nuxtjs/i18n",
  ],
  i18n: {
    locales: [
      { code: "en", file: "en.json" },
      { code: "zhTW", file: "zhTW.json" },
    ],
    defaultLocale: "en",
    strategy: "no_prefix",
    langDir: "locales",
  },
  // nuxt.config.ts
  css: ["~/assets/css/main.css"],
});
