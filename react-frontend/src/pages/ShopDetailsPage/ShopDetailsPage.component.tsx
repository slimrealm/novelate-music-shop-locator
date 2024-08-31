import { useEffect } from 'react';
import { AppDispatch, RootState, useAppDispatch } from '../../store/store';
import { useSelector } from 'react-redux';
import { fetchDetails } from './ShopDetailsPageSlice';
import { useParams } from 'react-router-dom';
import { ShopAddress, ShopDetails } from '../../types';
import { ShopDetailsPageContainer } from './ShopDetailsPage.styles';
import NovelatePage from '../../components/NovelatePage/NovelatePage.component';
import ShopDetailsContent from '../../components/ShopDetailsContent/ShopDetailsContent.component';

type ShopRouteParams = {
  novelateId: string;
};

export const pullDetailsData = (fetchedDetailsData: any): ShopDetails => {
  if (!fetchedDetailsData.response) {
    return {} as ShopDetails;
  }
  const response = fetchedDetailsData.response || {};
  console.log('WWW', response.matches[0]);
  // const { novelateId, wholeName, services, locations, photoUrl, starRatingAverage, starRatingCount, paymentOptions } = response;
  const { novelateId, wholeName, services, locations, photoUrl, starRatingAverage, starRatingCount, paymentOptions } = response.matches[0]; // TODO: REPLACE WITH LINE ABOVE
  console.log('strAvg', starRatingAverage);
  const shopDetails: ShopDetails = {
    novelateId: novelateId,
    name: wholeName,
    services: services,
    address: locations[0].address as ShopAddress,
    phoneNumber: locations[0].phone,
    photoUrl: photoUrl,
    starRatingAverage: starRatingAverage,
    starRatingCount: starRatingCount,
    paymentOptions: paymentOptions,
  };
  console.log('SD', shopDetails);
  return shopDetails;
};

const ShopDetailsPage: React.FC = () => {
  const { novelateId } = useParams<keyof ShopRouteParams>() as ShopRouteParams;

  const dispatch: AppDispatch = useAppDispatch();
  const fetchedDetailsData: any = useSelector((state: RootState) => state.shopDetails.fetchedDetailsData);
  useEffect(() => {
    dispatch(fetchDetails(novelateId)); //TODO: change implementation so can use same data
  }, [dispatch, novelateId]);

  const detailsLoading: boolean = useSelector((state: RootState) => state.shopDetails.isLoading);
  const detailsError: string | null = useSelector((state: RootState) => state.shopDetails.error);
  console.log('HERE');
  const shopDetails: ShopDetails = pullDetailsData(fetchedDetailsData || {});
  // console.log('shopdetails', shopDetails);
  if (detailsLoading) return <div>Loading...</div>;
  if (detailsError) return <div>Error: {detailsError}</div>;
  return (
    <ShopDetailsPageContainer>
      <NovelatePage title={shopDetails.name}>
        {shopDetails.name && <ShopDetailsContent {...shopDetails} />}
      </NovelatePage>
    </ShopDetailsPageContainer>
  );
};

export default ShopDetailsPage;
