<template>
  <div class="input-control">
    <label v-if="label" class="input-control__label"> {{ label }} {{ required ? "*" : "" }} </label>
    <div :class="{ 'input-prefix': prefix }">
      <span v-if="prefix" class="input-prefix__prefix">{{ prefix }}</span>
      <input
        v-model="inputValue"
        :class="[textboxClass, { 'input-control__prefix': prefix }]"
        :disabled="disabled"
        :min="min"
        :placeholder="placeholder"
        :readonly="readonly"
        :step="type === 'number' ? 'any' : 1"
        :type="type"
        @keydown.enter.prevent="onSubmit"
      />
    </div>
    <div class="input-control__buttons">
      <span v-if="icon" :class="icon" @click.prevent="onSubmit" @keydown.enter.prevent="onSubmit" />
      <span
        v-show="hasValue"
        class="icon-cross_small"
        @click.prevent="onClear"
        @keydown.enter.prevent="onClear"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed } from "vue"

const props = withDefaults(
  defineProps<{
    disabled?: boolean
    hasError?: boolean
    icon?: string
    label?: string
    min?: number
    modelValue?: string | number
    placeholder?: string
    prefix?: string
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
  (e: "update:modelValue", value: string): void
  (e: "on-submit", value: string): void
}>()

const inputValue = ref(`${props.modelValue}`)

const hasValue = computed(() => !!props.modelValue)
const hasWrongValue = computed(() => props.required && (props.hasError || !props.modelValue))
const disabledClass = props.disabled && !props.readonly ? " disable" : ""
const textboxClass = computed(
  () => `input-control__input ${hasWrongValue.value ? " error" : ""}${disabledClass}`,
)

const onSubmit = () => {
  emit("on-submit", inputValue.value)
}

const onClear = () => {
  inputValue.value = ""
  emit("on-submit", "")
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
  &__input {
    border: 1px solid $color-gray-2;
    border-radius: $border-radius-m;
    padding-left: 0.5rem;
    &:read-only {
      cursor: not-allowed;
    }
  }
  &__buttons {
    bottom: 0.4rem;
    color: $color-gray-1;
    display: flex;
    flex-direction: row-reverse;
    font-size: 2.5rem;
    position: absolute;
    right: 0.4rem;
    & span:hover {
      cursor: pointer;
      filter: opacity(0.7);
    }
  }
}
.disable {
  background-color: $color-gray-2;
}

.input-prefix {
  display: flex;
  align-items: center;
  border: 2px solid $color-gray-2;
  border-radius: $border-radius-m;
  height: 3.4rem;
  &:hover {
    border-color: $color-primary;
  }
  &:focus-within {
    border-color: $color-primary;
  }
  &__prefix {
    font-weight: 300;
    font-size: 1.4rem;
    color: $color-gray-1;
    padding-left: 0.5rem;
  }
  .input-control__prefix {
    padding-left: 0.25rem;
    height: 3rem;
    border: none;
    outline: none;
  }
}
</style>
