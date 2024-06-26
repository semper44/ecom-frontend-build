import { useEffect, useContext } from 'react';
import { register } from 'swiper/element/bundle';
import styles from "../main/productfromcategories.module.css"
import { ThemeData } from '../../App';
import { Link } from 'react-router-dom';
import { mainproductContext } from '../../stores/CartContxt';
import 'swiper/swiper.min.css';
import Swiper from 'swiper';

register();

export const Slider = () => {
  const {theme}= useContext(ThemeData)
  const {featureData}= useContext(mainproductContext)

  useEffect(() => {
    const swiper = new Swiper('.swiper-container', {
      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 2,
          spaceBetween: 5
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 2,
          spaceBetween: 5
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 'auto',
          spaceBetween: 10
        }
        // Add more breakpoints as needed
      }
    }
    );
  }, []);
  
  return (
    <div className="swiper-container" style={{ display: 'flex', overflow: 'hidden' }}>
      <div className="swiper-wrapper">
      {featureData&&(featureData.slice(0, 5)).map((slide) => (
        <div key={slide.image} className="swiper-slide" style={{ width: '80%', height: '80%', maxWidth: '300px', }}>
          <Link to={`/productdetails/${slide.id}`} style={{textDecoration:'none'}}>
            <div className={styles["related-products-pics"]}>
              <img src={slide.image_url} alt={slide.description} />
            </div>
    
            <div className={styles["others"]}>
                <h4 id={styles["p-category"]}>{slide.category}</h4>
                {/* <p>{props.description}</p> */}
                <h2 id={theme?styles["h2-price-dark"]:styles["h2-price"]}>${slide.price}</h2>
                <p>{slide.tittle}</p>
            </div>
          </Link>
        </div>
      ))}
     </div>
    </div>
  );
};
