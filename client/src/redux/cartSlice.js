import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartlists: [],
  quantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    AddCard: (state, action) => {
      const find = state.cartlists.findIndex(
        (item) => item._id === action.payload._id
      );

      if (find >= 0) state.cartlists[find].quantity += 1;
      else {
        const tempvar = { ...action.payload, quantity: 1 };

        state.cartlists.push(tempvar);
      }
      localStorage.setItem("cartList", JSON.stringify(state.cartlists));
    },
    DeleteCart: (state, action) => {
      const itemDelete = state.cartlists.filter(
        (item) => item._id !== action.payload._id
      );
      state.cartlists = itemDelete;

      const itemCart = JSON.parse(localStorage.getItem("cartList"));
      var indexDelete = action.payload._id;
      itemCart.splice(indexDelete, 1);

      localStorage.setItem("cartList", JSON.stringify(itemCart));
    },
    IncreaseCart: (state, action) => {
      const itemCart = JSON.parse(localStorage.getItem("cartList"));
      const indexItem = itemCart.findIndex(
        (item) => item._id === action.payload._id
      );
      if (itemCart[indexItem].quantity >= 1) itemCart[indexItem].quantity += 1;
      localStorage.setItem("cartList", JSON.stringify(itemCart));
      state.cartlists = [...state.cartlists, itemCart[indexItem]];
    },
    DecreaseCart: (state, action) => {
      const itemCart = JSON.parse(localStorage.getItem("cartList"));
      const indexItem = itemCart.findIndex(
        (item) => item._id === action.payload._id
      );
      if (itemCart[indexItem].quantity > 1) itemCart[indexItem].quantity -= 1;
      else itemCart.splice(indexItem, 1);
      localStorage.setItem("cartList", JSON.stringify(itemCart));
      state.cartlists = [...state.cartlists, itemCart[indexItem]];
    },
  },
});

export const { AddCard, DeleteCart, DecreaseCart, IncreaseCart } =
  cartSlice.actions;

export default cartSlice.reducer;
