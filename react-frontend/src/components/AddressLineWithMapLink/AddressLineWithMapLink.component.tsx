import { Link } from "react-router-dom";
import { ShopListSmallLine } from "../ShopsListItem/ShopsListItem.styles";

interface AddressLineWithMapLinkProps {
    novelateId: string;
    addressLine: string;
}

const AddressLineWithMapLink: React.FC<AddressLineWithMapLinkProps> = ({ novelateId, addressLine }) => {

    return (
        <>
            <ShopListSmallLine>{addressLine}</ShopListSmallLine>
            <Link to={`/map/${novelateId}`}>
                <ShopListSmallLine>{'View Map'}</ShopListSmallLine>
            </Link >
        </>
    )
}

export default AddressLineWithMapLink;