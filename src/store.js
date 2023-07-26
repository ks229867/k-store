import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "./slices/fetchBookSlice"
import searchReducer from "./slices/searchBookSlice"
import cartReducer from "./slices/cartSlice"

const store = configureStore({
    reducer:{
        book:bookReducer,
        search:searchReducer,
        cart:cartReducer
    }
})

export default store;