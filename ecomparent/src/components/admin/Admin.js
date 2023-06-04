import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import React, { useState, useEffect,useContext } from 'react'
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ImageSearchOutlinedIcon from '@mui/icons-material/ImageSearchOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import { Link } from 'react-router-dom'
import { AuthContext } from "../profiles/login/LoginFetch";
import { ThemeData } from "../../App";
import R from "../../ecom_images/R.jpg"
import jwt_decode from "jwt-decode"
import { Switch } from '@mui/material';
import { screensizecontext } from "../../stores/CartContxt";



const Item = ({ title, too, icon, selected, setSelected }) => {
  return (
    <MenuItem
      active={selected === title}
      routerLink={<Link to={too} />
    }
      style={{
        color: "black",
        "& .active":{
          backgroundColor:"cyan",

        }
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <p className='title' >{title}</p>
    </MenuItem>
  );
};



function Admin({defaultTitle}) {
  let first= defaultTitle.charAt(0)
  first= first.toUpperCase()
  let newTitle= first+ defaultTitle.slice(1)
  if(newTitle==="Admin"){
    newTitle="Overview"
  }
  const {collapsed, collapseSidebar } = useProSidebar();
  const[selected, setSelected]= useState(newTitle)
  
  // const[dontdisplay, setdontDisplay]= useState(undefined)
  // const[screenWidth, setScreenWidth]= useState(window.innerWidth)

  const {user}= useContext(AuthContext)
  const {theme, toggleTheme}= useContext(ThemeData)
  const {dontdisplay}= useContext(screensizecontext)

  // const screenWidth= useRef(window.innerWidth)
  
  // useEffect(()=>{
  //   if(screenWidth<=810){
  //     setdontDisplay("md")
  //   }
  //   // else if(screenWidth <= 1223){
  //   //   setdontDisplay("lg")
  //   // }
  //   else{
  //     setdontDisplay(undefined)
  //   }
   
  // }, [ screenWidth])


  
  

  // useEffect(()=>{
  //   const handleResize = () => {
  //     setScreenWidth(window.innerWidth)
  //   }
  //   window.addEventListener("resize", handleResize);

  //   return ()=>{
  //     window.removeEventListener("resize", handleResize)
  //  }
  // }, [screenWidth])

 
  

  let userDetails;
  if(user){
    userDetails= jwt_decode(user.access)
  }
  useEffect(()=>{document.title="Admin"
  },[]) 
  
  function toggleAndCloseSidebar(){
    toggleTheme();
  } 

  return (
    <div className={theme?"admin-id":"app"} >
      <Sidebar rootStyles={theme ?{ 
        height: "100vh",
        width: dontdisplay==="md"? "150px":"250px",
        minWidth: dontdisplay==="md"?"150px":"250px",
        "& .css-dip3t8 ":{backgroundColor:'#050c30'}}: {height: "100vh",
        width: dontdisplay==="md"? "140px":"250px",
        minWidth: dontdisplay==="md"?"140px":"250px",
        "& .css-dip3t8 ":{backgroundColor:'white'}}}>
        <Menu 
         rootStyles={{ 
          "& .css-kvqf1i:hover  ":{backgroundColor:'cyan', opacity:"0.5"},   
          "& .css-kvqf1i  ":theme ?{backgroundColor:'#0e7878', color:"white !important", padding:dontdisplay ?(collapsed?"0 20px":"0 0px"):"0 20px"}:{backgroundColor:'cyan', padding:dontdisplay ?(collapsed?"0 20px":"0 0px"):"0 20px"},   
          "& .css-1bdadyq  ":theme?{color:"white !important", padding:dontdisplay ? (collapsed?"2.3rem 20px":"2.3rem 0px"):"2.3rem 20px"}:{color:"black !important", padding:dontdisplay ? (collapsed?"2.3rem 20px":"2.3rem 0px"):"2.3rem 20px"},   
          "& p  ":theme?{color:"white"}:{color:"black"},   
          "& .css-1bdadyq:hover  ":theme ?{backgroundColor:'#0e7878', opacity:"0.5"}:{backgroundColor:'cyan',opacity:"0.5"},
         "& .css-wx7wi4":dontdisplay&&{marginRight:"1px"},
        //  "& .css-19djtoi >.css-dip3t8 >nav >li >a >css-12w9als":dontdisplay&&{color:theme?"red":"white"}
        }
          // {"& .css-1bdadyq:hover  ":{backgroundColor:'cyan',opacity:"0.5"},
          // "& .css-kvqf1i  ":{backgroundColor:'cyan', color:"white !important"},   
        }>   
          <MenuItem
            icon={<MenuOutlinedIcon />}
            onClick={() => {
              collapseSidebar();
            }}
            style={{ textAlign: "center", color:theme?"white":undefined, backgroundColor:"transparent" }}>
               
            {" "}
            <h2>Admin</h2>
          </MenuItem>
          {!collapsed ?<div className="admin-prof-section"
           style={{ 
            marginTop:"1.5rem",
            marginBottom:"1.5rem",
            textAlign: "center" }}>
          <img
              alt="profile-user"
              width={dontdisplay?"110":"150px"}
              height={dontdisplay?"110":"150px"}
              src={R}
              style={{ cursor: "pointer", borderRadius: "50%" }}/>
          <p className={"username"} style={{color:theme?"cyan":"black"}}>
            {userDetails?.username}
          </p>
          <div className="admin-prof-section"
           style={{ 
            marginTop:"1.5rem"}}>
          <Switch onClick={toggleAndCloseSidebar} />
          </div>
          </div>: undefined}
          <Item
              title="Overview"
              too="/admin"
              icon={<ImageSearchOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              
            />
          <Item
              title="Home"
              too="/"
              icon={<HomeOutlinedIcon sx={{ml:"0"}} />}
              selected={selected}
              setSelected={setSelected}
            />
          <Item
              title="Users"
              too= {dontdisplay? "/admin/users/fullpage":"/users"}
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          
          <Item
              title="Products"
             too={ {pathname:dontdisplay? "/admin/products/fullpage":"/products",
              state:"fullsize"}}
              icon={<Inventory2OutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          <Item
              title="Categories"
              too="/admin/Categories"
              icon={<AddCircleOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          <Item
              title="Settings"
              too="/settings"
              icon={<SettingsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
           
        </Menu>
      </Sidebar>
    </div>
  );
}


     
    


export default Admin