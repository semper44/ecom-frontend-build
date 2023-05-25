import React, {useState, useEffect} from 'react'
import { mainproductContext } from './CartContxt'


function MainProductsContext(props) {
    const[revieweData, setrevieweData]=useState()    
    const[featuredData, setfeatureData]=useState()    
    const[loading, setLoading]=useState(true)    
    const[error, setError]=useState(null)    
    
  
    useEffect(()=>{
      Promise.all([
        fetch("https://cras.serveo.net/product/allproducts/electronics/"),
        fetch("https://cras.serveo.net/product/allproducts/electronics/"),
       
      ])
      .then(([resfeatured, resReviewed])=>{
  console.log(resfeatured.status, resReviewed.status)
  
        if(!resfeatured.ok || !resReviewed.ok){
          throw Error("Couldn't fetch data, please retry")
        };
      if (resfeatured.status===200 && resReviewed.status===200){
          setLoading(false)
      }
      return Promise.all([resfeatured.json(), resReviewed.json()])})
      .then(([datafeatured, dataReviewed])=>{
        console.log(datafeatured)
        console.log(dataReviewed)
        if(datafeatured ){
          setfeatureData(datafeatured)

          // setrevieweData(dataReviewed)
        }
        // if(dataReviewed && dataReviewed){
        //   setfeatureData(datafeatured)
        //   setrevieweData(dataReviewed)
        // }
        })
        .catch(err=>{
          setLoading(false)
          setError(err.message)
      })  
      
        
       },  [])

       console.log(featuredData)
       console.log(revieweData)

  return (
    <>
    <mainproductContext.Provider value={{
        reviewedata:revieweData, 
        featuredata:featuredData,
        loading:loading,
        error:error
        }} >
          {props.children}
    </mainproductContext.Provider >
    </>
  )
}

export default MainProductsContext