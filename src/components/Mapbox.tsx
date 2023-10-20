import Map, { MapGeoJSONFeature, Source } from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import { MapLayer } from './MapLayer'

const mapboxToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN

interface Props {
  data: MapGeoJSONFeature;
}

export const Mapbox = ({ data }: Props) => {

  return (
    <Map
      initialViewState={{
        longitude: 153.4220713376999,
        latitude: -28.06721373037145,
        zoom: 13,
        bearing: 0,
        pitch: 0
      }}
      mapStyle='mapbox://styles/mapbox/dark-v10'
      mapboxAccessToken={mapboxToken}
      attributionControl={false}
      minZoom={11}
    >
      <Source type='geojson' data={data}>
        <MapLayer type={'fill'} source={'mapSource'} />
        <MapLayer type={'circle'} source={'mapSource'} />
      </Source>
    </Map>
  )
}

export default Mapbox
