import React,{useContext, useEffect, useState} from 'react'
import styles from "./cart.module.css" 
import CartPortal from './CartPortal'
import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem, totalRemoveItem} from '../../stores/CartProviders';
import { AuthContext } from '../profiles/login/LoginFetch';
import jwt_decode from "jwt-decode"
import { useNavigate } from 'react-router-dom';
import { ThemeData } from '../../App';
import { Box,} from '@mui/material';
import Message from "../extra comp/Message";
import Loading from "../extra comp/Loading";



function CartContainer(props) {
  const[cartCombined, setCartCombined]= useState({})
  const[permissionDenied, setPermissionDenied]= useState(false)
  const [loading, isLoading] = useState(false)
  const[error, setError]= useState(false)
  const logIn= useContext(AuthContext)
  const navigate= useNavigate()

  const {theme}= useContext(ThemeData)

  //  const cartDisplay = useSelector((state) => state);
   const cartDisplay = (state) => {
    return {
      cartSize: state.cart.size,
      totalAmount: state.cart.totalAmount,
      // Add other properties as needed
    };
  };;
   const dispatch = useDispatch();
  const token= JSON.parse(window.localStorage.getItem("authToken"))|| null

  let lengthOfCart= cartDisplay.cart?.items?.length<1

  let userDetails;
    if(logIn?.user){
      userDetails=jwt_decode(logIn?.user?.access)
    } 
  

const clickToAdd = (item) => {
  dispatch(addItem({
    id: item.id,
    category: item.category,
    image: item.image,
    price: item.price,
    qty: 0,  
  }));
};


const clickToRemove = (item) => {
  dispatch(removeItem({ id: item.id }));
};

const remove = (item) => {
  dispatch(totalRemoveItem({ id: item.id }));
};

const {items, cartId, totalAmount}= cartDisplay.cart
useEffect(()=>{
  setCartCombined({items, cartId})
}, [cartId, items])




  let formData= new FormData()
    let arr= []
    let arr2=[]
    // let arr3=[]
    cartDisplay.cart?.items.map((item)=>{
    arr.push(item.qty)
    arr2.push(item.id)
    // formData.append("item", item.id)      
  })
  formData.append("item", JSON.stringify(arr2))      
  formData.append("owners", userDetails?.user_id)
  formData.append("item_qty", JSON.stringify(arr))
  formData.append("cartSize", cartDisplay.cart?.cartSize)      
  formData.append("cartId", cartDisplay.cart?.cartId)      


function order(){
  if(!userDetails?.user_id){ 
    navigate("/login")
    props.onToglle()
    
  }else{
    isLoading(true)
    fetch(`${process.env.REACT_APP_URLS}/product/placeorder/`, {
      method: 'POST',
      headers: {
        // "Content-Type": "application/json",
        'Authorization': 'Bearer '+ token?.access
        },      
        body:cartDisplay.cart.cartId==="null"?JSON.stringify(cartCombined):formData}
        )
    .then((res)=>{
      isLoading(false)
      if(res.status !== 200){
        if(res.status === 401 || res.status === 403){
          setPermissionDenied(true)
        }else{
          setError(true)
        }
          
      }
      return res.json();
    })
    .then((result)=>{
  
      if(result.code===200){
        window.location.href=result.link
      }else{
        
      }
    })
    // .then(data=>{
      
    // })
    // window.location.href = "https://ravemodal-dev.herokuapp.com/v3/hosted/pay";
 
  }
}

 
  return (
    <>
    {loading && <Loading />}
    
    <CartPortal >
    {permissionDenied && <Message 
      value={"Sorry, you have been blocked from using this service or do not have the necessary permissions"}
      code={"error"}
      fn={setPermissionDenied}
       />}
    {error && <Message 
      value={"Sorry, an error occured, try again later"}
      code={"error"}
      fn={setError}
       />
      }
      {lengthOfCart ? <div className={theme? styles['nothing-in-cart-dark']:styles['nothing-in-cart']}>
        <div className={styles.cancelfirst}>
          <p  onClick={props.onToglle}>X</p>
        </div>
         <h3 id={styles.nothing}>Nothing added to the cart yet</h3>
      </div>:
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
        {cartDisplay.cart?.items?.map((item)=>{
          return( 
           <>
           <div key={item.id} className={styles.class}>
              <div className={styles["cart-container"]}>
                <div className={styles["cart-image"]}>
                    <img src={item.image} alt="" />
                </div>
                <div className={styles["minus-plus"]}>
                    <div className={styles.minus} ><p onClick={()=>{clickToRemove(item);}}>-</p></div>
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
              <p>${totalAmount}</p>
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
    </> 
    )
}

export default CartContainer