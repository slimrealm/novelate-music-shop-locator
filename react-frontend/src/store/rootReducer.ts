import { combineReducers } from '@reduxjs/toolkit';
import shopsListReducer from '../pages/ShopsListPage/ShopsListPageSlice';
import shopDetailsReducer from '../pages/ShopDetailsPage/ShopDetailsPageSlice';

const rootReducer = combineReducers({
    shopsList: shopsListReducer,
    shopDetails: shopDetailsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;