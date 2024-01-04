import React,{useContext} from 'react'
// import styles from "./header.module.css"
import MenuIcon from '../menuicon/MenuIcon'
import { AuthContext } from '../profiles/login/LoginFetch'
import { ThemeData } from '../../App'
import { Box, Typography } from '@mui/material'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import HeaderContainer from '../headercontainer/HeaderContainer'
import jwt_decode from "jwt-decode"
import { showsidebarcontext } from '../../stores/CartContxt'
import { screensizecontext } from '../../stores/CartContxt'
// import BreakPointtheme  from './muiThemes'



function Header(props) {
  const userdetails= useContext(AuthContext)
  const {theme}= useContext(ThemeData)
  const {dontdisplay, gridlg}= useContext(screensizecontext)
  // const side= useContext(showsidebarcontext)
  
  const {sidebar, showSidebar, hideSidebar}= useContext(showsidebarcontext) 

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

//   const BreakPointtheme = createTheme({
//     breakpoints:{
//         values:{
//             xs:0,
//             sm:480,
//             md:575,
//             lg:711,
//             xl:813,
//             special:810
//         }
//     }
// })
  return (
    // <ThemeProvider theme={BreakPointtheme}>
    <Box sx={{width:"100%",
      position:"fixed",
      top:"0",
      zIndex:"50",
      height:dontdisplay?"130px":"170px",
      borderRadius: "10px",
      boxSizing: "border-box",
      backgroundColor:theme?"#050c30":"white",
      // boxShadow: theme?'13px 13px 20px rgba(0, 0, 0, 0.6), -13px -13px 20px rgba(0, 0, 0, 0.6)':'10px 2px 12px #cbced1, -13px -13px 20px transparent',}} onClick={close} >
      boxShadow: theme?'13px 13px 20px rgba(0, 0, 0, 0.6), -13px -13px 20px rgba(0, 0, 0, 0.6)':'10px 2px 9px #cbced1, -10px -2px 9px #cbced1',}} onClick={close} >
      <Box>
      {sidebar  &&<MenuIcon showSidebar={showSidebar}/>}
      </Box>

      <Box sx={{width:"100%",display:"flex",  padding:"3rem 0 0 15px", paddingLeft:"5.5%",justifyContent:"space-between",paddingRight:"5%",   }} >
       <MenuOutlinedIcon fontSize='large' notif={props.headernotif} onClick={showSidebar} sx={{color:theme ? "cyan":"black", cursor:"pointer", opacity:sidebar&&"0"}} />
       {/* {gridlg &&<img src={logo} alt="" style={{height:"100px", position:"absolute", left:"3%", top:"14%"}}/>} */}
        <Box >
          <HeaderContainer onShow={props.onCart} onReveal={props.onSearch} notif={props.headernotif}/>
        </Box>
        {/* </div> */}
      </Box>
      <Box sx={{width:"100%",  paddingRight:"5%", mt:gridlg?"2%":"1.5%" }}>
        <Typography paragraph sx={{color: theme? "cyan": "black", float:"right",}}>
          {user?
            `Welcome ${userDetail.username}`
          :
            "Welcome Guest"}
        </Typography>
      </Box>
    </Box>
    // </ThemeProvider>
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
//   
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