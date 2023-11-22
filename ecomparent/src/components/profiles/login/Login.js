import React, {useEffect,  useContext, useState}from 'react'
import {useReducer} from 'react'
import {Link} from "react-router-dom"
import {AuthContext} from "./LoginFetch"
import Message from '../../extra comp/Message'
import { ThemeData } from '../../../App'
import styles from "./login.module.css"
import ResetPassword from "../resetpassword/ResetPassword"
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import { Box } from '@mui/material'
import Loading from '../../extra comp/NewLoadingModal'



const initialState={
  username:"",
  password:""
}

function reducer(state, action){
  return{...state, [action.name]:action.value}
}

function Login() {
  
  useEffect(()=>{document.title="login"
  },[])

  const [state, dispatch] = useReducer(reducer, initialState)
  let sendData= useContext(AuthContext)
  const[passwordChange, setPasswordChange]=useState(false)
  const [showPassword, setShowPassword] = useState(false);
  let {theme}= useContext(ThemeData)
  const{message, status, code}=sendData.message
  const interval=sendData.interval
  const intervalFn=sendData.intervalFn
  
  

  useEffect(()=>{
    const interval=setInterval(()=>{
      intervalFn(false)
    }, 5000)      
    setTimeout(()=>clearInterval(interval), 6000)
  }, [interval, intervalFn])


  const toggleShowPassword = () => {
    setShowPassword((showPassword) => !showPassword);
  };

  function Change(e){
    const {name, value}=e.target
    const action={
      name:name,
      value:value
    }
    dispatch(action)
  }
  return (
      <>
     
      {(interval && status) &&<Message value={message} code={code}/>}
      {passwordChange &&<ResetPassword />}
      <div className={theme?styles["background-dark"]:styles.background}>
        <div className={styles["login-container"]}>
          <div className={theme?styles.logindark:styles.login }>
              <h1>Login</h1>
          </div>
          <form onSubmit={sendData?.loginUser}>
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
                name='password'/>

                <VisibilityOffOutlinedIcon style={{ cursor: 'pointer', position:"absolute", top:"70%", right:"3.2rem" }}
                  onClick={toggleShowPassword}/>
              </Box>
            </div>
            <div id='forgotpassword' className={styles["login-text"]}>
              <p>Forgot Password? 
                <span>
                  <Link to={"/resetpassword"}>
                  Change Password
                  </Link>
                </span>
              </p>
            </div>  
            
            <div className={styles["login-button"]}> 
              <button id={styles['login-button']} >Login</button>
            </div>
            <div className={styles["login-text"]}>
              <p>Not a member? 
                <span>
                  <Link to="/register">
                    Register
                  </Link>
                </span>
              </p>
            </div>  
          </form>
         
        </div>
        {sendData?.showModal && <Loading />}
      </div>

      </>

  )
}

export default React.memo(Login)