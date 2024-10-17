import { useDispatch, useSelector } from "react-redux";
import { bagActions } from "../store/bagSlice";
import { MdDelete } from "react-icons/md";
import { IoMdAddCircleOutline } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { wishlistActions } from "../store/wishlistSlice";
import { FcLike } from "react-icons/fc";

const HomeItems = ({ item }) => {
  const dispatch = useDispatch();
  const handleOnClickAdd = () => {
    dispatch(bagActions.addBag(item.id));
  };
  const handleOnClickRemove = () => {
    dispatch(bagActions.removeBag(item.id));
  };
  const bagItems = useSelector((store) => store.bag);
  const checkCondition = bagItems.indexOf(item.id) >= 0;

  const wishlistIds = useSelector((store) => store.wishlist);
  const handleAddWishIds = () => {
    dispatch(wishlistActions.addWishItems(item.id));
  };
  const isPresent = wishlistIds.indexOf(item.id) >= 0;
  return (
    <div className="item-container" id="productImage">
      <img className="item-image " src={item.image} alt="item image" style={{height:250}}/>
      <div className="content">
        <center>
          {isPresent ? (
            <button className="wbtn">
              <FcLike />
              WISHLISTED
            </button>
          ) : (
            <button onClick={handleAddWishIds} className="wbtn">
              <CiHeart />
              WISHLIST
            </button>
          )}
        </center>
      </div>
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
  );
};

export default HomeItems;
