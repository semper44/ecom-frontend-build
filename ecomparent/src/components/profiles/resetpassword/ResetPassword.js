import React, {useState,useEffect, useContext} from 'react'
import styles from "./resetpassword.module.css"
import ResetPasswordSuccess from './ResetPasswordSuccess'
import { ThemeData } from '../../../App'

function ResetPassword() {
    const[email, setEmail]= useState({email:""})
    const[showResetPasswordMsg, setShowResetPasswordMsg]= useState(false)
    const[status, setStatus]= useState(false)
    const[error, setError]= useState(null)
    const{theme}=useContext(ThemeData)
    
  useEffect(()=>{document.title="Confirm Order"
  },[])

    function change(e){
      setEmail({[e.target.name]:e.target.value})
    }

    let formdata= new FormData()
    let fetchrequest= async()=>{
        
        formdata.append("email", email.email)
        const requestOptions = {
          method: 'POST',
          body: formdata,
          // redirect: 'follow'
        };
        // const body = JSON.stringify(email);
        let data= await fetch("http://127.0.0.1:8000/profile/reset_password/", requestOptions)
        if(data.ok){
          setShowResetPasswordMsg(true)
          setStatus(true)
          setError(null)
        }else{
          setStatus(false)
          setShowResetPasswordMsg(true)
          setError("Couldn't fetch data, please retry")
          
        }
      await data.json()
        
    }
   
    function submit(e){    
      fetchrequest()
    }

  return (
    <>
    {showResetPasswordMsg && <ResetPasswordSuccess status={status} 
    setshow={setShowResetPasswordMsg} 
    type={"passwordsent"}
    error={error}
    />}
    <div className={theme?styles["change-password-parent-dark"]:styles["change-password-parent"]}>
        <h1>Reset your Password</h1>
        <p>Enter your email address below, and we'll email instructions for setting a new one.</p>
        <div className={styles.inputparent}>
          <div className={styles.input}>
              <input 
              type="email"
              placeholder='Enter your email'
              name='email'
              onChange={change}
              />
          </div>
        </div>
        <div className={theme?styles["login-button-dark"]:styles["login-button"]}>
          <p onClick={submit} id={styles.resetbutton}>Reset Password</p>
        </div>
    </div>
    </>
  )
}

export default ResetPassword