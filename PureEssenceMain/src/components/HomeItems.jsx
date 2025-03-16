import { useDispatch, useSelector } from "react-redux";
import { bagActions } from "../store/bagSlice";
import { MdDelete } from "react-icons/md";
import { IoMdAddCircleOutline } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { wishlistActions } from "../store/wishlistSlice";
import { FcLike } from "react-icons/fc";
import style from "./HomeItems.module.css"
import { Link, useNavigate } from "react-router-dom";
import ProductInfo from "./ProductInfo";

const HomeItems = ({ item }) => {
  const dispatch = useDispatch();
  const handleOnClickAdd = () => {
    dispatch(bagActions.addBag(item.id));
  };
  const handleOnClickRemove = () => {
    dispatch(bagActions.removeBag(item.id));
  };
  //to adds the products into carts/bag
  const bagItems = useSelector((store) => store.bag);
  const checkCondition = bagItems.indexOf(item.id) >= 0;

  //to adds the products into wishlist
  const wishlistIds = useSelector((store) => store.wishlist);
  const handleAddWishIds = () => {
    dispatch(wishlistActions.addWishItems(item.id));
  };
  const isPresent = wishlistIds.indexOf(item.id) >= 0;
 
  //to go on Product Info page
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/productinfo', { state: { itemId: item.id,itemname:item.item_name, itemImage: item.image, itemImage2: item.image2, itemImage3: item.image3, price:item.current_price } });
   
  };
  return (
    // <Link to="/productinfo">
    <div className={`item-container ${style.maincontainer}`} id="productImage" onClick={handleClick} >
      <img className="item-image " src={item.image} alt="item image" style={{height:250}}/>
       {/* <img src="../../public/images/1.jpg" alt="" />      */}
      {/* {console.log(item.image)} */}
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
    // </Link>
  );
};

export default HomeItems;
