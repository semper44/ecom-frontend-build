import React, {useReducer, useContext, useState} from 'react'
import styles from "../poductcreation/createproduct.module.css"
import { AuthContext } from '../login/LoginFetch'
import jwt_decode from "jwt-decode"
import axios from "axios"
import { IconButton } from '@mui/material'
import { PhotoCamera } from '@mui/icons-material'
import Modals from '../../extra comp/Modals'
import Loading from '../poductcreation/CreateProductLoading'
import { ThemeData } from '../../../App';
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


function AdminCreate({setprofileupdate}) {
    const [state, dispatch] = useReducer(reduce, initialValues)
    const [imageState, setimageState] = useState({image:""})
    const [previewImage, setPreviewImage] = useState()
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
      
      // 
      setPreviewImage(window.URL.createObjectURL(e.target.files[0]))
    } 
    const URL="http://127.0.0.1:8000/product/create/"
    const config= {headers:{
       'Content-Type':'multipart/form-data',
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
      imageState && formData.append("image", imageState.image[0])
      axios.post(URL, formData, config)
        .then(res=>{
          if(res.status===200){
            setResponseData(true)
            // window.location.reload()
          }
        })
          .catch(error=>{
            
          })
         
      // 
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
    
    

  

  return (
    // <></>
    <Modals>
        <div className={theme? styles['all-items-dark']:styles['all-items']}>
          <button id={previewImage?styles.pcancel:styles.cancel} onClick={()=>setprofileupdate(false)}>&#10005;</button>
          <div className={styles['search-items']}>
            <input type="text" 
            className={styles.product} 
            placeholder='Location'
            onChange={change}
            name='location'/>

            <div className={styles["send-button"]}>
              <button className={styles.searchcreate} onClick={handleSubmit} >Update</button>
            </div>
          </div>
        </div>
        {loading && <Loading />}
    </Modals>
  
  )
}

export default AdminCreate