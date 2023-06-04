import React, {useState} from 'react'
import Modals from '../../extra comp/Modals'
import axios from 'axios'
import Delete from '../../admin/Delete'

function DeleteProfile() {
    const [loading, isLoading] = useState(false)
    const [error, setError] = useState(null)


    const token= JSON.parse(window.localStorage.getItem("authToken"))|| null
    const URL="http://127.0.0.1:8000/product/creat/"
    const config= {headers:{
       'Content-Type':'multipart/form-data',
       'Authorization': 'Bearer '+ token?.access
    }}
    axios.post(URL,config)
        .then(res=>{
          
          
          
          if(res.status===200){
            isLoading(false)
          }else{
            
          }
        })
        .catch(error=>{
          
          setError(error)
          isLoading(false)
          
        })
  return (
    <>
        <Modals>

        </Modals>
    </>
  )
}

export default DeleteProfile