import React, { useState, useContext, useEffect, useRef} from 'react'
// import { notificationProvider } from '../../stores/CartContxt'


function FetchTry(props) {
    
    const[data, setData]=useState([])
    // const[arrayNotification, setArrayNotification]=useState([])
    
    console.log("jy")

    useEffect(()=>{

        fetch('http://127.0.0.1:8000/profile/ordersusersmade/')
        .then((res)=>{return res.json()})
        .then((result)=>{
          console.log(result)
          if(result){
              result.forEach((data) => {
                const itemQty= JSON.parse(data.item_qty)
                // console.log(Array.isArray(itemQty))
                // console.log(Object.values(data))
                data.serializer.map((obj, index)=>{
                  if(Array.isArray(itemQty)){
                    obj.qty=itemQty[index]
                  }else{
                    obj.qty=itemQty

                  }
                  setData(prev=>[...prev, obj])
                  console.log(obj)

                })
                // obj.reference=data.reference
              })
            }
      })}, [])
      console.log(data)

  return (
    // <notificationProvider.Provider value={{notificationData:data, setdata:setData, notificationcontext:notifications, setnotificationcontext:setNotifications}}>
   <>
   hy
   </>
  )
}

export default FetchTry

// if(dataCart){
//   dataCart.serializer.forEach((obj, index) => {
//     obj.qty=JSON.parse(dataCart.item_qty)[index]
    
//   })
//   setCart(dataCart.serializer)
// }