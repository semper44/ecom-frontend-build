import React, {useContext, useEffect, useState} from 'react'
import { AuthContext } from '../login/LoginFetch'
import { headerdata } from '../../../stores/CartContxt'
// import { notificationProvider } from '../../../stores/CartContxt'
import jwt_decode from "jwt-decode"
import styles from "./productandfollowingnotification.module.css"
import Loading from "../../extra comp/Loading"
import {ThemeData} from "../../../App"
import { showsidebarcontext } from '../../../stores/CartContxt'

// import useFetchToken from '../../../usequery/useFetchToken'


function AllFollowingNotification() {
    const [error, setError]=useState(null)
    const logIn= useContext(AuthContext)
    const {setnotificationcontext, notificationcontext, notificationData}= useContext(headerdata)
    // const {notificationData}= useContext(generalNotification)
    const token= JSON.parse(window.localStorage.getItem("authToken"))|| null
   
    const {sidebar,  hideSidebar}= useContext(showsidebarcontext)
    function open(){
      if(sidebar){
        hideSidebar()
      }
    }
  

    const {theme}= useContext(ThemeData)

    let userDetails;
    if(logIn?.user){
      userDetails=jwt_decode(logIn?.user?.access)
    } 

    useEffect(()=>{document.title="Notifications"
    },[])
    

    useEffect(()=>{
      (async()=>{
      localStorage.removeItem("gottenNotification")
        if(notificationcontext.length>=1){
          try{
            let res= await fetch(`http://127.0.0.1:8000/profile/editnotifications/${userDetails.user_id}/`, {
              method: 'PATCH',
              headers: {
                "Content-Type": "application/json",
                'Authorization': 'Bearer '+ token?.access

                },      
                body:JSON.stringify(notificationcontext)}
              )
            let response= await res.json()
            if(!res.ok){
              throw Error("Couldn't fetch data, please retry")
            }
            console.log(response)
            }catch(err){
              // setError(false)
              setError(err.message)
          }  
        }
        // setCombinedNotification(notificationData)
        setnotificationcontext([]);
    })()
    
    }, []) 
    
    console.log(error)
    console.log(notificationData)
   
  return (
    <>
      {notificationData?<div className={styles.parent} onClick={open}
>
      <div className={theme?styles["children-dark"]:styles.children}>
        { notificationData?.length>= 1 ? notificationData.map((notifs)=>{
          return(
            <>
            <div className={notifs.seen==="unseen"? styles.unseen: styles.text}>
              <p>{notifs.text}-{notifs.time}</p>  
            </div>
            </>
          )
        }): <div className={theme?styles["no-notifications-dark"]:styles["no-notifications"]}>
        <h1> No Notifications yet</h1>
        </div> }
      </div>
      </div>: <Loading />}
    </>
  )
}

export default AllFollowingNotification