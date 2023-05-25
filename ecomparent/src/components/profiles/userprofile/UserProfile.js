import React, {useState, useEffect, useRef, useContext } from 'react'
import styles from "./userprofile.module.css"
import { UserProfileData } from './UserProfileData'
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ProfileForm from "../ProfileForm"
import ProfileUpdate from "./ProfileUpdate";
import Ratings from "../../extra comp/Ratings"
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import {useParams } from 'react-router-dom';
import YourOrders from "../YourOrders";
import { AuthContext } from '../login/LoginFetch';
import jwt_decode from "jwt-decode";
import CreateProfileProduct from "../poductcreation/CreateProfileProduct"
import axios from 'axios';
import Critical from '../reviews/Critical';
import Positive from '../reviews/Positive';
import Loading from '../../extra comp/Loading';
import { Link, useNavigate } from 'react-router-dom'
import { screensizecontext } from '../../../stores/CartContxt';
import { ThemeData } from '../../../App';
import RatingProfile from '../../extra comp/RatingsProfile';
import SellersProduct from '../SellersProduct';
import MyOrders from '../MyOrders';
import { showsidebarcontext } from '../../../stores/CartContxt'


let Successful= false
function UserProfile({socket}) {
  const[thirtyContainerState, setThirtyContainerState]= useState(undefined)
  const[stateCheck, setstateCheck]= useState("")
  const[response, setResponse]= useState(false)
  const[ProfileFormstate, setProfileFormstate]= useState(false)
  const[updateProfile, setUpdateProfile]= useState(false)
  const[ratings, setRatings]= useState(false)
  // fetchData is display oders and other components 
  const[fetchData, setfetchData]= useState(false)
  const[deliveryfetchData, setdeliveryfetchData]= useState(false)
  const[sameusers, setsameusers]= useState(true)
  const[products, setproduct]= useState(false)
  const[positivereview, setPositivereview]= useState(false)
  const[critical, setcritical]= useState(false)
  const[sellersproduct, setsellersproduct]= useState(true)
  const[showAllProduct, setshowAllProduct]= useState(false)
  const[followAndRate, setFollowAndRate]= useState(false)
  const[rated, setRated]= useState(false)
  const[seller, setSeller]= useState(false)
  const[data, setdata]= useState()
  const[userFollowers, setUserFollowers]= useState()
  const[followed, setFollowed]= useState(false)
  const[errors, setErrors]= useState(false)
  const[combinedOrder, setCombinedOrders]= useState(undefined)
  // const[fullpage, setFullPage]= useState(true)
  const[combinedReviews, setCombinedReviews]= useState(undefined)
  const {hideSidebar}= useContext(showsidebarcontext)

  const {theme}= useContext(ThemeData)
  const {dontdisplay}= useContext(screensizecontext)

  let modalRatings= useRef(false)
  let lengthOfReviews= useRef(false)


  console.log(combinedOrder)
  let navigate= useNavigate()

  const token= JSON.parse(window.localStorage.getItem("authToken"))|| null

  const users= useContext(AuthContext)
  let userDetails;
  if(users.user){
    userDetails=jwt_decode(users?.user?.access)
  }
  const{id}= useParams() 
  console.log(id)
  
  // to keep the socket.io on once the pofile page tab is active
  // useEffect(()=>{
  //   mounted.current=true;
  //   let beating;
  //   beating= setInterval(()=>{
  //     socket?.emit("heartbeat", {data:"a"})  
  //     console.log("runheartbeat")
  //   }, 1000)
  //   return ()=>{
  //     console.log("heartbeat")
  //     setTimeout(()=>clearInterval(beating), 1500) 
  //     mounted.current=false 
  //   }
  // }, [socket]) 

  // screen size to resize 1092
  
  // fetching user profiledetails
  useEffect(()=>{
    try{
       fetch(` https://cras.serveo.net/profile/profdetails/${id}`)
      .then(res =>{
          // if(!res.ok){
          //     throw Error('could not fetch the data for that resource')
          // }
        if(res.status===200){
          setResponse(true)
        }
        else if(res.status !==200){
          setErrors(true)
          setResponse(true)
          Successful=true
        }

      return res.json();
      })
      .then(data => {
        if(!Successful){
          data?.map((item)=>{
            setdata(item)
            setUserFollowers(item.followers.length)
            if(item.tags==="seller"){
              setSeller(true)}
              if(item?.followers.length<1){
                setFollowed(false)
              }else{
                if(item?.followers.includes(userDetails?.user_id)){
                  setFollowed(true)  
                }else{
                  setFollowed(false)
                }
              }
          })
        }

});
}catch(error){
// console.log(error)
// setError(error)
}
}, [errors, id, userDetails?.user_id])

  // getting all reviews and setting rating based on response
  
  // fetching all reveiw for the profile
//   useEffect(()=>{
//     let requestOptions = {
//       method: 'GET',
//       redirect: 'follow'
//     };
//     (async ()=>{
//     let res= await fetch(`http://127.0.0.1:8000/profile/allreviews/${id}/`, requestOptions)
//     let response= await res.json()
//     console.log(response)
//     if(response.length<1 && userDetails?.user_id !== parseInt(id) && userDetails?.user_id ){
//       lengthOfReviews.current= true
//     }else{
//       console.log(response)
//       for(let i of response){
//         console.log(typeof(i.sender))
//         if((i.sender===userDetails?.user_id) && userDetails?.user_id && (userDetails?.user_id !== parseInt(id)) && !followAndRate){
//           console.log("matched")
//           modalRatings.current = true
//           break
//         }
//       }  
//     }
    
//   })()
// }, [followAndRate, id, userDetails?.user_id])

  useEffect(()=>{
    if(modalRatings.current && lengthOfReviews.current){
      const interval=setInterval(()=>{
      }, 30000)      
      setTimeout(()=>clearInterval(interval), 40000)
      setRatings(true)
    }
  }, [])


function showFollowers(){
 
}

useEffect(()=>{
  if(userDetails?.user_id !== parseInt(id)){
    setsameusers(false)
  }
  document.title="Profile";
},[id, userDetails?.user_id])


// setting the rating interval
// useEffect(()=>{
//   if(
// }},[])  


  function reportProfile(){
    setstateCheck("reports")
    setThirtyContainerState("reports")
  }

  function settings(){
    setstateCheck("settings")
    setThirtyContainerState("settings")
  }

  function addProduct(){
    setproduct(true)
  }
  function reviews(){
    setstateCheck("review")
    setThirtyContainerState("review")
  }
  function changeFetchDataYourOrders(){
    if(dontdisplay !== "md"){
      setfetchData(true)
      setCombinedOrders("yourorders")
    }else{
      navigate(`/profile/${userDetails?.user_id}/yourorders`)
    }
  }
  function changeFetchDataCustomerOrders(){
    if(dontdisplay !== "md"){
      setfetchData(true)
      setCombinedOrders("customerorders")

    }else{
      navigate(`/profile/${userDetails?.user_id}/customerorders`)
    }
  }
  function deliveryFetchDatafn(){
    setdeliveryfetchData(true)
  }

  function deliverybackfn(){
    setdeliveryfetchData(false)
  }

  function allproduct(){
    // setsellersproduct(false)
    // setshowAllProduct(true)
    if(dontdisplay !== "md"){
      setsellersproduct(false)
      setshowAllProduct(true)
    }else{
      navigate(`/profile/${userDetails?.user_id}/userproducts`)
    }
  }
  
  function criticalBack(){
    setcritical(false)
    setPositivereview(false)
    setCombinedReviews(undefined)
  }

  function criticalreview(){
    if(dontdisplay !== "md"){
      setPositivereview(false)
      setcritical(true)
      setCombinedReviews("reviews/critical")
    }else{
      navigate(`/profile/${userDetails?.user_id}/reviews/critical`)
    }
  }

  function positivereviewFn(){
    if(dontdisplay !== "md"){
      setPositivereview(true)
      setcritical(true)
      setCombinedReviews("reviews/positive")
    }else{
      navigate(`/profile/${userDetails?.user_id}/reviews/positive`)
    }
  }

  console.log(combinedReviews, positivereview)

  function changeThirtyContainerState(index){
      setThirtyContainerState(!thirtyContainerState)
   
    if(index===0){
      setstateCheck("orders")
      setThirtyContainerState("orders")
    }
    else if(index===1){
      setstateCheck("inbox")
      setThirtyContainerState("inbox")

    }
    else if(index===2){setstateCheck("voucher");
    setThirtyContainerState("voucher")
  }
    else if(index===3){setstateCheck("deliveries");
    setThirtyContainerState("deliveries")
  }
    else if(index===4){setstateCheck("products")
    setThirtyContainerState("products")
  }
   
    }

  function following(){
    fetch(`https://cras.serveo.net/profile/follow/${id}/`,
    {method:'POST',
    headers:{
      'Content-Type':'application/json',
       'Authorization': 'Bearer '+ token.access
    }})
    .then((response)=>{
      response.json();
      if(response.status===200){
        setFollowed(true)
        setUserFollowers(curr=>curr+1)
      }else{
        alert("An error occured, please try again")
      }
    })
    if(!rated){
      setFollowAndRate(true)
    }
    let receiver=data?.id
    socket?.emit("sendFollowingNotification", {
      receivers:receiver,
      sender:userDetails.user_id,
      senderName:userDetails.username,
      seen:"unseen",
      type:"following",
      time: new Date(Date.now()).getHours()+":"+new Date(Date.now()).getMinutes()})
  }
 
  const unprofileFollow= async ()=>{
    let response=await fetch(`https://cras.serveo.net/profile/unfollow/${id}/`,
    {method:'POST',
    headers:{
      'Content-Type':'application/json',
       'Authorization': 'Bearer '+ token.access
    }})
    let res= await response.json()
    if(response.status===200){
      setFollowed(false)
      setUserFollowers(curr=>curr-1)

    }else{
      alert("An error occured, please try again")
    }
    console.log(res)
  }

  function unfollowing(){
    unprofileFollow()
  }
 
  function changeThirtyContainer(){
    setstateCheck("products")
    setThirtyContainerState("products")
  }
  console.log(stateCheck, thirtyContainerState)

  function back(){
    setfetchData(false)
    setCombinedOrders(undefined)
  }

  function sellersback(){
      setsellersproduct(true)
      setshowAllProduct(false)
  }

  console.log(id)

  // create a reference o the hidden file input using useref
  const hiddenFileInput= useRef(null)
  //  progamatically click the hidden file input element when the button component is called 
  function handleClick(e){
    hiddenFileInput.current.click()
  }
  
  //  call a function(passed as a prop from parent component), to handle the user-selected file
  

  function handleChange(e){
    e.preventDefault()
    // setImage({image:e.target.files})
    updateProfilePics(e)
   
  }
  function updateProfilePics(e){
    const URL=`https://cras.serveo.net/profile/update/profilepics/${id}/`
    const config= {headers:{
        'Content-Type':'multipart/form-data',
    }}
    let formData= new FormData()
    formData.append("pics", e.target.files[0],)
    console.log(formData.get("prof_pics"))
    axios.patch(URL, formData, config)
        .then(res=>{
          setdata({pics:res.data.pics})
        })
      } 
  
  function showProfileFormModal(){
    setProfileFormstate(true)
  }

  function updateProfileFormModal(){
    setUpdateProfile(true)
  }

  return (
    <>
    {response ?
    <div className={styles["profile-container"]} onClick={hideSidebar}>
      {errors?<div className={styles["error-profile"]}>
        <h1> Profile Not Found</h1>
      </div>:
      <div className={styles["profile-profile"]}>
      {(ratings || followAndRate) && <Ratings later={ratings =>setRatings(ratings)} followandrate={followAndRate =>setFollowAndRate(followAndRate)} id={id}/>}
      <div id={styles["seventy-container"]} className={theme?styles["class-dark"]:styles.class}>
        <div className={styles["profile-image-container"]}>
          <div className={styles["profile-image"]}>
            <img src={data?.pics}alt="" />
          </div>
         { sameusers &&<div className={styles["change-prof-pics"]}>
            <p onClick={handleClick} value={"Change Profile Pics"}>
            {/* <p id={styles.profchange}>Change Profile Pics</p> */}
            Change Profile Pics
              <input 
                type="file"
                // name='image' 
                ref={hiddenFileInput}
                onChange={handleChange}/>
              
              </p>
          </div>}
        </div>
        <div className={styles["parent-holder"]}>
          <div className={theme?(dontdisplay?styles["left-holder-dark-dontdisplay"]:styles["left-holder-dark"]):(dontdisplay?styles["left-holder-dontdisplay"]:styles["left-holder"])}>
            <div className={styles["top-left-holder"]}>
              <div className={styles["user-details"]}>
              { data ?<p>{data?.name}</p>: 
              <p>Guest</p> }
                <div className={styles.location}>
                  <PlaceOutlinedIcon />
                  {data?.state? <p>{data?.state}</p>:<p>Location</p> }
                </div>
                <div className={styles["following-div"]}>
                  {data &&(!sameusers && !followed && userDetails?.user_id && seller) && <p className={styles.following} onClick={following}>Follow</p>}
                  {data &&(!sameusers && followed && userDetails?.user_id) && <p className={styles.unfollow}  onClick={unfollowing}>Unfollow</p>}
                  {/* <p className={styles.unfollow}  onClick={unfollowing}>Unfollow</p>} */}
                </div>
              </div>
              <div className={styles.ratingsprofile}>
              {(data && seller) && <RatingProfile value={data.ratings_value}/>}
              </div>
              <div className={theme?styles["profile-down-part-dark"]:styles["profile-down-part"]}>
                <Link to={`/profile/${id}/allfollowers`}>
                  <p id={styles.followers}>{userFollowers}<span> Followers</span></p>
                </Link>
                <Link to={`/profile/${id}/allfollowing/`}>
                  <p>{data?.following?.length} <span>Following</span></p>
                </Link>
              </div>
            </div>
            <div className={styles["usernav-text-container"]}>
            {sameusers ? UserProfileData.map((userdata, index)=>{
            return(
                <li key={index} className={theme?styles['user-nav-text-dark']:styles['user-nav-text']} onClick={()=>{changeThirtyContainerState(index)}}>
                  { userdata.icon}
                  <span>{ userdata.title}</span>
                </li>
              )
            }):
            <div className={theme? styles["not-user-dark"]: styles["not-user"]}>
              {seller && <div className={theme?styles['user-nav-text-dark']:styles['user-nav-text']} onClick={changeThirtyContainer}>
              <ShoppingCartOutlinedIcon/> {sameusers?<span>My Products</span>:<span>All Products</span>}
            </div>}
              <div className={theme?styles['user-nav-text-dark']:styles['user-nav-text']} onClick={reportProfile}>
              <ShoppingCartOutlinedIcon/><span>Report Profile</span>
            </div>
            </div>
            }
            <div className="not-user">
              {(sameusers &&seller) && <div className={theme?styles['user-nav-text-dark']:styles['user-nav-text']} onClick={changeThirtyContainer}>
              <ShoppingCartOutlinedIcon/> <span>My Products</span>
            </div>}
            <div className={theme?styles['user-nav-text-dark']:styles['user-nav-text']} onClick={reviews}>
              <ThumbUpOutlinedIcon/><span>Reviews</span>
            </div>
            {sameusers && seller &&<div className={theme?styles['user-nav-text-dark']:styles['user-nav-text']} onClick={settings}>
              <ThumbUpOutlinedIcon/><span>Settings</span>
            </div>}
            {/* {ProfileFormstate && <ProfileForm cancelProfileForm={ProfileFormstate=>setProfileFormstate(ProfileFormstate)} />} */}
            </div>
            </div>  
          </div> 
          <div className={thirtyContainerState?(theme?styles["thirty-container-show-dark"]:styles["thirty-container-show"]):styles["thirty-container"]}>
          {stateCheck === "orders" ?<div className={thirtyContainerState==="orders" ?styles.show:styles["no-show"]}>
              {fetchData?
              <div className={styles["back-fullpage"]}>
                <p className={styles["thirty-container-buttons"]} id={styles["thirty-container-buttons"]} onClick={back}>Back</p>
                <Link to={`/profile/${userDetails?.user_id}/${combinedOrder}`}>
                <p className={styles["thirty-container-buttons"]} id={styles["thirty-container-buttons"]}>Full Page</p>
                </Link>
                </div>:<p className={theme?styles.thirtydark:styles["thirty-container-buttons"]} id={styles["thirty-container-buttons"]} onClick={changeFetchDataYourOrders}>My Orders </p>}
               {fetchData && seller && combinedOrder==="customerorders" && < YourOrders/>}
              {seller && <p className={fetchData?styles.hide:(theme?styles.thirtydark:styles["thirty-container-buttons"])} id={styles["thirty-container-buttons"]} onClick={changeFetchDataCustomerOrders}>Customer Orders</p>}
               {fetchData && seller && combinedOrder==="yourorders" &&<MyOrders />}
            </div>: undefined}

          {stateCheck === "review"?<div className={thirtyContainerState==="review" ?styles.show: styles["no-show"]}>
          {(!critical && !positivereview) ?<p className={theme?styles.thirtydark:styles["thirty-container-buttons"]} id={styles["thirty-container-buttons"]} onClick={criticalreview}>Critical</p>:
          <div className={styles["back-fullpage"]}>
            <p className={styles["thirty-container-buttons"]} id={styles["critical-back"]} onClick={criticalBack}>Back</p>
            <Link to={`/profile/${userDetails?.user_id}/${combinedReviews}`}>
            <p className={styles["thirty-container-buttons"]} id={styles["critical-back"]} onClick={criticalBack}>Full Page</p>
            </Link>
            </div>}
          {(critical && !positivereview && combinedReviews==="reviews/critical")&& <Critical />}
          {(!critical && !positivereview)&& <p className={theme?styles.thirtydark:styles["thirty-container-buttons"]} id={styles["thirty-container-buttons"]} onClick={positivereviewFn}>Positive</p>}
          {(critical && positivereview && combinedReviews==="reviews/positive")&& <Positive />}
           </div>: undefined}

           {stateCheck === "voucher" ?<div className={thirtyContainerState==="voucher" ?styles.show:styles["no-show"]}>
              {data?.voucher?<p>{data?.voucher}</p> :<p id={styles["thirty-container-buttons"]}>No Vouchers Yet</p>}
            </div>: undefined}

            {stateCheck === "deliveries" ?<div className={thirtyContainerState==="deliveries" ?styles.show:styles["no-show"] }>
              <div className={styles["delivery-children"]}>
                {deliveryfetchData?
                <div className={styles["back-fullpage"]}> 
                  <p className={styles['thirty-container-buttons']} onClick={deliverybackfn}>Back</p>
                  <p className={styles['thirty-container-buttons']} onClick={deliverybackfn}>Full Page</p>
                  </div>:
                  <p className={styles['thirty-container-buttons']} onClick={deliveryFetchDatafn} >Incoming Deliveries</p>}

                <p className={deliveryfetchData?styles.hide:styles['thirty-container-buttons']} onClick={deliveryFetchDatafn} >Pending Deliveries</p>
                <p className={deliveryfetchData?styles.hide:styles['thirty-container-buttons']} onClick={deliveryFetchDatafn} >Successful Deliveries</p>
              </div>
            </div>: undefined}

            {stateCheck === "products" ?<div className={thirtyContainerState==="products" ?styles.show: styles["no-show"]}>
              <div className="products-childers">
              {sellersproduct?
              <p className={theme?styles.thirtydark:styles["thirty-container-buttons"]} id={styles["thirty-container-buttons"]} onClick={allproduct}>All Products </p>:
              <div className={styles["back-fullpage"]}>
                <p className={styles["thirty-container-buttons"]} id={styles["thirty-container-buttons"]} onClick={sellersback}>Back</p>
                <Link to={`/profile/${userDetails?.user_id}/userproducts`}>
                <p className={styles["thirty-container-buttons"]} id={styles["thirty-container-buttons"]}>Full Page</p>
                </Link>
                </div>}
                {showAllProduct &&<SellersProduct />}
                {sellersproduct && sameusers && <p className={theme?styles.thirtydark:styles["thirty-container-buttons"]} id={styles["thirty-container-buttons"]} onClick={addProduct}>Add Products</p>}
              {products && <CreateProfileProduct setproduct={setproduct} socket={socket} followers={data?.followers}/>}
              </div>
            </div>:undefined}

            {stateCheck === "settings" ?<div className={thirtyContainerState==="settings" ?styles.show: styles["no-show"]}>
              <div className="products-childers">
                <p className={theme?styles.thirtydark:styles["thirty-container-buttons"]} id={styles["thirty-container-buttons"]} onClick={showProfileFormModal}>Become a seller </p>
                {ProfileFormstate &&<ProfileForm setProfileFormstate={setProfileFormstate}/>}
                <p className={theme?styles.thirtydark:styles["thirty-container-buttons"]} id={styles["thirty-container-buttons"]} onClick={updateProfileFormModal}>Update profile</p>
                {updateProfile && <ProfileUpdate setprofileupdate={setUpdateProfile}/>}
                <p className={theme?styles.thirtydark:styles["thirty-container-buttons"]} id={styles["thirty-container-buttons"]} onClick={"changepassword"}>Change Password</p>
                {updateProfile && <ProfileUpdate setprofileupdate={setUpdateProfile}/>}
              </div>
            </div>:undefined}            
          </div>
        </div>
      </div>
      </div>}      
    </div>: <Loading />}
    </>
  )
}

export default React.memo(UserProfile) 