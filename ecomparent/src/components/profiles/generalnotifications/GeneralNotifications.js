import React, {useContext} from 'react'
import { AuthContext } from '../login/LoginFetch'
import jwt_decode from "jwt-decode"
import { Link } from 'react-router-dom'
import {ThemeData} from "../../../App"
import Modals from '../../extra comp/Modals'
import styles from "./generalnotification.module.css"

function AllGeneralNotifications({hideNotifFn}) {
    const logIn= useContext(AuthContext)
    const {theme}= useContext(ThemeData)
   

    let userDetails;
    if(logIn?.user){
      userDetails=jwt_decode(logIn?.user?.access)
    } 

  return (
    <>
    <Modals click={hideNotifFn}>
      <div className={theme?styles["theme-dark"]:styles['all-items']}>
        <p id={styles.cancel} onClick={hideNotifFn}>&#10005;</p>
          <div className={styles["parent-notification"]}>
            <Link to={`/profile/${userDetails?.user_id}/productnotifications`}>
              <div className={styles.productnotif} id={styles.notification} onClick={hideNotifFn} >
              <p>Product Notifications</p>
            </div>
            </Link>
              <Link to={`/profile/${userDetails?.user_id}/followernotifications`}>
                <div className={styles.followingnotif} id={styles.notification} onClick={hideNotifFn}>
                  <p>Followers Notifications</p>
                </div>
              </Link>
          </div>
      </div>
    </Modals>
    </>
  )
}

export default AllGeneralNotifications