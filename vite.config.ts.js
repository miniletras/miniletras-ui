// vite.config.ts
import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";
import Pages from "vite-plugin-pages";
import Components from "unplugin-vue-components/vite";
import WindiCSS from "vite-plugin-windicss";
import Markdown from "vite-plugin-md";
import matter from "gray-matter";
import Icons from "unplugin-icons/vite";
import IconsResolver from "unplugin-icons/resolver";
import AutoImport from "unplugin-auto-import/vite";
import PurgeIcons from "vite-plugin-purge-icons";
import { VitePWA } from "vite-plugin-pwa";
import Prism from "markdown-it-prism";
import anchor from "markdown-it-anchor";
import toc from "markdown-it-table-of-contents";
import attr from "markdown-it-link-attributes";
import { dirname, resolve } from "path";
import { readFileSync } from "fs";
import vueI18nPlugin from "@intlify/vite-plugin-vue-i18n";
import { fileURLToPath } from "url";
var vite_config_default = defineConfig({
  server: {
    fs: {
      allow: [".."]
    }
  },
  define: {
    "process.env": process.env
  },
  plugins: [
    Vue({
      include: [/\.vue$/, /\.md$/]
    }),
    vueI18nPlugin({
      runtimeOnly: false,
      include: resolve(dirname(fileURLToPath("file:///Users/ferez/sites/cata/miniletras/project-miniletras-ui/miniletras-ui/vite.config.ts")), "~/locales/**")
    }),
    Markdown({
      headEnabled: true,
      wrapperComponent: "post",
      markdownItOptions: {
        html: true,
        linkify: true,
        typographer: true
      },
      wrapperClasses: "article-body mb-5",
      markdownItSetup(md) {
        md.use(Prism);
        md.use(anchor, {
          permalink: true,
          permalinkBefore: true,
          permalinkSymbol: "#",
          permalinkAttrs: () => ({ "aria-hidden": true })
        }), md.use(attr, {
          pattern: /^https?:/,
          attrs: {
            target: "_blank",
            rel: "noopener"
          }
        }), md.use(toc);
      }
    }),
    Pages({
      pagesDir: [
        {
          dir: "src/pages",
          baseRoute: ""
        },
        {
          dir: "posts",
          baseRoute: "posts"
        }
      ],
      extensions: ["vue", "md"],
      extendRoute(route) {
        const path = resolve("/Users/ferez/sites/cata/miniletras/project-miniletras-ui/miniletras-ui", route.component.slice(1));
        const md = readFileSync(path, "utf-8");
        const { data } = matter(md);
        if (path.split(".").pop() == "md") {
          route.meta = Object.assign(route.meta || {}, { frontmatter: data });
        }
      }
    }),
    Components({
      extensions: ["vue", "md"],
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      resolvers: [
        IconsResolver({
          prefix: ""
        })
      ],
      dts: true
    }),
    Icons({
      compiler: "vue3"
    }),
    WindiCSS(),
    PurgeIcons(),
    VitePWA({
      includeAssets: ["favicon.ico", "robots.txt"],
      manifest: {
        name: "Elucidator Blog Starter",
        short_name: "Elucidator",
        description: "A blog starter with Vite.js",
        theme_color: "#347f76",
        icons: [
          {
            src: "/pwa-assets/192.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "/pwa-assets/512.png",
            sizes: "512x512",
            type: "image/png"
          },
          {
            src: "/pwa-assets/512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable"
          }
        ]
      }
    }),
    AutoImport({
      imports: ["vue", "vue-router", "@vueuse/core", "@vueuse/head"],
      dts: true
    })
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@use "src/styles/settings/index.scss" as *;'
      }
    }
  },
  optimizeDeps: {
    include: ["vue", "vue-router", "@vueuse/core", "@vueuse/head"]
  },
  resolve: {
    alias: {
      "~/": `${resolve("/Users/ferez/sites/cata/miniletras/project-miniletras-ui/miniletras-ui", "src")}/`
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gXCJ2aXRlXCJcbmltcG9ydCBWdWUgZnJvbSBcIkB2aXRlanMvcGx1Z2luLXZ1ZVwiXG5pbXBvcnQgUGFnZXMgZnJvbSBcInZpdGUtcGx1Z2luLXBhZ2VzXCJcbmltcG9ydCBDb21wb25lbnRzIGZyb20gXCJ1bnBsdWdpbi12dWUtY29tcG9uZW50cy92aXRlXCJcbmltcG9ydCBXaW5kaUNTUyBmcm9tIFwidml0ZS1wbHVnaW4td2luZGljc3NcIlxuaW1wb3J0IE1hcmtkb3duIGZyb20gXCJ2aXRlLXBsdWdpbi1tZFwiXG5pbXBvcnQgbWF0dGVyIGZyb20gXCJncmF5LW1hdHRlclwiXG5pbXBvcnQgSWNvbnMgZnJvbSBcInVucGx1Z2luLWljb25zL3ZpdGVcIlxuaW1wb3J0IEljb25zUmVzb2x2ZXIgZnJvbSBcInVucGx1Z2luLWljb25zL3Jlc29sdmVyXCJcbmltcG9ydCBBdXRvSW1wb3J0IGZyb20gXCJ1bnBsdWdpbi1hdXRvLWltcG9ydC92aXRlXCJcbmltcG9ydCBQdXJnZUljb25zIGZyb20gXCJ2aXRlLXBsdWdpbi1wdXJnZS1pY29uc1wiXG5pbXBvcnQgeyBWaXRlUFdBIH0gZnJvbSBcInZpdGUtcGx1Z2luLXB3YVwiXG5pbXBvcnQgUHJpc20gZnJvbSBcIm1hcmtkb3duLWl0LXByaXNtXCJcbmltcG9ydCBhbmNob3IgZnJvbSBcIm1hcmtkb3duLWl0LWFuY2hvclwiXG4vLyBAdHMtZXhwZWN0LWVycm9yXG5pbXBvcnQgdG9jIGZyb20gXCJtYXJrZG93bi1pdC10YWJsZS1vZi1jb250ZW50c1wiXG4vLyBAdHMtZXhwZWN0LWVycm9yXG5pbXBvcnQgYXR0ciBmcm9tIFwibWFya2Rvd24taXQtbGluay1hdHRyaWJ1dGVzXCJcbmltcG9ydCB7IGRpcm5hbWUsIHJlc29sdmUgfSBmcm9tIFwicGF0aFwiXG5pbXBvcnQgeyByZWFkRmlsZVN5bmMgfSBmcm9tIFwiZnNcIlxuaW1wb3J0IHZ1ZUkxOG5QbHVnaW4gZnJvbSBcIkBpbnRsaWZ5L3ZpdGUtcGx1Z2luLXZ1ZS1pMThuXCJcbmltcG9ydCB7IGZpbGVVUkxUb1BhdGggfSBmcm9tIFwidXJsXCJcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHNlcnZlcjoge1xuICAgIGZzOiB7XG4gICAgICBhbGxvdzogW1wiLi5cIl0sXG4gICAgfSxcbiAgfSxcbiAgZGVmaW5lOiB7XG4gICAgXCJwcm9jZXNzLmVudlwiOiBwcm9jZXNzLmVudixcbiAgfSxcbiAgcGx1Z2luczogW1xuICAgIFZ1ZSh7XG4gICAgICBpbmNsdWRlOiBbL1xcLnZ1ZSQvLCAvXFwubWQkL10sXG4gICAgfSksXG4gICAgdnVlSTE4blBsdWdpbih7XG4gICAgICAvLyBpZiB5b3Ugd2FudCB0byB1c2UgVnVlIEkxOG4gTGVnYWN5IEFQSSwgeW91IG5lZWQgdG8gc2V0IGBjb21wb3NpdGlvbk9ubHk6IGZhbHNlYFxuICAgICAgLy8gY29tcG9zaXRpb25Pbmx5OiBmYWxzZSxcbiAgICAgIC8vIElORk86IGJ1aWxkIFBST0QgRVJSOiBodHRwczovL2dpdGh1Yi5jb20vcXVhc2FyZnJhbWV3b3JrL3F1YXNhci9pc3N1ZXMvMTMyMjkjaXNzdWVjb21tZW50LTExMTU5MDUwOTNcbiAgICAgIHJ1bnRpbWVPbmx5OiBmYWxzZSxcbiAgICAgIC8vIHlvdSBuZWVkIHRvIHNldCBpMThuIHJlc291cmNlIGluY2x1ZGluZyBwYXRocyAhXG4gICAgICBpbmNsdWRlOiByZXNvbHZlKGRpcm5hbWUoZmlsZVVSTFRvUGF0aChcImZpbGU6Ly8vVXNlcnMvZmVyZXovc2l0ZXMvY2F0YS9taW5pbGV0cmFzL3Byb2plY3QtbWluaWxldHJhcy11aS9taW5pbGV0cmFzLXVpL3ZpdGUuY29uZmlnLnRzXCIpKSwgXCJ+L2xvY2FsZXMvKipcIiksXG4gICAgfSksXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FudGZ1L3ZpdGUtcGx1Z2luLW1kXG4gICAgTWFya2Rvd24oe1xuICAgICAgaGVhZEVuYWJsZWQ6IHRydWUsXG4gICAgICB3cmFwcGVyQ29tcG9uZW50OiBcInBvc3RcIixcbiAgICAgIG1hcmtkb3duSXRPcHRpb25zOiB7XG4gICAgICAgIGh0bWw6IHRydWUsXG4gICAgICAgIGxpbmtpZnk6IHRydWUsXG4gICAgICAgIHR5cG9ncmFwaGVyOiB0cnVlLFxuICAgICAgfSxcbiAgICAgIHdyYXBwZXJDbGFzc2VzOiBcImFydGljbGUtYm9keSBtYi01XCIsXG4gICAgICBtYXJrZG93bkl0U2V0dXAobWQpIHtcbiAgICAgICAgbWQudXNlKFByaXNtKVxuICAgICAgICBtZC51c2UoYW5jaG9yLCB7XG4gICAgICAgICAgcGVybWFsaW5rOiB0cnVlLFxuICAgICAgICAgIHBlcm1hbGlua0JlZm9yZTogdHJ1ZSxcbiAgICAgICAgICBwZXJtYWxpbmtTeW1ib2w6IFwiI1wiLFxuICAgICAgICAgIHBlcm1hbGlua0F0dHJzOiAoKSA9PiAoeyBcImFyaWEtaGlkZGVuXCI6IHRydWUgfSksXG4gICAgICAgIH0pLFxuICAgICAgICAgIG1kLnVzZShhdHRyLCB7XG4gICAgICAgICAgICBwYXR0ZXJuOiAvXmh0dHBzPzovLFxuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgdGFyZ2V0OiBcIl9ibGFua1wiLFxuICAgICAgICAgICAgICByZWw6IFwibm9vcGVuZXJcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSksXG4gICAgICAgICAgbWQudXNlKHRvYylcbiAgICAgIH0sXG4gICAgfSksXG5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vaGFubm9lcnUvdml0ZS1wbHVnaW4tcGFnZXNcbiAgICBQYWdlcyh7XG4gICAgICBwYWdlc0RpcjogW1xuICAgICAgICB7XG4gICAgICAgICAgZGlyOiBcInNyYy9wYWdlc1wiLFxuICAgICAgICAgIGJhc2VSb3V0ZTogXCJcIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGRpcjogXCJwb3N0c1wiLFxuICAgICAgICAgIGJhc2VSb3V0ZTogXCJwb3N0c1wiLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICAgIGV4dGVuc2lvbnM6IFtcInZ1ZVwiLCBcIm1kXCJdLFxuICAgICAgZXh0ZW5kUm91dGUocm91dGUpIHtcbiAgICAgICAgLy8gR2V0IGluc3BpcmVkIGZyb20gYW50aG9ueSBmdVwicyBwZXJzb25hbCB3ZWJzaXRlXG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbnRmdS9hbnRmdS5tZVxuICAgICAgICBjb25zdCBwYXRoID0gcmVzb2x2ZShcIi9Vc2Vycy9mZXJlei9zaXRlcy9jYXRhL21pbmlsZXRyYXMvcHJvamVjdC1taW5pbGV0cmFzLXVpL21pbmlsZXRyYXMtdWlcIiwgcm91dGUuY29tcG9uZW50LnNsaWNlKDEpKVxuICAgICAgICBjb25zdCBtZCA9IHJlYWRGaWxlU3luYyhwYXRoLCBcInV0Zi04XCIpXG4gICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gbWF0dGVyKG1kKVxuICAgICAgICBpZiAocGF0aC5zcGxpdChcIi5cIikucG9wKCkgPT0gXCJtZFwiKSB7XG4gICAgICAgICAgcm91dGUubWV0YSA9IE9iamVjdC5hc3NpZ24ocm91dGUubWV0YSB8fCB7fSwgeyBmcm9udG1hdHRlcjogZGF0YSB9KVxuICAgICAgICB9XG4gICAgICB9LFxuICAgIH0pLFxuXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FudGZ1L3VucGx1Z2luLXZ1ZS1jb21wb25lbnRzXG4gICAgQ29tcG9uZW50cyh7XG4gICAgICBleHRlbnNpb25zOiBbXCJ2dWVcIiwgXCJtZFwiXSxcbiAgICAgIGluY2x1ZGU6IFsvXFwudnVlJC8sIC9cXC52dWVcXD92dWUvLCAvXFwubWQkL10sXG4gICAgICByZXNvbHZlcnM6IFtcbiAgICAgICAgSWNvbnNSZXNvbHZlcih7XG4gICAgICAgICAgcHJlZml4OiBcIlwiLFxuICAgICAgICB9KSxcbiAgICAgIF0sXG4gICAgICBkdHM6IHRydWUsXG4gICAgfSksXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FudGZ1L3VucGx1Z2luLWljb25zXG4gICAgSWNvbnMoe1xuICAgICAgY29tcGlsZXI6IFwidnVlM1wiLFxuICAgIH0pLFxuXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3dpbmRpY3NzL3ZpdGUtcGx1Z2luLXdpbmRpY3NzXG4gICAgV2luZGlDU1MoKSxcblxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbnRmdS9wdXJnZS1pY29ucy90cmVlL21haW4vcGFja2FnZXMvdml0ZS1wbHVnaW4tcHVyZ2UtaWNvbnNcbiAgICBQdXJnZUljb25zKCksXG5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vYW50ZnUvdml0ZS1wbHVnaW4tcHdhXG4gICAgVml0ZVBXQSh7XG4gICAgICBpbmNsdWRlQXNzZXRzOiBbXCJmYXZpY29uLmljb1wiLCBcInJvYm90cy50eHRcIl0sXG4gICAgICBtYW5pZmVzdDoge1xuICAgICAgICAvLyBZb3UgY2FuIGNoYW5nZSB0aGlzIG5hbWUgaW50byB5b3VyIG93blxuICAgICAgICBuYW1lOiBcIkVsdWNpZGF0b3IgQmxvZyBTdGFydGVyXCIsXG4gICAgICAgIHNob3J0X25hbWU6IFwiRWx1Y2lkYXRvclwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJBIGJsb2cgc3RhcnRlciB3aXRoIFZpdGUuanNcIixcbiAgICAgICAgdGhlbWVfY29sb3I6IFwiIzM0N2Y3NlwiLFxuICAgICAgICBpY29uczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogXCIvcHdhLWFzc2V0cy8xOTIucG5nXCIsXG4gICAgICAgICAgICBzaXplczogXCIxOTJ4MTkyXCIsXG4gICAgICAgICAgICB0eXBlOiBcImltYWdlL3BuZ1wiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3JjOiBcIi9wd2EtYXNzZXRzLzUxMi5wbmdcIixcbiAgICAgICAgICAgIHNpemVzOiBcIjUxMng1MTJcIixcbiAgICAgICAgICAgIHR5cGU6IFwiaW1hZ2UvcG5nXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzcmM6IFwiL3B3YS1hc3NldHMvNTEyLnBuZ1wiLFxuICAgICAgICAgICAgc2l6ZXM6IFwiNTEyeDUxMlwiLFxuICAgICAgICAgICAgdHlwZTogXCJpbWFnZS9wbmdcIixcbiAgICAgICAgICAgIHB1cnBvc2U6IFwiYW55IG1hc2thYmxlXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgfSksXG5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vYW50ZnUvdW5wbHVnaW4tYXV0by1pbXBvcnRcbiAgICBBdXRvSW1wb3J0KHtcbiAgICAgIGltcG9ydHM6IFtcInZ1ZVwiLCBcInZ1ZS1yb3V0ZXJcIiwgXCJAdnVldXNlL2NvcmVcIiwgXCJAdnVldXNlL2hlYWRcIl0sXG4gICAgICBkdHM6IHRydWUsXG4gICAgfSksXG4gIF0sXG4gIGNzczoge1xuICAgIHByZXByb2Nlc3Nvck9wdGlvbnM6IHtcbiAgICAgIHNjc3M6IHtcbiAgICAgICAgYWRkaXRpb25hbERhdGE6ICdAdXNlIFwic3JjL3N0eWxlcy9zZXR0aW5ncy9pbmRleC5zY3NzXCIgYXMgKjsnLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICBvcHRpbWl6ZURlcHM6IHtcbiAgICBpbmNsdWRlOiBbXCJ2dWVcIiwgXCJ2dWUtcm91dGVyXCIsIFwiQHZ1ZXVzZS9jb3JlXCIsIFwiQHZ1ZXVzZS9oZWFkXCJdLFxuICB9LFxuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IHtcbiAgICAgIFwifi9cIjogYCR7cmVzb2x2ZShcIi9Vc2Vycy9mZXJlei9zaXRlcy9jYXRhL21pbmlsZXRyYXMvcHJvamVjdC1taW5pbGV0cmFzLXVpL21pbmlsZXRyYXMtdWlcIiwgXCJzcmNcIil9L2AsXG4gICAgfSxcbiAgfSxc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
