import React, {useContext, useRef} from 'react'
import sxs from "./section.module.css"
import {NavLink} from "react-router-dom"
import PanToolAltOutlinedIcon from '@mui/icons-material/PanToolAltOutlined';
import HandshakeOutlinedIcon from '@mui/icons-material/HandshakeOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import { ThemeData } from '../../../App';

function Section() {
  const {theme}= useContext(ThemeData)
  const screenWidth= useRef(window.innerWidth)
  console.log(screenWidth.current);

  

  return (
    <>
    <div className={theme?sxs["delivery-dark"]:sxs.delivery}>
        <NavLink to="delivery">
        <div className={sxs.icons}><LocalShippingOutlinedIcon sx={{        
                color:"orange"
              }}/>
        </div>
        <h3>Deliveries</h3>
        </NavLink>
    </div>
    <div className={theme?sxs["delivery-dark"]:sxs.delivery}>
        <NavLink to="delivery">
        <div className={sxs.icons}><AccountBoxOutlinedIcon sx={{
                
                color:"limegreen"
              }}/></div>
        <h3>Top Sellers</h3>
        </NavLink>
    </div> 
    <div className={theme?sxs["delivery-dark"]:sxs.delivery}  id={sxs.one}>
        <NavLink to="delivery">
        <div className={sxs.icons}><ThumbUpOutlinedIcon sx={{
                
                color:"red"
              }}/></div>
        <h3>Most Popular</h3>
        </NavLink>
    </div>
    <div className={theme?sxs["delivery-dark"]:sxs.delivery}  id={sxs.two}>
        <NavLink to="delivery">
        <div className={sxs.icons}><PanToolAltOutlinedIcon  /></div>
        <h3>Suggested</h3>
        </NavLink>
    </div>
    <div className={theme?sxs["delivery-dark"]:sxs.delivery}  id={sxs.three}>
        <NavLink to="delivery">
        <div className={sxs.icons}><HandshakeOutlinedIcon sx={{
                
                color:"cyan"
              }}/></div>
        <h3>Weekly Deals</h3>
        </NavLink>
    </div>
    <div className={theme?sxs["delivery-dark"]:sxs.delivery}  id={sxs.four}>
        <NavLink to="delivery">
        <div className={sxs.icons}><StorefrontOutlinedIcon sx={{
                
                color:"purple"
              }}/></div>
        <h3>Sell With Us</h3>
        </NavLink>
    </div>
    </>
  )
}

export default Section