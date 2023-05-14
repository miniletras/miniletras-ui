<script setup lang="ts">
import { StyleValue } from "vue"
import { UlBaseTheme, UlBaseSubtitles, UlBaseLists } from "./models"

withDefaults(
  defineProps<{
    baseLists?: UlBaseLists[]
    configStyles?: Record<string, StyleValue>
    subtitles?: UlBaseSubtitles
    title?: string
    theme?: UlBaseTheme
  }>(),
  {
    baseList: () => [],
    baseLists: () => [],
    theme: "default",
  },
)
</script>
<template>
  <div class="base">
    <h3 v-if="title" :class="['h h__h3', theme]">{{ title }}</h3>
    <template v-for="(lists, listsIdx) in baseLists" :key="`ul-base-lists-${listsIdx}`">
      <ul :class="['base__ul', theme]" :style="configStyles?.baseUl">
        <div v-if="theme === 'subtitles'" class="subtitles__list">
          <h4 class="h h__h5 uppercase">{{ lists.subtitles?.h4 }}</h4>
          <h4 class="h h__h5">{{ lists.subtitles?.h5 }}</h4>
          <h6 class="h h__h6">{{ lists.subtitles?.h6 }}</h6>
        </div>
        <li v-for="(list, i) in lists.list" :key="`ul-base-list-${i}`">
          <span class="iconify-inline" data-width="1.2em" :data-icon="list.icon"></span>
          <label class="base__label" :for="`base-label-${i}`">
            {{ list.label }}
          </label>
        </li>
      </ul>
    </template>
  </div>
</template>
<style scoped lang="scss">
@use "./whoami" as *;

.base {
  .subtitles__list {
    @include flex-gap("0.25rem");
    margin-bottom: 0.5rem;
  }
  .h__h3 {
    -webkit-text-stroke-width: 1px;
  }
  .h__h3.subtitles {
    font-size: 1.45em;
    letter-spacing: 0.075em;
  }
  &__ul {
    margin-top: 0.6rem;
    line-height: 1.6rem;
    &.default.base__label {
      font-size: 0.85rem;
    }
    &.subtitles {
      .base__label {
        font-size: 1rem;
        color: $color-black;
      }
    }
  }
  &__label {
    margin-left: 0.5rem;
    vertical-align: top;
  }
  &__label,
  .iconify-inline {
    color: $color-gray-2;
  }
}
</style>
