import jwt_decode from "jwt-decode";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
export let AuthContext = React.createContext();

// const userAuthState=JSON.parse(window.localStorage.getItem("authToken"))||undefined
// 
const d=JSON.parse(window.localStorage.getItem("authToken"))||undefined


function LoginFetch(props) {
    const [authToken, setAuthToken] = useState("");
    const [showModal, setShowModal] = useState(false);
    const[interval, setIntervalF]= useState(false)
    const[loginState, setLoginState]= useState(false)
    const [message, setMessage] = useState({status:false, message:"", code:undefined});
    
    const [user, setUser] = useState(d);
    const navigate = useNavigate();

    let loginUser= (e)=>{
        setShowModal(true)
        e.preventDefault();
        let fetchRequestOptions={
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
        
        body:JSON.stringify({ username: e.target.username.value, password: e.target.password.value })
        };
        
            fetch( `${process.env.REACT_APP_URLS}/profile/token/`, fetchRequestOptions)
            .then((res)=>{
                return res.json()})
            .then((result)=>{
                
                setAuthToken(result);
                let userToken; 
                if (result.access){
                    setUser(result);
                    
                    userToken= jwt_decode(result.access)
                    
                    localStorage.setItem("authToken", JSON.stringify(result));
                    setMessage({status:true, message:"Login successful", code:"success"})
                    setIntervalF(true)
                }
                if(result.detail){
                    setMessage({status:true, message:result.detail, code:"error"})
                    setIntervalF(true)
                    showModal(false)
                }
                

                if (userToken?.is_staff === false && userToken?.is_superuser === false) {
                    (async()=>{
                        let retrieveCartOptions = {
                            method: 'GET',
                            redirect: 'follow',
                            headers:{
                            'Content-Type':'application/json',
                            'Authorization': 'Bearer '+ result?.access
                            }
                        };
                        let res = await fetch(`${process.env.REACT_APP_URLS}/product/retrievecart/`, retrieveCartOptions)
                        const response = await res.json();
                        
                        
                        if(res.status===200){
                            setShowModal(false)
                            response.serializer.forEach((obj, index) => {
                            obj.qty=JSON.parse(response.item_qty)[index]
                            
                            })
                            // let others={cartSize:JSON.parse(dataCart.cartSize), cartId:JSON.parse(dataCart.id)}
                            let cart={items:response.serializer, cartSize:JSON.parse(response.cartSize), cartId:JSON.parse(response.id)}
                            
                            const cartState= JSON.parse(window.localStorage.getItem("MY_CARTSTATE"))|| null
                            
                            if(!cartState || cartState===undefined || cartState.items===null ||  cartState?.items?.length===0 ){
                                localStorage.setItem("MY_CARTSTATE", JSON.stringify(cart))
                                
                                
                            }
                            setLoginState(true)
                        }
                        if(res.status===201){
                            setLoginState(true)
                            // const cartState= JSON.parse(window.localStorage.getItem("MY_CARTSTATE"))|| null
                            

                        }
                    })()
                        
                } else if (userToken?.is_staff === true && userToken?.is_superuser === false) {
                    navigate("/moderator");
                } 
                else if(userToken?.is_staff === true ||(userToken?.is_staff === true && userToken?.is_superuser === true)){
                    navigate("/admin");
                }
            
                });
        
    }

    useEffect(()=>{
        if(loginState===true){
            window.location.href="/"
        }
    }, [loginState])
            // cartRetrive()
        
    
        // let cartRetrive=async ()=>{
        //     let res= await fetch('http://127.0.0.1:8000/product/retrievecart/')
        //     let response= await res.json()
        //     if(res.ok){
        //         response.serializer.forEach((obj, index) => {
        //             obj.qty=JSON.parse(response.item_qty)[index]
                
        //         })
        //         let cart={items:response.serializer,  cartId:JSON.parse(response.id), cartSize:JSON.parse(response.cartSize)}
                
        //         const cartState= JSON.parse(window.localStorage.getItem("MY_CARTSTATE"))|| null
        //             if(cartState===undefined  || !cartState|| cartState.items===null ||  cartState?.items?.length===0 ){
        //                 localStorage.setItem("MY_CARTSTATE", JSON.stringify(cart))
        //             }
                
        //         
        //     }
            
        // }

    function logout() {
    setAuthToken(null);
    setUser(null);
    localStorage.removeItem("authToken");
    navigate("/login");
    }

    let contextData = {
    user: user,
    showModal:showModal,
    loginUser: loginUser,
    logout: logout,
    message:message,
    interval:interval,
    intervalFn:setIntervalF,
    };

    let four= 1000* 60*2
    useEffect(()=>{
        if(user){let interval = setInterval(()=>{
            updateToken()
            
        }, four)
        return ()=>clearInterval(interval)}
    },
    [user])
    let updateToken= async()=> {
        try {
            let res = await fetch(
                `${process.env.REACT_APP_URLS}profile/token/refresh/`,
                {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                
                body:JSON.stringify({ "refresh":user.refresh})
                });
                let data= await res.json()
                if(res.status===200){
                    
                setAuthToken(data);
                setUser(data);
                
                localStorage.setItem("authToken", JSON.stringify(data))
                
                }else{
                logout()
                }
                
            } catch (error) {
            ;
            }

        }

    

    // eslint-disable-next-line react-hooks/exhaustive-deps
  return (
    <AuthContext.Provider value={contextData}>
      {props.children}
    </AuthContext.Provider>
  );
}
export default LoginFetch;
