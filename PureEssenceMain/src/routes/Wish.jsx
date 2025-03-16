import Wishlist from "../components/Wishlist";
import { useDispatch, useSelector } from "react-redux";
import { RiDeleteBin6Line } from "react-icons/ri";

const Wish = () => {
  const wishlistIds = useSelector((store) => store.wishlist);
  const items = useSelector((store) => store.items);
  return (
    <>
      <h5 className="container">My Wishlist {wishlistIds.length} items</h5>
      <div className="container" style={{ display: "flex" }}>
        {wishlistIds.map((id) => {
          const matchedItem = items.find((item) => item.id === id);
          return matchedItem ? <Wishlist item={matchedItem} key={id} /> : null;
        })}
      </div>
    </>
  );
};

export default Wish;
