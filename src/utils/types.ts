const isPositiveNum = (num?: number) => {
  const number = num ?? false
  return !(number && number >= 0 && Number.isInteger(num))
}

export { isPositiveNum }
