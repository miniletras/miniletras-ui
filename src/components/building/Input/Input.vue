<script setup lang="ts">
import { computed } from "vue"
import { InputType } from "../models"

const props = withDefaults(
  defineProps<{
    modelValue?: string | number
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
  (e: "update:modelValue", value: string | number): void
}>()

const inputValue = ref<string | number>(props.modelValue ?? "")

const hasValue = computed(() => !!inputValue.value && !props.readonly && !props.disabled)
const inputClasses = computed(() => [
  "input-control__input",
  {
    disable: props.disabled && !props.readonly,
    error: props.hasError || (!props.modelValue && props.required),
  },
])

const onInput = (event: Event) => {
  const targetEl = <HTMLInputElement>event.target
  inputValue.value = targetEl.value

  targetEl.setCustomValidity("")
  if (inputValue.value === "xxx") {
    targetEl.setCustomValidity("Custom validation is ONONONO!!!")
  }
  emit("update:modelValue", inputValue.value)
}

const onSubmit = () => {
  emit("submit", inputValue.value)
}

const onClear = () => {
  inputValue.value = ""
  emit("update:modelValue", inputValue.value)
}
</script>
<template>
  <div class="input-control">
    <label v-if="label" class="input-control__label" :for="id">
      {{ label }} {{ required ? "*" : "" }}
    </label>
    <div class="input-control__input-group">
      <input
        :class="inputClasses"
        :disabled="disabled"
        :id="id"
        :min="min"
        :placeholder="placeholder"
        :readonly="readonly"
        :step="type === InputType.NUMBER ? 'any' : 1"
        :type="type"
        :value="inputValue"
        @keydown.enter.prevent="onSubmit"
        @input="onInput"
      />
      <button v-if="hasValue" class="input-control__button" @click.prevent="onClear">
        <span class="iconify-inline" data-width="1.2em" data-icon="basil:cross-outline" />
      </button>
    </div>
  </div>
</template>
