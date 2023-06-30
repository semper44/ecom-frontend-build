import React, {useState, useEffect, memo ,useMemo} from 'react'
import { mainproductContext } from './CartContxt'


const MainProductsContext=(props)=> {
    const[featuredData, setfeatureData]=useState()    
    const[loading, setLoading]=useState(true)    
    const[error, setError]=useState(null)    
    
  
    useEffect(()=>{
       Promise.all([
        (window.location.pathname==="/" || window.location.pathname==="/electronics")&&fetch("http://127.0.0.1:8000/product/allproducts/electronics/"),
        (window.location.pathname==="/" || window.location.pathname==="/electronics")&&fetch("http://127.0.0.1:8000/product/allproducts/electronics/"),
       
      ])
      .then(([resfeatured, resReviewed])=>{
        if(!resfeatured.ok || !resReviewed.ok){
          throw Error("Couldn't fetch data, please retry")
        };
        if (resfeatured.status===200 && resReviewed.status===200){
            setLoading(false)
        }
      return Promise.all([resfeatured.json(), resReviewed.json()])})
      .then(([datafeatured, dataReviewed])=>{
        
        
        if(datafeatured ){
          setfeatureData(datafeatured)
        }
        })
        .catch(err=>{
          setLoading(false)
          setError(err.message)
      })   
    },  [])

       const memoizedValue = useMemo(
        () => ({
          featureData: featuredData,
          loading: loading,
          error: error,
        }),
        [featuredData, loading, error]
      );

       

  return (
    <>
    <mainproductContext.Provider value={memoizedValue}>
          {props.children}
    </mainproductContext.Provider >
    </>
  )
}

export default memo(MainProductsContext)