import {React, useContext, useEffect,useState} from 'react'
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { SearchOutlined } from "@mui/icons-material";
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
// import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import styles from "./headercontainer.module.css"
import{NavLink, useNavigate} from "react-router-dom"
import {isActive, cartActiveContxt } from '../../App'
import {cartContxt} from '../../stores/CartContxt'
import { AuthContext } from '../profiles/login/LoginFetch'
import { headerdata} from '../../stores/CartContxt';
import { profileContext } from '../../stores/CartContxt';
import { notificationscontext } from '../../App';
import { ThemeData } from '../../App';
import jwt_decode from "jwt-decode"
import axios from "axios"
import { Stack } from '@mui/material';


function HeaderContainer(props) {
  const[count, setCount]=useState()
  const[flag, setFlag]=useState("")
  // const[modalReveal, setModalReveal]=useState(false)
  // const[cartRemovedSuccessfully, setCartRemovedSuccessfully]=useState(false)
  const cartActive= useContext(cartActiveContxt)
  const activeContxt= useContext(isActive)
  const cartCount= useContext(cartContxt)
  const logIn= useContext(AuthContext)
  const {setnotificationcontext, notificationcontext, setdata}= useContext(headerdata)
  const {notification,showNotifFn}= useContext(notificationscontext)
  const { profileNotification, setProfileNotifications}= useContext(profileContext)
  const navigate= useNavigate()
  const {theme}= useContext(ThemeData)

  // const worker = useMemo(
  //   () => new Worker(new URL("../extra comp/Workers.js", import.meta.url)),
  //   []
  // );
  
  function profnav(){
    if(!logIn.user){
      navigate("/login")
    }
    else{
      window.location.href=`/profile/${userDetails?.user_id}`
    }
  }
  // function notificationNav(){
  //   if(!logIn.user){
  //     navigate("/login")
  //   }
  //   else{
  //     window.location.href=`/profile/${userDetails?.user_id}`
  //   }
  // }
  // console.log(showNotifFn, hideNotifFn, notification)
  let userDetails;
  if(logIn?.user){
    userDetails=jwt_decode(logIn?.user?.access)
  } 


 useEffect(()=> { 
  if(window.location.pathname==="/" && !activeContxt.showSearchState && !cartActive.cartActivestate){
    setFlag("home")
  }
  else if(window.location.pathname===`/profile/${userDetails?.user_id}` && !activeContxt.showSearchState && !cartActive.cartActivestate){
    setFlag("profile")
  }
  if(notification){
    setFlag("")
  }
  }, [activeContxt.showSearchState, cartActive.cartActivestate, notification, userDetails?.user_id])
 
  let {notif}= props
  console.log(notif)
  useEffect(()=>{
    let formdata= new FormData()
    const config= {headers:{
      'Content-Type':'multipart/form-data',
      'Authorization': 'Bearer '+ token?.access

    }}
    notif?.once("newproductnotif", (data)=>{
      (async()=>{
        formdata.append("senderName", data.senderName);
        formdata.append("senderId", data.sender);
        formdata.append("receiver", data.followers);
        formdata.append("text", `${data.senderName} just added a new product`);
        formdata.append("time", data.time);
        formdata.append("type", data.type)
        formdata.append("seen", data.seen)
        axios.post('http://127.0.0.1:8000/profile/postproductnotifications/', formdata,config)
        .then(res=>{
          setProfileNotifications(prev=>[...prev, res.data])
        })
      })()
      console.log(data)
  })
    }, [notif, setProfileNotifications])
    
  useEffect(()=>{
    let formdata= new FormData()
    const config= {headers:{
      'Content-Type':'multipart/form-data',
      'Authorization': 'Bearer '+ token?.access

    }}
    notif?.on("offlineproductnotif", (data)=>{
      (async()=>{
        formdata.append("senderName", data.senderName);
        formdata.append("senderId", data.sender);
        formdata.append("receiver", data.followers);
        formdata.append("text", `${data.senderName} just added a new product`);
        formdata.append("time", data.time);
        formdata.append("type", data.type)
        formdata.append("seen", data.seen)
        axios.post('http://127.0.0.1:8000/profile/postproductnotifications/', formdata,config)
      })()
      console.log(data)
      console.log("data")
  })
    }, [notif])
    // console.log(setProfileNotifications)
  useEffect(()=>{
    let formdata= new FormData()
    const config= {headers:{
      'Content-Type':'multipart/form-data',
      'Authorization': 'Bearer '+ token?.access
    }}
    notif?.once("getfollowingnotif", (data)=>{
      (async()=>{
        formdata.append("senderName", data.senderName);
        formdata.append("sender", data.sender);
        formdata.append("receiver", data.receivers);
        formdata.append("text", `${data.senderName} just followed you`);
        formdata.append("time", data.time);
        formdata.append("type", data.type)
        formdata.append("seen", data.seen)
        axios.post('http://127.0.0.1:8000/profile/postnotifications/', formdata,config)
        .then(res=>{
          console.log(res)
          setnotificationcontext(prev=>[...prev, res.data])
          setdata(prev=>[...prev, res.data])
        })
      })()
      console.log(data)

    })
  }, [notif, setnotificationcontext])

  useEffect(()=>{
    let formdata= new FormData()
    const config= {headers:{
      'Content-Type':'multipart/form-data',
      'Authorization': 'Bearer '+ token?.access

    }}
    notif?.once("offlinefollowingnotif", (data)=>{
      (async()=>{
        formdata.append("senderName", data.senderName);
        formdata.append("sender", data.sender);
        formdata.append("receiver", data.receivers);
        formdata.append("text",  `${data.senderName} just followed you`);
        formdata.append("time", data.time);
        formdata.append("type", data.type)
        formdata.append("seen", data.seen)
        axios.post('http://127.0.0.1:8000/profile/postnotifications/', formdata,config)
      })()
      console.log(data)
  })
    }, [notif])

  useEffect(()=>{
    if(notificationcontext.length>=1){
      localStorage.setItem("gottenNotification",JSON.stringify(notificationcontext))   
    }
    if(localStorage.getItem("gottenNotification") && localStorage.getItem("gottenNotification") !==undefined){
      setnotificationcontext(JSON.parse(localStorage.getItem("gottenNotification")))
    }
    
  }, [notificationcontext.length, setnotificationcontext])
  // console.log(userNotification, notificationcontext)
 
  useEffect(()=>{
    if(profileNotification?.length>=1){
      localStorage.setItem("productNotification",JSON.stringify(profileNotification))   
    }
    if(localStorage.getItem("productNotification") && localStorage.getItem("productNotification") !==undefined){
      setProfileNotifications(JSON.parse(localStorage.getItem("productNotification")))
    }
  }, [profileNotification.length, setProfileNotifications])

  useEffect(()=>{
    console.log(notificationcontext?.length)
    console.log(profileNotification?.length)
    setCount(notificationcontext?.length+profileNotification?.length)
  },[profileNotification?.length, notificationcontext?.length]) 
  console.log(count)
  
  const token= JSON.parse(window.localStorage.getItem("authToken"))|| null
  // const items= JSON.parse(window.localStorage.getItem("MY_CARTSTATE"))|| null

  function logout(){
    if(cartCount.cartSize>=1){
      sendCartData()
    }else{
      window.localStorage.removeItem("MY_CARTSTATE")
      logIn?.logout();
      notif?.emit("offline", {
        "offline":"offline",
        "userId": userDetails.user_id
      })
    }
  }

  async function sendCartData(){
    let formData= new FormData()
      let arr= []
      let arr2=[]
      // let arr3=[]
      cartCount.items.map((item)=>{
      // console.log(item)
      // let ids={qty: item.qty}
      arr.push(item.qty)
      arr2.push(item.id)
      // formData.append("item", item.id)      
    })
    formData.append("item", JSON.stringify(arr2))      
    formData.append("owners", userDetails.user_id)
    formData.append("item_qty", JSON.stringify(arr))
    formData.append("cartSize", cartCount.cartSize)      
      // var myHeaders = new Headers();
      // myHeaders.append("Authorization", "Bearer 
      let requestOptions = {
        method: 'POST',
        body: formData,
        headers: {
          'Authorization': 'Bearer '+ token?.access
          },
        redirect: 'follow'
      };
    const res= await fetch('http://127.0.0.1:8000/product/addtocart/', requestOptions)
      console.log(res.ok)  
      if(res.ok){
        window.localStorage.removeItem("MY_CARTSTATE")
        logIn?.logout();
          notif?.emit("offline", {
            "offline":"offline",
            "userId": userDetails.user_id
          })
          }
  }

  
  // function closing(){
  //   setModalReveal(false)
  // }
  
  return (
    <Stack direction={"row"} spacing={{xs:1}}>
      {/* <div className={theme?styles.id:styles.light} id={styles.headercontainer}> */}
        <div className={flag==="home"?styles.active:theme?styles.theme:styles.homecontainer}id={styles.one} >
          <NavLink to="/" className={theme? styles.themenavcontainer:styles.navcontainer}><HomeOutlinedIcon /> 
            <p id={theme?styles.theme:styles.home}>Home</p>
          </NavLink>  
        </div>
        <div onClick={props.onReveal} id={styles.two} className={`${theme? styles.themesearchcontainer:styles.searchcontainer} ${activeContxt.showSearchState && styles['searchcontainer-active']}`}>
          <SearchOutlined />
          <p>Search</p>
        </div>
        <div className={flag==="profile"?styles.active:styles.accountcontainer} id={styles.three} onClick={profnav}>
         <div className={theme? styles.themenavcontainer:styles.navcontainer}>
          <AccountBoxIcon/>
          <p id={theme?styles.theme:styles.home}>Profile</p>
          </div> 
        </div>

        <div className={`${theme? styles.themesearchcontainer:styles.searchcontainer} ${notification && styles['searchcontainer-active']}`} onClick={showNotifFn} id={styles.notifid}>
          <div className={theme? styles.themenavcontainer:styles.navcontainer}>
            <div className={styles.iconnotif}>
              <NotificationsNoneOutlinedIcon />
              <div className={styles.new}>{count>=1?count:undefined}</div>
            </div>
            <p id={theme?styles.theme:styles.home}>Notification</p>
          </div>  
        </div>

        <div onClick={props.onShow} className={`${theme? styles.themecartcontainer:styles.cartcontainer} ${cartActive.cartActivestate &&  styles['cartcontainer-active']}`}>
            <ShoppingCartOutlinedIcon/>
            <p>Cart</p>
            <span id='count'>{cartCount.cartSize}</span>
        </div>
        
        {logIn?.user?
         <div className={theme? styles.themelogout:styles.logoutcontainer} onClick={logout} id={styles.four}>
          <LogoutOutlinedIcon />
          <p id={theme?styles.theme:styles.home}>Logout</p>
        </div>
          :
           <div className={theme? styles.themelogout:styles.logoutcontainer} onClick={logIn?.logout} id={styles.four}>
            <LoginOutlinedIcon />
            <p id={theme?styles.theme:styles.home}>Login</p>
          </div>}
      {/* </div> */}
    </Stack>

  )
}

export default HeaderContainer