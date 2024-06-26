import React, { useContext, useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import Loading from '../../extra comp/Loading'
import styles from "./confrmandupdateorders.module.css"
import { cartContxt } from '../../../stores/CartContxt'


function ConfirmAndUpdateOrder() {
    const[searchParams, setSearchParams]=useSearchParams()
    const[dataStatus, setDataStatus]= useState(false)
    const[requestStatus, setRequestStatus]= useState(null)
    const[data, setData]= useState(null)
    const{cartReset}=useContext(cartContxt)

    const reference=searchParams.get("trxref")
    const{cart_id}= useParams()
    
  useEffect(()=>{document.title="Confirm Order"
  },[])
    // cartReset
    
    let formdata= new FormData()
    formdata.append("reference", reference)
    formdata.append("cart_id", cart_id)

    const requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow'
    };
    useEffect(()=>{
      (async()=>{
          let data= await fetch(`${process.env.REACT_APP_URLS}/product/confirmandupdateorder/`, requestOptions)
          
          if(data.status===200){
            setDataStatus(true)
            setRequestStatus("success")
            cartReset()
            window.localStorage.removeItem("MY_CARTSTATE")
          }else{
            setDataStatus(false)
            setRequestStatus("failed")
          }
          let result= await data.json()
          setData(result.msg)
          
        })()
    }, [])

  return (
    <>
    {dataStatus ?
      <div className={styles["purchase-successful"]}>
          <p>{data}</p>
      </div>:
      < Loading />
    }
    </>
  )
}

export default ConfirmAndUpdateOrder