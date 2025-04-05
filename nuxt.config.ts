import { resolve } from "path";

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  ssr: false,
  modules: ['nuxt-svgo'],
  alias: {
    '@components': resolve(__dirname, './components'),
    '@services': resolve(__dirname, './services'),
    '@color': resolve(__dirname, './assets/styles/color.sass'),
    '@global': resolve(__dirname, './assets/styles/global.sass'),
    '@fonts': resolve(__dirname, './assets/styles/fonts.sass'),
    '@mixin': resolve(__dirname, './assets/styles/mixin.sass'),
  },
  svgo: {
    autoimportPath: "./assets/icons/",
    componentPrefix: "Icon"
  },
  app: {
    head: {
      title: 'Бюджетное учреждение Ханты-Мансийского автономного округа - Югры. "Урайский комплексный центр социального обслуживания населения"',
    }
  },
})
