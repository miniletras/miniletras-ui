import { RouteRecordNormalized } from "vue-router"

const sortByDate = (dataArray: Record<string, any>[]) => {
  if (!dataArray.length) {
    return []
  }
  return dataArray.sort(
    (a, b) =>
      +new Date((b as Record<string, any>).date) - +new Date((a as Record<string, any>).date),
  )
}

export { sortByDate }
