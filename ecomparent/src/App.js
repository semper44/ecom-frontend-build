import React, { useState, useEffect, lazy, Suspense, memo } from "react";
import "./App.css";
// import SocialMediaShare from "./components/extra comp/social/SocialMediaShares";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CartContainer from "./components/carts/CartContainer";
import SearchModal from "./components/searchmodal/SearchModal";
import GeneralProviders from "./stores/GeneralProviders";
import ScreenSize from "./stores/ScreenSize";
import MainProductsContext from "./stores/MainProductsContext";
import ShowSidebar from "./stores/ShowSidebar";
import HeaderContainerData from "./stores/HeaderContainerData";
import ProfileProvider from "./stores/ProfileProvider";
import LoginFetch from "./components/profiles/login/LoginFetch";
import Main from "./components/main/Main";
// import ProductDetails from "./components/main/ProductDetails";
// import FeaturedMain from "./components/featured/FeaturedMain"
import { QueryClientProvider, QueryClient } from "react-query";
// import  {ReactQueryDevtools} from "react-query/devtools"
import NotFound from "./components/extra comp/NotFound";
import PageLayout from "./pagelayouts/PageLayout";
import Body from "./pagelayouts/Body";
// import AdminTry from "./components/admin/AdminTry";
import Delete from "./components/admin/DeleteComp";
// import Login from "./components/profiles/login/Login";
// import EditDetails from "./components/admin/EditDetails";
// import ImageLists from "./images/ImageList";
// import General from "./components/MenuComponents.js/General";
import Loading from "./components/extra comp/Loading";
import { io } from "socket.io-client";
import jwt_decode from "jwt-decode"
// import FetchTry from "./components/extra comp/FetchTry";
// import NotificationProvider from "./stores/NotificationProvider";

// import GeneralNotifications from "./stores/GeneralNotifications";
import AllGeneralNotifications from "./components/profiles/generalnotifications/GeneralNotifications";
// import ResetPassword from "./components/profiles/resetpassword/ResetPassword";
// import ChangePassword from "./components/profiles/resetpassword/ChangePassword";
import ConfirmAndUpdateOrder from "./components/profiles/poductcreation/ConfirmAndUpdateOrder";
import { ProSidebarProvider } from "react-pro-sidebar";
import ChangePassword from "./components/profiles/resetpassword/ChangePassword";
// import FetchMostBought from "./components/admin/FetchMostBought";
// import Workers from "./components/extra comp/Workers";
// import MyOrders from "./components/profiles/MyOrders";
// import Ratings from "./components/extra comp/RatingsProfile";
// import SellersProduct from "./components/profiles/SellersProduct";
// import Critical from "./components/profiles/reviews/Critical";
// import Orders from "./components/profiles/Orders";
// import DashBoard from "./components/admin/DashBoard";
// import Users from "./components/admin/Users";
// import  from "./components/profiles/resetpassword/ResetPassword";
// import AllSellers from "";

const AllSellers = lazy(() => import("./components/extra comp/Allsellers"));
const ResetPassword = lazy(() => import("./components/profiles/resetpassword/ResetPassword"));
const CategoriesProps = lazy(() => import("./components/categories/CategoriesProps"));
const DashBoard = lazy(() => import("./components/admin/DashBoard"));
const Users = lazy(() => import("./components/admin/Users"));
const SellersProduct = lazy(() => import("./components/profiles/SellersProduct"));
const Critical = lazy(() => import("./components/profiles/reviews/Critical"));
const Login = lazy(() => import("./components/profiles/login/Login"));
const MyOrders = lazy(() => import("./components/profiles/MyOrders"));
const UserProfile = lazy(() => import("./components/profiles/userprofile/UserProfile"));
const AllFollowingNotification = lazy(() => import("./components/profiles/generalnotifications/AllFollowingNotification"));
const AllProductNotification = lazy(() => import("./components/profiles/generalnotifications/AllProductNotification"));
// import UserProfile from "./components/profiles/userprofile/UserProfile";
// import AllFollowingNotification from "./components/profiles/generalnotifications/AllFollowingNotification";
// import AllProductNotification from "./components/profiles/generalnotifications/AllProductNotification";

// const FeaturedDetails = lazy(() =>
//   import("./components/featured/FeaturedDetails")
// );
// import AdminOverviewFetch from "./stores/AdminOverviewFetch";

const AdminOverviewFetch = lazy(() => import("./stores/AdminOverviewFetch"));
const Register = lazy(() => import("./components/profiles/register/Register"));
const AllProduct = lazy(() => import("./components/admin/AllProduct"));
const ProductDetails = lazy(() => import("./components/main/ProductDetails"));
const ProductsFromCategories = lazy(() => import("./components/main/ProductsFromCategories"));
const AllFollowing = lazy(() => import("./components/profiles/followesandfollowing/AllFollowing"));
const AllFollowers = lazy(() => import("./components/profiles/followesandfollowing/AllFollowers"));
// const ConfirmAndUpdateOrder = lazy(() => import("./components/profiles/followesandfollowing/AllFollowers"));
const YourOrders = lazy(() => import("./components/profiles/YourOrders"));
// import ConfirmAndUpdateOrder from "./components/profiles/poductcreation/ConfirmAndUpdateOrder";
// import YourOrders from "./components/profiles/YourOrders";
// import MainProducts from "./components/main/MainProducts";
// import AllFollowers from "./components/profiles/followesandfollowing/AllFollowers";
// import AllFollowing from "./components/profiles/followesandfollowing/AllFollowing";
// import ProductDetails from "./components/main/ProductDetails";
// import ProductsFromCategories from "./components/main/ProductsFromCategories"
// const AllProduct = lazy(() => import("./components/admin/AllProduct"));
// import StatBox from "";
// import {PieChart} from "./components/extra comp/admin/PieChart"
// import {LineChart} from "./components/extra comp/admin/LineChart"
// import {BarChart} from "./components/extra comp/admin/BarChart"
// const AllProduct= lazy(()=>import("./components/admin/AllProduct"))

export const isActive = React.createContext();
export const menuChange = React.createContext();
export const cart = React.createContext();
export const cartActiveContxt = React.createContext();
export const ThemeData = React.createContext();
export const notificationscontext = React.createContext();

const queryclient = new QueryClient();


let themeState;
  let check= window.localStorage.getItem("themes")
  
  let body= document.body

  if(check === undefined || check==="false" || check === null){
    
    themeState=false
    body.setAttribute("id", "light")
  }else if(check==="true"){
    themeState=true
    body.setAttribute("id", "dark")


  }

function App() {  
 
  const [theme, setTheme] = useState(themeState);
  const [ShowCart, SetShowCart] = useState(false);
  const [ShowSearch, setShowSearch] = useState(false);
  const [notification, setNotification] = useState(false);
  const [MenuTransform, setMenuTransform] = useState(false);
  // const [theme, setTheme] = useState();
  const [socket, setSocket] = useState();
  // const theme= useRef(themeState);

  
  



  // )
  // 
  // useEffect(()=>{
  //   let beating;
  //   if(window.location.href.includes("http://localhost:3000/profile/") && document.hidden===false){
  //   beating= setInterval(()=>{
  //     
  //     socket?.emit("heartbeat", {data:"a"})  
  //   }, 1000)
  // }else if(!window.location.href.includes("http://localhost:3000/profile/") && document.hidden!==false){
  //   
  //   setTimeout(()=>clearInterval(beating), 1500)

  // }  
  // }, [window.location.href, document.hidden]) 

  // const [UnSentNotification, setUnSentNotification] = useState();
  const auth=JSON.parse(window.localStorage.getItem("authToken"))||undefined
  
  const toggleTheme= ()=>{
    setTheme(!theme);
    let body= document.body
    if(theme===true){
      body.setAttribute("id", "light")
    }else{
      body.setAttribute("id", "dark")
    }
    window.localStorage.setItem("themes", !theme)
  }

  // useEffect(()=>{

  //  }, [theme])


  let userDetail
  if(auth){
    userDetail= jwt_decode(auth?.access)
  }

  useEffect(()=>{
     setSocket(io("https://epcommerceserver.onrender.com"))
  },[])

  const  userId= userDetail?.user_id
  useEffect(()=>{
    socket?.emit("following",(userId))  
  },[socket, userId])


  // useEffect(() => {
  //   (async () => {
  //     const res = await axios.get("https://fakestoreapi.com/products");
  //     const response = await res;
  //     setData(response.data);
  //   })();
  // }, []);

  // if (datas) {
  //   window.localStorage.setItem("data", JSON.stringify(datas));
  // }

  // useEffect(()=>{
  //     const ipSend= axios.post('http://127.0.0.1:8000/admindetails/', ipState);
  //     
  // }, [ipState])

//   arr=["me", "you"]
// n=5
  let urls2= `${process.env.REACT_APP_URLS}/product/allproducts/electronics/`

  const ShowCartToggle = () => {
    SetShowCart(true);
  };
 
  const HideCartToggle = () => {
    SetShowCart(false);
  };

  const ShowSearchModal = () => {
    setShowSearch(true);
  };

  const HideSearchModal = () => {
    setShowSearch(false);
  };

  const notificationModal = () => {
    if(userDetail?.user_id){
      setNotification(true);
    }else{
      window.location.href="/login"
    }
  };

  const hideNotificationModal = () => {
    setNotification(false);
  };

  const MenuToggle = () => {
    setMenuTransform((prevMenuTransfrom) => !prevMenuTransfrom);
  };

  return (
    <>
    <div className={theme? "dark": "light" }>
      <QueryClientProvider client={queryclient}>
      <ProSidebarProvider>
        <ThemeData.Provider value={{theme:theme, toggleTheme}}>
          <ShowSidebar>
            <ScreenSize>
              <GeneralProviders>
                  <Router>
                    <AdminOverviewFetch>
                      <LoginFetch> 
                        <ProfileProvider>
                          {/* <NotificationProvider  socket={socket}> */}
                            <MainProductsContext>
                              <HeaderContainerData>
                                  {ShowSearch && <SearchModal onHide={HideSearchModal} />}
                                  {notification && <AllGeneralNotifications  hideNotifFn={hideNotificationModal}/>}
                                  <cart.Provider value={{ cartFunc: HideCartToggle }}>
                                    {ShowCart && <CartContainer onToglle={HideCartToggle} />}
                                  </cart.Provider>
                                    <notificationscontext.Provider value={{ hideNotifFn:hideNotificationModal, showNotifFn:notificationModal, notification:notification }}>
                                      <isActive.Provider value={{ showSearchState: ShowSearch }}>
                                        <menuChange.Provider value={{ MenuState: MenuTransform, MenuFunc: MenuToggle }}>

                                          <cartActiveContxt.Provider value={{ cartActivestate: ShowCart }}>
                                          
                                            <Suspense fallback={<Loading />}>
                                              <Routes>
                                                <Route
                                                  element={
                                                    <Body
                                                      onToglling={ShowCartToggle}
                                                      onShow={ShowSearchModal}
                                                      onChange={ShowSearchModal}
                                                      socket={socket}
                                                    />
                                                  }
                                                >
                                                  {/* <Route path="/" element={<Main />} /> */}
                                                  <Route path="/categories" element={<CategoriesProps />} />
                                                  {/* <Route path="/featured" element={<Featured />} /> */}
                                                  <Route path="/featured" element={<ProductsFromCategories 
                                                  url={urls2} />} />
                                                  <Route path="/allsellers" element={<AllSellers />} />
                                                  <Route path="/promodeals" element={<ProductsFromCategories 
                                                  url={urls2} />} />
                                                  <Route path="/" element={<Main />} />
                                                  <Route path="/electronics" element={<ProductsFromCategories 
                                                  url={urls2} />} />
                                                  {/* <Route path="/categories" element={<ProductsFromCategories 
                                                  url={urls2} />} /> */}
                                                  <Route path="/productdetails/:id/" element={<ProductDetails/>} />
                                                  <Route path="/confirmandupdateorder/:cart_id/" element={<ConfirmAndUpdateOrder />} />

                              
                                                  {/* <Route path="/Products" element={<SellersProduct />} /> */}
                                                  <Route path="/profile/:username/">
                                                    <Route index element={<UserProfile socket={socket} />} /> 
                                                    <Route path="followernotifications" element={<AllFollowingNotification />}/>
                                                    <Route path="productnotifications" element={<AllProductNotification />}/>
                                                    <Route path="allfollowers" element={<AllFollowers />}/>
                                                    <Route path="allfollowing" element={<AllFollowing />}/>
                                                    <Route path="userproducts" element={<SellersProduct />}/>
                                                    <Route path="customerorders" element={<MyOrders />}/>
                                                    <Route path="yourorders" element={<YourOrders />}/>
                                                    <Route path="reviews/critical" element={<Critical />}/>
                                                    <Route path="reviews/positive" element={<Critical />}/>

                                                  </Route>
                                                    <Route path="/profile/password-reset/:uid/:id/" element={ <ChangePassword /> } />
                                                    {/* element={<UserProfile socket={socket}/>}
                                                  /> */}

                                                  {/* <Route path="/table" element={<Table />} /> */}
                                                </Route>
                                                <Route element={<PageLayout />}>
                                                  {/* <Route path="/admin" element={<AdminAll />} /> */}
                                                  <Route path="/admin" element={<DashBoard />}/>  
                                                  <Route path="/delete" element={<Delete />} />
                                                  <Route path="/users" element={<Users />} />
                                                  <Route path="/products" element={<AllProduct />} />
                                                </Route>
                                                <Route path="/register" element={<Register />} />
                                                <Route path="/login" element={<Login />} />
                                                <Route path="/resetpassword" element={<ResetPassword />} />
                                                <Route path="admin/products/fullpage" element={<AllProduct />} />
                                                <Route path="admin/users/fullpage" element={<Users />} /> 
                                                {/* <Route path="/cartretrieve" element={<CartRetrive socket={socket}/>} /> */}
                                                <Route path="*" element={<NotFound />} />
                                              </Routes>
                                            </Suspense>
                                          </cartActiveContxt.Provider>
                                        </menuChange.Provider>
                                      </isActive.Provider>
                                    </notificationscontext.Provider>
                              </HeaderContainerData>
                            </ MainProductsContext>
                          {/* </NotificationProvider> */}
                        </ProfileProvider>
                      </LoginFetch >
                    </AdminOverviewFetch>
                  </Router>
              </GeneralProviders>
            </ScreenSize>
          </ShowSidebar>
        </ThemeData.Provider>
      </ProSidebarProvider >
      </QueryClientProvider>
    </div>
    </>
  );
}

export default memo(App);
