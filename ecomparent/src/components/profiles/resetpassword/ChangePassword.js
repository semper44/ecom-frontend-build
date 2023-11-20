import React, { useEffect, useState } from 'react'
import styles from "./changepassword.module.css"
import { useParams } from 'react-router-dom'
import ResetPasswordSuccess from './ResetPasswordSuccess'



function ChangePassword() {

  useEffect(()=>{document.title="Change Password"
  },[])

  const[showResetPasswordMsg, setShowResetPasswordMsg]= useState(false)
  const[password, setPassword]=useState({password1:"", password2:""})
  const[status, setStatus]= useState(false)
  const[error, setError]= useState(null)

 
  const{uid, id}= useParams()

  function change(e){
    setPassword({...password, [e.target.name]:e.target.value})
  }

    function submit(e){
      // e.preventDefault()
      fetchrequest()
    }
    let formdata= new FormData()
    formdata.append("password", password.password1)
    formdata.append("token", id)
    formdata.append("uid", uid)

    const requestOptions = {
      method: 'PATCH',
      body: formdata,
      redirect: 'follow'
    };
    let fetchrequest= async(e)=>{
      
      let data= await fetch(`${process.env.REACT_APP_URLS}/profile/password-reset-complete/`, requestOptions)
      
      if(data.ok){
        setShowResetPasswordMsg(true)
        setStatus(true)
        setError(null)
      }else{
        setStatus(false)
        setShowResetPasswordMsg(true)
        setError("Couldn't fetch data, please retry")

      }
      let res= await data.json()
      
  }

  return (
    <>
    {showResetPasswordMsg && <ResetPasswordSuccess status={status} setshow={setShowResetPasswordMsg} type={"passwordReset"} error={error}/>}

    <div className={styles["change-password-parent"]}>
        <h1>Reset your Password</h1>
        <p>Enter your new password below.</p>

        <div className={styles.background}>
          <div className={styles.inputparent}>
            <div className={styles.input}>
                <input type="password"
                name='password1'
                placeholder='Enter your password'
                onChange={change}/>
            </div>
            <div className={styles.input} id={styles.input}>
                <input type="password"
                name='password2'
                placeholder='Re-type your password'
                onChange={change}/>
            </div>
          </div>
        </div>
    </div>
    <div className={styles["login-button"]}>
      <h1 onClick={submit} id={styles["reset-password"]}>Reset Password</h1>
    </div>
    </>
  )
}

export default ChangePassword