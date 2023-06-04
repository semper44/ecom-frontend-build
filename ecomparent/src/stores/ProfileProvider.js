import React, {useState, useEffect, useContext} from 'react'
import { AuthContext } from '../components/profiles/login/LoginFetch';
import { profileContext } from './CartContxt';
import jwt_decode from "jwt-decode";


function ProfileProvider(props) {
  const[profileNotification, setProfileNotification]= useState([])
  const[seller, setSeller]= useState(false)
    
    const users= useContext(AuthContext)
    let userDetails;
    if(users.user){
      userDetails=jwt_decode(users?.user?.access)
    }
    


    useEffect(()=>{
        try{
           fetch(`http://127.0.0.1:8000/profile/profdetails/${userDetails.username}`)
          .then(res =>{
              if(!res.ok){
                  throw Error('could not fetch the data for that resource')
              }
          return res.json();
          })
          .then(data => {
            data?.map((item)=>{
              if(item.tags==="seller"){
                setSeller(true)
              }else{
                setSeller(false)

              }
              setProfileNotification(item.notification)
            })    
    });
  }catch(error){
    // 
  }
  }, [userDetails?.user_id, userDetails?.username])


  console.log(seller);
  const profilecontextvalue = {
    setProfileNotifications:setProfileNotification,
    profileNotification:profileNotification,
    seller:seller
    };

  return (
    <>
        <profileContext.Provider value={profilecontextvalue}>
            {props.children}
        </profileContext.Provider>
    </>
  )
}

export default ProfileProvider