<template>
  <div class="input-control">
    <label v-if="label" class="input-control__label" :for="id">
      {{ label }} {{ required ? "*" : "" }}
    </label>
    <div class="input-control__input-group">
      <input
        :id="id"
        v-model="inputValue"
        :class="inputClasses"
        :disabled="disabled"
        :min="min"
        :placeholder="placeholder"
        :readonly="readonly"
        :step="type === 'number' ? 'any' : 1"
        :type="type"
        @keydown.enter.prevent="onSubmit"
      />
      <button v-if="hasValue" class="input-control__button" @click="onClear">
        <span class="iconify-inline" data-width="1.2em" data-icon="basil:cross-outline" />
      </button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed } from "vue"

const props = withDefaults(
  defineProps<{
    modelValue: string | number
    disabled?: boolean
    hasError?: boolean
    id?: string
    label?: string
    min?: number
    placeholder?: string
    readonly?: boolean
    required?: boolean
    type?: string
  }>(),
  {
    label: "",
    min: 0,
    required: false,
    type: "text",
  },
)
const emit = defineEmits<{
  (e: "submit", value: string | number): void
  (e: "update:modelValue"): void
}>()

const inputValue = ref<string | number>(props.modelValue)

const hasValue = computed(() => !!inputValue.value && !props.readonly && !props.disabled)
const inputClasses = computed(() => [
  "input-control__input",
  {
    disable: props.disabled && !props.readonly,
    error: props.required && (props.hasError || !props.modelValue),
  },
])

const onSubmit = () => {
  emit("submit", inputValue.value)
}

const onClear = () => {
  inputValue.value = ""
  emit("submit", "")
}
</script>
