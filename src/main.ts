import { ViteSSG } from "vite-ssg"
import App from "./App.vue"
import "virtual:windi.css"
import routes from "virtual:generated-pages"
import { RouterScrollBehavior } from "vue-router"
import "@purge-icons/generated"
import { createI18n } from "vue-i18n"
import * as es from "./locales/es.json"
import * as en from "./locales/en.json"
import { vMaska } from "maska"

// https://next.router.vuejs.org/guide/advanced/scroll-behavior.html#scroll-behavior
const scrollBehavior: RouterScrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) return savedPosition
  else return { top: 0, behavior: "smooth" }
}

// App.directive("maska", vMaska)

// https://github.com/antfu/vite-ssg
const createApp = ViteSSG(App, { routes, scrollBehavior }, (ctx) => {
  Object.values(import.meta.globEager("./module/*.ts")).map((i) => i.install?.(ctx))
})

const i18n = createI18n({
  locale: "es",
  allowComposition: true, // mandatory!
  messages: { es, en },
})

const { t } = i18n.global

const recordTranslator = (value: string) => (record: string) => {
  return t(`${value}.${record}`)
}

export { createApp, i18n, t, recordTranslator }
