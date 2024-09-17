import { createSlice } from "@reduxjs/toolkit";

const storeInLocalStorage = (data) => {
  localStorage.setItem("cart", JSON.stringify(data));
};

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    data: [],
    totalItems: 0,
    totalAmounts: 0,
    deliveryCharge: 10,
  },
  reducers: {
    addToCart(state, action) {
      const existingItem = state.data.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        const tempCart = state.data.map((item) => {
          if (item.id === action.payload.id) {
            let newQty = item.quantity + action.payload.quantity;
            let newTotalPrice = newQty * item.price;
            return {
              ...item,
              quantity: newQty,
              totalPrice: newTotalPrice,
            };
          } else {
            return item;
          }
        });
        state.data = tempCart;
        storeInLocalStorage(state.data);
      } else {
        state.data.push(action.payload);
        storeInLocalStorage(state.data);
      }
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const itemToUpdate = state.data.find((item) => item.id === id);

      if (itemToUpdate) {
        const validQuantity = Math.max(quantity || 1, 1);
        itemToUpdate.quantity = validQuantity;
        itemToUpdate.totalPrice = itemToUpdate.price * quantity;
      }
    },

    removeItem(state, action) {
      const tempCart = state.data.filter(
        (item) => item.id !== action.payload.id
      );
      state.data = tempCart;
      storeInLocalStorage(state.data);
    },
    getCartTotal(state) {
      state.totalAmounts = state.data.reduce((cartTotal, cartItem) => {
        return (cartTotal += cartItem.totalPrice);
      }, 0);
      state.totalItems = state.data.length;
    },
  },
});

export const { addToCart, removeItem, getCartTotal, updateQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
