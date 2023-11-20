import {useEffect, useState} from 'react'

function useFetchToken(url, method) {
    const[data, setData]=useState()
    const[error, setError]=useState(null)
    const[loading, setLoading]=useState(true)

    const token= JSON.parse(window.localStorage.getItem("authToken"))|| null
    
    // let response= await fetch(`${process.env.REACT_APP_URLS}/product/editproduct/${id}`,
   useEffect(()=>{
        let errorStatus=false

        fetch(url,
        {method:method,
        headers:{
        'Content-Type':'application/json',
        'Authorization': 'Bearer '+ token?.access
        }})
        .then((response)=>{
            if(!response.ok){
                setLoading(false)
                if(response.status===417){
                    errorStatus=true
                }else{
                    throw Error("Couldn't fetch data, please retry")
                }
            }
            if (response.status===200){
                setLoading(false)
            }       
            ;     
            return response.json()
        })
        .then((data)=>{
            ;     
            if(errorStatus){
                setError(data.msg)
            }else{
                setData(data)
            }
        })
        .catch(err=>{
            setLoading(false)
            setError(err.message)
        })  
    }, [method, token?.access, url] ) 
    
    ;
    return {loading, error, data} 
}

export default useFetchToken


// let response= await fetch(`${process.env.REACT_APP_URLS}/product/editproduct/${id}`,
 



