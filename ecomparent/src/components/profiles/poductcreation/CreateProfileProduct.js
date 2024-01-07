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
    const [responseData, setResponseData] = useState(false)
    const [unsuccessful, setUnsuccessful] = useState(false)
    const [unsuccessful2, setUnsuccessful2] = useState(false)
    const [response, setResponse] = useState(false)
    const[permissionDenied2, setPermissionDenied2]= useState(false)
    const[permissionDenied, setPermissionDenied]= useState(false)
    const [selectedCategory, setSelectedCategory] = useState('electronics');
    const [loading, isLoading] = useState(false)
    const {user}= useContext(AuthContext)
    const {theme}= useContext(ThemeData)
    let userDetail
    if(user){
      userDetail= jwt_decode(user.access)  
    }

    function changeFile(e){
      setimageState({image:e.target.files})
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
    if(unsuccessful){
      
      setUnsuccessful2(true)
    }else if(permissionDenied){
      setPermissionDenied2(true)
      setproduct(false)
      

    }
    }, [permissionDenied, setproduct, unsuccessful])
    

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
      formData.append("category", selectedCategory)
      formData.append("sellers", parseInt(state.seller))
      formData.append("size",  parsedSize)
      formData.append("sellerName",  userDetail.username)
      imageState && formData.append("image", imageState.image[0])
      axios.post(URL, formData, config)
        .then(res=>{
          isLoading(false)
          if(res.status===200){
            productNotif()
            setResponseData(true)
          }else{           
            setUnsuccessful(true)
          }
        })
        .catch(error=>{
          setUnsuccessful(true)
          isLoading(false) 
          if(error.response.status === 401 || error.response.status === 403){
            setPermissionDenied(true)
          }
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
    const changeSelect = (e) => {
      setSelectedCategory(e.target.value);
    };
    function change(e){
        const {name, value}=e.target
        const action={
        seller:userDetail.user_id,
        name:name,
        value:value
        }
        dispatch(action)
    }
    
    useEffect(()=>{
    if(responseData && socketData){
      isLoading(false)
      setResponse(true)
      setproduct(false)
      alert("product created")
    }
    }, [responseData, setproduct, socketData])
    
    
    // let space = ""
    // let value= space.concat("sorry, something went wrong, please try again ")
    console.log(responseData, socketData,response);

  return (
    <>
    <Modals >
      {permissionDenied2 && <Message 
      value={"Sorry, you have been blocked from using this service or do not have the necessary permissions"}
      code={"error"}
      fn={setPermissionDenied2}
       />}

      {unsuccessful2 && <Message 
      value={"Sorry, request failed"}
      code={"error"}
      fn={setUnsuccessful2}
      />
      }

      {/* {check && <Message 
      value={"product created"}
      code={"success"}
      fn={setResponse}
      />
      } */}

    {loading && <Loading />}
        <div className={theme?styles['all-items-dark']:styles['all-items']}>
          <button id={styles.cancel} onClick={()=>setproduct(false)}>&#10005;</button>
          <div className={styles['search-items']}>
          <select
            className={styles.product}
            id ={styles.product}
            onChange={changeSelect}
            value={selectedCategory} // Use the value prop to control the selected option
            name='category'
          >
            <option value='' disabled>Select a category</option>
            <option value='electronics'>Electronics</option>
            <option value='baby product'>Baby product</option>
            <option value='computing'>Computing</option>
            <option value='home & office'>home & office</option>
            <option value='game'>Game</option>
            <option value='fashion'>Fashion</option>
          </select>

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
            
            {previewImage &&  <div className={styles.preview} style={{width:"140px", height:"100px", cursor:"pointer"}}>
              <img src={previewImage} alt='' style={{width:"100%", height:"100%"}}></img>
            </div>}
            <div className={styles["send-button"]}>
              <IconButton variant="outlined" component="label" sx={{color:'cyan', display:"flex",padding:"0", justifyContent:"center"}}>
              <input hidden accept='image/*' type="file"
              className={styles.colors} 
              onChange={changeFile}
              name='image'/>
              <PhotoCamera sx={{margin:"0", padding:"0"}}/>
              </IconButton>
              <button className={styles.searchcreate} onClick={handleSubmit} >Upload</button>
            </div>
          </div>
          
        </div>
    </Modals>
    </>
  )
}

export default AdminCreate