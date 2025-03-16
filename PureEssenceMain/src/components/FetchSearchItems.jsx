import { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchActions } from "../store/fetchSlice";
import { itemActions } from "../store/ItemSlice";
import { searchActions } from "../store/searchSlice";
import { searchContext } from "../store/search-store";

const FetchSearchItems = () => {
  const {searchVal} = useContext(searchContext)
  // console.log("search ",searchVal)
  const dispatch = useDispatch();

  useEffect(() => {
    if (searchVal === "") return;

    const controller = new AbortController();
    const signal = controller.signal;

    fetch("http://localhost:8080/items", { signal })
      .then((res) => res.json())
      .then((json) => {
        // Access the first element of the nested array structure
        const itemsArray = json.items[0];
        console.log(itemsArray)
      
        if (Array.isArray(itemsArray)) {
          const result = itemsArray.filter(
            (item) => searchVal && item.item_name.includes(searchVal)
          );
          dispatch(searchActions.addSearchItems(result));
        } else {
          console.error(
            "The 'items' property is not in the expected format:",json.items);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });

    return () => {
      controller.abort();
    };
  }, [searchVal]);

  return <div>
   
  </div>;
};

export default FetchSearchItems;
