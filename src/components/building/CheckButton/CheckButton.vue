<script setup lang="ts">
import { StyleValue } from "vue"
import { InputType } from "../models"
import { CheckButtonPayload } from "./models"

const props = withDefaults(
  defineProps<{
    modelValue: boolean | string
    checked?: boolean
    configStyles?: Record<string, StyleValue | string>
    disabled?: boolean
    id?: string
    name?: string
    label?: string
    type?: InputType
  }>(),
  {
    id: "check-button",
    type: InputType.CHECKBOX,
  },
)
const emit = defineEmits<{
  (e: "input", payload: CheckButtonPayload): void
  (e: "update:modelValue", value: string | boolean): void
}>()

const onInput = (event: Event) => {
  const payload: CheckButtonPayload = {
    checked: (<HTMLInputElement>event.target).checked,
    value: props.type === InputType.CHECKBOX ? !props.modelValue : props.modelValue,
    name: props?.name ?? "",
  }
  emit("update:modelValue", payload.value)
  emit("input", payload)
}
</script>
<template>
  <div class="check-button">
    <label class="check-button__label" :class="configStyles?.label" :for="id">
      <input
        class="check-button__checkbox"
        :checked="checked"
        :disabled="disabled"
        :id="id"
        :type="type"
        :value="modelValue"
        @input="onInput"
      />
      <span v-if="label" :class="['check-button__label-right', { disabled }]">{{ label }}</span>
    </label>
  </div>
</template>
<style lang="scss" scoped>
$size-m: 20px;

.check-button {
  &__label {
    @include flex-center;
  }
  &__checkbox {
    width: $size-m;
    height: $size-m;
    border-radius: 25%;
    cursor: pointer;
  }
  &__checkbox + &__label-right {
    color: $color-black;
    padding-left: 15px;
    vertical-align: top;
    cursor: pointer;
  }
  &__label-right.disabled {
    color: $color-gray-2_75;
  }
}
</style>
