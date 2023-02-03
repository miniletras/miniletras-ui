import { ViteSSG } from "vite-ssg"
import App from "./App.vue"
import "virtual:windi.css"
import routes from "virtual:generated-pages"
import { RouterScrollBehavior } from "vue-router"
import "~/assets/styles/style.scss"
import "@purge-icons/generated"
import { createI18n } from 'vue-i18n';
import * as es from './locales/es.json'
import * as en from './locales/en.json'

// https://next.router.vuejs.org/guide/advanced/scroll-behavior.html#scroll-behavior
const scrollBehavior: RouterScrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) return savedPosition
  else return { top: 0, behavior: "smooth" }
}

// https://github.com/antfu/vite-ssg
export const createViteSSGApp = ViteSSG(App, { routes, scrollBehavior }, (ctx) => {
 Object.values(import.meta.globEager("./module/*.ts")).map((i) => i.install?.(ctx))
})

export const i18n = createI18n({
  locale: 'es',
  allowComposition: true, // mandatory!
  messages: { es, en }
})
