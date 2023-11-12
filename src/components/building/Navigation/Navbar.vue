<script setup lang="ts">
import { isDark, toggleDark, slug } from "~/utils"
import type { NavbarMenu } from "~/types"
import { i18n } from "~/main"

const { t } = i18n.global

// https://vueuse.org/shared/useToggle/
const [search, setSearch] = useToggle()
const [open, setOpen] = useToggle()

// https://vueuse.org/core/onKeyStroke/
onKeyStroke("Escape", () => {
  search.value = false
})
onKeyStroke("Escape", () => {
  open.value = false
})

// https://vueuse.org/core/onClickOutside/
const modalSearch = ref(null)
onClickOutside(modalSearch, (e) => {
  search.value = false
})

const navbottom = ref(null)
onClickOutside(navbottom, (e) => {
  open.value = false
})

// Search article
const searchArticle = ref("")
const router = useRouter()
const goSearch = () => {
  if (searchArticle.value) {
    router.push(`/search/${slug(searchArticle.value)}`).then(() => {
      search.value = false
      searchArticle.value = ""
    })
  }
}

// Hide navbottom after page has been changed
router.afterEach(() => {
  open.value = false
})

// Navbar list
const dataNavbar: NavbarMenu[] = [
  {
    activeColor: "cornflowerblue",
    name: t("menu.home"),
    to: "/",
  },
  {
    activeColor: "orange",
    name: t("menu.childrenClubs"),
    to: "/clubs",
  },
  {
    activeColor: "green",
    name: t("menu.workshops"),
    to: "/workshops",
  },
  {
    activeColor: "red",
    name: t("menu.trainingAndProjects"),
    to: "/trainings",
  },
  {
    activeColor: "blue",
    name: t("menu.whoAmI"),
    to: "/whoami",
  },
  {
    activeColor: "rebeccapurple",
    name: t("menu.contact"),
    to: "/contact",
  },
]

const indicator = ref<HTMLSpanElement>()
const items = ref<NodeListOf<HTMLElement>>()
onMounted(() => {
  indicator.value = <HTMLSpanElement>document.querySelector(".navbar-indicator")
  items.value = <NodeListOf<HTMLElement>>document.querySelectorAll(".navbar-item")
})

const handleIndicator = (el: HTMLElement) => {
  items.value?.forEach((item) => {
    item.classList.remove("is-active")
    item.removeAttribute("style")
  })

  if (indicator.value?.style) {
    indicator.value.style.width = `${el.offsetWidth}px`
    indicator.value.style.left = `${el.offsetLeft}px`
    indicator.value.style.backgroundColor = `${el.getAttribute("active-color")}`
  }

  el.classList.add("is-active")
  el.style.color = `${el.getAttribute("active-color")}`
}

const onNavItem = (event: Event) => {
  event?.target && handleIndicator(<HTMLElement>event.target)
}
</script>
<template>
  <div>
    <div class="max-w-screen-lg mx-auto h-full flex flex-row items-center space-x-4">
      <div class="logo flex-1">
        <router-link to="/" class="font-bold lg:tracking-wide text-2xl">
          MiniLetras Blog
        </router-link>
      </div>
      <nav class="navbar flex flex-wrap items-center" role="navigation" aria-label="navbar">
        <router-link
          v-for="(data, i) in dataNavbar"
          :key="`desktop-navbar-${i}`"
          class="navbar-item"
          :to="data.to"
          :active-color="data.activeColor"
          @click="(event: Event) => onNavItem(event)"
          >{{ data.name }}</router-link
        >
        <span class="navbar-indicator"></span>
      </nav>
      <carbon-sun
        v-if="isDark"
        class="menu-icon"
        tabindex="0"
        @click="toggleDark"
        title="Toggle light mode"
      />
      <carbon-moon
        v-else
        class="menu-icon"
        tabindex="0"
        @click="toggleDark"
        title="Toggle dark mode"
      />
      <carbon-search
        class="menu-icon"
        tabindex="0"
        :title="t('menu.defaultSearch')"
        @click="setSearch"
      />
      <a
        href="https://github.com/satyawikananda/elucidator-blog-starter"
        target="_blank"
        rel="noreferrer"
        title="repository github"
      >
        <uil-github class="flex cursor-pointer text-elucidator-700 dark:text-dark-repulser-400" />
      </a>
      <carbon-menu
        class="cursor-pointer text-elucidator-700 dark:text-dark-repulser-400 ml-5 sm:block lg:hidden"
        tabindex="0"
        @click="setOpen"
      />
    </div>
  </div>
  <!-- Nav bottom -->
  <nav
    v-if="open"
    ref="navbottom"
    class="nav-bottom"
    :class="open ? 'block translate-y-0' : 'hidden translate-y-full'"
  >
    <ul class="flex flex-col">
      <router-link
        v-for="(data, i) in dataNavbar"
        :key="`mobile-navbar-${i}`"
        class="bg-elucidator-50 dark:bg-elucidator-500 p-2 mb-2 rounded-md"
        :to="data.to"
      >
        <li class="flex flex-row flex-wrap items-center dark:text-elucidator-100">
          <carbon-menu class="mr-2" />{{ data.name }}
        </li>
      </router-link>
    </ul>
  </nav>
  <!-- Search -->
  <div
    v-if="search"
    class="fixed overflow-x-hidden overflow-y-hidden inset-8 flex justify-content items-center z-50"
  >
    <div ref="modalSearch" class="relative mx-auto w-auto max-w-2xl">
      <carbon-search
        class="absolute right-8 top-4 text-xl text-gray-400 cursor-pointer"
        @click="goSearch"
      />
      <input
        ref="search"
        v-model="searchArticle"
        type="text"
        class="bg-white shadow rounded border-0 w-lg h-14 py-5 px-5 focus:outline-none"
        :placeholder="t('menu.defaultSearch')"
        @keydown.enter="goSearch"
      />
    </div>
  </div>
  <div
    v-if="search || open"
    :class="['fixed inset-0 z-40 opacity-60 bg-dark-200', { 'lg:hidden': open }]"
  />
</template>

<style scoped lang="scss">
.menu-icon {
  @apply mr-5 cursor-pointer text-elucidator-700 dark:text-dark-repulser-400;
}
.active-class {
  @apply p-2 mb-2 rounded-md bg-elucidator-200 dark:bg-elucidator-700;
}
.light-button {
  &--negative {
    @apply mr-5 py-1.5 px-3 rounded-md text-elucidator-700 dark:text-dark-repulser-400 dark:hover:text-elucidator-300 hover:text-gray-900 hidden lg:block;
  }
}
.nav-bottom {
  @apply px-8 bg-elucidator-100 dark:bg-elucidator-600 fixed bottom-0 z-99 inset-x-0 shadow-lg lg:hidden;
  padding-top: 1rem;
  padding-bottom: 0.5rem;
  overflow: hidden;
}
.navbar {
  display: inline-flex;
  position: relative;
  max-width: 100%;
  background-color: #fff;
  padding: 0 20px;
  border-radius: 40px;
  box-shadow: 0 10px 40px rgba(159, 162, 177, 0.8);
  height: 60px;
  @media (max-width: 580px) {
    overflow: auto;
  }
  &-item {
    color: #83818c;
    padding: 20px;
    text-decoration: none;
    transition: 0.3s;
    margin: 0 6px;
    z-index: 1;
    font-weight: 500;
    position: relative;
    &:before {
      content: "";
      position: absolute;
      bottom: -6px;
      left: 0;
      width: 100%;
      height: 6px;
      background-color: #dfe2ea;
      border-radius: 8px 8px 0 0;
      opacity: 0;
      transition: 0.3s;
    }
    &:not(.is-active):hover:before {
      opacity: 1;
      bottom: 4px;
    }
    :not(.is-active):hover {
      color: #333;
    }
  }
  &-indicator {
    position: absolute;
    height: 6px;
    bottom: 0;
    transition: 0.4s;
    z-index: 1;
    border-radius: 8px 8px 0 0;
  }
}
</style>
