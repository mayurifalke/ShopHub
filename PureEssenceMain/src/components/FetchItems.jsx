import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchActions } from "../store/fetchSlice";
import { itemActions } from "../store/ItemSlice";

const FetchItems = () => {
  const fetchItemsStatus = useSelector((store) => store.fetchItemsStatus);
  // console.log(fetchItemsStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (fetchItemsStatus.fetchDone) return;
   
      const controller = new AbortController();
      const signal = controller.signal;

      dispatch(fetchActions.CurrentFetchStartStatus());
      //http://localhost:8080/items
      fetch("http://localhost:8080/items", { signal })
        .then((res) => res.json())
        .then(({ items }) => {
          console.log(items[0]);
          dispatch(fetchActions.FetchDoneStatus());
          dispatch(itemActions.addInitialItems(items[0]));
          dispatch(fetchActions.CurrentFetchEndStatus());
        });

      return () => {
        controller.abort();
      };
  }, [fetchItemsStatus]);

  return <div></div>;
};

export default FetchItems;
