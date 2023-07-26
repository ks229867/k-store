import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSearchedBook = createAsyncThunk('search', async(bookName)=>{
    
    const { data } = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${bookName}&key=${process.env.REACT_APP_GOOGLE_API_KEY}`)
    
    return data.items;
})

const initialState = {
    data:[],
    isLoading:false,
    isError:false
}
 const searchBookSlice = createSlice({
    name:'search',
    initialState,
    extraReducers: (builder) =>{
        builder.addCase(fetchSearchedBook.pending, (state,action) =>{
            state.isLoading = true;
        })
        builder.addCase(fetchSearchedBook.fulfilled,(state,action) =>{
            state.isLoading = false;
            state.data = action.payload
        })
        builder.addCase(fetchSearchedBook.rejected,(state,action) =>{
            state.isError = true;
            
        })
    }
})

export default searchBookSlice.reducer

