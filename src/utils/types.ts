const isPositiveNum = (num?: number) => {
  const number = num ?? -1
  return Number.isInteger(number) && number >= 0
}

export { isPositiveNum }
