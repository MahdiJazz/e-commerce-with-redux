import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"

export let fetchproducts  = createAsyncThunk(
    "products/fetchProducts",
    ()=>{
        return fetch("https://fakestoreapi.com/products")
                    .then((response) => response.json())
                    .catch((error) => {
                        throw error
                    })
    }
)

const productSlice =createSlice({

    name:'product',

    initialState:{
        data:[],
        status:"",
    },

    reducers:{},

    extraReducers: (builder)=>{
        builder
            .addCase(fetchproducts.pending, (state)=>{
                state.status = "LOADING"
            })
            .addCase(fetchproducts.fulfilled, (state,action)=>{
                state.status = "SUCCESS"
                state.data = action.payload
            })
            .addCase(fetchproducts.rejected, (state)=>{
                state.status = "error"
            })
    }
})

export default productSlice