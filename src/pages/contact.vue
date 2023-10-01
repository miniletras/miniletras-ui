<script setup lang="ts">
import { recordTranslator } from "~/main"
import { MaskOptions, vMaska, MaskaDetail } from "maska"
import { ContactForm } from "~/types"
import { InputType } from "~/components/building/models"
import { Undefinable } from "~/utils/models"

const phoneMaskdetail = ref<MaskaDetail & { maskValues: Undefinable<string> }>()
const form = reactive<ContactForm>({ phoneNumber: "051" })

const validEmail = ref<boolean>()

const emailOrPhoneRequired = computed(() => {
  const phoneMask = (phoneMaskdetail.value?.unmasked?.length ?? 0) > 3
  const isValidEmail = form.email && validEmail.value

  return !!(isValidEmail || phoneMask)
})

const contactTranslator = recordTranslator("contact")
const phoneMaskOptions: MaskOptions = { mask: "+(###) ###-##-##-##", eager: true }
const phoneMask = {
  ...phoneMaskOptions,
  onMaska: (detail: MaskaDetail) => {
    const prefixValues = detail.masked.substring(
      detail.masked.indexOf("(") + 1,
      detail.masked.lastIndexOf(")"),
    )
    phoneMaskdetail.value = { ...detail, maskValues: `+(${prefixValues}) ` }
  },
}

const onTargetEmail = (emailEl: HTMLInputElement) => {
  validEmail.value = emailEl.validity.valid
}

const onSubmit = (event: Event) => {
  console.log("%c [ event ]-40", "font-size:13px; background:pink; color:#bf2c9f;", event)

  if (!emailOrPhoneRequired.value) {
    console.log(
      "%c [ !emailOrPhoneValid ]-34",
      "font-size:13px; background:pink; color:#bf2c9f;",
      !emailOrPhoneRequired.value,
    )
    return
  }
}
</script>
<hr class="green-line" />
<template>
  <div class="contact">
    <form class="contact__form" @submit.prevent="onSubmit">
      <hr class="green-line" />
      <h2 class="h post__h2 text-center">{{ contactTranslator("introduction") }}</h2>
      <div class="contact__form-group">
        <Input v-model="form.name" class="contact--min-md" :label="contactTranslator('fullName')" />
        <div class="contact--max-sm">
          <Input
            v-model="form.email"
            id="email"
            :type="InputType.EMAIL"
            :label="contactTranslator('email')"
            :required="!emailOrPhoneRequired"
            @target="onTargetEmail"
          />
          <Input
            v-model="form.phoneNumber"
            v-maska:[phoneMask]
            id="tel"
            placeholder="+(051) 990-000-000"
            :label="contactTranslator('phoneNumber')"
            :mask="phoneMaskdetail"
            :type="InputType.TEL"
            :required="!emailOrPhoneRequired"
          />
          <TextArea v-model="form.reason" :label="contactTranslator('reason')" />
          <Input
            v-model="form.subscribeChild"
            :label="contactTranslator('subscribeChild')"
            :placeholder="contactTranslator('name')"
          />
          <CheckButton
            class="mt-[0.5rem]"
            v-model="form.testSession"
            :label="contactTranslator('testSession')"
            :disabled="!form.subscribeChild"
          />
        </div>
        <div class="button-right">
          <button type="submit" class="border-button">{{ contactTranslator("send") }}</button>
        </div>
      </div>
      <hr class="grey-line" />
      <p class="contact__footnote">* {{ contactTranslator("footnote") }}</p>
    </form>
  </div>
</template>
<style lang="scss" scoped>
.contact {
  @include grid-center;
  @media (min-width: $sm) {
    padding: 2rem 2.25rem 1rem;
  }
  &__form {
    @include inner-box();
    border-radius: $border-radius-m;
    max-width: 37rem;
  }
  &__form-group {
    padding: 0 1.25rem 1rem;
    @media (min-width: $xxs) {
      padding: 0 4.25rem 1rem;
    }
  }
  &__footnote {
    color: $color-gray-2_75;
    padding: 0.5rem 0.25rem;
  }
  &--min-md,
  &--max-sm {
    @include grid($row-gap: "0.5rem");
  }
  &--min-md {
    @media (min-width: $xs) {
      min-width: 28rem;
    }
  }
  &--max-sm {
    margin: 0.5rem 0;
  }
  .post__h2 {
    margin-top: 1rem;
    @media (min-width: $sm) {
      margin-top: 2rem;
      margin-bottom: 2rem;
      white-space: pre-line;
      line-height: 1.4;
      font-size: 1.75rem;
    }
  }
}
.button-right {
  text-align: right;
  margin: 2rem 0;
}
.border-button {
  font-weight: bolder;
  border-width: 2px;
  border-color: $color-green-2;
  color: $color-gray-4;
  &:hover {
    border-color: $color-green-3;
    color: $color-gray-2;
  }
}
.green-line {
  background-color: $color-green-1;
  border-radius: $border-radius-m $border-radius-m 0 0;
  height: 10px;
}
</style>
