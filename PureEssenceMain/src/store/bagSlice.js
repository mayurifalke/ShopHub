//whenever you have to addSome data or remove always you can access data using id's thus for each items id is must
import {createSlice } from "@reduxjs/toolkit";

const bagSlice =  createSlice({
  name:'bag',
  initialState: [],          //array of item id's
  reducers:{
    addBag:(state,action)=>{   
      return [...state,action.payload]
    },
    removeBag:(state,action)=>{
      return state.filter(item => item != action.payload)
    }
  }
})


export const bagActions = bagSlice.actions;
export default bagSlice;