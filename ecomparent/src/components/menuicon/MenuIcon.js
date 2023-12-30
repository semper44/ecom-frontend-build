import React, { useContext} from 'react';
import jwt_decode from "jwt-decode"
;
// import * as FaIcons from 'react-icons/fa';
// import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
// import { IconContext } from 'react-icons';
import R from "../../ecom_images/R.jpg"
// import  "./menuicon.css"
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined'
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { AuthContext } from '../profiles/login/LoginFetch'
import { ThemeData } from '../../App';
import { cartContxt } from '../../stores/CartContxt';
import { Switch } from '@mui/material';
import { notificationscontext } from '../../App';
import styles from "./menuicon.module.css"
import { screensizecontext } from '../../stores/CartContxt';





function MenuIcon({showSidebar, notif}) {
  const {showNotifFn}= useContext(notificationscontext)
  const {dontdisplay}= useContext(screensizecontext)


  const userdetails= useContext(AuthContext)
  const {theme, toggleTheme}= useContext(ThemeData)
  const cartCount= useContext(cartContxt)


  let user
  let userDetail
  if(userdetails){
      user=userdetails.user
  }
  if(user){
    userDetail= jwt_decode(user.access)
  }
  function toggleAndCloseSidebar(){
    toggleTheme();
    showSidebar()
  }  

  async function sendCartData(){
    let formData= new FormData()
      let arr= []
      let arr2=[]
      // let arr3=[]
      cartCount.items.map((item)=>{
      // 
      // let ids={qty: item.qty}
      arr.push(item.qty)
      arr2.push(item.id)
      // formData.append("item", item.id)      
    })
    formData.append("item", JSON.stringify(arr2))      
    formData.append("owners", userDetail.user_id)
    formData.append("item_qty", JSON.stringify(arr))
    formData.append("cartSize", cartCount.cartSize)      
      // var myHeaders = new Headers();
      // myHeaders.append("Authorization", "Bearer 
      let requestOptions = {
        method: 'POST',
        body: formData,
        headers: {
          'Authorization': 'Bearer '+ user?.access
          },
        redirect: 'follow'
      };
    const res= await fetch(`${process.env.REACT_APP_URLS}/product/addtocart/`, requestOptions)
        
      if(res.ok){
        window.localStorage.removeItem("MY_CARTSTATE")
        userdetails?.logout();
          notif?.emit("offline", {
            "offline":"offline",
            "userId": userDetail.user_id
          })
      }
  }

  function logingout(){
    if(cartCount.cartSize>=1){
      sendCartData()
    }else{
      window.localStorage.removeItem("MY_CARTSTATE")
      userdetails?.logout();
      notif?.emit("offline", {
        "offline":"offline",
        "userId": userDetail.user_id
      })
    }
  }
  
  
  

  
  return (
    <>
      <ul className={theme?styles['nav-menu-items']:styles['nav-menu-items-dark']}>
        <div className={styles["close-button"]}>
          <CloseOutlinedIcon fontSize='large' style={{color:theme ? "cyan":"white", pl:"3rem", cursor:"pointer"}} onClick={showSidebar} />
        </div>
        <div className={theme?styles["sidebar-prof-dark"]:styles["sidebar-prof"]}>
          <img
            alt="profile-user"
            width="160px"
            height="160px"
            src={R}
            style={{ cursor: "pointer", borderRadius: "50%",  }}/>
          <div className={styles["prof-others"]}>
            <Switch onClick={toggleAndCloseSidebar} />
            <h3 id={theme?styles["username-dark"]:styles.username}>{ userDetail?.username} </h3>
          </div>
        </div>
        <div className={styles['nav-text-parent']} onClick={showSidebar}>                  
          {dontdisplay &&SidebarData.map((item, index) => {
            return (
              <li key={index} className={styles['nav-text']}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            );
            
          })} 
          {!dontdisplay &&<li className={styles['nav-text']}>
          <Link to={"/categories"}>
              <NotificationsNoneOutlinedIcon />
              <span>Cateories</span>
              </Link>
          </li>}
          {!dontdisplay &&<li className={styles['nav-text']}>
          <Link to={""}>
              <NotificationsNoneOutlinedIcon />
              <span>Vouchers</span>
              </Link>
          </li>}
          {!dontdisplay &&<li className={styles['nav-text']}>
          <Link to={"/sellers"}>
              <NotificationsNoneOutlinedIcon />
              <span>Sellers</span>
              </Link>
          </li>}
          <li className={styles['nav-text']} onClick={showNotifFn}>
          <Link to={""}>
              <NotificationsNoneOutlinedIcon />
              <span>Notification</span>
              </Link>
          </li>
           {user?<li className={styles['nav-text']}>
             <Link to={"/"}>
              <LogoutOutlinedIcon  onClick={logingout}/>
              <span>Logout</span>
            </Link>
          </li>:
          <li className={styles['nav-text']}>
             <Link to={"/login"}>
              <LoginOutlinedIcon />
              <span>Login</span>
            </Link>
          </li>}
          
        </div>
       
      </ul>
    </>
  );
}

export default React.memo(MenuIcon);