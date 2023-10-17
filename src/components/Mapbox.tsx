
import Map from 'react-map-gl';
import { useAppSelector } from '../hooks';

const mapboxToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

export const Mapbox = () => {

  const ramp = useAppSelector(state => state.ramps);

  console.log('r', ramp);

  return (
    <Map
      initialViewState={{
        longitude: 153.4220713376999,
        latitude: -28.06721373037145,
        zoom: 13,
        bearing: 0,
        pitch: 0
      }}
      mapStyle="mapbox://styles/mapbox/dark-v10"
      mapboxAccessToken={mapboxToken}
      attributionControl={false}
    />
  );
}

export default Mapbox;