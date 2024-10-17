import { useSelector } from "react-redux";

const BagSummary = () => {
  const bagItemsIds = useSelector((store) => store.bag);
  const items = useSelector((store) => store.items);

  const totalItem = bagItemsIds.length;
  let totalMRP = 0;
  let totalDiscount = 0;
  let finalPayment = 0;
  let convenienceFee = 99;
  console.log(items);

  // Calculate totalMRP outside of JSX
  bagItemsIds.forEach((id) => {
    items.forEach((item) => {
      if (id === item.id) {
        totalMRP += item.original_price;
        totalDiscount += (item.original_price - item.current_price);
      }
    });
  });

   finalPayment = totalMRP - totalDiscount + convenienceFee;

  return (
    <div className="bag-summary bagitems">
      <div className="bag-details-container">
        <div className="price-header">PRICE DETAILS ({totalItem} Items) </div>
        <div className="price-item">
          <span className="price-item-tag">Total MRP</span>
          <span className="price-item-value">₹{totalMRP}</span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Discount on MRP</span>
          <span className="price-item-value priceDetail-base-discount">
            ₹{totalDiscount}
          </span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Convenience Fee</span>
          <span className="price-item-value">₹{convenienceFee}</span>
        </div>
        <hr />
        <div className="price-footer">
          <span className="price-item-tag">Total Amount</span>
          <span className="price-item-value">₹{finalPayment}</span>
        </div>
      </div>
      <button className="btn-place-order">
        <div className="css-xjhrni">PLACE ORDER</div>
      </button>
    </div>
  );
};

export default BagSummary;
