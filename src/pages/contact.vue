<script setup lang="ts">
import { i18n } from "~/main"

const { t } = i18n.global

const form = reactive({
  name: "",
  email: "",
  reason: "",
  subscribeChild: "",
  testSession: false,
})
</script>
<template>
  <form class="contact">
    <Input v-model="form.name" class="contact--min-md" :label="t('contact.fullName')" />
    <div class="contact--max-sm">
      <Input v-model="form.email" type="email" :label="t('contact.email')" />
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
  </form>
  <pre>{{ form }}</pre>
</template>
<style lang="scss" scoped>
.contact {
  @include grid-center($row-gap: "0.5rem");
  padding: 0 1.25rem;
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
    @media (min-width: $xs) {
      max-width: 24rem;
    }
  }
}
</style>
