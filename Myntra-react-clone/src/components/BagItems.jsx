import { useSelector,useDispatch} from "react-redux";
import { bagActions } from "../store/bagSlice";
import { RiDeleteBin6Line } from "react-icons/ri";

const BagItems = () => {
  const bag = useSelector((store) => store.bag);
  const items = useSelector((store) => store.items);
  const dispatch = useDispatch();
  

  return (
    <>
      {bag.map((id) =>
        items.map(
          (item) =>
            item.id === id && (
              <div className="bag-item-container" key={item.id}>
                <div className="item-left-part">
                  <img
                    className="bag-item-img"
                    src={item.image}
                    alt={item.item_name}
                  />
                </div>
                <div className="item-right-part">
                  <div className="company">{item.company}</div>
                  <div className="item-name">{item.item_name}</div>
                  <div className="price-container">
                    <span className="current-price">
                      Rs {item.current_price}
                    </span>
                    <span className="original-price">
                      Rs {item.original_price}
                    </span>
                    <span className="discount-percentage">
                      ({item.discount_percentage}% OFF)
                    </span>
                  </div>
                  <div className="return-period">
                    <span className="return-period-days">
                      {item.return_period} days
                    </span>{" "}
                    return available
                  </div>
                  <div className="delivery-details">
                    Delivery by{" "}
                    <span className="delivery-details-days">
                      {item.delivery_date}
                    </span>
                  </div>
                </div>
                <div
                  className="remove-from-cart"
                  onClick={()=>{
                    console.log(item.id)
                    dispatch(bagActions.removeBag(item.id));
                  }}>
                  <RiDeleteBin6Line />
                </div>
              </div>
            )
        )
      )}
    </>
  );
};

export default BagItems;
