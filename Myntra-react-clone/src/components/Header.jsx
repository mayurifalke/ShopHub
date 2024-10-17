import { IoPerson, IoBag } from "react-icons/io5";
import { FaGrinHearts } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import style from "./Header.module.css";
import { useContext, useRef, useState } from "react";
import FetchSearchItems from "./FetchSearchItems";
import { searchContext } from "../store/search-store";

const Header = () => {
  const bag = useSelector((store) => store.bag);
  const inputsearchVal = useRef();
  const inputsearchVal2 = useRef();
  const obj = useContext(searchContext);
  console.log(obj.searchVal);
  const handleSearch = (event) => {
    const value = inputsearchVal.current.value;
    obj.handleOnChange(value); // Perform the search
    if (event.key === "Enter") {
      inputsearchVal.current.value = "";
    }
  };
  const handleSearch2 = (event) => {
    const value = inputsearchVal2.current.value;
    obj.handleOnChange(value); // Perform the search
    if (event.key === "Enter") {
      inputsearchVal2.current.value = "";
    }
  };
  return (
    <>
      {obj.searchVal ? <FetchSearchItems /> : null}

      <div>
        <header style={{ height: "auto" }}>
          <div className="logo_container">
            <Link to="/">
              <img
                className="myntra_home"
                src="images/myntra_logo.webp"
                alt="Myntra Home"
              />
            </Link>
          </div>
          <nav className={`nav_bar ${style.nav}`}>
            <a href="#">men</a>
            <a href="#">Women</a>
            <a href="#">Kids</a>
            <a href="#">Home & Living</a>
            <a href="#">Beauty</a>
            <a href="#">
              Studio <sup>New</sup>
            </a>
          </nav>
          <div className={`search_bar${style.searchbar}`}>
            <span
              className={`material-symbols-outlined search_icon  ${style.searchicon}`}
            >
              search
            </span>
            <input
              onKeyDown={handleSearch}
              ref={inputsearchVal}
              className={`search_input ${style.searchinput}`}
              placeholder="Search for products, brands and more"
            />
          </div>
          <div className="action_bar">
            <div className="action_container">
              <span className="material-symbols-outlined action_icon">
                <IoPerson />
              </span>
              <span className="action_name">Profile</span>
            </div>

            <Link className="action_container" to="/wishlist">
              <div className="action_container">
                <span className="material-symbols-outlined action_icon">
                  <FaGrinHearts />
                </span>
                <span className="action_name">Wishlist</span>
              </div>
            </Link>

            <Link className="action_container" to="/bag">
              <span className="material-symbols-outlined action_icon">
                <IoBag />
              </span>
              <span className="action_name">Bag</span>
              <span className="bag-item-count">{bag.length}</span>
            </Link>
          </div>
        </header>

        <div className={`search_bar${style.searchbar} ${style.search}`}>
          <span
            className={`material-symbols-outlined search_icon  ${style.searchicon}`}
          >
            search
          </span>

          <input
            onKeyDown={handleSearch2}
            ref={inputsearchVal2}
            className={`search_input ${style.search}`}
            placeholder="Search for products, brands and more"
          />
        </div>
      </div>
    </>
  );
};

export default Header;
