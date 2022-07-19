import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
  status: "idle",
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart: (state, action) => {
      const find = state.value.some((item) => item.id === action.payload.id);
      find
        ? console.log("Already Added")
        : state.value.push({
            ...action.payload,
            quantity: 1,
            subTotal: parseFloat(action.payload.price),
          });
    },

    deleteItem: (state, action) => {
      state.value = state.value.filter((item) => item.id !== action.payload);
    },

    updateQuantity: (state, action) => {
      const index = state.value.findIndex(
        (item) => item.id === action.payload.id
      );
      state.value[index].quantity = action.payload.quantity;
      state.value[index].subTotal =
        parseFloat(state.value[index].price) *
        parseInt(state.value[index].quantity);
    },
  },
});

export const { setCart, deleteItem, updateQuantity } = cartSlice.actions;

export const getCartItems = (state) => state.cart.value;

export const getCartTotal = (state) =>
  state.cart.value.reduce((acc, item) => acc + item.subTotal, 0).toFixed(2);

export default cartSlice.reducer;
