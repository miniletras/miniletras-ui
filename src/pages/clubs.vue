<script setup lang="ts">
import { latestArticle, getArticles, getClubs } from "~/data"
import { limitString, slug } from "~/utils"

// Get latest article
const latest = computed(() => {
  return latestArticle() as Record<string, any>
})

// Get articles data
const articles = computed(() => getArticles(6) as Record<string, any>[])

const clubs = computed(() => getClubs())
</script>
<template>
  <div class="inline-grid px-4 lg:px-0">
    <h1 class="mb-5 text-3xl text-elucidator-700 dark:text-dark-repulser-400 font-bold">
      Latest Club
    </h1>
    <LatestClub
      :image="latest.thumbnail"
      :alt="`blog-banner-${slug(latest.name)}`"
      :tags="latest.tags"
      :date="`${new Date(latest.date).toDateString()}`"
      :title="latest.name"
      :description="limitString(latest.description, 200)"
      :to="articles[0].path"
      :to-tags="`/tags/${latest.tags}`"
    />
  </div>
</template>
