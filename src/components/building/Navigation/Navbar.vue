<script setup lang="ts">
import { isDark, toggleDark, slug, isPositiveNum } from "~/utils"
import { dataNavbar } from "~/data"
import { i18n } from "~/main"
import { NavbarMenu } from "~/types"

const { t } = i18n.global
// https://vueuse.org/shared/useToggle/
const [search, setSearch] = useToggle()
const [open, setOpen] = useToggle()

// Search article
const searchArticle = ref("")
const router = useRouter()
// Navbar menu
const indicator = ref<HTMLSpanElement>()
const items = ref<NodeListOf<HTMLElement>>()
// https://vueuse.org/core/onClickOutside/
const modalSearch = ref(null)
const navbottom = ref(null)

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

onMounted(() => {
  indicator.value = <HTMLSpanElement>document.querySelector(".navbar-indicator")
  items.value = <NodeListOf<HTMLElement>>document.querySelectorAll(".navbar-item")

  const menuItemIdx = dataNavbar.findIndex(
    (item: NavbarMenu) => item.to === router.currentRoute.value.path,
  )
  setTimeout(() => {
    if (items.value && isPositiveNum(menuItemIdx)) {
      handleIndicator(items.value[menuItemIdx])
    }
  }, 500)
})

// Search article
const goSearch = () => {
  if (searchArticle.value) {
    router.push(`/search/${slug(searchArticle.value)}`).then(() => {
      search.value = false
      searchArticle.value = ""
    })
  }
}

// https://vueuse.org/core/onKeyStroke/
onKeyStroke("Escape", () => {
  search.value = false
})
onKeyStroke("Escape", () => {
  open.value = false
})

// https://vueuse.org/core/onClickOutside/
onClickOutside(modalSearch, () => {
  search.value = false
})

onClickOutside(navbottom, () => {
  open.value = false
})

router.beforeEach((to, from) => {
  if (to.name === "index" && from.name !== "index") {
    items.value?.length && handleIndicator(items.value[0])
  }
  return true
})

// Hide navbottom after page has been changed
router.afterEach(() => {
  open.value = false
})

const onNavItem = (event: Event) => {
  event?.target && handleIndicator(<HTMLElement>event.target)
}
</script>
<template>
  <div class="navbar-responsive">
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
        >{{ t(data.name) }}</router-link
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
      href="https://github.com/miniletras/miniletras-ui"
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
          <carbon-menu class="mr-2" />{{ t(data.name) }}
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
.nav-bottom {
  @apply px-8 bg-elucidator-100 dark:bg-elucidator-600 fixed bottom-0 z-99 inset-x-0 shadow-lg lg:hidden;
  padding-top: 1rem;
  padding-bottom: 0.5rem;
  overflow: hidden;
}
.navbar {
  display: none;
  position: relative;
  padding: 0 20px;
  box-shadow: 0px 18px 10px -22px rgba(159, 162, 177, 0.8);
  height: 58px;
  @media (min-width: $lg) {
    display: inline-flex;
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
      bottom: 6px;
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
  &-responsive {
    width: 100%;
    @apply max-w-screen-lg mx-auto h-full flex flex-row items-center space-x-4;
    @media (max-width: $lg) {
      padding: 0 1rem;
    }
    @media (min-width: $lg) {
      .logo {
        max-width: 120px;
      }
    }
  }
}
</style>
