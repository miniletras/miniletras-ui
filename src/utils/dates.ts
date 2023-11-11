import { DateTimeFormatOptions } from "@intlify/core-base"
import { DateOption } from "./models"

const dateTypes = {
  long: {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  },
  short: {
    year: "numeric",
    month: "long",
    day: "numeric",
  },
}

const dateOptions = (dateOption?: DateOption): DateTimeFormatOptions => {
  return {
    ...((dateOption === "long" || !dateOption) && { ...dateTypes.long }),
    ...(dateOption === "short" && { ...dateTypes.short }),
    // dateOption === 'short'
  } as DateTimeFormatOptions
}

const dateToIntString = (date: string, option?: DateOption) => {
  // TODO: set browser language or combo selected
  const setDate = new Intl.DateTimeFormat("es-ES", dateOptions(option)).format(new Date(date))
  return setDate
}

export { dateToIntString }
