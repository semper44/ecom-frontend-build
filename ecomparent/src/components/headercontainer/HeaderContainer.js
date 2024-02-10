import {React, memo, useContext, useEffect,useState} from 'react'
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import {SearchOutlined } from "@mui/icons-material";
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import{NavLink, useNavigate} from "react-router-dom"
import {isActive, cartActiveContxt } from '../../App'
import { AuthContext } from '../profiles/login/LoginFetch'
import { headerdata} from '../../stores/CartContxt';
import { profileContext } from '../../stores/CartContxt';
import { notificationscontext } from '../../App';
import { ThemeData } from '../../App';
import jwt_decode from "jwt-decode"
import axios from "axios"
import { Box, Stack, Typography } from '@mui/material';
import { useSelector } from 'react-redux';



function HeaderContainer(props) {
  const[count, setCount]=useState()
  const[flag, setFlag]=useState("")
  const cartCount = useSelector((state) => state)
  const cartActive= useContext(cartActiveContxt)
  const activeContxt= useContext(isActive)
  const logIn= useContext(AuthContext)
  const {setnotificationcontext, notificationsstore}= useContext(headerdata)
  const {notification,showNotifFn}= useContext(notificationscontext)
  const { profileNotification, setProfileNotifications, changed}= useContext(profileContext)
  const[size, setSize]= useState(null)
  const[screenWidth, setScreenWidth]= useState(window.innerWidth)
  const navigate= useNavigate()
  const {theme}= useContext(ThemeData)
  const token= JSON.parse(window.localStorage.getItem("authToken"))|| null

  useEffect(()=>{
    if(screenWidth<=900){
      setSize(900)
    }
    else if(screenWidth>900 && screenWidth<=800 ){
      setSize(800)
    }
    else if(screenWidth>800 && screenWidth<=700 ){
      setSize(700)
    }
    else if(screenWidth>700 && screenWidth<=500 ){
      setSize(500)
    }
    else if(screenWidth>500 && screenWidth<=400 ){
      setSize(500)
    }   
  }, [ screenWidth])


  useEffect(()=>{
    const handleResize = () => {
      setScreenWidth(window.innerWidth)
    }
    window.addEventListener("resize", handleResize);

    return ()=>{
      window.removeEventListener("resize", handleResize)
   }
  }, [screenWidth])


  let userDetails;
  if(logIn?.user){
    userDetails=jwt_decode(logIn?.user?.access)
  } 
  
  function profnav(){
    if(!logIn.user){
      navigate("/login")
    }
    else{
      window.location.href=`/profile/${userDetails?.username}`
    }
  }
 
 useEffect(()=> { 
  if(window.location.pathname==="/" && !activeContxt.showSearchState && !cartActive.cartActivestate){
    setFlag("home")
  }
  else if(window.location.pathname===`/profile/${userDetails?.username}` && !activeContxt.showSearchState && !cartActive.cartActivestate){
    setFlag("profile")
  }
  else if(window.location.pathname==="/categories" && !activeContxt.showSearchState && !cartActive.cartActivestate){
    setFlag("categories")
  }
  else if(window.location.pathname==="/voucher" && !activeContxt.showSearchState && !cartActive.cartActivestate){
    setFlag("voucher")
  }
  else if(window.location.pathname==="/allsellers" && !activeContxt.showSearchState && !cartActive.cartActivestate){
    setFlag("sellers")
    
  }
  else if((window.location.pathname===`/profile/${userDetails?.username}/productnotifications`||window.location.pathname===`/profile/${userDetails?.username}/followernotifications`) && !activeContxt.showSearchState && !cartActive.cartActivestate){
    setFlag("notification")
  }
  }, [activeContxt?.showSearchState, cartActive?.cartActivestate, notification, userDetails?.user_id, userDetails?.username, window.location.pathname])
 
  let {notif}= props
  

  useEffect(()=>{
    let formdata= new FormData()
    const config= {headers:{
      'Content-Type':'multipart/form-data',
      'Authorization': 'Bearer '+ token?.access

    }}
    let handleProductNotification=(data)=>{
      (async()=>{
        formdata.append("senderName", data.senderName);
        formdata.append("senderId", data.sender);
        formdata.append("receiver", data.followers);
        formdata.append("text", `${data.senderName} just added a new product`);
        formdata.append("time", data.time);
        formdata.append("type", data.type)
        formdata.append("seen", data.seen)
        axios.post(`${process.env.REACT_APP_URLS}/profile/postproductnotifications/`, formdata,config)
        .then(res=>{
          setProfileNotifications(prev=>[...prev, res.data])
        })
      })()
      
    }
    notif?.once("newproductnotif", handleProductNotification);

    return () => {
      notif?.off("newproductnotif", handleProductNotification);
    };
    }, [notif])
   
  //oflline productnoti
  useEffect(()=>{
    let formdata= new FormData()
    const config= {headers:{
      'Content-Type':'multipart/form-data',
      'Authorization': 'Bearer '+ token?.access

    }}
    let handleofflineProductNotification=(data) => {
      (async()=>{
        formdata.append("senderName", data.senderName);
        formdata.append("senderId", data.sender);
        formdata.append("receiver", data.followers);
        formdata.append("text", `${data.senderName} just added a new product`);
        formdata.append("time", data.time);
        formdata.append("type", data.type)
        formdata.append("seen", data.seen)
        axios.post(`${process.env.REACT_APP_URLS}/profile/postproductnotifications/`, formdata,config)
      })()
      notif?.once("offlineproductnotif", handleofflineProductNotification);

      return () => {
        notif?.off("offlineproductnotif", handleofflineProductNotification);
      }
      
    }
    notif?.once("offlineproductnotif", handleofflineProductNotification);
    return () => {
      notif?.off("offlineproductnotif", handleofflineProductNotification);
    };
    }, [notif])
    // onlinefollowingnotif
  useEffect(()=>{
    let formdata= new FormData()
    const config= {headers:{
      'Content-Type':'multipart/form-data',
      'Authorization': 'Bearer '+ token?.access
    }}
    let handleFollowingNotification=(data)=>{
        formdata.append("senderName", data.senderName);
        formdata.append("sender", data.sender);
        formdata.append("receiver", data.receivers);
        formdata.append("text", `${data.senderName} just followed you`);
        formdata.append("time", data.time);
        formdata.append("type", data.type)
        formdata.append("seen", data.seen)
        axios.post(`${process.env.REACT_APP_URLS}/profile/postnotifications/`, formdata,config)
        .then(res=>{
          setnotificationcontext(prev=>[...prev, res.data])
        })
      }
      notif?.once("getfollowingnotif", handleFollowingNotification);

      return () => {
        notif?.off("getfollowingnotif", handleFollowingNotification);
      };
  }, [notif])

  //ofllinefollwingnotif
  useEffect(() => {
    let formdata = new FormData();
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': 'Bearer ' + token?.access
      }
    };
    let handleFollowingofflineNotification=(data) => {
      formdata.append("senderName", data.senderName);
      formdata.append("sender", data.sender);
      formdata.append("receiver", data.receivers);
      formdata.append("text", `${data.senderName} just followed you`);
      formdata.append("time", data.time);
      formdata.append("type", data.type);
      formdata.append("seen", data.seen);
      axios.post(`${process.env.REACT_APP_URLS}/profile/postnotifications/`, formdata, config)
    };    
    notif?.once("offlinefollowingnotif", handleFollowingofflineNotification);
    return () => {
      notif?.off("offlinefollowingnotif", handleFollowingofflineNotification);
    };
  }, [notif]);
    
  useEffect(()=>{
    localStorage.setItem("gottenNotification",JSON.stringify(notificationsstore))       
  }, [notificationsstore])

  useEffect(()=>{
    localStorage.setItem("productNotification",JSON.stringify(profileNotification))       
  }, [profileNotification])


  const productnotification= JSON.parse(window.localStorage.getItem("productNotification"))|| null
  useEffect(()=>{
    const userfollowingnotif= JSON.parse(window.localStorage.getItem("gottenNotification"))|| null
    const productnotif= JSON.parse(window.localStorage.getItem("productNotification"))|| null
    if (userfollowingnotif===null){
      setCount(productnotif?.length)
    }else if(productnotif===null){
      setCount(userfollowingnotif?.length)

    }else if(productnotif && userfollowingnotif){
      setCount(userfollowingnotif?.length+productnotif?.length)
    }
  },[profileNotification,profileNotification, notificationsstore,productnotification, changed]) 
    
  function logout(){
    if(cartCount.cart.cartSize>=1 && token?.access){
      sendCartData()
    }else{
      window.localStorage.removeItem("MY_CARTSTATE")
      logIn?.logout();
      notif?.emit("offline", {
        "offline":"offline",
        "userId": userDetails?.user_id
      })
    }
    window.localStorage.removeItem("gottenNotification")
    window.localStorage.removeItem("productNotification")
    window.localStorage.removeItem("themes")
  }

  async function sendCartData(){
    let formData= new FormData()
      let arr= []
      let arr2=[]
      // let arr3=[]
      cartCount.cart.items.map((item)=>{
      // 
      // let ids={qty: item.qty}
      arr.push(item.qty)
      arr2.push(item.id)
      // formData.append("item", item.id)      
    })
    formData.append("item", JSON.stringify(arr2))      
    formData.append("owners", userDetails?.user_id)
    formData.append("item_qty", JSON.stringify(arr))
    formData.append("cartSize", cartCount.cart.cartSize)      
    formData.append("totalAmount", cartCount.cart.totalAmount)      
      let requestOptions = {
        method: 'POST',
        body: formData,
        headers: {
          'Authorization': 'Bearer '+ token?.access
          },
        redirect: 'follow'
      };
    const res= await fetch(`${process.env.REACT_APP_URLS}/product/addtocart/`, requestOptions)
        
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
    <Stack direction={"row"} spacing={{xs:1.5, sm:2}} sx={{cursor:"pointer"}}>
      {/* <div className={theme?styles.id:styles.light} id={styles.headercontainer}> */}
      <Box onClick={()=>navigate("/")}sx={{"& a":{mt:"3px", display:screenWidth<700?"none":"flex",color:theme?"cyan":(flag==="home"&& (!cartActive.cartActivestate && !activeContxt.showSearchState && !notification))?"cyan":"black",textDecoration:flag==="home" &&(!cartActive.cartActivestate && !activeContxt.showSearchState && !notification)?"underline":"none"},
         }}>
          <NavLink>
            <HomeOutlinedIcon sx={{mt:"3px"}} /> 
            <Typography sx={{mt:"5px"}}> Home </Typography>
          </NavLink>  
      </Box>
      {/* className={`${theme? styles.themesearchcontainer:styles.searchcontainer} ${activeContxt.showSearchState && styles['searchcontainer-active'] */}
        <Box sx={{display:"flex",color:theme?"cyan":activeContxt.showSearchState?"cyan":"black", textDecoration:activeContxt.showSearchState?"underline":"none"}} onClick={props.onReveal}>
          <SearchOutlined sx={{mt:"5px"}}/>
          <Typography sx={{mt:"8px"}}>Search</Typography>
        </Box>
        <Box  onClick={profnav} sx={{display:screenWidth<800?"none":"flex",color:theme?"cyan":(flag==="profile"&& (!cartActive.cartActivestate && !activeContxt.showSearchState && !notification))?"cyan":"black",textDecoration:(flag==="profile"&& (!cartActive.cartActivestate && !activeContxt.showSearchState && !notification))?"underline":"none"}}>
          <AccountBoxIcon sx={{mt:"5px"}}/>
          <Typography sx={{mt:"7px"}}>Profile</Typography>
        </Box>

        <Box sx={{display:screenWidth<600?"none":"flex", color:theme?"cyan":notification?"cyan":"black",textDecoration:notification?"underline":"none"}}onClick={showNotifFn}>
            <Box sx={{position:"relative"}}>
              <NotificationsNoneOutlinedIcon sx={{mt:"5px"}}/>
              <Typography sx={{position:"absolute",top:"-7%", left:"31%", color:"white", backgroundColor:"red", borderRadius:"50%", p:"0 3px" }} >{count>=1?count:null}</Typography>
            </Box>
            <Typography sx={{mt:"8px"}}>Notifications</Typography>
        </Box>

        <Box sx={{display:"flex", color:theme?"cyan":cartActive.cartActivestate?"cyan":"black", }}onClick={props.onShow} >
          <ShoppingCartOutlinedIcon sx={{mt:"5px"}}/>
          <Typography sx={{mt:"8px", textDecoration:cartActive.cartActivestate?"underline":"none"}}>Cart</Typography>
          {cartCount.cart.cartSize>0 &&<Typography sx={{mt:"5px",lineHeight:0 ,display:"flex", justifyContent:"center", alignItems:"center", ml:"5px", p:"5px 5px", color:"white", borderRadius:"50%", backgroundColor:"rgb(11, 214, 214)"}}>{cartCount.cart.cartSize}</Typography>}
        </Box>

        <Box sx={{display:"flex", color:theme?"cyan":"black",}}onClick={logout}>
          {logIn?.user? <><LogoutOutlinedIcon sx={{mt:"5px"}} />
          <Typography sx={{mt:"8px"}}>Logout</Typography></>:<><LoginOutlinedIcon sx={{mt:"5px"}}/><Typography sx={{pl:"3px",mt:"8px"}}>Login</Typography></>}
          
        </Box>
    </Stack>
  )
}

export default memo(HeaderContainer)