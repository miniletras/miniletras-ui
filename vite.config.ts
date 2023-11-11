import { defineConfig } from "vite"
import Vue from "@vitejs/plugin-vue"
import Pages from "vite-plugin-pages"
import Components from "unplugin-vue-components/vite"
import WindiCSS from "vite-plugin-windicss"
import Markdown from "vite-plugin-md"
import matter from "gray-matter"
import Icons from "unplugin-icons/vite"
import IconsResolver from "unplugin-icons/resolver"
import AutoImport from "unplugin-auto-import/vite"
import PurgeIcons from "vite-plugin-purge-icons"
import { VitePWA } from "vite-plugin-pwa"
import Prism from "markdown-it-prism"
import anchor from "markdown-it-anchor"
// @ts-expect-error
import toc from "markdown-it-table-of-contents"
// @ts-expect-error
import attr from "markdown-it-link-attributes"
import { dirname, resolve } from "path"
import { readFileSync } from "fs"
import vueI18nPlugin from "@intlify/vite-plugin-vue-i18n"
import { fileURLToPath } from "url"

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    fs: {
      allow: [".."],
    },
  },
  define: {
    "process.env": process.env,
  },
  plugins: [
    Vue({
      include: [/\.vue$/, /\.md$/],
    }),
    vueI18nPlugin({
      // if you want to use Vue I18n Legacy API, you need to set `compositionOnly: false`
      // compositionOnly: false,
      // INFO: build PROD ERR: https://github.com/quasarframework/quasar/issues/13229#issuecomment-1115905093
      runtimeOnly: false,
      // you need to set i18n resource including paths !
      include: resolve(dirname(fileURLToPath(import.meta.url)), "~/locales/**"),
    }),
    // https://github.com/antfu/vite-plugin-md
    Markdown({
      headEnabled: true,
      wrapperComponent: "post",
      markdownItOptions: {
        html: true,
        linkify: true,
        typographer: true,
      },
      wrapperClasses: "article-body mb-5",
      markdownItSetup(md) {
        md.use(Prism)
        md.use(anchor, {
          permalink: true,
          permalinkBefore: true,
          permalinkSymbol: "#",
          permalinkAttrs: () => ({ "aria-hidden": true }),
        }),
          md.use(attr, {
            pattern: /^https?:/,
            attrs: {
              target: "_blank",
              rel: "noopener",
            },
          }),
          md.use(toc)
      },
    }),

    // https://github.com/hannoeru/vite-plugin-pages
    Pages({
      pagesDir: [
        {
          dir: "src/pages",
          baseRoute: "",
        },
        {
          dir: "posts",
          baseRoute: "posts",
        },
      ],
      extensions: ["vue", "md"],
      extendRoute(route) {
        // Get inspired from anthony fu"s personal website
        // https://github.com/antfu/antfu.me
        const path = resolve(__dirname, route.component.slice(1))
        const md = readFileSync(path, "utf-8")
        const { data } = matter(md)
        if (path.split(".").pop() == "md") {
          route.meta = Object.assign(route.meta || {}, { frontmatter: data })
        }
      },
    }),

    // https://github.com/antfu/unplugin-vue-components
    Components({
      extensions: ["vue", "md"],
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      resolvers: [
        IconsResolver({
          prefix: "",
        }),
      ],
      dts: true,
    }),
    // https://github.com/antfu/unplugin-icons
    Icons({
      compiler: "vue3",
    }),

    // https://github.com/windicss/vite-plugin-windicss
    WindiCSS(),

    // https://github.com/antfu/purge-icons/tree/main/packages/vite-plugin-purge-icons
    PurgeIcons(),

    // https://github.com/antfu/vite-plugin-pwa
    VitePWA({
      includeAssets: ["favicon.ico", "robots.txt"],
      manifest: {
        // You can change this name into your own
        name: "Elucidator Blog Starter",
        short_name: "Elucidator",
        description: "A blog starter with Vite.js",
        theme_color: "#347f76",
        icons: [
          {
            src: "/pwa-assets/192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/pwa-assets/512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/pwa-assets/512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
      },
    }),

    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: ["vue", "vue-router", "@vueuse/core", "@vueuse/head"],
      dts: true,
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@use "src/styles/settings/index.scss" as *;',
      },
    },
  },
  optimizeDeps: {
    include: ["vue", "vue-router", "@vueuse/core", "@vueuse/head"],
  },
  resolve: {
    alias: {
      "~/": `${resolve(__dirname, "src")}/`,
    },
  },
  /* build: {
    rollupOptions: {
      ...(process.env.VITE_SSG ? { treeshake: false } : {}),
      output: {
        ...(process.env.VITE_SSG
          ? {
              footer:
                "if (typeof createApp !== 'undefined') module.exports = { createApp }",
            }
          : {}),
      },
    },
  },
  ssgOptions: { formatting: "minify" }, */
})
