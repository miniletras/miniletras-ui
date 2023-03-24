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
    month: "short",
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
  return new Intl.DateTimeFormat("default", dateOptions(option)).format(new Date(date))
}

export { dateToIntString }
