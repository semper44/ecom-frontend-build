import {  styled } from "@mui/material/styles"


export const Navbars =styled("div")(({theme}) => ({
    [theme.breakpoints.down("md")]:{
        width:theme.collapsed?"95%":"75%",
        marginLeft:theme.collapsed?"3%":"21%"
    },   
    [theme.breakpoints.between("md","lg")]:{
        width:theme.collapsed?"85%":"75%",
        marginLeft:theme.collapsed?"11.5%":"21%",

    },    
    [theme.breakpoints.up("lg")]:{
        zIndex:"100",
        width:theme.collapsed?"85%":"95%",
        marginLeft:theme.collapsed?"11.5%":"21%",
    }    
}))



    