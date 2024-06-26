import React, { useState, useEffect} from 'react'
import { headerdata } from './CartContxt'






function HeaderContainerData(props) {
  const token= JSON.parse(window.localStorage.getItem("authToken"))|| null
  // const localStorageProductNotification= JSON.parse(window.localStorage.getItem("productNotification"))|| null
  // const localStorageFollowersNotification= JSON.parse(window.localStorage.getItem("gottenNotification"))|| null

    const[followingNotifications, setFollowingNotifications]=useState([])
    const[followingSideData, setFollowingSideData]=useState([])
    const[notificationsstore, setNotificationsstore]=useState([])

    // const users= useContext(AuthContext)
    // let userDetails;
    // if(users.user){
    //   userDetails=jwt_decode(users?.user?.access)
    // }


    
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
        const response= await fetch(`${process.env.REACT_APP_URLS}/profile/getnotifications/`, followingrequestOptions)
        let res= await response.json();
        if(res){
          setFollowingSideData(res)
            for(let i of res){
              if(i.seen==="unseen"){
                arrayNotification.push(i)
              }
            }
            setNotificationsstore(arrayNotification)
          
          }

      })()
    }, [followingNotifications])

  return (
    <headerdata.Provider value={{
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