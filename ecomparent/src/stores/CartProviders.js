// cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const data= window.localStorage.getItem("MY_CARTSTATE")
let cartS=0;
let totalamountS=0;
let cartIds= null;
let localItemData= [];

if(data !== null){
  let r= JSON.parse(data)
  const{cartSize, items, cartId, totalAmount}=r
  localItemData=items
  cartS=cartSize
  cartIds=cartId
  totalamountS= totalAmount
}
else if(data !== "undefined"){
  cartS=0;
  cartIds= null;
  localItemData= [];
  totalamountS =0
}
    

const cartSlice = createSlice({
  name: 'cart',
  initialState:{
    cartSize:cartS,
    cartId:cartIds,
    items:localItemData,
    totalAmount: totalamountS,
},
reducers: {
  addItem: (state, action) => {
    const item = action.payload;
    const existingItem = state.items.find((i) => i.id === item.id);

    if (existingItem) {
      existingItem.qty++;
      existingItem.totalAmount = existingItem.qty * existingItem.price;
    } else {
      state.items.push({ ...item, qty: 1, totalAmount: item.price });
    }

    state.cartSize = state.items.reduce((total, i) => total + i.qty, 0);
    state.totalAmount = state.items.reduce((total, i) => total + i.totalAmount, 0);

    window.localStorage.setItem("MY_CARTSTATE", JSON.stringify(state))
  },
  removeItem: (state, action) => {
    const itemId = action.payload.id;
    const itemIndex = state.items.findIndex((i) => i.id === itemId);

    if (itemIndex !== -1) {
      const item = state.items[itemIndex];

      if (item.qty === 1) {
        state.items.splice(itemIndex, 1);
      } else {
        item.qty--;
        item.totalAmount = item.qty * item.price;
      }

      state.cartSize = state.items.reduce((total, i) => total + i.qty, 0);
      state.totalAmount = state.items.reduce((total, i) => total + i.totalAmount, 0);

      window.localStorage.setItem("MY_CARTSTATE", JSON.stringify(state))

    }
  },
  totalRemoveItem: (state, action) => {
    const itemId = action.payload.id;
    const itemIndex = state.items.findIndex((i) => i.id === itemId);

    if (itemIndex !== -1) {
      const removedItem = state.items[itemIndex];
      state.cartSize -= removedItem.qty;
      state.items.splice(itemIndex, 1);
      state.totalAmount = state.items.reduce((total, i) => total + i.totalAmount, 0);
    }

    window.localStorage.setItem("MY_CARTSTATE", JSON.stringify(state))

  },
  resetCart: (state) => {
    state.cartSize = 0;
    state.cartId = null;
    state.items = [];
    state.totalAmount = 0;
  },
},
});


export const {
  addItem,
  removeItem,
  totalRemoveItem,
  resetCart,
} = cartSlice.actions;

export default cartSlice.reducer;
