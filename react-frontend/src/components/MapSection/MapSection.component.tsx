import { Coords } from "../../types";
import MapView from "../MapView/MapView.component";
import { ShopDetailsSmallLine } from "../ShopDetailsContent/ShopDetailsContent.styles";
import { MapSectionInnerContainer, MapSectionOuterContainer, MapSectionLeft, MapSectionRight } from "./MapSection.styles";

interface MapSectionProps {
    coords: Coords
}

const MapSection: React.FC<MapSectionProps> = ({ coords }) => {
    return (
        <MapSectionOuterContainer>
            <MapSectionInnerContainer>
                <MapSectionLeft>
                    <ShopDetailsSmallLine>Click</ShopDetailsSmallLine>
                    <ShopDetailsSmallLine>Box To</ShopDetailsSmallLine>
                    <ShopDetailsSmallLine>Expand</ShopDetailsSmallLine>
                    <ShopDetailsSmallLine>Map</ShopDetailsSmallLine>
                </MapSectionLeft>
                <MapSectionRight>
                    <MapView coords={coords} width={75} height={75} />
                </MapSectionRight>
            </MapSectionInnerContainer>
        </MapSectionOuterContainer>
    )
}

export default MapSection