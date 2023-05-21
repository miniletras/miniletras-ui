<script setup lang="ts">
import { ref } from "vue"

const title = ref(" contact.vue Component!")

const form = reactive({
  name: "",
})
</script>
<template>
  <h1>{{ title }}</h1>
  <Input v-model="form.name" />
</template>
