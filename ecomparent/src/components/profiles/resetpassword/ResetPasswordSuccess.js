import React, { useEffect, useState } from 'react'
import styles from "./resetpasswordmessage.module.css"
import Modals from '../../extra comp/Modals'
import {useNavigate} from "react-router-dom"


function ResetPasswordSuccess({status, setshow, type, error}) {
    const[passwordSent, setPasswordSent]= useState(null)
    const[passwordReset, setPasswordReset]= useState(null)

    useEffect(()=>{
      if(error===null){
        setPasswordReset("Password reset successfull")
        setPasswordSent("We have sent you a link to reset your password, Please check your email, click on the link and follow prompt, to complete the process.")
      }else{
        setPasswordSent(null)
        setPasswordReset(null)
      }
    }, [error])

  console.log(passwordReset, passwordSent)

  const navigate= useNavigate()

    function ok(){
      setshow(false)
      if(status){
        navigate("/")
      }
    }

    console.log(error)
  return (
    <>
    <Modals>
        <div className={styles.parent}>
            <div className={styles.container}>
                <p id={status?styles["reset-password-message-success"]:styles["reset-password-message-error"]}>
                  {(status===true && type==="passwordsent") ? passwordSent: passwordReset}
                  {status===false && error}
                </p>
            </div>
            <h2 onClick={ok}>Ok</h2>
        </div>
    </ Modals>
    </>
  )
}

export default ResetPasswordSuccess