<script setup lang="ts">
import { i18n } from "~/main"

const { t } = i18n.global

const form = reactive({
  name: "",
  email: "",
  reason: "",
})
</script>
<template>
  <div class="grid-center">
    <Input class="min-w-md" v-model="form.name" :label="t('contact.fullName')" />
    <Input class="max-w-sm" type="email" v-model="form.email" :label="t('contact.email')" />
    <Input class="max-w-sm" type="textarea" v-model="form.reason" :label="t('contact.reason')" />
  </div>
</template>
<style lang="scss" scoped>
.grid-center {
  row-gap: 0.5rem;
}
</style>
