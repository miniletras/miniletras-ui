import { MaskaDetail } from "maska"
import { Undefinable } from "~/utils/models"

export type CustomMaskDetails = MaskaDetail & { maskValues: Undefinable<string> }

export enum InputType {
  CHECKBOX = "checkbox",
  RADIO = "radio",
  NUMBER = "number",
  TEXT = "text",
  EMAIL = "email",
  TEL = "tel",
}

export interface CustomValidator {
  type: InputType
  value: string | number
  mask?: MaskaDetail
}

// INFO: to cast event by T
// export type HTMLElementEvent<T extends HTMLElement> = Event & {
//   target: T;
//   currentTarget?: T;
// }
