import { APIProvider, Map, MapCameraChangedEvent, Marker } from '@vis.gl/react-google-maps';
import { MapViewContainer } from './MapView.styles';
import { Coords } from '../../types';

interface MapViewProps {
    coords: Coords,
    width: number,
    height: number
}

const MapView: React.FC<MapViewProps> = ({ coords, width, height }) => {
    const MAPS_API_KEY = import.meta.env.VITE_MAPS_API_KEY;
    const position: google.maps.LatLngLiteral = {
        lat: coords.latitude,
        lng: coords.longitude
    };
    // const position = positionRaw.toLatLngLiteral();
    return (
        <APIProvider apiKey={MAPS_API_KEY || ''}>
            <MapViewContainer $width={width || 100} $height={height || 100}>
                {/* <Map center={position} zoom={10} gestureHandling={'cooperative'}>
                    <Marker position={position} />
                </Map> */}
                <Map
                    defaultZoom={10}
                    defaultCenter={position}
                // onCameraChanged={(ev: MapCameraChangedEvent) =>
                //     console.log('camera changed:', ev.detail.center, 'zoom:', ev.detail.zoom)
                // }
                >
                    <Marker position={position} />
                </Map>
            </MapViewContainer>
        </APIProvider>
    );
}

export default MapView;