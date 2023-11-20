import React, { useState, useEffect, useContext} from 'react'
import { headerdata } from './CartContxt'
import { AuthContext } from '../components/profiles/login/LoginFetch'
import jwt_decode from "jwt-decode";





function HeaderContainerData(props) {
  const token= JSON.parse(window.localStorage.getItem("authToken"))|| null
  // const localStorageProductNotification= JSON.parse(window.localStorage.getItem("productNotification"))|| null
  // const localStorageFollowersNotification= JSON.parse(window.localStorage.getItem("gottenNotification"))|| null

    const[followingNotifications, setFollowingNotifications]=useState([])
    const[followingSideData, setFollowingSideData]=useState([])
    const[notificationsstore, setNotificationsstore]=useState([])

    const users= useContext(AuthContext)
    let userDetails;
    if(users.user){
      userDetails=jwt_decode(users?.user?.access)
    }


    
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

    // useEffect(()=>{
    
    //   (async()=>{
    //     const response= await fetch(`${process.env.REACT_APP_URLS}/profile/profdetails/${userDetails.username}/`)
    //     let res= await response.json();
    //           //           //       setpPoductNotifications("item.notification")
    //       if(res){
    //         // res.map((item)=>{
    //         //   console.log(item.notification);
    //         //   if(item.tags==="seller"){
    //         //     setSeller(true)
    //         //   }else{
    //         //     setSeller(false)
    //         //   }
    //         // })
            
    //     }
    //   })()
    // }, [userDetails.username])

        

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