<template>
  <div class="input-control">
    <label v-if="label" class="input-control__label"> {{ label }} {{ required ? "*" : "" }} </label>
    <div class="input-control__input-group">
      <input
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
    disabled?: boolean
    hasError?: boolean
    label?: string
    min?: number
    modelValue?: string | number
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
  (e: "submit", value: string): void
  (e: "update:modelValue"): void
}>()

const inputValue = ref(`${props.modelValue}`)

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

<style lang="scss" scoped>
.error {
  border-color: $color-secondary-error;
  &:focus,
  &:hover {
    border-color: $color-secondary-error-hover;
  }
}
.input-control {
  @include flex-gap($row-gap: "0.2rem");
  line-height: 1.4rem;
  &__input-group {
    position: relative;
    display: flex;
    height: 40px;
  }
  &__input {
    width: 100%;
    outline: 0;
    border-color: $color-primary;
    border-width: 2px;
    border-style: solid;
    border-radius: $border-radius-m;
    padding: 0.25rem 0.3rem 0.3rem 0.5rem;
    &:read-only {
      cursor: not-allowed;
    }
    &:focus,
    &:hover {
      border-color: $color-gray-2;
    }
    &:focus-within {
      border-color: $color-black;
    }
  }
  &__button {
    background-color: white;
    position: absolute;
    color: $color-gray-2;
    font-size: 1.8rem;
    right: 0.2rem;
    bottom: 3px;
  }
}
.disable {
  background-color: $color-gray-1;
}
</style>
