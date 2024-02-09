import React, {useState, useEffect, useContext} from 'react'
import { AuthContext } from '../components/profiles/login/LoginFetch';
import { profileContext } from './CartContxt';
import jwt_decode from "jwt-decode";


function ProfileProvider(props) {
  const[profileNotification, setProfileNotification]= useState([])
  const[changed, setChanged]= useState(false)
  const[seller, setSeller]= useState(false)
  const[image, setImage]= useState('')
    
    const users= useContext(AuthContext)
    let userDetails;
    if(users.user){
      userDetails=jwt_decode(users?.user?.access)
    }
    


    useEffect(()=>{
        try{
           fetch(`${process.env.REACT_APP_URLS}/profile/profdetails/${userDetails.username}`)
          .then(res =>{
              if(!res.ok){
                  throw Error('could not fetch the data for that resource')
              }
          return res.json();
          })
          .then(data => {
            setImage(data.image_url)
            setProfileNotification(data.notification)
            if(data.tags === "seller"){
              setSeller(true)
            }
            setChanged(!changed)   
    });
  }catch(error){
    //   }
  }}, [userDetails?.user_id, userDetails?.username])
    
  const profilecontextvalue = {
    setProfileNotifications:setProfileNotification,
    profileNotification:profileNotification,
    changed:changed,
    seller:seller,
    image:image,
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