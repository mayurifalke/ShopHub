import React from "react";
import { useSelector } from "react-redux";
import SearchResultItems from "../components/SearchResultItems";

const SearchedItems = () => {
  const searchItems = useSelector((store) => store.searchItems);
  return (
    <div className="container">
      {searchItems.length != 0 ?searchItems.map((item) => (
        <SearchResultItems item = {item}/>
      )) : <h1>This Products Not Present!! Thanks for Shopping</h1>}
    </div>
    
  );
};

export default SearchedItems;
