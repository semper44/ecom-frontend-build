import React, { useContext, useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import styles from "./productfromcategories.module.css"
import Loading from "../extra comp/Loading"
import { ThemeData } from '../../App';
import { mainproductContext } from '../../stores/CartContxt';
import { screensizecontext } from '../../stores/CartContxt';
// import { promoData } from '../../stores/CartContxt';




function MainProducts() {
  const {theme}= useContext(ThemeData)
  const {gridlg, gridbxlxl,gridxl, gridxlxl}= useContext(screensizecontext)
  const {featuredata, loading, error}= useContext(mainproductContext)

    // if(gridbxlxl){
    //   featuredata.slice(0,10)
    // }
    // else if(gridlg){
    //   featuredata.slice(0,8)
    // }
    // else if(!gridlg && !gridbxlxl){
    //   featuredata.slice(0,6)

    // }


  console.log(gridlg, gridbxlxl,gridxlxl);

  return (
    <>
     {error && <h1 id={styles.errors}>{error}</h1> }
  {!loading && featuredata?<div className={styles["slides-parent"]}>
   {(((gridxl &&!gridxlxl)&&featuredata.slice(0,8))||((gridlg&&!gridxlxl && !gridxl)&&featuredata.slice(0,6))||(gridxlxl &&featuredata.slice(0,10))).map((item)=>{
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