<script setup lang="ts">
import { i18n } from '~/main';

const { t } = i18n.global;

const title = ref('Test title');

</script>
<template>
  <h1>{{ t('hello') }}</h1>
  <h1 class="text-elucidator-700 dark:text-dark-repulser-400 px-4 lg:px-0">this is clubs.vue Component !!</h1>
  <h2>{{ title }}</h2>
</template>