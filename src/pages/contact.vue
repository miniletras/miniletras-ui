<script setup lang="ts">
import { i18n } from "~/main"
import { MaskaDetail, vMaska } from "maska"

const { t } = i18n.global

const form = reactive({
  name: "",
  phoneNumber: "",
  email: "",
  reason: "",
  subscribeChild: "",
  testSession: false,
})
const phoneMask = reactive({
  mask: "+(##) ###-###-###",
  eager: true,
})

const inValidEmail = computed(() => !!form.email && !/^[^@]+@\w+(\.\w+)+\w$/.test(form.email))
</script>
<hr class="green-line" />
<template>
  <div class="contact">
    <form class="contact__form">
      <hr class="green-line" />
      <h2 class="h post__h2 text-center">{{ t("contact.introduction") }}</h2>
      <div class="contact__form-group">
        <Input v-model="form.name" class="contact--min-md" :label="t('contact.fullName')" />
        <div class="contact--max-sm">
          <Input
            v-model="form.email"
            type="email"
            :has-error="inValidEmail"
            :label="t('contact.email')"
          />
          <Input
            v-model="form.phoneNumber"
            v-maska:[phoneMask]
            :label="t('contact.phoneNumber')"
            placeholder="+(34) 600-000-000"
          />
          <TextArea v-model="form.reason" :label="t('contact.reason')" />
          <Input
            v-model="form.subscribeChild"
            :label="t('contact.subscribeChild')"
            :placeholder="t('contact.name')"
          />
          <CheckButton
            class="mt-[0.5rem]"
            v-model="form.testSession"
            :label="t('contact.testSession')"
            :disabled="!form.subscribeChild"
          />
        </div>
        <div class="button-right">
          <button type="submit" class="border-button">Enviar</button>
        </div>
      </div>
    </form>
  </div>
</template>
<style lang="scss" scoped>
.contact {
  @include grid-center;
  @media (min-width: $sm) {
    padding: 2rem 2.25rem 1rem;
  }
  &__form {
    @include inner-box();
    border-radius: $border-radius-m;
    max-width: 37rem;
  }
  &__form-group {
    padding: 0 1.25rem 1rem;
    @media (min-width: $xxs) {
      padding: 0 4.25rem 1rem;
    }
  }
  &--min-md,
  &--max-sm {
    @include grid($row-gap: "0.5rem");
  }
  &--min-md {
    @media (min-width: $xs) {
      min-width: 28rem;
    }
  }
  &--max-sm {
    margin: 0.5rem 0;
    @media (min-width: $xs) {
      max-width: 26rem;
    }
  }
  .post__h2 {
    margin-top: 1rem;
    @media (min-width: $sm) {
      margin-top: 2rem;
      margin-bottom: 2rem;
      white-space: pre-line;
      line-height: 1.6;
    }
  }
}
.button-right {
  text-align: right;
  margin: 2rem 0;
}
.border-button {
  font-weight: bolder;
  border-width: 2px;
  color: $color-primary_8;
  &:hover {
    color: $color-primary;
  }
}
.green-line {
  background-color: $color-green-1;
  border-radius: $border-radius-m $border-radius-m 0 0;
  height: 10px;
}
</style>
