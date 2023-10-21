import { RAMP_SIZE_CATEGORIES } from '../constants'
import { Feature } from '../reducers/rampReducer'
import { convertObjToChartData } from './data'

type BarChartData = {
  id: string
  value: number
}[]

export const getRampsPerMaterial = (features: Feature[]): BarChartData => {
  const rampsPerMaterial = [] as BarChartData

  features.map(({ properties }) => {
    const { material } = properties
    if (rampsPerMaterial.find(obj => obj.id === material)) {
      const i = rampsPerMaterial.findIndex(o => o.id === material)
      rampsPerMaterial[i].value = rampsPerMaterial[i].value + 1
    } else {
      rampsPerMaterial.push({
        id: material,
        value: 1
      })
    }
    return null
  })
  return rampsPerMaterial
}

export const getRampsPerSize = (features: Feature[]): BarChartData => {
  const rampsPerSize = {
    small: 0,
    medium: 0,
    large: 0
  }

  features.map(({ properties }) => {
    const area = Math.round(properties.area_)

    if (area < RAMP_SIZE_CATEGORIES.small.max) {
      rampsPerSize.small = rampsPerSize.small + 1
    } else if (area < RAMP_SIZE_CATEGORIES.medium.max) {
      rampsPerSize.medium = rampsPerSize.medium + 1
    } else if (area < RAMP_SIZE_CATEGORIES.large.max) {
      rampsPerSize.large = rampsPerSize.large + 1
    }
  })

  return convertObjToChartData(rampsPerSize)
}
