import React, { useState, useEffect, useRef, useContext} from 'react'
import { headerdata } from './CartContxt'




function HeaderContainerData(props) {
  const token= JSON.parse(window.localStorage.getItem("authToken"))|| null
  const localStorageProductNotification= JSON.parse(window.localStorage.getItem("productNotification"))|| null
  // const localStorageFollowersNotification= JSON.parse(window.localStorage.getItem("gottenNotification"))|| null

    const[followingNotifications, setFollowingNotifications]=useState([])
    const[followingSideData, setFollowingSideData]=useState([])
    const[productNotifications, setpPoductNotifications]=useState([])
    const[notificationsstore, setNotificationsstore]=useState([])

    

    console.log(notificationsstore)    
    useEffect(()=>{
      const arrayNotification=[]
      let followingrequestOptions = {
        method: 'GET',
        redirect: 'follow',
        headers:{
          'Content-Type':'application/json',
          'Authorization': 'Bearer '+ token?.access
          }
      };
      (async()=>{
        const response= await fetch('http://127.0.0.1:8000/profile/getnotifications/', followingrequestOptions)
        let res= await response.json();
        if(res){
          setFollowingSideData(res)
            for(let i of res){
              if(i.seen==="unseen"){
                arrayNotification.push(i)
              }
            }
            console.log(notificationsstore)
            console.log(arrayNotification)
            setNotificationsstore(arrayNotification)
          
          }

      })()
    }, [followingNotifications])

    useEffect(()=>{
      let ProductNotificationRequestOptions = {
        method: 'GET',
        redirect: 'follow',
        headers:{
          'Content-Type':'application/json',
          'Authorization': 'Bearer '+ token?.access
          }
      };
      (async()=>{
        const response= await fetch(`http://127.0.0.1:8000/profile/getproductnotifications/`, ProductNotificationRequestOptions)
        let res= await response.json();
          console.group(res)
          if(res){
            setpPoductNotifications(res)
          }

      })()
    }, [])

    console.log(productNotifications);
        

  return (
    <headerdata.Provider value={{
      ProductnotificationData:productNotifications,
      notificationData:followingSideData, 
      setdata:setFollowingSideData, 
      notificationcontext:followingNotifications, 
      setnotificationcontext:setFollowingNotifications,
      notificationsstore:notificationsstore,
      setNotificationsstore:setNotificationsstore
      }}>
      {props.children}
    </headerdata.Provider>
  )
    }

export default HeaderContainerData