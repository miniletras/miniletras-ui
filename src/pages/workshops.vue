<script setup lang="ts">
import { getItemsByMenu as getItemsByMenu, latestItemByMenuTag } from "~/data"
import { limitString, slug } from "~/utils"
import { i18n } from "~/main"

const { t } = i18n.global

// Get latest important club
const itemImportant = computed(() => {
  return latestItemByMenuTag("workshop", "important") as Record<string, any>
})

// Get workshops data
const workshops = computed(() => getItemsByMenu("workshop", 6))
</script>
<template>
  <div class="inline-grid px-4 lg:px-0">
    <h1 class="post__h1">
      {{ t("workshops.monthWorkshop") }}
    </h1>
    <Latest
      :image="itemImportant.thumbnail"
      :alt="`blog-banner-${slug(itemImportant.name)}`"
      :tags="itemImportant.tags"
      :date="`${new Date(itemImportant.date).toDateString()}`"
      :title="itemImportant.name"
      :description="limitString(itemImportant.description, 200)"
      :to="workshops[0].path"
      :to-tags="`/tags/${itemImportant.tags}`"
    />
  </div>
  <div class="flex flex-col flex-wrap mb-2 mt-12 px-4 lg:px-0">
    <div
      class="mx-auto inline-grid gap-4 mb-5 sm:grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-10"
    >
      <Article
        v-for="(data, i) in workshops"
        :key="i"
        :image="data.meta.frontmatter.thumbnail"
        :alt="`blog-banner-${slug(data.meta.frontmatter.name)}`"
        :tags="data.meta.frontmatter.tags"
        :date="`${new Date(data.meta.frontmatter.date).toDateString()}`"
        :title="data.meta.frontmatter.name"
        :to="data.path"
        :description="limitString(data.meta.frontmatter.description, 100)"
        :to-tags="`/tags/${data.meta.frontmatter.tags}`"
      />
    </div>
  </div>
</template>
