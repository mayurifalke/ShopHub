import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./routes/App.jsx";
import Bag from "./routes/Bag.jsx";
import Home from "./routes/Home.jsx";
import { Provider } from "react-redux";
import myntraStore from "./store/index.js";
import "bootstrap/dist/css/bootstrap.min.css";
import Wish from "./routes/Wish.jsx";
import SearchedItems from "./routes/SearchedItems.jsx";
import SearchContextProvider from "./store/search-store.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/bag", element: <Bag /> },
      { path: "/wishlist", element: <Wish /> },
      { path: "/searchitems", element: <SearchedItems /> },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={myntraStore}>
      <SearchContextProvider>
        {/* Wrap App in SearchContextProvider */}
        <RouterProvider router={router} />
      </SearchContextProvider>
    </Provider>
  </StrictMode>
);
