import React, {useEffect, useContext, memo} from 'react'
import styles from "./main.module.css"
import { ThemeData } from '../../App'
import pexels from "../../ecom_images/pexels1.jpeg"
import  Section from "../extra comp/section/Section"
import Categories from '../categories/Categories'
import{Link} from "react-router-dom"
// import ProductsFromCategories from "./ProductsFromCategories"
import { showsidebarcontext } from '../../stores/CartContxt'
import { mainproductContext } from '../../stores/CartContxt'
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import { Slider } from '../extra comp/ReactSwiper'
import Loading from '../extra comp/Loading'
import { screensizecontext } from '../../stores/CartContxt'
import MainProducts from './MainProducts'
import {Images} from './ImageSlider'
import Aos from 'aos'
import "aos/dist/aos.css"





function Main() {
  const {theme}= useContext(ThemeData)
  const {dontdisplay}= useContext(screensizecontext)
  // const {promoloading}= useContext(promoData)
  const {sidebar,  hideSidebar}= useContext(showsidebarcontext)
  const {featureData,loading, error}= useContext(mainproductContext)
  ;


  useEffect(()=>{document.title="Home"}, [])
  
 

  function open(){
    if(sidebar){
      hideSidebar()
    }
  }

    useEffect(()=>{
      Aos.init({duration:1000})
    }, [])
  return (
    <>
    {!loading?
    <>
    {error && <h1 id={styles.errors}>{error}</h1> }
    {featureData &&<div className={styles.parent} onClick={open}>
      {/* <div className={styles['main-pics']}></div> */}
      <div className={styles["image-slide"]}>
        <Images />
      </div>
      <div className={styles['pre-link-text']} id={theme?styles.id:styles.light}>
        <h1>Catego<span>ries</span></h1>
      </div>

      <div className={styles['category-props']}>
        <Categories img={pexels} category={"Electronics"}/> 
        <Categories img={pexels} category={"Featured"}/> 
        {/* <CategoriesProp img={pexels} category={data.categories} price={data.price}/> 
        <CategoriesProp img={pexels} category={data.categories} price={data.price}/>  */}
      </div>
      <div className='icon-container'>
          <Link to="/categories">
            <div className="icons">
              <ArrowRightOutlinedIcon fontSize='medium' sx={{mb:"10px", color:theme?"cyan":undefined}}/>
            </div>
          </Link>
      </div>


      <div className={styles['pre-link-text']} id={theme?styles.id:styles.light}>
        <h1>Feat<span>ured</span></h1>
      </div>
      <div className={styles.props} data-aos="fade-right">
      {dontdisplay?<Slider/>: <MainProducts />}
      </div>
        <div className="icon-container">
          <Link to="/featured">
            <div className="icons">
              <ArrowRightOutlinedIcon fontSize='medium' sx={{mb:"10px", color:theme?"cyan":undefined}}/>
            </div>
          </Link>
        </div>

      <div className={styles.section}>
        <Section />
      </div>
      <div className={styles['pre-link-text']} id={theme?styles.id:styles.light}>
        <h1>Promo<span>Deals</span></h1>
      </div>
      <div className={styles.props} data-aos="fade-right">
      {dontdisplay?<Slider/>: <MainProducts />}
      </div>
      <div className="icon-container">
        <Link to="/promo-deals">
          <div className="icons">
          <ArrowRightOutlinedIcon fontSize='medium' sx={{mb:"10px", color:theme?"cyan":undefined}}/>
          </div>   
        </Link>
      </div>
    </div>}</>: <Loading />}
    </>
  )
}

export default memo(Main)