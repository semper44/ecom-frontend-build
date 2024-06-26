import React from 'react';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import jwt_decode from "jwt-decode"

const token=JSON.parse(window.localStorage.getItem("authToken"))||undefined
let id;
if(token){
  id=jwt_decode(token?.access)

}

export const SidebarData = [
  
  {
    title: 'Profile',
    path: `/profile/${id?.username}`,
    icon: <AccountBoxIcon />,
    cName: 'nav-text'
  },
  // {
  //   title: 'Notification',
  //   path: `/profile/${id?.user_id}/notifications`,
  //   icon: <NotificationsNoneOutlinedIcon />,
  //   cName: 'nav-text'
  // },
  {
    title: 'Home',
    path: '/',
    icon: <PeopleAltOutlinedIcon />,
    cName: 'nav-text'
  },
  {
    title: 'Support',
    path: '/support',
    icon:id?.user_id ?<LogoutOutlinedIcon />:<LoginOutlinedIcon /> ,
    cName: 'nav-text'
  }
];