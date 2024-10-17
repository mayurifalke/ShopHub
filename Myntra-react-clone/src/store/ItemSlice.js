import {createSlice } from "@reduxjs/toolkit";



const ItemSlice =  createSlice({
  name:'items',
  initialState: [],
  reducers:{
    addInitialItems:(state,action)=>{   //action.payload contains the data 
      return action.payload //here we are setting value of current state as new action data
    }
  }
})


export const itemActions = ItemSlice.actions;
export default ItemSlice;