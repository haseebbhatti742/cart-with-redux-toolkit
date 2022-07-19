import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "../home/homeSlice";
import cartReducer from "../cart/cartSlice";

export const store = configureStore({
  reducer: {
    home: homeReducer,
    cart: cartReducer,
  },
});
