import React from 'react'
import { useDispatch } from 'react-redux';
import { removeItem} from '../../stores/CartProviders';



function ButtonDelete({item}) {
  const dispatch = useDispatch();
  const clickToRemove = (item) => {
    dispatch(removeItem({ id: item.id }));
  };
  return(
      <>
      <button className='minus' onClick={()=>clickToRemove(item)}>
        -
      </button>
      </>
    )
}

export default ButtonDelete
