import { DateTimeFormatOptions } from "@intlify/core-base"

const dateToIntString = (date: string) => {
  const dateOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  } as DateTimeFormatOptions

  return new Intl.DateTimeFormat("es-ES", dateOptions).format(new Date(date))
}

export { dateToIntString }
