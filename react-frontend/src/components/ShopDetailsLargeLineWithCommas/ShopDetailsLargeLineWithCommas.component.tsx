import { ShopDetailsLargeLine } from '../ShopDetailsContent/ShopDetailsContent.styles';

interface SmallLineWithCommasProps {
  string: string;
  needsComma: boolean;
}

const ShopDetailsLargeLineWithCommas: React.FC<SmallLineWithCommasProps> = ({ string, needsComma }) => {
  if (needsComma) {
    return <ShopDetailsLargeLine $weight='600'>{string}, </ShopDetailsLargeLine>;
  } else {
    return <ShopDetailsLargeLine $weight='600'>{string}</ShopDetailsLargeLine>;
  }
};

export default ShopDetailsLargeLineWithCommas;
<ShopDetailsLargeLine $weight={'600'}>PaymentOptions Accepted:</ShopDetailsLargeLine>;
