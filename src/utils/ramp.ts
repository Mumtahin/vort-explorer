import { Feature } from '../reducers/rampReducer'

type MaterialCount = {
  id: string
  value: number
}

export const getMaterialCount = (features: Feature[]) => {
  const materialCount = [] as MaterialCount[]

  features.map(({ properties }) => {
    const { material } = properties
    if (materialCount.find(obj => obj.id === material)) {
      const i = materialCount.findIndex(o => o.id === material)
      materialCount[i].value = materialCount[i].value + 1
    } else {
      materialCount.push({
        id: material,
        value: 1
      })
    }
    return null
  })
  return materialCount
}
