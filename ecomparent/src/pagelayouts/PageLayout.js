import { Outlet } from "react-router-dom";
import React, { useContext } from "react";
import { AuthContext } from "../components/profiles/login/LoginFetch";
import Admin from "../components/admin/Admin";
import jwt_decode from "jwt-decode";
import {ThemeData} from "../App"
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { Box } from "@mui/material";
import { Typography } from '@mui/material'
import {  ThemeProvider, createTheme } from '@mui/material/styles'
import { Navbars } from "./PageLayoutStyles";
import { useProSidebar } from "react-pro-sidebar";
import { screensizecontext } from "../stores/CartContxt";


function PageLayout(props) {
  const {theme}= useContext(ThemeData)
  const {dontdisplay}= useContext(screensizecontext)
  const {collapsed, collapseSidebar} = useProSidebar();


  

  const BreakPointtheme = createTheme({
    breakpoints:{
        values:{
            md:810,
            lg:1123,
            xlg:1223,
            
        }
    },
})


  let location=window.location.pathname.slice(1)

  function showsidebar() {
    collapseSidebar(false);
  }

  const { user, logout } = useContext(AuthContext);
  let userDetails;
  if (user) {
    userDetails = jwt_decode(user.access);
  }
 

  return (
    <ThemeProvider theme={{...BreakPointtheme, collapsed:collapsed}}>
    <Box sx={{width:"100%"}}>
    {userDetails?.is_staff === true || userDetails?.is_superuser === true ? (<Box sx={{display: "flex",
          flexGrow:1,
          width:" auto ",
          height: "100vh",
          // position:"absolute",
          }}>
          <Box sx={{position:"fixed", display:(collapsed && dontdisplay) && "none"}}>
            {<Admin defaultTitle={location}/>}
          </Box>
          <Navbars >
            <Box sx={{display:"flex",alignItems:"center", justifyContent:"space-between", mt:"1.5rem", mr:"3%"}}>
              <Box  sx={{opacity:(collapsed && dontdisplay)? "1":"0"}}>
                <MenuOutlinedIcon fontSize="medium" onClick={showsidebar} sx={{color:theme?"white":undefined, cursor:"pointer"}} />
              </Box>
              <Box sx={{display:"flex", justifyContent:"basline", gap:"3.5%", cursor:"pointer"}}>
                <Box onClick={logout} sx={{display:"flex", color:theme &&"white"}}>
                  <LogoutOutlinedIcon fontSize="small" sx={{color:theme?"white":undefined, mr:"5px"}}/>
                  <Typography>Logout</Typography>
                </Box>
              </Box>
            </Box>
            <Box sx={{height: "100vh",
              // position:"absolute",
              width:dontdisplay?(collapsed?"80%":"70%"):"85%", 
              ml:dontdisplay?(collapsed?"9%":"27%"):(collapsed?"2%":"9%"),
              // backgroundColor:"red"
           //  paddingRight:screenSize && (collapsed?"13%":"95%")
             }}>
             <Typography variant="h3" sx={{textTransform: "capitalize",
                              color: "cyan",
                              textAlign: "center",
                              marginTop: "4rem",
                              marginLeft:location==="admin"?'':'-9.1rem'}}>
                                {location==="admin"?"Overview":location}
                                </Typography>
              <Outlet />
            </Box>
          </Navbars>
        </Box>): (
        <Typography variant="h1" sx={{color:theme?"white":"cyan", textAlign:"center", marginTop:"30vh"}}>Not authorized</Typography>
      )}
      {/* {userDetails?.is_staff === true || userDetails?.is_superuser === true ? (
        <Box sx={{display: "flex",
          flexGrow:1,
          width:" auto ",
          height: "100vh",
          // position:"absolute",
          }}>
          <Box>
            <Admin />
          </Box>
          <PageLayoutParent>
            <div className={theme?styles["pagelayout-topbar-dark"]:styles["pagelayout-topbar"]}>
              <div className={styles["top-bar"]}>
                <div
                  onClick={ShowSearch}
                  className={`${styles.pagelayoutsearch} ${
                    search && styles["pagelayoutsearch-active"]
                  }`}
                >
                  <SearchOutlined fontSize="small" sx={{color:theme?"white":undefined}}  />
                  <p>Search</p>
                </div>
                {search && (
                  // <SearchModal changed={(search) => setSearch(search)} />
                  <SearchModal onHide={hideSearch} />
                )}
                <p id={createShowState && styles["create-show"]} onClick={createShow}>Create</p>
                <div className={styles["logout-div"]}>
                <LogoutOutlinedIcon fontSize="small" sx={{color:theme?"white":undefined, mr:"5px"}}/>
                <p id={styles["admin-logout"]} onClick={logout}>Logout</p>
                </div>
              </div>
              {createShowState && <AdminCreate onHide={createHide} />}
            </div>
            <Box sx={{height: "100vh"}}>
             <h1 id={styles.location}>{location==="admin"?"Overview":location}</h1>
              <Outlet />
            </Box>
          </PageLayoutParent>
        </Box>
      ) : (
        <p>not authorized</p>
      )} */}
    </Box>
    </ThemeProvider>
  );
}
export default PageLayout;
