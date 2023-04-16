<script setup lang="ts">
import { ref } from "vue"

const title = ref(" whoami.vue Component!")
</script>
<template>
  <div class="grid grid-cols-2">
    <div class="main-section border-red">
      <section class="main-section__figure">
        <figure class="main-section__personal-photo"></figure>
      </section>
    </div>
    <div class="col-1 border-red"></div>
  </div>
</template>
<style scoped lang="scss">
@use "~/assets/styles/settings/mixins.scss" as *;
@use "~/assets/styles/settings/variables.scss" as *;

.border-red {
  border: 1px solid red;
}
.main-section {
  display: grid;
  justify-content: center;
  &__figure {
    border-radius: 100%;
    background-color: $color-gray-1;
    border: 1rem solid $color-gray-1;
  }
  &__personal-photo {
    background: no-repeat center/80% url("../images/cata_de_mar_whoami.jpeg");
    @include heightWidth(16rem, 16rem);
    border-radius: 100%;
    background-color: $color-gray-1;
    border-radius: 4px solid $color-purple-1;
  }
}
</style>
