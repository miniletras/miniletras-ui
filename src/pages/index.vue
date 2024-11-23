<script setup lang="ts">
import { getLatestArticle, getArticles, getPathLastArticle } from "~/data"
import { limitString, slug } from "~/utils"
import { i18n } from "~/main"

const { t } = i18n.global

const latestArticle = computed(() => {
  return getLatestArticle()
})

const pathLastArticle = computed(() => {
  return getPathLastArticle(getArticles(), latestArticle.value.date)
})
</script>

<template>
  <div class="mini-inline-grid">
    <h1 class="post__h1">{{ t("home.latestArticle") }}</h1>
    <Latest
      :image="latestArticle.thumbnail"
      :alt="`blog-banner-${slug(latestArticle.name)}`"
      :tags="latestArticle.tags"
      :date="`${new Date(latestArticle.date).toDateString()}`"
      :title="latestArticle.name"
      :description="limitString(latestArticle.description, 200)"
      :to="pathLastArticle"
      :to-tags="`/tags/${latestArticle.tags}`"
    />
  </div>
  <div class="latest-posts">
    <div class="grid inline-grid grid-cols-2 mb-5">
      <h1 class="text-3xl font-bold text-elucidator-700 dark:text-dark-repulser-400">
        {{ t("home.latest") }}
      </h1>
      <router-link
        to="/articles"
        class="cursor-pointer text-right my-auto text-elucidator-700 dark:text-dark-repulser-400"
      >
        {{ t("home.seeAll") }}
      </router-link>
    </div>
    <div
      class="mx-auto inline-grid gap-4 mb-5 sm:grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-10"
    >
      <Article
        v-for="(data, i) in getArticles(6)"
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
