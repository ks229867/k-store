import { createSlice } from "@reduxjs/toolkit"
const initialState = []

const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCart : (state,action) => {
            const itemIndex = state.findIndex((item) => item.id === action.payload.id)
            if(itemIndex >= 0){
                state[itemIndex].quantity += 1
            }else{
                const temp = {...action.payload,quantity:1}
                state.push(temp)
                
            }
            
        },
        removeFromCart: (state,action) =>{
            return state.filter((item) => item.id !== action.payload)
        },

        quantutyDecrement: (state,action) =>{
            const itemIndex_dec = state.findIndex((item) => item.id === action.payload.id)
            if(state[itemIndex_dec].quantity > 1){
                state[itemIndex_dec].quantity -= 1
            }else if (state[itemIndex_dec].quantity === 1) {
                return state.filter((item) => item.id !== action.payload.id)
            }
        }
    }
})

export const { addToCart , removeFromCart, quantutyDecrement } = cartSlice.actions

export default cartSlice.reducer

