//whenever you have to addSome data or remove always you can access data using id's thus for each items id is must
import {createSlice } from "@reduxjs/toolkit";

const wishlistslice =  createSlice({
  name:'wishlist',
  initialState: [],          //array of item id's
  reducers:{
    addWishItems:(state,action)=>{   
      return [...state,action.payload]
    },
    removeWishItems:(state,action)=>{
      return state.filter(item => item != action.payload)
    }
  }
})


export const wishlistActions = wishlistslice.actions;
export default wishlistslice;