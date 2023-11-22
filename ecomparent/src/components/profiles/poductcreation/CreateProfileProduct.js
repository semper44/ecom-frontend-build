import React, {useReducer, useContext, useState, useEffect} from 'react'
import styles from "./createproduct.module.css"
import { AuthContext } from '../login/LoginFetch'
import jwt_decode from "jwt-decode"
import axios from "axios"
import { IconButton } from '@mui/material'
import { PhotoCamera } from '@mui/icons-material'
import Modals from '../../extra comp/Modals'
import Message from '../../extra comp/Message'
import { ThemeData } from '../../../App'
import Loading from '../../extra comp/NewLoadingModal'
// import FullPage from './FullPage'


// import axiosInstance  from '../../axios'

const initialValues={
    category:"",
    price:"",
    size:"",
    description:"",
    image:"",
}

function reduce(state, action){
  const n= action.seller
    return{ ...state, [action.name]:action.value, seller:n,  }
}


function AdminCreate({setproduct, socket, followers}) {
    const [state, dispatch] = useReducer(reduce, initialValues)
    const [imageState, setimageState] = useState({image:""})
    const [previewImage, setPreviewImage] = useState()
    const [socketData, setSocketData] = useState(false)
    const [unsuccessful, setUnsuccessful] = useState(false)
    const [responseData, setResponseData] = useState(false)
    const [reload, setReload] = useState(false)
    const [loading, isLoading] = useState(false)
    const [error, setError] = useState(null)
    const {user}= useContext(AuthContext)
    const {theme}= useContext(ThemeData)
    let userDetail
    if(user){
      userDetail= jwt_decode(user.access)  
    }
    function changeFile(e){
      setimageState({image:e.target.files})
      
      // 
      setPreviewImage(window.URL.createObjectURL(e.target.files[0]))
    } 
    useEffect(()=>{
      socket?.on("offlineproductnotif", (data)=>{
        if(data){
           
        setSocketData(true)
      }
  })
    }, [socket])

    useEffect(()=>{
         
      socket?.on("userproductnotif", (data)=>{
           
        if(data){
           
        setSocketData(true)
      }
  })
    }, [socket])

    const token= JSON.parse(window.localStorage.getItem("authToken"))|| null


  useEffect(()=>{
    if(responseData && socketData){
      isLoading(false)
      window.location.reload()
      setReload(true)
    }
    }, [responseData, socketData])
    

    const URL=`${process.env.REACT_APP_URLS}/product/create/`
    const config= {headers:{
       'Content-Type':'multipart/form-data',
       'Authorization': 'Bearer '+ token?.access
    }}
    function handleSubmit(e){
      e.preventDefault();
      isLoading(true)
      let parsedSize;
      if(state.size){
        parsedSize= parseInt(state.size)
      }else{
        parsedSize= ""
      }
      let formData= new FormData()
      formData.append("description", state.description)
      formData.append("price", state.price)
      formData.append("category", state.category)
      formData.append("sellers", parseInt(state.seller))
      formData.append("size",  parsedSize)
      formData.append("sellerName",  userDetail.username)
      imageState && formData.append("image", imageState.image[0])
      axios.post(URL, formData, config)
        .then(res=>{
          
          
          
          if(res.status===200){
            productNotif()
            setResponseData(true)
          }else{
            setUnsuccessful(true)
            isLoading(false)
          }
        })
        .catch(error=>{
          setUnsuccessful(true)
          setError(error)
          isLoading(false)
          
        })
         
      // 
    }
    

    const productNotif= async()=>{
      socket?.emit("newproduct", {
        senderName:userDetail.username,
        followers:followers,
        sender:userDetail.user_id,
        seen:"unseen",
        type:"product",
        time: new Date(Date.now()).getHours()+":"+new Date(Date.now()).getMinutes()

      });
    }

    function change(e){
        const {name, value}=e.target
        const action={
        seller:userDetail.user_id,
        name:name,
        value:value
        }
        dispatch(action)
    }
    
    
    // let space = ""
    // let value= space.concat("sorry, something went wrong, please try again ")
  

  return (
    <Modals >
      {unsuccessful && <Message 
      value={"Sorry, request failed"}
      code={"error"}
      fn={setUnsuccessful}
       />
}
      {reload && <Message 
      value={"product created"}
      code={"success"}
      fn={setResponseData}
       />
}
        <div className={theme?styles['all-items-dark']:styles['all-items']}>
          <button id={styles.cancel} onClick={()=>setproduct(false)}>&#10005;</button>
          <div className={styles['search-items']}>
            <input type="text" 
            className={styles.product} 
            placeholder='category'
            onChange={change}
            name='category'/>

            <input type="text" 
            className={styles.product} 
            placeholder='description'
            onChange={change}
            name='description'/>

            <input type="text" 
            className={styles.colors} 
            placeholder='colors'
            onChange={change}
            name='colors'/>

            <input type="text" 
            className={styles.colors} 
            placeholder='price'
            onChange={change}
            name='price'/>

            <input type="text" 
            className={styles.colors} 
            placeholder='size'
            onChange={change}
            name='size'/>
            
            {previewImage &&  <div className={styles.preview} style={{width:"140px", height:"100px", marginTop:"10px", cursor:"pointer"}}>
              <img src={previewImage} alt='' style={{width:"100%", height:"100%"}}></img>
            </div>}
            <div className={styles["send-button"]}>
              <IconButton variant="outlined" component="label" sx={{color:'cyan', mt:"1.5rem", display:"flex", justifyContent:"center"}}>
              <input hidden accept='image/*' type="file"
              className={styles.colors} 
              onChange={changeFile}
              name='image'/>
              <PhotoCamera />
              </IconButton>
              <button className={styles.searchcreate} onClick={handleSubmit} >Upload</button>
            </div>
          </div>
          {loading && <Loading />}
        </div>
    </Modals>
  
  )
}

export default AdminCreate