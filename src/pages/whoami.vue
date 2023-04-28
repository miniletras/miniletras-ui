<template>
  <div class="whoami border-red">
    <section class="whoami__figure">
      <figure class="whoami__personal-photo"></figure>
      <!-- <div class="whoami__square-1"></div> -->
    </section>
  </div>
  <div class="col-1 border-red"></div>
</template>
<style scoped lang="scss">
@use "~/assets/styles/settings/mixins.scss" as *;
@use "~/assets/styles/settings/variables.scss" as *;

.border-red {
  border: 1px solid red;
}
.whoami {
  display: grid;
  @media (min-width: 610px) {
    grid-template-columns: (1fr 1fr);
  }
  &__figure {
    border-radius: 100%;
    display: grid;
    justify-content: center;
  }
  &__personal-photo {
    background: no-repeat center 100%/100% url("../images/cata_de_mar_whoami-circle.png");
    @include heightWidth(19rem, 19rem);
    border-radius: 100%;
    background-color: white;
    border: 1.75rem solid $color-pink-1;
    z-index: 1;
    overflow: visible;
    position: relative;
    @media (min-width: $xxs) {
      @include heightWidth(26rem, 26rem);
    }
    @media (min-width: $xs) {
      @include heightWidth(19rem, 19rem);
    }
    @media (min-width: $sm) {
      @include heightWidth(23.5rem, 23.5rem);
    }
    @media (min-width: $md) {
      @include heightWidth(26rem, 26rem);
    }
  }
  &__square-1 {
    background-color: $color-pink-1;
    margin-top: -14rem;
    z-index: 0;
    position: relative;
    // @include heightWidth(10rem, 28rem);
    // @media (min-width: 375px) {
    // }
    // @media (min-width: 768px) {
    // }
  }
}
</style>
