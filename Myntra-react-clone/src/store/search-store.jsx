import { createContext, useReducer } from "react";

export const searchContext = createContext({
  searchVal: "",
  handleOnChange: () => {},
});

// Function for state management
function searchReducer(currSearch, action) {
  switch (action.type) {
    case "SET_SEARCH":
      return action.payload; // directly set the new search value
    default:
      return currSearch;
  }
}

function SearchContextProvider({ children }) {
  const [searchState, dispatchSearchItems] = useReducer(searchReducer, "");

  const handleOnChange = (value) => {
    const newSearchAction = {
      type: "SET_SEARCH",
      payload: value, // just pass the value directly
    };
    dispatchSearchItems(newSearchAction);
  };

  return (
    <searchContext.Provider
      value={{
        searchVal: searchState, // use searchState directly
        handleOnChange,
      }}
    >
      {children}
    </searchContext.Provider>
  );
}

export default SearchContextProvider;