// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/apple-touch-icon.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/favicon-32x32.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/favicon-16x16.png",
        },
        { rel: "manifest", href: "/site.webmanifest" },
        { rel: "mask-icon", href: "/safari-pinned-tab.svg", color: "#5bbad5" },
      ],
      meta: [
        { name: "msapplication-TileColor", content: "#da532c" },
        { name: "theme-color", content: "#ffffff" },
      ],
      script: [
        {
          src: "/scripts/lightbox-plus-jquery.js",
        },
      ],
    },
  },
  devtools: { enabled: true },
  css: [
    "@/assets/css/main.css",
    "@/assets/css/fonts.css",
    "@/assets/css/transitions.css",
    "@/assets/css/lightbox.css",
  ],
  modules: ["@nuxtjs/tailwindcss", "nuxt-swiper", "@nuxt/content"],
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
    configPath: "tailwind.config.ts",
    exposeConfig: false,
    config: {},
    injectPosition: 0,
  },
});
