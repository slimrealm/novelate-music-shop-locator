import {
  ShopDetailsLargeLine,
  ShopDetailsSmallLine,
} from '../ShopDetailsContent/ShopDetailsContent.styles';
import ShopListSmallLineWithCommas from '../ShopListSmallLineWithCommas/ShopListSmallLineWithCommas.component';
import { PaymentOptionLine, PaymentOptionsListWrapper, PaymentOptionsSectionContainer } from './PaymentOptionsSection.styles';

interface PaymentOptionsSectionProps {
  paymentOptions: string[];
}

const PaymentOptionsSection: React.FC<PaymentOptionsSectionProps> = ({ paymentOptions }) => {
  return (
    <PaymentOptionsSectionContainer>
      <ShopDetailsLargeLine $weight={'600'}>PaymentOptions Accepted:</ShopDetailsLargeLine>
      <PaymentOptionsListWrapper>
        {paymentOptions.map((paymentOptionString: string, index) => (
          <ShopListSmallLineWithCommas
            key={index}
            string={paymentOptionString}
            needsComma={index < paymentOptions.length - 1}
          />
        ))}
      </PaymentOptionsListWrapper>
    </PaymentOptionsSectionContainer>
  );
};

export default PaymentOptionsSection;
