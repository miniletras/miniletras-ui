<script setup lang="ts">
import { i18n } from "~/main"

const { t } = i18n.global

const form = reactive({
  name: "",
  email: "",
  reason: "",
  subscribeChild: "",
})
</script>
<template>
  <form class="grid-center">
    <Input v-model="form.name" class="min-w-md" :label="t('contact.fullName')" />
    <Input v-model="form.email" class="max-w-sm" type="email" :label="t('contact.email')" />
    <TextArea class="max-w-sm" v-model="form.reason" :label="t('contact.reason')" />
    <Input
      v-model="form.subscribeChild"
      class="max-w-sm"
      type="email"
      :label="t('contact.subscribeChild')"
      :placeholder="t('contact.name')"
    />
  </form>
</template>
<style lang="scss" scoped>
.grid-center {
  row-gap: 0.5rem;
}
</style>
