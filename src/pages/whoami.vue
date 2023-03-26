<script setup lang="ts">
import { ref } from "vue"

const title = ref(" whoami.vue Component!")
</script>
<template>
  <div class="whoami border">
    <div class="whoami__border border">
      <img class="whoami__img" src="/images/cata_de_mar_whoami.jpeg" alt="Cata de Mar" />
    </div>
    <div class="border">
      <h1>{{ title }}</h1>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.border {
  border: 1px solid red;
}
.whoami {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  &__border {
    border-radius: 100%;
    border: 2rem solid;
    @apply dark:text-dark-repulser-400;
  }
  &__img {
    border-radius: 100%;
  }
}
</style>
