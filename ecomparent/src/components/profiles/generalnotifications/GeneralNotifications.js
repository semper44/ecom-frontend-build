import React, {useContext} from 'react'
import { AuthContext } from '../login/LoginFetch'
import jwt_decode from "jwt-decode"
import { Link } from 'react-router-dom'
import {ThemeData} from "../../../App"
import Modals from '../../extra comp/Modals'
import styles from "./generalnotification.module.css"
import { profileContext } from '../../../stores/CartContxt'

function AllGeneralNotifications({hideNotifFn}) {
    const logIn= useContext(AuthContext)
    const {seller}= useContext(profileContext)
    const {theme}= useContext(ThemeData)
  

    let userDetails;
    if(logIn?.user){
      userDetails=jwt_decode(logIn?.user?.access)
    } 
    const userfollowingnotif= JSON.parse(window.localStorage.getItem("gottenNotification"))|| null
    const productnotif= JSON.parse(window.localStorage.getItem("productNotification"))|| null

  return (
    <>
    <Modals click={hideNotifFn}>
      <div className={theme?styles["theme-dark"]:styles['all-items']}>
        <p id={styles.cancel} onClick={hideNotifFn}>&#10005;</p>
          <div className={styles["parent-notification"]}>
            <Link to={`/profile/${userDetails?.username}/productnotifications`}>
              <div className={styles.productnotif} id={styles.notification} onClick={hideNotifFn} >
              <p>Product Notifications-</p><span>{productnotif.length}</span>
            </div>
            </Link>
            {seller&& <Link to={`/profile/${userDetails.username}/followernotifications`}>
              <div className={styles.followingnotif} id={styles.notification} onClick={hideNotifFn}>
                <p>Followers Notifications-</p><span>{userfollowingnotif.length}</span>
              </div>
            </Link>}
          </div>
      </div>
    </Modals>
    </>
  )
}

export default AllGeneralNotifications