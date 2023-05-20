<script setup lang="ts">
import { i18n } from "~/main"
import { dateToIntString } from "~/utils"

defineProps<{
  image: string
  alt: string
  tags: Array<string>
  date: string
  title: string
  description: string
  to: string
  toTags: string
}>()

const { t } = i18n.global
</script>
<template>
  <router-link
    :to="to"
    class="h-full inline-grid gap-0 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2"
  >
    <img
      :src="image"
      class="rounded h-sm object-cover mx-auto w-full"
      :alt="alt"
      :aria-label="alt"
      role="img"
      loading="lazy"
    />
    <div class="mt-5 flex flex-col lg:px-5 lg:pt-5 lg:mt-0">
      <span class="mb-2 sm:mt-5 lg:mt-0 text-elucidator-700 dark:text-elucidator-50">
        {{ t("latest.publishedAt") }} {{ dateToIntString(date) }}
      </span>
      <router-link
        :to="to"
        class="text-3xl text-elucidator-800 dark:text-dark-repulser-400 font-bold mb-2"
      >
        {{ title }}
      </router-link>
      <p class="text-sm font-light mb-5 text-elucidator-700 dark:text-elucidator-50">
        {{ description }}
      </p>
      <Tag :tags="tags" class="mb-5 flex flex-row justify-start" />
    </div>
  </router-link>
</template>
