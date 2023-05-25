import jwt_decode from "jwt-decode";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
export let AuthContext = React.createContext();

// const userAuthState=JSON.parse(window.localStorage.getItem("authToken"))||undefined
// console.log(userDecodedAuth)
const d=JSON.parse(window.localStorage.getItem("authToken"))||undefined


function LoginFetch(props) {
    const [authToken, setAuthToken] = useState("");
    const[interval, setIntervalF]= useState(false)
    const[loginState, setLoginState]= useState(false)
    const [message, setMessage] = useState({status:false, message:"", code:undefined});
    console.log(props)
    const [user, setUser] = useState(d);
    const navigate = useNavigate();

    let loginUser= (e)=>{
        e.preventDefault();
        let fetchRequestOptions={
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
        
        body:JSON.stringify({ username: e.target.username.value, password: e.target.password.value })
        };
        console.log(e.target.username.value, e.target.password.value)
            fetch( "http://127.0.0.1:8000/profile/token/", fetchRequestOptions)
            .then((res)=>{
                return res.json()})
            .then((result)=>{
                console.log(result)
                setAuthToken(result);
                let userToken;
                // console.log(dataToken)
                // console.log(dataCart)
                if (result.access){
                    setUser(result);
                    console.log("jwt")
                    userToken= jwt_decode(result.access)
                    console.log(userToken)
                    localStorage.setItem("authToken", JSON.stringify(result));
                }
                if(result.detail){
                    setMessage({status:true, message:result.detail, code:"error"})
                    setIntervalF(true)
                }
                console.log(userToken?.is_staff, userToken?.is_superuser)

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
                        let res = await fetch('http://127.0.0.1:8000/product/retrievecart/', retrieveCartOptions)
                        const response = await res.json();
                        console.log("response")
                        console.log(res.ok)
                        if(res.status===200){
                            response.serializer.forEach((obj, index) => {
                            obj.qty=JSON.parse(response.item_qty)[index]
                            
                            })
                            // let others={cartSize:JSON.parse(dataCart.cartSize), cartId:JSON.parse(dataCart.id)}
                            let cart={items:response.serializer, cartSize:JSON.parse(response.cartSize), cartId:JSON.parse(response.id)}
                            console.log(cart)
                            const cartState= JSON.parse(window.localStorage.getItem("MY_CARTSTATE"))|| null
                            console.log(cartState)
                            if(!cartState || cartState===undefined || cartState.items===null ||  cartState?.items?.length===0 ){
                                localStorage.setItem("MY_CARTSTATE", JSON.stringify(cart))
                                console.log("trole")
                                console.log("trouble")
                            }
                            setLoginState(true)
                        }
                        if(res.status===201){
                            setLoginState(true)
                            const cartState= JSON.parse(window.localStorage.getItem("MY_CARTSTATE"))|| null
                            console.log(cartState)

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
                
        //         console.log(cart)
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
    loginUser: loginUser,
    logout: logout,
    message:message,
    interval:interval,
    intervalFn:setIntervalF
    };

    let four= 1000* 60*2
    useEffect(()=>{
        if(user){let interval = setInterval(()=>{
            updateToken()
            console.log("updated")
        }, four)
        return ()=>clearInterval(interval)}
    },
    [user])
    let updateToken= async()=> {
        try {
            let res = await fetch(
                "http://127.0.0.1:8000/profile/token/refresh/",
                {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                
                body:JSON.stringify({ "refresh":user.refresh})
                });
                let data= await res.json()
                if(res.status===200){
                    console.log(data)
                setAuthToken(data);
                setUser(data);
                console.log("op")
                localStorage.setItem("authToken", JSON.stringify(data))
                console.log("now refreshed")
                }else{
                logout()
                }
                
            } catch (error) {
            console.log(error);
            }

        }

    console.log("end")

    // eslint-disable-next-line react-hooks/exhaustive-deps
  return (
    <AuthContext.Provider value={contextData}>
      {props.children}
    </AuthContext.Provider>
  );
}
export default LoginFetch;
