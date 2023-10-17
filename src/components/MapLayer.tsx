import { Layer } from 'react-map-gl'

interface LayerProps {
  source: string
}

const colour = 'rgba(31, 181, 235, 0.85)'

const CirleLayer = ({ source }: LayerProps) => {
  return (
    <Layer
      type={'circle'}
      id={`${source}-circle`}
      source={source}
      paint={{
        'circle-radius': 3,
        'circle-stroke-color': '#000',
        'circle-stroke-width': 1,
        // The feature-state dependent circle-color expression will render
        // the color according to its magnitude when
        // a feature's hover state is set to true
        'circle-color': colour
      }}
    />
  )
}

const FillLayer = ({ source }: LayerProps) => {
  return (
    <Layer
      type={'fill'}
      id={`${source}-fill`}
      source={source}
      paint={{
        'fill-color': colour
      }}
    />
  )
}

interface Props {
  type: 'circle' | 'fill'
  source: string
}

export const MapLayer = ({ type, source }: Props) => {
  return type === 'circle' ? (
    <CirleLayer source={source} />
  ) : (
    <FillLayer source={source} />
  )
}
