<script setup lang="ts">
import { Icons } from "~/types"

const props = defineProps<{
  icon: Icons
  name: string
  network: string
  url: string
  title?: string
  description?: string
  quote?: string
  hashtags?: string
  twitterUser?: string
  media?: string
}>()
</script>

<template>
  <client-only>
    <ShareNetwork
      :network="props.network"
      :url="props.url"
      :title="props.title"
      :description="props.description"
      :quote="props.quote"
      :hashtags="props.hashtags"
      :twitter-user="props.twitterUser"
      :media="props.media"
    >
      <button class="border-button flex">
        <span
          class="iconify text-xl text-elucidator-500 dark:text-dark-repulser-50 mr-2"
          :data-icon="`uim:${props.icon}`"
          data-inline="false"
        ></span>
        <span class="text-elucidator-800 dark:text-dark-repulser-50">{{ props.name }}</span>
      </button>
    </ShareNetwork>
  </client-only>
</template>
<style lang="scss" scoped>
.border-button {
  @include flex-center($justify-content: "center");
  border-width: 1px;
  border-color: rgba(154, 214, 207, var(--tw-border-opacity));
  --tw-border-opacity: 0.6;
  width: 100%;
  &:hover {
    --tw-border-opacity: 1;
  }
}
</style>
