import React,{useContext, useEffect, useState} from 'react'
import styles from "./cart.module.css" 
import CartPortal from './CartPortal'
import {cartContxt} from '../../stores/CartContxt';
import { AuthContext } from '../profiles/login/LoginFetch';
import jwt_decode from "jwt-decode"
import { useNavigate } from 'react-router-dom';
import { ThemeData } from '../../App';
import { Box, Typography } from '@mui/material';
import { screensizecontext } from '../../stores/CartContxt';



function CartContainer(props) {
  const cartDisplay = useContext(cartContxt)
  const dontdisplay = useContext(screensizecontext)
  const[cartCombined, setCartCombined]= useState({})

  const logIn= useContext(AuthContext)
  const navigate= useNavigate()

  const {theme}= useContext(ThemeData)

  const{addItemsToCart, removeItemsFromCart, removeItemsTotally}=cartDisplay
  const token= JSON.parse(window.localStorage.getItem("authToken"))|| null

  let lengthOfCart= cartDisplay?.items?.length<1

  let userDetails;
    if(logIn?.user){
      userDetails=jwt_decode(logIn?.user?.access)
    } 
  console.log(cartDisplay)

function clickToRemove(item){
  removeItemsFromCart({
    id:item.id,
    
  })

  
}
function clickToAdd(item){
  console.log(item.seller)
  addItemsToCart({
    id:item.id,
    category:item.category,
    image:item.image,
    price:item.price,
    // totalPrice:item.totalPrice,
    // seller:"semper",
    qty:0,
    
    })
    // addItemsToCart.seeSetDisplay(false)
}

function remove(item){
  removeItemsTotally({id:item.id,})
}

const {items, cartId}= cartDisplay
console.log(cartId)

useEffect(()=>{
  setCartCombined({items, cartId})
}, [cartId, items])

console.log(cartCombined)


  let formData= new FormData()
    let arr= []
    let arr2=[]
    // let arr3=[]
    cartDisplay?.items.map((item)=>{
    arr.push(item.qty)
    arr2.push(item.id)
    // formData.append("item", item.id)      
  })
  formData.append("item", JSON.stringify(arr2))      
  formData.append("owners", userDetails.user_id)
  formData.append("item_qty", JSON.stringify(arr))
  formData.append("cartSize", cartDisplay?.cartSize)      
  formData.append("cartId", cartDisplay?.cartId)      

console.log(arr, arr2);
console.log(formData.get("owners"));
console.log(formData.get("item_qty"));
console.log(formData.get("cartSize"));

function order(){
  if(!userDetails?.user_id){ 
    navigate("/login")
    props.onToglle()
    console.log("hy")
  }else{
    fetch("http://127.0.0.1:8000/product/placeorder/", {
      method: 'POST',
      headers: {
        // "Content-Type": "application/json",
        'Authorization': 'Bearer '+ token?.access
        },      
        body:cartDisplay.cartId==="null"?JSON.stringify(cartCombined):formData}
        )
    .then((res)=>{
      return res.json();
    })
    .then((result)=>{
      console.log(result)
      // console.log(result.link)
      // console.log(result.code)
      if(result.code===200){
        window.location.href=result.link
      }else{
        console.log(result.message)
      }
    })
    // .then(data=>{
      
    // })
    // window.location.href = "https://ravemodal-dev.herokuapp.com/v3/hosted/pay";
 
  }
}
console.log(items)
 
  return (
    <CartPortal click={props.onToglle}>
      {lengthOfCart ? <div className={theme? styles['nothing-in-cart-dark']:styles['nothing-in-cart']}> <h3>Nothing added to the cart yet</h3></div>:
      <div className={theme?styles["box-dark"]:styles.box}>
        <div className={styles["ribbon-dark"]}>
            <div className={styles.item}>
              <p>Item</p>
              <Box sx={{width:"120px",backgroundColor:theme? "gainsboro":"white"}}></Box>
            </div>
            <p>Quantity</p>
            <p id={styles.price}>Price</p>
        </div>
        <div className={theme?styles["cart-parent-dark"]:styles["cart-parent"]}>
        {cartDisplay?.items?.map((item)=>{
          return( 
           <>
           <div className={styles.class}>
              <div className={styles["cart-container"]}>
                <div className={styles["cart-image"]}>
                    <img src={item.image} alt="" />
                </div>
                <div className={styles["minus-plus"]}>
                    <div className={styles.minus} ><p onClick={()=>{clickToRemove(item)}}>-</p></div>
                    <div className={styles["cart-qty"]}>{item.qty}</div>
                    <div className={styles.plus}><p onClick={()=>{clickToAdd(item)}}>+</p></div>
                </div>
                <div className={styles["cart-price"]}>
                  <p>{`$${item.price*item.qty}`}</p>
                </div>          
              </div>
              <div className={styles.cancel}>
                  <p onClick={()=>{remove(item)}}>X</p>
              </div>
            </div>
            </> 
          )})}
        </div>
        <Box sx={{
          width:"92%",
          display:"flex",
          justifyContent:"space-between",
          alignItems:"baseline",
          marginLeft: "4%",
          // marginRight: "4%",
          marginTop: "2%",
          paddingBottom: "2%"
          }}>
            <p>Total Amount</p>
            <div className={styles["price-container"]}>
              <p>$40.00</p>
            </div>
        </Box>
        <Box sx={{
          width:"100%",
          display: "flex",
          justifyContent:"space-between",          
          alignItems:"center", 
          gap:"10%",         
          marginTop: "2%",
          paddingBottom: "2%"
          }}>
            <p id={styles.continueshopping} onClick={props.onToglle}>Continue shopping</p>
            <p className={styles.order} onClick={order}>Order Now</p>                  
        </Box>
      </div>}
    </CartPortal>  
    )
}

export default CartContainer