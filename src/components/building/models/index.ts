enum InputType {
  CHECKBOX = "checkbox",
  RADIO = "radio",
  NUMBER = "number",
  TEXT = "text",
  EMAIL = "email",
  TEL = "tel",
}

interface CustomValidator {
  type: InputType
  value: string | number
}

// INFO: to cast event by T
// export type HTMLElementEvent<T extends HTMLElement> = Event & {
//   target: T;
//   currentTarget?: T;
// }

export { InputType, CustomValidator }
