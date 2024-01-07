import React, {useState, useContext, useEffect} from 'react'
import { Link } from 'react-router-dom'
import Loading from '../extra comp/Loading'
// import styles from "./categoriesprops.module.css"
import { ThemeData } from '../../App'
import image from "../../ecom_images/boys-clothes.jpg"
import styles from "../main/productfromcategories.module.css"



function CategoriesProp(props) {
  const[data, setData]=useState([])
  const[error, setError]=useState(null)
  const[loading, setLoading]=useState(true)
  // const {dontdisplay}= useContext(screensizecontext)
  const {theme}= useContext(ThemeData)
  
  useEffect(()=>{document.title="Categories"
  },[])

  useEffect(()=>{

    fetch(`${process.env.REACT_APP_URLS}/product/categories/`)
    .then((res)=>{
        if(res.ok){
            setLoading(false)
        }else{
            throw Error("Couldn't fetch data, please retry")
        }
        return res.json()})
    .then((result)=>{
      
      if(result){
        setData(result)
        }
    })
    .catch((err)=>{
        setLoading(false)
        setError(err.message)
    })
    }, [])
  return (
    <>
    {error && <h1 id={styles.errors}>{error}</h1> }
  {!loading ?<div id={styles["related-products-parents"]} className={theme?styles.id:undefined}>
   {data?.map((item, index)=>{
  return(
      <div key={item.id} className={theme? styles["holder-dark"]:styles.holder} >
        <Link to={`/${item}`}>
          <div className={styles["related-products-image"]}>
            <img src={image} alt={"descrip"} />
          </div>
          <p>{item}</p>
        </Link>        
      </div>

  );
  })}
   </div>: <Loading />}
    </>
  )
}

export default CategoriesProp