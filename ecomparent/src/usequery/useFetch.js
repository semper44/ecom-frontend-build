import { useState, useEffect} from 'react'


function useFetch(url, requestOptions) {
    const[data, setData]=useState()    
    const[loading, setLoading]=useState(true)    
    const[error, setError]=useState(null)    

    

    useEffect(()=>{
        // let requestOptions = {
        //     method: 'GET',
        //     redirect: 'follow'
        // };
        let errorStatus= false
        fetch(url, requestOptions)
            .then(res=>{
                if(!res.ok){
                    setLoading(false)
                    if(res.status===417){
                        errorStatus=true
                    }else{
                        throw Error("Couldn't fetch data, please retry")
                    }                }
                if (res.status===200){
                    setLoading(false)
                }
                return res.json()
            })
            .then(response => {
                if(errorStatus){
                    setError(response.msg)
                }else{
                    setData(response)
                }
                }
            )
            .catch(err=>{
                setLoading(false)
                setError(err.message)
            })   
    }, [url]);
    
    

  return {data, loading, error} 
}

export default useFetch