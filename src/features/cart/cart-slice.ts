import { RootState } from "@/store/store";
import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PizzaCart } from "./../../../types/types";

export interface CartSlice {
  cart: PizzaCart[];
}

const initialState: CartSlice = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    /**
     * add pizza
     * @param pizza
     * @param action
     * @payload pizza obj
     */
    addItem(state: CartSlice, action: PayloadAction<PizzaCart>) {
      state.cart.push(action.payload);
    },
    /**
     * delete item
     * @param id
     * @param action
     */
    deleteItem(state: CartSlice, action: PayloadAction<number>) {
      state.cart = state.cart.filter(
        (pizza) => pizza.pizzaId !== action.payload
      );
    },
    /**
     * increase quantity
     * @parm PizzaCart
     * @param action
     */
    increaseItemQuantity(state: CartSlice, action: PayloadAction<number>) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      if (item) {
        item.quantity++;
        item.totalPrice = item.unitPrice * item.quantity;
      }
    },
    /**
     * decrease quantity
     * @param id
     * @param action
     */
    decreaseItemQuantity(state: CartSlice, action: PayloadAction<number>) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      if (item) {
        item.quantity--;
        item.totalPrice = item.unitPrice * item.quantity;
        // remove
        if (item.quantity === 0) {
          cartSlice.caseReducers.deleteItem(state, action);
        }
      }
    },
    clearCart(state: CartSlice) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  clearCart,
  decreaseItemQuantity,
  increaseItemQuantity,
  deleteItem,
} = cartSlice.actions;
export const cartReducer = cartSlice.reducer;

// export const getCartItemsTotal = (state: RootState) =>
//   state.cart.cart.reduce((acc, curr) => acc + curr.totalPrice, 0);

// export const getAlreadyExistsinCart = function (id: number) {
//   return (state: RootState) =>
//     state.cart.cart.find((pizza) => pizza.pizzaId === id);
// };

// export const getCartItemQuantity = (state: RootState) =>
//   state.cart.cart.reduce((acc, curr) => acc + curr.quantity, 0);

// optimized by reselect

const items = (state: RootState) => state.cart.cart;

export const getCartItems = createSelector([items], (items) => items);

export const getCartItemQuantity = createSelector([items], (items) =>
  items.reduce((acc, curr) => acc + curr.quantity, 0)
);

export const getCartTotal = createSelector([items], (items) =>
  items.reduce((acc, curr) => acc + curr.totalPrice, 0)
);

export const getAlreadyinCart = createSelector(
  [items, (_, id: number) => id],
  (items, id) => items.find((pizza) => pizza.pizzaId === id)
);
