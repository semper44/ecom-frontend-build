import React, { useState, useEffect } from 'react'
import { IconButton } from '@mui/material'
import { PhotoCamera } from '@mui/icons-material'
import styles from "../profiles/poductcreation/createproduct.module.css"
import Modals from '../extra comp/Modals'



function EditProduct({edit, id,category, description, price, colors, size}) {
  // const[editDetail, seteditDetail]=useState()
  const token= JSON.parse(window.localStorage.getItem("authToken"))|| null
  
  

  function close(){
    edit(false)
  }
  
  useEffect(()=>{
    document.title="Edit"
  },[])

  const editProduct= async ()=>{
    let response= await fetch(`${process.env.REACT_APP_URLS}/product/editproduct/${id}`,
    {method:'GET',
    headers:{
      'Content-Type':'application/json',
       'Authorization': 'Bearer '+ token.access
    }})
    let data = await response.json()
  }
  function change(){

  }

  function handleSubmit(){
    editProduct()
  }

  return(
      <Modals>
        <div className={styles['all-items']}>
        <button id={styles.cancel} onClick={close}>&#10005;</button>

          <div className={styles['search-items']}>
              <input type="text" 
              className={styles.product} 
              placeholder='category'
              onChange={change}
              value={category}
              name='category'/>

              <input type="text" 
              className={styles.product} 
              placeholder='description'
              onChange={change}
              value={description}
              name='description'/>

              <input type="text" 
              className={styles.colors} 
              placeholder='colors'
              onChange={change}
              value={colors}
              name='colors'/>

              <input type="text" 
              className={styles.colors} 
              placeholder='price'
              onChange={change}
              value={price}
              name='price'/>

              <input type="text" 
              className={styles.colors} 
              placeholder='size'
              onChange={change}
              value={size}
              name='size'/>

            <div className={styles["send-button"]}>
              <IconButton variant="outlined" component="label" sx={{color:'cyan', mt:"1.5rem", display:"flex", justifyContent:"center"}}>
              <input hidden accept='image/*' type="file"
              className={styles.colors} 
              onChange={change}
              name='image'/>
              <PhotoCamera />
              </IconButton>
              <button className={styles.searchcreate} onClick={handleSubmit} >Upload</button>
            </div>
          </div> 
        </div> 
      </Modals>
  )
}

export default EditProduct