import BagItems from "../components/BagItems"
import BagSummary from "../components/BagSummary"
import style from "./Bag.module.css"
const Bag = () => {
  return (
    <>
    <main>
      <div className={`bag-page ${style.bagpage}`}>
        <div className={`bag-items-container ${style.bagitems}`}>
          <BagItems/>
        </div>
        <BagSummary/>
      </div>
    </main>
    </>
  )
}

export default Bag
