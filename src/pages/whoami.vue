<script setup lang="ts">
import { ref } from "vue"

const title = ref(" whoami.vue Component!")
</script>
<template>
  <div class="grid grid-cols-2">
    <div class="main-section border-red">
      <section class="main-section__figure">
        <figure class="main-section__personal-photo"></figure>
        <div class="main-section__square-1"></div>
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
  }
  &__personal-photo {
    background: no-repeat center 66%/97% url("../images/cata_de_mar_whoami-circle.png");
    @include heightWidth(28rem, 28rem);
    border-radius: 100%;
    background-color: white;
    border: 1.75rem solid $color-pink-1;
    z-index: 1;
    overflow: visible;
    position: relative;
  }
  &__square-1 {
    @include heightWidth(10rem, 28rem);
    background-color: $color-pink-1;
    margin-top: -14rem;
    z-index: 0;
    position: relative;
  }
}
</style>
