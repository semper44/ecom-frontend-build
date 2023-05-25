import React, {useEffect, useState, useContext}from 'react'
import {useReducer} from 'react'
import {Link} from "react-router-dom"
import {AuthContext} from "../login/LoginFetch"
import Message from '../../extra comp/Message'
import { ThemeData } from '../../../App'
import styles from "../login/login.module.css"



const initialState={
  username:"",
  password1:"",
  password2:"",
  checkbox:false
}

function reducer(state, action){
  return{...state, [action.name]:action.value}
}

function validate(state){
  return state.username !== "" &&
  state.password1===state.password2  &&
  state.password1.length>4 && state.password2.length>4  &&
  state.checkbox
}

function Register() {
  
  useEffect(()=>{document.title="Register"
},[])
  const [state, dispatch] = useReducer(reducer, initialState)
  const [validState, setValidState] = useState(false)
  let sendData= useContext(AuthContext)
  let {theme}= useContext(ThemeData)
  const{message, status, code}=sendData.message
  const interval=sendData.interval
  const intervalFn=sendData.intervalFn
  console.log(intervalFn, interval)
  console.log(sendData.loginUser)


  useEffect(()=>{
    const interval=setInterval(()=>{
      console.log("hyr")
      intervalFn(false)
      console.log("hy")
    }, 5000)      
    setTimeout(()=>clearInterval(interval), 6000)
  }, [interval, intervalFn])

  // console.log(sendData)
    
  function Change(e){
    const {name, value, checked}=e.target
    const action={
      name:name,
      value:name==="checkbox"?checked:value
    }
    dispatch(action)
  }
  return (
      <>
      {(interval && status) &&<Message value={message} code={code}/>}
      <div className={theme?styles["background-dark"]:styles.background}>
        <div className={styles["login-container"]}>
          <div className={styles.login}>
              <h1>Login</h1>
          </div>
          <form onSubmit={sendData?.loginUser}>
            <div className={styles.box}>
              <input type="text" 
              className="input-username" 
              placeholder='username'
              onChange={Change}
              name='username'/>

              <input type="password" 
            className="input-password" 
            placeholder='Password'
            onChange={Change}
            name='password1'/>

              <input type="password" 
            className="input-password" 
            placeholder='Password'
            onChange={Change}
            name='password2'/>
            </div>
             
            <label htmlFor="check-box-label" className={styles.checkbox}>
                <input type="checkbox" 
                className="input-checkbox" 
                onChange={Change}
                name='checkbox'/>

             <p>Accept terms of use!</p>
            </label>
            <div className={styles["login-button"]}> 
              <button 
              // onClick={()=>console.log("op")}
              disabled={!validate(state)}
              id={validate(state)?styles['login-button']:styles['login-button-disabled']} >Register</button>
            </div>
          </form>
          <div className={styles["login-text"]}>
            <p>Not yet a member? 
              <span>
                <Link to="/register">
                  Register
                </Link>
              </span>
            </p>
        </div>  
        </div>
      </div>
      </>

  )
}

export default React.memo(Register)