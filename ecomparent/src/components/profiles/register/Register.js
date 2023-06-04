import React, {useEffect, useContext}from 'react'
import {useReducer} from 'react'
import { useNavigate } from 'react-router-dom'
import {AuthContext} from "../login/LoginFetch"
import Message from '../../extra comp/Message'
import { ThemeData } from '../../../App'
import styles from "./register.module.css"
import register from "../../../ecom_images/register.jpg"


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
  let sendData= useContext(AuthContext)
  let {theme}= useContext(ThemeData)
  const navigate= useNavigate()
  const{message, status, code}=sendData.message
  const interval=sendData.interval
  const intervalFn=sendData.intervalFn
  
  


  useEffect(()=>{
    const interval=setInterval(()=>{
      
      intervalFn(false)
      
    }, 5000)      
    setTimeout(()=>clearInterval(interval), 6000)
  }, [interval, intervalFn])

    
  function Change(e){
    const {name, value, checked}=e.target
    const action={
      name:name,
      value:name==="checkbox"?checked:value
    }
    dispatch(action)
  }

  ;

  let loginUser= (e)=>{
    e.preventDefault();
    let fetchRequestOptions={
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
    
    body:JSON.stringify({ username: state.username, password: state.password1, password2: state.password2 })
    };
      fetch( "http://127.0.0.1:8000/profile/register/", fetchRequestOptions)
      .then((res)=>{
          if(res.ok){
            navigate("/login")
          }
        })
  }

  return (
      <>
      {(interval && status) &&<Message value={message} code={code}/>}
      <div className={theme?styles["register-background-dark"]:styles.registerbackground}>
        <div className={styles["register-image"]}>
          <img src={register} alt="" />
        </div>
        <div className={styles["login-container-register"]}>
          <div className={styles.login}>
              <h1>Register</h1>
          </div>
          <form >
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
              onClick={loginUser}
              disabled={!validate(state)}
              id={validate(state)?styles['login-button']:styles['login-button-disabled']} >Register</button>
            </div>
          </form>
        </div>
      </div>
      </>

  )
}

export default React.memo(Register)