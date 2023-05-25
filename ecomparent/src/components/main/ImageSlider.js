// import React, {useEffect} from 'react'
// import 'swiper/swiper.min.css';
// import Swiper from 'swiper';
// import {SwiperSlide } from "swiper/react";
import image from "../../ecom_images/3.jpg"
import image2 from "../../ecom_images/3.jpg"
import image3 from "../../ecom_images/R.jpg"
import bag from "../../ecom_images/bag.jpg"
// import 'swiper/css/autoplay';

//           <div className={styles["image-slider-parent"]}>
//             <img src={image} alt="img" />
//           </div>      
//       </div>
//     </div>
//   );
// };
import 'swiper/swiper.min.css';
// import Swiper from 'swiper';
import { Swiper,SwiperSlide } from "swiper/react";


export function Images() {
  
  return (
    <>
    <Swiper spaceBetween={30} centeredSlides={true} autoplay={{
  "delay": 4500,
  "disableOnInteraction": false
}} pagination={{
  "clickable": true
}} navigation={true} className="mySwiper" style={{marginTop:"1.6rem"}}>
  <SwiperSlide>
    <img src={image} alt="img" />
    <h2 style={{color:"cyan",position:"absolute", top:"50%", left:"40%"}}>This is a test text</h2>
    </SwiperSlide>
    <SwiperSlide>
      <img src={image} alt="img" />
      <h2 style={{color:"cyan",position:"absolute", top:"50%", left:"40%"}}>This is a test text</h2>
      </SwiperSlide>
    <SwiperSlide>
      <img src={image} alt="img" />
      <h2 style={{color:"cyan",position:"absolute", top:"50%", left:"40%"}}>This is a test text</h2>
      </SwiperSlide>
    <SwiperSlide>
      <img src={image} alt="img" />
      <h2 style={{color:"cyan",position:"absolute", top:"50%", left:"40%"}}>This is a test text</h2>
      </SwiperSlide>
  </Swiper>
    </>
  )
}