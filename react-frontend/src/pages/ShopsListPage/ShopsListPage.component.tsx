import NovelatePage from '../../components/NovelatePage/NovelatePage.component';
import ShopsList from '../../components/ShopsList/ShopsList.component';
import { ShopsListPageContainer } from './ShopsListPage.styles';

const ShopsListPage: React.FC = () => {
  return (
    <ShopsListPageContainer>
      <NovelatePage title='Shops'>
        <ShopsList />
      </NovelatePage>
    </ShopsListPageContainer>
  );
};

export default ShopsListPage;
