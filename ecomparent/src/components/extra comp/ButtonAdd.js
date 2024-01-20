import {useDispatch } from 'react-redux';
import { addItem} from '../../stores/CartProviders';




function ButtonAdd({item}) {
   const dispatch = useDispatch();

  const clickToAdd = (item) => {
   dispatch(addItem({
      id: item.id,
      category: item.category,
      image: item.image_url,
      price: item.price,
      qty: 0,  
   }));
   };
return(
   <>
   <button className="plus" onClick={()=>clickToAdd(item)}>+</button>
   </>
)
      
}

export default ButtonAdd
