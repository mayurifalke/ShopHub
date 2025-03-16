import { configureStore} from "@reduxjs/toolkit";
import ItemSlice from "./ItemSlice";
import fetchSlice from "./fetchSlice";
import bagSlice from "./bagSlice";
import wishlistslice from "./wishlistSlice";
import searchSlice from "./searchSlice";



const puressenceStore = configureStore({reducer:{
  items : ItemSlice.reducer,
  fetchItemsStatus : fetchSlice.reducer,
  bag : bagSlice.reducer,
  wishlist  : wishlistslice.reducer,
  searchItems : searchSlice.reducer,
}})

export default puressenceStore;
