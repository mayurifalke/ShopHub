import { useSelector } from "react-redux";
import "../App.css";
import FetchItems from "../components/FetchItems";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import Loading from "../components/Spinner";
import  { searchContext } from "../store/search-store";
import { useContext } from "react";
import SearchedItems from "./SearchedItems";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import ProductInfo from "../components/ProductInfo";
import Collections from "../components/Collections";

function App() {
  const fetchItemsStatus = useSelector((store) => store.fetchItemsStatus);
  const { searchVal } = useContext(searchContext);
  const searchItems = useSelector(store => store.searchItems)
  const navigate = useNavigate();

  // Navigate to '/searchitems' when searchVal is set
  useEffect(() => {
    if (searchVal && searchVal !== " ") {
      navigate("/searchitems");
    }
  }, [searchVal, navigate]);
  return (
    <>
        <Header />
        <FetchItems />
        {fetchItemsStatus.currentlyFetch ? <Loading /> : <Outlet />}
      
        <Footer />
    </>
  );
}

export default App;
