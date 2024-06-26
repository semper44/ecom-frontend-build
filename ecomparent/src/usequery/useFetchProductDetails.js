import { useState, useEffect} from 'react'


function useFetchProductDetails(url,urls) {
    const[data, setData]=useState()    
    const[productDetails, setProductDetails]=useState()    
    const[loading, setLoading]=useState(true)    
    const[error, setError]=useState(null)    


    // let url= "http://127.0.0.1:8000/product/allproducts/electronics/"
    // let urls2= "http://127.0.0.1:8000/product/allproducts/electronics/"

    useEffect(()=>{        
        Promise.all([
            fetch(url),
            fetch(urls),
          ])
          .then(([resProductDetails, resData ])=>{
            // 

          if(!resData.ok || !resProductDetails.ok){
              throw Error("Couldn't fetch data, please retry")
            };
          if (resData.status===200 && resProductDetails.status===200){
              setLoading(false)
          }
          return Promise.all([ resProductDetails.json(), resData.json()])

        }
          // , resProductDetails.json())
        )
          .then(([dataProductDetails,data])=>{
            
            
            if(dataProductDetails){
              setProductDetails(dataProductDetails)
            }
            if(data){
              setData(data)
              
            }
            // 
            // setPost(dataPosts)
            })
            .catch(err=>{
                setLoading(false)
                setError(err.message)
            })   
    }, [loading, url, urls]);

  return {data, loading, productDetails, error} 
}

export default useFetchProductDetails

   