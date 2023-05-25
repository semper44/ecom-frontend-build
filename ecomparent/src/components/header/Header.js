import React,{useContext, useState, useEffect} from 'react'
// import styles from "./header.module.css"
import MenuIcon from '../menuicon/MenuIcon'
import { AuthContext } from '../profiles/login/LoginFetch'
import { ThemeData } from '../../App'
import { Box, Typography } from '@mui/material'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import HeaderContainer from '../headercontainer/HeaderContainer'
import jwt_decode from "jwt-decode"
import {  ThemeProvider, createTheme } from '@mui/material/styles'
import { Link } from 'react-router-dom'
import { showsidebarcontext } from '../../stores/CartContxt'
// import BreakPointtheme  from './muiThemes'



function Header(props) {
  const userdetails= useContext(AuthContext)
  const {theme}= useContext(ThemeData)
  const side= useContext(showsidebarcontext)
  console.log(side)
  const {sidebar, showSidebar, hideSidebar}= useContext(showsidebarcontext)
  const [dontdisplay, setdontDisplay] = useState(false);

  const[screenWidth, setScreenWidth]= useState(window.innerWidth)
 
  useEffect(()=>{
    const handleResize = () => {
      setScreenWidth(window.innerWidth)
    }
    window.addEventListener("resize", handleResize);

    return ()=>{
      window.removeEventListener("resize", handleResize)
   }
  }, [screenWidth])

  useEffect(()=>{
    if(screenWidth<=710){
      setdontDisplay(true)
    }
    else{
      setdontDisplay(false)
    }
  }, [screenWidth])

  let user
  let userDetail
  if(userdetails){
      user=userdetails.user
  }
  if(user){
    userDetail= jwt_decode(user.access)

  }

  function close(){
    if(sidebar){
      hideSidebar()
    }
  }

  const BreakPointtheme = createTheme({
    breakpoints:{
        values:{
            xs:0,
            sm:480,
            md:575,
            lg:711,
            xl:813
        }
    }
})
  return (
    <ThemeProvider theme={BreakPointtheme}>
    <Box sx={{width:"100%",
      height: "170px",
      borderRadius: "10px",
      boxSizing: "border-box",
      // zIndex:"modal",
      // position:"fixed",
      boxShadow: theme?'13px 13px 20px rgba(0, 0, 0, 0.6), -13px -13px 20px rgba(0, 0, 0, 0.6)':'13px 13px 20px #cbced1, -13px -13px 20px #fff',}} onClick={close} >
      
      <Box>
      {sidebar &&<MenuIcon showSidebar={showSidebar}/>}
      </Box>

      <Box sx={{width:"100%",display:"flex", padding:"3rem 0 0 15px", paddingLeft:"5.5%",justifyContent:"space-between",paddingRight:"5%",   }} >
       <MenuOutlinedIcon fontSize='large' notif={props.headernotif} onClick={showSidebar} sx={{color:theme ? "cyan":"black", cursor:"pointer", opacity:sidebar&&"0"}} />
        
        <Box >
          <HeaderContainer onShow={props.onCart} onReveal={props.onSearch} notif={props.headernotif}/>
        </Box>
        {/* </div> */}
      </Box>
      <Box sx={{width:"fit-content", float:"right", marginTop:"1rem", paddingRight:"5%",}}>
        <Typography paragraph sx={{color: theme? "cyan": "black"}}>
          {user?
            `Welcome ${userDetail.username}`
          :
            "Welcome Guest"}
        </Typography>
      </Box>
    </Box>
    <Box sx={{width:"100%", display:"flex", gap:"7.2%", alignItems:"center", justifyContent:"center", mt:"6%", mb:"2%", "& a":{textDecoration:"none"}}}>
      <Link to={""}>
        <Typography paragraph sx={{color: theme? "cyan": "black", cursor:"pointer"}}>          
          Categories
        </Typography>
      </Link>
      <Link to={""}>
        {!dontdisplay &&<Typography paragraph sx={{color: theme? "cyan": "black", cursor:"pointer"}}>          
          Orders
        </Typography>}
      </Link>
      <Link to={""}>
        <Typography paragraph sx={{color: theme? "cyan": "black", cursor:"pointer"}}>          
          Voucher
        </Typography>
      </Link>
      <Link to={""}>
        <Typography paragraph sx={{color: theme? "cyan": "black", cursor:"pointer"}}>          
          Sellers
        </Typography>
      </Link>
    </Box>
    </ThemeProvider>
  )
}

export default Header 
// import React,{useContext,useState, useRef,useEffect} from 'react'
// import styles from "./header.module.css"
// import MenuIcon from '../menuicon/MenuIcon'
// import { AuthContext } from '../profiles/login/LoginFetch'
// import { ThemeData } from '../../App'
// import HeaderContainer from '../headercontainer/HeaderContainer'
// import jwt_decode from "jwt-decode"


// function Header(props) {
//   const userdetails= useContext(AuthContext)
//   console.log(userdetails)
//   const {theme}= useContext(ThemeData)
//   let user
//   let userDetail
//   if(userdetails){
//       user=userdetails.user
//   }
//   if(user){
//     userDetail= jwt_decode(user.access)

//   }
//   return (
//     <div className={theme?styles['header-parent-dark']:styles['header-parent']} id={styles['header-parent']}>
//       <div className={styles['header']}>
//         <div className={styles.menuicon}>
//           <MenuIcon onchange={props.onTransform}/>
//         </div>
//         <div className={styles["header-header"]}>
//           <HeaderContainer onShow={props.onCart} onReveal={props.onSearch} notif={props.headernotif}/>
//         </div>
//       </div>
//       <div className={styles["welcome-user"]}>          
//         {user?
//           <p>Welcome {userDetail.username}</p>
//         :
//           <p>Welcome Guest</p>}
//       </div>
//     </div>
//   )
// }

// export default Header