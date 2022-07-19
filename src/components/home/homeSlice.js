import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getItems = createAsyncThunk("home/fetchItems", async () => {
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((res) => {
      console.log("res: " + res);
      return res;
    });
});

const initialState = {
  value: [],
  status: "idle",
};

export const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setItems } = homeSlice.actions;

export const selectItems = (state) => {
  return state.home.value;
};

export default homeSlice.reducer;
