import React, { useContext, useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import styles from "./productfromcategories.module.css"
import Loading from "../extra comp/Loading"
import { ThemeData } from '../../App';
import { mainproductContext } from '../../stores/CartContxt';
import { screensizecontext } from '../../stores/CartContxt';
// import { promoData } from '../../stores/CartContxt';




function MainProducts() {
  const[data, setData]= useState()
  const {theme}= useContext(ThemeData)
  const {screenWidth}= useContext(screensizecontext)
  // const[screenWidth, setScreenWidth]= useState(window.innerWidth)
  const {featureData, loading, error}= useContext(mainproductContext)

    // if(gridbxlxl){
    //   featuredata.slice(0,10)
    // }
    // else if(gridlg){
    //   featuredata.slice(0,8)
    // }
    // else if(!gridlg && !gridbxlxl){
    //   featuredata.slice(0,6)

    // }
    ;
    
    // useEffect(()=>{
    //   const handleResize = () => {
    //     setScreenWidth(window.innerWidth)
    //   }
    //   window.addEventListener("resize", handleResize);
  
    //   return ()=>{
    //     window.removeEventListener("resize", handleResize)
    //  }
    // }, [screenWidth])


    useEffect(()=>{
      if(screenWidth>810){
        setData(featureData.slice(0,6))}
      // else if(screenWidth>1225 && screenWidth<=1500){
      //   setData(featureData.slice(0,8))}
      if(screenWidth>1225 && screenWidth<=1500){
        ;
        setData(featureData.slice(0, 8))
      }
      if(screenWidth>1500){
        ;
        setData(featureData.slice(0, 10))
      }
    }, [featureData, screenWidth])


  return (
    <>
     {error && <h1 id={styles.errors}>{error}</h1> }
  {!loading?<div className={styles["slides-parent"]}>
   {data && data.map((item)=>{
  return(
      <>
      <div className={theme? styles["slides-holder-dark"]:styles["slides-holder"]} key={item.id}>
        <Link to={`/productdetails/${item.id}`}>
          <div className={styles["related-products-image"]}>
            <img src={item.image} alt={item.description} />
          </div>
        </Link>
          <div className={styles["mainProduct-others"]}>
              <h4 id={styles["p-category"]}>{item.category}</h4>
              <h2 id={theme?styles["h2-price-dark"]:styles["h2-price"]}>{item.price}</h2>
              <p>{item.tittle}</p>
          </div>
        
      </div>
       
      </>


  );
  })}
   </div>: <Loading />}
    </>
    )
}

export default MainProducts