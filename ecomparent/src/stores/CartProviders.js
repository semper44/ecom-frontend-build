// cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const data= window.localStorage.getItem("MY_CARTSTATE")
let cartS=0;
let cartIds= null;
let localItemData= [];

if(data !== null){
  let r= JSON.parse(data)
  const{cartSize, items, cartId}=r
  localItemData=items
  cartS=cartSize
  cartIds=cartId
}
else if(data !== "undefined"){
  cartS=0;
  cartIds= null;
  localItemData= [];
}
    

const cartSlice = createSlice({
  name: 'cart',
  initialState:{
    cartSize:cartS,
    cartId:cartIds,
    items:localItemData,
},
  reducers: {
    addItem: (state, action) => {
      const item = action.payload;
      const existingItem = state.items.find((i) => i.id === item.id);

      if (existingItem) {
        existingItem.qty++;
      } else {
        state.items.push({ ...item, qty: 1 });
      }

      state.cartSize = state.items.reduce((total, i) => total + i.qty, 0);
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
        }

        state.cartSize = state.items.reduce((total, i) => total + i.qty, 0);
      }
    },
    totalRemoveItem: (state, action) => {
      const itemId = action.payload.id;
      const itemIndex = state.items.findIndex((i) => i.id === itemId);

      if (itemIndex !== -1) {
        state.cartSize -= state.items[itemIndex].qty;
        state.items.splice(itemIndex, 1);
      }
    },
    resetCart: (state) => {
      state.cartSize = 0;
      state.cartId = null;
      state.items = [];
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
