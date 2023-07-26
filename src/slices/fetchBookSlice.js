import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchBestSellerBook = createAsyncThunk('list/bestseller', async(listName)=>{
    const { data } = await axios.get(`https://api.nytimes.com/svc/books/v3/lists/current/${listName}.json?api-key=${process.env.REACT_APP_NEW_YORK_TIMES_API_KEY}`)
    
    return data.results.books;
})

const initialState = {
    data:[],
    isLoading:false,
    isError:false
}
 const bookSlice = createSlice({
    name:'book',
    initialState,
    extraReducers: (builder) =>{
        builder.addCase(fetchBestSellerBook.pending, (state,action) =>{
            state.isLoading = true;
        })
        builder.addCase(fetchBestSellerBook.fulfilled,(state,action) =>{
            state.isLoading = false;
            state.data = action.payload
        })
        builder.addCase(fetchBestSellerBook.rejected,(state,action) =>{
            state.isError = true;
            
        })
    }
})

export default bookSlice.reducer

