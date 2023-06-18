<script setup lang="ts">
import { InputType } from "~/components/building/models"
import { setCustomValidator } from "./composables"
import { MaskaDetail } from "maska"

const props = withDefaults(
  defineProps<{
    modelValue?: string | number
    disabled?: boolean
    hasError?: boolean
    id?: string
    label?: string
    mask?: MaskaDetail
    min?: number
    placeholder?: string
    readonly?: boolean
    required?: boolean
    type?: InputType
  }>(),
  {
    label: "",
    min: 0,
    required: false,
    type: InputType.TEXT,
  },
)
const emit = defineEmits<{
  (e: "submit", value: string | number): void
  (e: "update:modelValue", value: string | number): void
  (e: "target", target: HTMLInputElement): void
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

const onClear = () => {
  // FIXME: default input value has to be assigned from props.mask
  inputValue.value = ""
  if (props.type === InputType.TEL) {
    inputValue.value = "51"
  }
  emit("update:modelValue", inputValue.value)
}

const onInput = (event: Event) => {
  console.log("%c [ event onInput]-44", "font-size:13px; background:pink; color:#bf2c9f;", event)
  const targetEl = <HTMLInputElement>event.target
  inputValue.value = targetEl.value

  if (!inputValue.value) {
    onClear()
    return
  }

  emit("update:modelValue", inputValue.value)
  emit("target", targetEl)

  const { type } = props
  setCustomValidator(targetEl, {
    type,
    value: inputValue.value,
    mask: (<Record<string, any>>event)?.detail,
  })
}

const onSubmit = () => {
  emit("submit", inputValue.value)
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
        :mask="mask"
        :placeholder="placeholder"
        :readonly="readonly"
        :required="required"
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
