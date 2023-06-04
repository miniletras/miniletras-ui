<script setup lang="ts">
import { i18n } from "~/main"

const { t } = i18n.global

const form = reactive({
  name: "",
  phoneNumber: "",
  email: "",
  reason: "",
  subscribeChild: "",
  testSession: false,
})
</script>
<template>
  <div class="contact">
    <form class="contact__form">
      <h2 class="h post__h2">{{ t("contact.introduction") }}</h2>
      <Input v-model="form.name" class="contact--min-md" :label="t('contact.fullName')" />
      <div class="contact--max-sm">
        <Input v-model="form.email" type="email" :label="t('contact.email')" />
        <Input v-model="form.phoneNumber" type="number" :label="t('contact.phoneNumber')" />
        <TextArea v-model="form.reason" :label="t('contact.reason')" />
        <Input
          v-model="form.subscribeChild"
          type="email"
          :label="t('contact.subscribeChild')"
          :placeholder="t('contact.name')"
        />
        <CheckButton
          v-model="form.testSession"
          :label="t('contact.testSession')"
          :disabled="!form.subscribeChild"
        />
      </div>
      <div class="button-right">
        <button type="submit" class="border-button">Enviar</button>
      </div>
    </form>
  </div>
  <pre>{{ form }}</pre>
</template>
<style lang="scss" scoped>
.contact {
  @include grid-center($gap: "0.5rem");
  padding: 2rem 2.25rem 1rem;
  &__form {
    @include inner-box();
    border-radius: $border-radius-m;
    max-width: 37rem;
    padding: 1rem 4.25rem;
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
    margin-bottom: 3rem;
    white-space: pre-line;
  }
}
.button-right {
  text-align: right;
  margin: 1rem 0;
}
</style>
