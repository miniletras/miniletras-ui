<script setup lang="ts">
import { capitalizeStr } from "~/utils"
import { i18n } from "~/main"
import * as locale from "~/locales/en.json"

const { t } = i18n.global
const props = defineProps<{
  tags: Array<string>
}>()

const currTags = {
  tags: props.tags,
  hasLocale: props.tags.map((tag) => Object.keys(locale.tags).some((loc) => loc === tag)),
}
</script>
<template>
  <div>
    <router-link
      v-for="(tag, i) in currTags.tags"
      :key="`tag-${i}`"
      :to="`/tags/${tag.toLowerCase()}`"
      class="text-elucidator-400 p-1 text-xs bg-elucidator-500 dark:bg-elucidator-700 rounded-xl m-1"
    >
      <span class="p-2 text-white dark:text-elucidator-50">
        {{ capitalizeStr(currTags.hasLocale[i] ? t(`tags.${tag}`) : tag) }}
      </span>
    </router-link>
  </div>
</template>
<style lang="scss">
.card-hover {
  transition: all 0.3s ease;
  position: relative;
  top: 0;
  &:hover {
    top: -5px;
  }
}
</style>
