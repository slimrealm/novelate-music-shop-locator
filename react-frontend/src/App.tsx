import ShopsListPage from './pages/ShopsListPage/ShopsListPage.component';
import { GlobalStyle } from './global.styles';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { fetchShops } from './pages/ShopsListPage/ShopsListPageSlice';
import { RootState } from './store/store';
import { Routes, Route } from 'react-router-dom';
import { AppDispatch, useAppDispatch } from './store/store';
import ShopDetailsPage from './pages/ShopDetailsPage/ShopDetailsPage.component';
import MapPage from './components/MapPage/MapPage.component';

const App = () => {
  const dispatch: AppDispatch = useAppDispatch();
  const shopsLoading: boolean = useSelector((state: RootState) => state.shopsList.isLoading);
  const shopsError: string | null = useSelector((state: RootState) => state.shopsList.error);

  useEffect(() => {
    dispatch(fetchShops());
  }, [dispatch]);

  if (shopsLoading) return <div>Loading...</div>;
  if (shopsError) return <div>Error: {shopsError}</div>;

  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<ShopsListPage />} />
        <Route path='/:novelateId' element={<ShopDetailsPage />} />
        <Route path='/map/:novelateId' element={<MapPage />} />
      </Routes>
    </>
  );
}

export default App;
