import { cartReducer } from "@/features/cart/cart-slice";
import { userReducer } from "@/features/user/user-slice";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  version: 0.1,
  storage,
};

const reducers = combineReducers({
  user: userReducer,
  cart: cartReducer,
});

const persistReduceres = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistReduceres,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
