import { configureStore } from "@reduxjs/toolkit";
// import your slice 
import bannerSlice from "./bannerSlice";
import productSlice from './productSlice';
import categorySlice from "./categorySlice";
import cartSlice from "./cartSlice";
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'

const productpersistConfig = {
  key: 'product',
  storage,
}
const bannerPersistConfig = {
    key: 'banner',
    storage,
  }
  const cartPersistConfig = {
    key: 'cart',
    storage,
  }
  const categoryPersistConfig = {
    key: 'category',
    storage,
  }

const persistedProudctReducer = persistReducer(productpersistConfig, productSlice)
const persistedBannerReducer = persistReducer(bannerPersistConfig, bannerSlice)
const persistCartReducer = persistReducer(cartPersistConfig, cartSlice)
const persistedCategoryReducer = persistReducer(categoryPersistConfig, categorySlice)

export const store=configureStore({
    reducer:
    {
        banners:persistedBannerReducer,
        products:persistedProudctReducer,
        categories:persistedCategoryReducer,
        cart:cartSlice,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
})
export const persistor = persistStore(store)


