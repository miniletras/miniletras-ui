import { CustomValidator, InputType } from "~/components/building/models"
import { recordTranslator } from "~/main"

const warningTranslator = recordTranslator("messages.warning")

const checkType = (type: InputType) => {
  return {
    [InputType.TEXT]: type === InputType.TEXT,
    [InputType.EMAIL]: type === InputType.EMAIL,
    [InputType.TEL]: type === InputType.TEL,
    [InputType.NUMBER]: type === InputType.NUMBER,
  }
}

const inputPatterValidator = (type: InputType, value: string) => {
  return {
    ...(checkType(type).email && { [InputType.EMAIL]: !/@\w+(\.\w+)+\w/.test(value) }),
  }
}

const setCustomValidator = (targetEl: HTMLInputElement, { type, value }: CustomValidator) => {
  targetEl.setCustomValidity("")
  const pattern = inputPatterValidator(type, `${value}`)

  if (pattern.email && !targetEl.validity.typeMismatch) {
    targetEl.setCustomValidity(warningTranslator("emailDotCom"))
  }
}

export { checkType, inputPatterValidator, setCustomValidator }
