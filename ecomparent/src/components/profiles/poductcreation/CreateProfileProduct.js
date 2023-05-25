import React, {useReducer, useContext, useState, useEffect} from 'react'
import styles from "./createproduct.module.css"
import { AuthContext } from '../login/LoginFetch'
import jwt_decode from "jwt-decode"
import axios from "axios"
import { IconButton } from '@mui/material'
import { PhotoCamera } from '@mui/icons-material'
import Modals from '../../extra comp/Modals'
import Loading from './CreateProductLoading'
import Message from '../../extra comp/Message'
import { ThemeData } from '../../../App'
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
    const [loading, isLoading] = useState(false)
    // const [full, setFull] = useState(false)
    const {user}= useContext(AuthContext)
    const {theme}= useContext(ThemeData)
    let userDetail
    if(user){
      userDetail= jwt_decode(user.access)  
    }
    function changeFile(e){
      setimageState({image:e.target.files})
      console.log(e.target.files[0])
      // console.log(e.data.urlOrBlob)
      setPreviewImage(window.URL.createObjectURL(e.target.files[0]))
    } 
    useEffect(()=>{
      socket?.on("offlineproductnotif", (data)=>{
        if(data){
        console.log(data)   
        setSocketData(true)
      }
  })
    }, [socket])

    useEffect(()=>{
      console.log(socket)   
      socket?.on("userproductnotif", (data)=>{
        console.log(socket)   
        if(data){
        console.log(data)   
        setSocketData(true)
      }
  })
    }, [socket])

    const token= JSON.parse(window.localStorage.getItem("authToken"))|| null


  useEffect(()=>{
    if(responseData && socketData){
      isLoading(false)
      window.location.reload()
    }
    }, [responseData, socketData])
    

  useEffect(()=>{
    if(unsuccessful){
      isLoading(false)
      // window.location.reload()

    }
    }, [unsuccessful])
  console.log(loading)

    const URL="http://127.0.0.1:8000/product/create/"
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
          console.log(res.status)
          console.log(res)
          console.log("res")
          if(res.status===200){
            productNotif()
            setResponseData(true)
            // window.location.reload()
          }else{
            setUnsuccessful(true)
          }
        })
          .catch(error=>{
            setUnsuccessful(true)
            console.log(error)
          })
         
      // console.log(res.status )
    }
    console.log(loading)

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
    console.log(previewImage)
    console.log(loading)
    // let space = ""
    // let value= space.concat("sorry, something went wrong, please try again ")
  

  return (
    // <></>
    <Modals>
      {unsuccessful && <Message 
      value={" sorry, something went wrong, please try again "}
      code={"error"}
      fn={setUnsuccessful}
       />
}
        <div className={theme?styles['all-items-dark']:styles['all-items']}>
          <button id={previewImage?styles.pcancel:styles.cancel} onClick={()=>setproduct(false)}>&#10005;</button>
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
        </div>
        {loading && <Loading />}
    </Modals>
  
  )
}

export default AdminCreate