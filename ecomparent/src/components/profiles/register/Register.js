import React, {useEffect, useContext}from 'react'
import {useReducer, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import {AuthContext} from "../login/LoginFetch"
import Message from '../../extra comp/Message'
import { ThemeData } from '../../../App'
import styles from "./register.module.css"
import register from "../../../ecom_images/register.jpg"
import { Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import { Box } from '@mui/material'
import Loading from '../../extra comp/NewLoadingModal'


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
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [state, dispatch] = useReducer(reducer, initialState)
  let sendData= useContext(AuthContext)
  let {theme}= useContext(ThemeData)
  const navigate= useNavigate()
  const{message, status, code}=sendData.message
  const interval=sendData.interval
  const intervalFn=sendData.intervalFn
  
  const toggleShowPassword = () => {
    setShowPassword((showPassword) => !showPassword);
  };

  const toggleShowPassword2 = () => {
    setShowPassword2((showPassword2) => !showPassword2);
  };


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
    setShowModal(true)
    let fetchRequestOptions={
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
    
    body:JSON.stringify({ username: state.username, password: state.password1, password2: state.password2 })
    };
      fetch(`${process.env.REACT_APP_URLS}/profile/register/`, fetchRequestOptions)
      .then((res)=>{
          if(res.ok){
            setShowModal(false)
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

            <Box sx={{position:"relative"}}>
              <input type={showPassword?"text":"password" } 
            className="input-password" 
            placeholder='Password'
            onChange={Change}
            name='password1'/>

            <VisibilityOffOutlinedIcon style={{ cursor: 'pointer', position:"absolute", top:"70%", right:"2rem" }}
                  onClick={toggleShowPassword}/>
            </Box>

            <Box sx={{position:"relative"}}>
              <input type={showPassword2?"text":"password" } 
            className="input-password" 
            placeholder='Password'
            onChange={Change}
            name='password2'/>
            <VisibilityOffOutlinedIcon style={{ cursor: 'pointer', position:"absolute", top:"70%", right:"2rem" }}
                  onClick={toggleShowPassword2}/>
            </Box>

            </div>
             
            <label htmlFor="check-box-label" className={styles.checkbox}>
                <input type="checkbox" 
                className="input-checkbox" 
                onChange={Change}
                name='checkbox'/>

             <p>Accept terms of use!</p>
            </label>
             <Typography sx={{mt:"15px", fontSize:"14px", }}>Already registered? <span style={{color:"cyan", cursor:"pointer", textDecoration:"none"}}> <Link to="/login" style={{ textDecoration: "none", color: "inherit" }}> Login! </Link></span></Typography>
            <div className={styles["login-button"]}> 
              <button 
              onClick={loginUser}
              disabled={!validate(state)}
              id={validate(state)?styles['login-button']:styles['login-button-disabled']} >Register</button>
            </div>
          </form>
        </div>
        {showModal && <Loading />}
      </div>
      </>

  )
}

export default React.memo(Register)