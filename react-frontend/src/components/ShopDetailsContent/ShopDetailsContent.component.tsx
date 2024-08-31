import { Coords, ShopAddress } from '../../types';
import {
  ShopDetailsBottomSection,
  ShopDetailsLeftSection,
  ShopDetailsMainSection,
  ShopDetailsRightSection,
  ShopDetailsContentContainer,
  ShopDetailsSmallLine,
  ShopDetailsLargeLine,
  ShopImageWrapper,
} from './ShopDetailsContent.styles';
import { StyledImage } from '../../common/styled-components/StyledImage.styles';
import fallbackImage from '../../images/hybrid.jpeg'; //TODO: ALL IMAGES -- make music person instead of doc -- shrink and make png
import PaymentOptionsSection from '../PaymentOptionsSection/PaymentOptionsSection.component';
import ReviewsInfo from '../ReviewsInfo/ReviewsInfo.component';
import ShopDetailsLargeLineWithCommas from '../ShopDetailsLargeLineWithCommas/ShopDetailsLargeLineWithCommas.component';
import MapSection from '../MapSection/MapSection.component';

interface ShopDetailsContentProps {
  novelateId: string;
  name: string;
  services: string[];
  address: ShopAddress;
  phoneNumber: string;
  photoUrl: string;
  starRatingAverage: number;
  starRatingCount: number;
  paymentOptions: string[];
}

const ShopDetailsContent: React.FC<ShopDetailsContentProps> = ({ ...detailsObject }) => {
  const { services, address, phoneNumber, photoUrl, starRatingAverage, starRatingCount, paymentOptions } = detailsObject;

  const handleImageError = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
    event.currentTarget.src = fallbackImage; // Set fallback image on error
  };

  const reviewsString = `${starRatingAverage.toFixed(1).toString()} (${starRatingCount} Reviews)`;
  const coords: Coords = {
    latitude: address.latitude || -999,
    longitude: address.longitude || -999
  };

  return (
    <ShopDetailsContentContainer>
      <ShopDetailsMainSection>
        <ShopDetailsLeftSection>
          <ShopImageWrapper>
            <StyledImage src={photoUrl} alt='Shop Image' onError={handleImageError} />
          </ShopImageWrapper>
          <ReviewsInfo reviewsString={reviewsString} />
        </ShopDetailsLeftSection>
        <ShopDetailsRightSection>
          {services.map((serviceString: string, index) => (
            <ShopDetailsLargeLineWithCommas
              key={index}
              string={serviceString}
              needsComma={index < services.length - 1}
            />
          ))}
          <ShopDetailsSmallLine $weight='600' $marginTop='10px'>
            {address.line1}
          </ShopDetailsSmallLine>
          {address.line2 && <ShopDetailsSmallLine $weight='600'>{address.line2}</ShopDetailsSmallLine>}
          <ShopDetailsSmallLine $marginTop='10px'>{phoneNumber}</ShopDetailsSmallLine>
          {/*TODO: MAP BACK IN make new proj, get new api key */ /* {address.latitude && address.longitude && <MapSection coords={coords} />} */}
        </ShopDetailsRightSection>
      </ShopDetailsMainSection>
      {paymentOptions.length ? (
        <ShopDetailsBottomSection>
          {/*TODO: MAP BACK IN make new proj, get new api key */ /* {address.latitude && address.longitude && <MapSection coords={coords} />} */}
          <PaymentOptionsSection paymentOptions={paymentOptions} />
          {/* .....{address.latitude}
            .....{address.longitude} */}
        </ShopDetailsBottomSection>
      ) : null}
    </ShopDetailsContentContainer>
  );
};

export default ShopDetailsContent;
