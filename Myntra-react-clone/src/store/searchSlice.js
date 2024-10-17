//whenever you have to addSome data or remove always you can access data using id's thus for each items id is must
import {createSlice } from "@reduxjs/toolkit";

const searchSlice =  createSlice({
  name:'searchItems',
  initialState: [],         
  reducers:{
    addSearchItems:(state,action)=>{    
       console.log("value is ",action.payload)
      return action.payload //here we are setting value of current state as new action data
    }
  }
})


export const searchActions = searchSlice.actions;
export default searchSlice;