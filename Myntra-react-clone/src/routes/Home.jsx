import { Carousel } from "bootstrap/dist/js/bootstrap.bundle.min";
import HomeItems from "../components/HomeItems"
import {useSelector} from "react-redux";
import Carouseldisplay from "../components/Carousel";

const Home = () => {
  const items = useSelector(store => store.items);
  // console.log(items)
  return (
    <>
    <div>
    <Carouseldisplay/>
    </div>
    <main>
    <div className="items-container">
      {items.map((item)=>(<HomeItems item={item} key={item.id}/>))}
    </div>
  </main>
  </>
  )
}

export default Home
