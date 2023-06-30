import React, {useContext, useEffect, useState} from 'react'
import { AuthContext } from '../login/LoginFetch'
import { headerdata } from '../../../stores/CartContxt'
import { profileContext } from '../../../stores/CartContxt'
import jwt_decode from "jwt-decode"
import styles from "./productandfollowingnotification.module.css"
import Loading from '../../extra comp/Loading'
import {ThemeData} from "../../../App"
import { showsidebarcontext } from '../../../stores/CartContxt'
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';




function AllProductNotification() {
    const logIn= useContext(AuthContext)
    // const { productNotifications, productNotificationsFn}= useContext(generalNotification)
    const { profileNotification, setProfileNotifications}= useContext(profileContext)
    const [ ProductnotificationData, setProductnotificationData]= useState(null)
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
      let productEditOption={
        method: 'PATCH',
        headers: {
          "Content-Type": "application/json",
          'Authorization': 'Bearer '+ token?.access
          }
      }
      let ProductNotificationRequestOptions = {
        method: 'GET',
        redirect: 'follow',
        headers:{
          'Content-Type':'application/json',
          'Authorization': 'Bearer '+ token?.access
          }
  };
      Promise.all([
        fetch(`http://127.0.0.1:8000/profile/productedit/${userDetails.user_id}/`,productEditOption),
        fetch('http://127.0.0.1:8000/profile/getproductnotifications/', ProductNotificationRequestOptions)
      ])
      .then(([productEdit, ProductNotifData])=>{
        if(productEdit.ok){
          localStorage.removeItem("productNotification")
          setProfileNotifications([]);  
        }

        return Promise.all([productEdit.json(), ProductNotifData.json()])})
        .then(([dataProductEdit, dataProductNotification ])=>{
            if(dataProductNotification){
              dataProductNotification.map(()=>{
                setProductnotificationData(dataProductNotification)
              })
            }
        }) 
    }, [profileNotification?.length, setProfileNotifications, token?.access, userDetails.user_id])

    
   
     
  return (
    <>
     { ProductnotificationData? <div className={styles.parent} onClick={open}>
     <div className={theme?styles["children-dark"]:styles.children}>
    { ProductnotificationData?.length> 1 ? ProductnotificationData.map((notifs)=>{
      return(
        <>
        <div className={styles.text}>
              <p>{notifs.text}-{notifs.time}</p>  
              
              <div className={styles.eye}>
                {notifs.seen !=="seen" ?<VisibilityOffOutlinedIcon sx={{color:"red"}}/>:<RemoveRedEyeOutlinedIcon sx={{color:theme?"azure":"cyan"}} /> }
                </div>
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

export default AllProductNotification