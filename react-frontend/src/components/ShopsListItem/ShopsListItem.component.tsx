import { ShopAddress } from '../../types';
import {
  ShopListSmallLine,
  ShopListLargeLine,
  ShopsListItemContainer,
  LinkContainer,
  ShopListTextContent,
} from './ShopsListItem.styles';
import { Link } from 'react-router-dom';
import ShopListSmallLineWithCommas from '../ShopListSmallLineWithCommas/ShopListSmallLineWithCommas.component';
import AddressLineWithMapLink from '../AddressLineWithMapLink/AddressLineWithMapLink.component';

interface ShopsListItemProps {
  novelateId: string;
  name: string;
  services: string[];
  address: ShopAddress;
}

const ShopsListItem: React.FC<ShopsListItemProps> = ({ ...summaryObject }) => {
  const { novelateId, name, services, address } = summaryObject;
  return (
    <ShopsListItemContainer>
      <Link to={`/${novelateId}`}>
        <LinkContainer>
          <ShopListTextContent>
            <ShopListLargeLine>{name}</ShopListLargeLine>
            {services.map((serviceString: string, index) => (
              <ShopListSmallLineWithCommas
                key={index}
                string={serviceString}
                needsComma={index < services.length - 1}
              />
            ))}
            <ShopListSmallLine>{address.line1}</ShopListSmallLine>
            {address.line2 && <ShopListSmallLine>{address.line2}</ShopListSmallLine>}
          </ShopListTextContent>
        </LinkContainer>
      </Link>
    </ShopsListItemContainer>
  );
};

export default ShopsListItem;
