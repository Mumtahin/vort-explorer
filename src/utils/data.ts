interface Obj {
  [key: string]: number
}

export const convertObjToChartData = (obj: Obj) => {
  return Object.entries(obj).map(([key, value]) => ({
    id: key,
    value
  }))
}
