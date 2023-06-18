import { CustomValidator, InputType } from "~/components/building/models"
import { recordTranslator } from "~/main"
import { isPositiveNum } from "~/utils"

const warningTranslator = recordTranslator("messages.warning")

const checkType = (type: InputType) => {
  return {
    [InputType.TEXT]: type === InputType.TEXT,
    [InputType.EMAIL]: type === InputType.EMAIL,
    [InputType.TEL]: type === InputType.TEL,
    [InputType.NUMBER]: type === InputType.NUMBER,
  }
}

const inputPatterValidator = ({ type, value, mask }: CustomValidator) => {
  return {
    ...(checkType(type).email && { [InputType.EMAIL]: !/@\w+(\.\w+)+\w/.test(`${value}`) }),
    ...(checkType(type).tel && {
      [InputType.TEL]: (mask?.unmasked?.length ?? 0) > 2 && !mask?.completed,
    }),
  }
}

const setCustomValidator = (targetEl: HTMLInputElement, { type, value, mask }: CustomValidator) => {
  targetEl.setCustomValidity("")

  const pattern = inputPatterValidator({ type, value, mask })

  if (pattern.email && !targetEl.validity.typeMismatch) {
    targetEl.setCustomValidity(warningTranslator("emailDotCom"))
  }
  if (pattern.tel && !targetEl.validity.typeMismatch) {
    targetEl.setCustomValidity(warningTranslator("telLength"))
  }
}

export { checkType, inputPatterValidator, setCustomValidator }
