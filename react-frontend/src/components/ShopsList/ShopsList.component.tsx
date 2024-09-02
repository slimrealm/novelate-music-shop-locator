import { Coords, ShopAddress, ShopSummary } from '../../types';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import ShopsListItem from '../ShopsListItem/ShopsListItem.component';
import { ShopsListContainer } from './ShopsList.styles';
import MapView from '../MapView/MapView.component';

const pullSummaryData = (fetchedData: any): ShopSummary[] => {
  const matches = fetchedData.response?.matches || [];

  const shopSummaries: ShopSummary[] = matches.map((match: any) => ({
    novelateId: match.novelateId,
    name: match.wholeName,
    services: match.services,
    address: match.locations[0].address as ShopAddress,
  }));

  return shopSummaries;
};

const ShopsList: React.FC = () => {
  const fetchedData: any = useSelector((state: RootState) => state.shopsList.fetchedData);
  const shopSummaries: ShopSummary[] = pullSummaryData(fetchedData);
  // const latitude = 29;
  // const longitude = -95;
  const coords: Coords = {
    latitude: 29,
    longitude: -95
  };

  return (
    <ShopsListContainer>
      {/* <MapView coords={coords} /> */}
      {shopSummaries.map((summaryObject: ShopSummary) => (
        <ShopsListItem key={summaryObject.novelateId} {...summaryObject} />
      ))}
    </ShopsListContainer>
  );
};

export default ShopsList;
