import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./ProductSlice";
import cartSlice from "./Cartslice";

const store = configureStore({
    reducer:{
        cart:cartSlice.reducer,
        product:productSlice.reducer,
    }
})

export default store;