// import React, {useEffect} from 'react'
// import 'swiper/swiper.min.css';
// import Swiper from 'swiper';
// import {SwiperSlide } from "swiper/react";
import image from "../../ecom_images/3.jpg"
import image3 from "../../ecom_images/R.jpg"
import bag from "../../ecom_images/bag.jpg"
import coat from "../../ecom_images/R.jpg"
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
      <img src={coat} alt="img" />
        <h2 style={{color:"white",position:"absolute", top:"70%", left:"10%"}}>
            WELCOME TO OUR STORE<br/>
            <p style={{width:"fit-content", backgroundColor:"cyan", color:"white", cursor:"pointer", padding:"10px", borderRadius:"5px"}}>
            Shop Now!</p>
        </h2>
    </SwiperSlide>
    <SwiperSlide>
      <img src={bag} alt="img" />
        <h2 style={{color:"white",position:"absolute", top:"70%", left:"10%"}}>
          Prices that rocks! <br /> 
          <p style={{width:"fit-content", backgroundColor:"cyan", color:"white", cursor:"pointer", padding:"10px", borderRadius:"5px"}}>
            View Products
          </p>
        </h2>
        
    </SwiperSlide>
    <SwiperSlide>
      <img src={image3} alt="img" style={{objectFit:"cover/center"}} />
      <h2 style={{color:"white",position:"absolute", top:"80%", left:"5%"}}>
        Huge sales ongoing...<br/>
        <p style={{width:"fit-content", backgroundColor:"cyan", color:"white", cursor:"pointer", padding:"10px", borderRadius:"5px"}}>
          Learn More
        </p>
      </h2>
    </SwiperSlide>
    <SwiperSlide>
      <img src={image} alt="img" />
      <h2 style={{color:"white",position:"absolute", top:"70%", left:"10%"}}>
        New Products daily<br />
        <p style={{width:"fit-content", backgroundColor:"cyan", color:"white", cursor:"pointer", padding:"10px", borderRadius:"5px"}}>Sell Now!</p>
      </h2>
      </SwiperSlide>
  </Swiper>
    </>
  )
}