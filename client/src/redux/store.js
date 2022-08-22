import { configureStore, combineReducers } from "@reduxjs/toolkit";
import cartReducer from "./cartRedux";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

export default configureStore({
  reducer: {
    cart: cartReducer,
  },
});
