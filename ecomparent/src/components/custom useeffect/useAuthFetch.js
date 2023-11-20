import {useEffect, useState} from "react"




function useAuthFetch(url, method) {
    const[data, setData]= useState()
    const[token, settoken]= useState()
     
    useEffect(()=>{
      settoken(JSON.parse(window.localStorage.getItem("authToken"))|| null)

    }, [])
    useEffect(()=>{ 
        editProduct()
      }, [])
      
    const editProduct= async ()=>{
    let response= await fetch(url,
    {method:method,
    headers:{
        'Content-Type':'application/json',
        'Authorization': 'Bearer '+ token?.access
    }})
    let datum = await response.json()
    setData(datum)
    }
    
  return {data}
   
  
}

export default useAuthFetch
