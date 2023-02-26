<script setup lang="ts">
import { getClubs, latestImportantClub } from "~/data"
import { limitString, slug } from "~/utils"
import { i18n } from '~/main';


const { t } = i18n.global;

// Get latest important club
const importantClub = computed(() => {
  return latestImportantClub() as Record<string, any>
})

// Get clubs data
const clubs = computed(() => getClubs(6))

</script>
<template>
  <div class="inline-grid px-4 lg:px-0">
    <h1 class="mb-5 text-3xl text-elucidator-700 dark:text-dark-repulser-400 font-bold">
      {{ t('clubs.monthClub') }}
    </h1>
    <LatestClub
      :image="importantClub.thumbnail"
      :alt="`blog-banner-${slug(importantClub.name)}`"
      :tags="importantClub.tags"
      :date="`${new Date(importantClub.date).toDateString()}`"
      :title="importantClub.name"
      :description="limitString(importantClub.description, 200)"
      :to="clubs[0].path"
      :to-tags="`/tags/${importantClub.tags}`"
    />
  </div>
  <div class="flex flex-col flex-wrap mb-2 mt-12 px-4 lg:px-0">
    <div
      class="mx-auto inline-grid gap-4 mb-5 sm:grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-10"
    >
      <Club
        v-for="(data, i) in clubs"
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
