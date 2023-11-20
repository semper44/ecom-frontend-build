import React, {useContext, useEffect} from 'react'
import { headerdata } from '../../../stores/CartContxt'
// import { notificationProvider } from '../../../stores/CartContxt'
import styles from "./productandfollowingnotification.module.css"
import Loading from "../../extra comp/Loading"
import {ThemeData} from "../../../App"
import { AuthContext } from '../login/LoginFetch'
import jwt_decode from "jwt-decode"
import { showsidebarcontext } from '../../../stores/CartContxt'
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';

// import useFetchToken from '../../../usequery/useFetchToken'


function AllFollowingNotification() {
    const {setNotificationsstore, notificationData, notificationsstore}= useContext(headerdata)
    // const {notificationData}= useContext(generalNotification)
    const {sidebar,  hideSidebar}= useContext(showsidebarcontext)
    const token= JSON.parse(window.localStorage.getItem("authToken"))|| null
    const logIn= useContext(AuthContext)

    let userDetails;
    if(logIn?.user){
      userDetails=jwt_decode(logIn?.user?.access)
    } 
    

    //al>h, h<a&i a>al&i


    function open(){
      if(sidebar){
        hideSidebar()
      }
    }
    

    const {theme}= useContext(ThemeData)
    useEffect(()=>{document.title="Followers Notifications"
    },[]) 
    
    useEffect(()=>{
    (async()=>{
          try{
            let res= await fetch(`${process.env.REACT_APP_URLS}/profile/editnotifications/${userDetails.user_id}/`, {
              method: 'PATCH',
              headers: {
                "Content-Type": "application/json",
                'Authorization': 'Bearer '+ token?.access

                },      
                body:JSON.stringify(notificationData)}
              )
            await res.json()
            if(res.ok){
              console.log(res.ok);
              window.localStorage.removeItem("gottenNotification")
              setNotificationsstore([])
            }
          }catch(err){
            // setError(false)
        }  
        
    })();  
    }, [notificationData, setNotificationsstore]) 
    

    console.log(notificationsstore)    

  return (
    <>
      {notificationData?<div className={styles.parent} onClick={open}>
      <div className={theme?styles["children-dark"]:styles.children}>
        { notificationData?.length>= 1 ? notificationData.map((notifs)=>{
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

export default AllFollowingNotification