<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    modelValue: string
    id?: string
    cols?: number
    disabled?: boolean
    hasError?: boolean
    label?: string
    placeholder?: string
    rows?: number
    readonly?: boolean
    required?: boolean
  }>(),
  {
    label: "",
    required: false,
  },
)
const emit = defineEmits<{
  (e: "submit", value: string): void
  (e: "update:modelValue"): void
}>()

const inputClasses = computed(() => [
  "input-control__input",
  {
    disable: props.disabled && !props.readonly,
    error: props.required && (props.hasError || !props.modelValue),
  },
])

const onSubmit = () => {
  emit("submit", props.modelValue)
}
</script>
<template>
  <div class="input-control">
    <label v-if="label" class="input-control__label" :for="id">
      {{ label }} {{ required ? "*" : "" }}
    </label>
    <textarea
      v-model="modelValue"
      :id="id"
      :rows="rows"
      :cols="cols"
      :class="inputClasses"
      @keydown.enter.prevent="onSubmit"
    />
  </div>
</template>
<style lang="scss" scoped>
.input-control__input {
  resize: none;
}
</style>
