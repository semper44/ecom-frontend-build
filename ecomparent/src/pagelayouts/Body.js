import Header from "../components/header/Header";
import styles from "./Body.module.css";
import Footer from "../components/footer/Footer";
import { Outlet} from "react-router-dom";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Box, Typography,  } from "@mui/material";
import { ThemeData } from "../App";
import { AuthContext } from "../components/profiles/login/LoginFetch";
import { screensizecontext } from "../stores/CartContxt";
import jwt_decode from "jwt-decode"


function Body(props) {
  // const[show, setShow]= useState(true)
  
  const logIn = useContext(AuthContext);
  const {theme} = useContext(ThemeData);
  const {dontdisplay} = useContext(screensizecontext);
  ;
  let userDetails;
  if(logIn?.user){
    userDetails=jwt_decode(logIn?.user?.access)
  } 

  return (
    <>
      <div className={styles["styles-body"]}>
        <Header
          onCart={props.onToglling}
          onSearch={props.onShow}
          onTransform={props.onChange}
          headernotif={props.socket}
        />
      </div>
      
      {/* {(window.location.pathname ==="/") && <Outlet />} */}
      <div className="outlet" style={{marginTop:dontdisplay?"190px":"200px", padding:"6%  0"}}>
        <Box sx={{width:"100%", display:dontdisplay?"flex":"none", gap:"7.2%", alignItems:"center", justifyContent:"center", mt:"6%", "& a":{textDecoration:"none"}}}>
        <Link to={"/categories"}>
          <Typography paragraph sx={{color: theme? "cyan": "black", cursor:"pointer", textDecoration:"underline"}}>          
            Categories
          </Typography>
        </Link>
        <Link to={`/profile/${userDetails?.username}/yourorders`}>
          <Typography paragraph sx={{color: theme? "cyan": "black", cursor:"pointer", textDecoration:"underline"}}>          
            Orders
          </Typography>
        </Link>
        <Link to={"/allsellers"}>
          <Typography paragraph sx={{color: theme? "cyan": "black", cursor:"pointer", textDecoration:"underline"}}>          
            Sellers
          </Typography>
        </Link>
        </Box>
        <Outlet />
      </div>
      <Footer />
      {/* {user ?  <Outlet /> :<Navigate to="/login" />} */}

    </>
  );
}

export default Body;
