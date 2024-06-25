import { configureStore } from '@reduxjs/toolkit';
import ShopApp from '../reducers/index'
const store =  configureStore({
    reducer: ShopApp
  });
export default store;