import { Carousel } from "bootstrap/dist/js/bootstrap.bundle.min";
import HomeItems from "../components/HomeItems"
import {useSelector} from "react-redux";


const Collections = () => {
  const items = useSelector(store => store.items);
  // console.log(items)
  return (

 
    <main>
    <div className="items-container">
      {items.map((item)=>(<HomeItems item={item} key={item.id}/>))}
    </div>
  </main>
  
  )
}

export default Collections
