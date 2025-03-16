import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { bagActions } from "../store/bagSlice";
import { MdDelete } from "react-icons/md";
import { IoMdAddCircleOutline } from "react-icons/io";
import { wishlistActions } from "../store/wishlistSlice";

const Wishlist = ({ item }) => {
  const dispatch = useDispatch();
  const bagItems = useSelector((store) => store.bag);
  const checkCondition = bagItems.indexOf(item.id) >= 0;
  const handleOnClickAdd = () => {
    dispatch(bagActions.addBag(item.id));
  };
  const handleOnClickRemove = () => {
    dispatch(bagActions.removeBag(item.id));
  };
  return (
    <>
      <div className="item-container itemContainer">
      <div
          className="removewish"
          onClick={() => {
            console.log(item.id);
            dispatch(wishlistActions.removeWishItems(item.id));
          }}
        >
          ×
        </div>
        <img className="item-image productimage" src={item.image} alt="item image" />
       
        <div className="rating">
          {item.rating.stars} ⭐ | {item.rating.count}
        </div>
        <div className="company-name">{item.company}</div>
        <div className="item-name">{item.item_name}</div>
        <div className="price">
          <span className="current-price">Rs {item.current_price}</span>
          <span className="original-price">Rs {item.original_price}</span>
          <span className="discount">({item.discount_percentage}% OFF)</span>
        </div>
        {checkCondition ? (
          <button
            type="button"
            class="btn-add-bag btn btn-danger"
            onClick={handleOnClickRemove}
          >
            <MdDelete />
            Remove from Bag
          </button>
        ) : (
          <button className="btn-add-bag" onClick={handleOnClickAdd}>
            <IoMdAddCircleOutline />
            Add to Bag
          </button>
        )}
      </div>
    </>
  );
};

export default Wishlist;
