<script setup lang="ts">
import { BaseList } from "../models"

withDefaults(
  defineProps<{
    baseList?: BaseList[]
    title?: string
  }>(),
  {
    baseList: () => [],
  },
)
</script>
<template>
  <div class="base">
    <h3 v-if="title" class="h h__h3">{{ title }}</h3>
    <ul class="base__ul">
      <li v-for="(list, i) in baseList" :key="`whoami-base-list-${i}`">
        <span class="iconify-inline" data-width="1.2em" :data-icon="list.icon"></span>
        <label class="base__label" :for="`base-label-${i}`">
          {{ list.label }}
        </label>
      </li>
    </ul>
  </div>
</template>
<style scoped lang="scss">
@use "../whoami" as *;
.base {
  &__ul {
    margin-top: 0.6em;
    line-height: 1.6em;
  }
  &__label {
    font-size: 0.85em;
    margin-left: 0.5rem;
    vertical-align: top;
  }
  &__label,
  .iconify-inline {
    color: $color-gray-2;
  }
}
</style>
