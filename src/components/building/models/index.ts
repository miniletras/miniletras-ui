export enum InputType {
  CHECKBOX = 'checkbox',
  RADIO = 'radio',
  NUMBER = 'number',
  TEXT = 'text'
}

// INFO: to cast event by T
// export type HTMLElementEvent<T extends HTMLElement> = Event & {
//   target: T; 
//   currentTarget?: T;
// }
