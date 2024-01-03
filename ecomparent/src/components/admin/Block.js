import React, {useState} from "react";
import CancelIcon from "@mui/icons-material/Cancel";
import DeleteIcon from "@mui/icons-material/Delete";
import {Typography, Button } from "@mui/material";
import { Box } from "@mui/system";
import DeleteModals from "./DeleteModal";
import axios from 'axios'
import Message from "../extra comp/Message";
import Loading from "../extra comp/Loading";


// import { useNavigate } from "react-router-dom";

// const fetcher=(productId)=>{
//   return axios.delete(`${process.env.REACT_APP_URLS}/product/deleteproduct/${productId}`)
// }

function Block({setBlockState, url}) {
  const [loading, isLoading] = useState(false)
  const [error, setError] = useState(null)
  const [unsuccessful, setUnsuccessful] = useState(false)
  const [successful, setSuccessful] = useState(false)
  
  
  function cancel(){
    setBlockState(false)
  }
  
  const token= JSON.parse(window.localStorage.getItem("authToken"))|| null
  const config= {headers:{
      'Content-Type':'multipart/form-data',
      'Authorization': 'Bearer '+ token?.access
  }}

  function blockfn(){
    isLoading(true)
    axios.post(url,config)
      .then(res=>{
        isLoading(false)
        if(res.status === 200){
          setSuccessful(true)
          window.location.reload()      
        }else{
            isLoading(false)
            setError(error)
          }
        })
        .catch(error=>{  
          setError(error)
          isLoading(false)
          setUnsuccessful(true)
          
        })
  }

  return (
    <>
    <DeleteModals>
      {unsuccessful && <Message 
      value={"Sorry, request failed"}
      code={"error"}
      fn={setUnsuccessful}
       />
      }
      {successful && <Message 
      value={"user banned"}
      code={"success"}
      fn={setSuccessful}
       />
      }
      <Box
        width="fit-content"
        m="7px 2px"
        p="10px 22px"
        diplay="flex"
        justifyContent="center"
        alignItems="center"
        // gap="25px"
        backgroundColor="#f5f5f5"
        borderRadius="10px"
      >
        <Box>
        <Typography color={"grey"} sx={{ ml: "5px" }}>
          Are you sure you want to block?
        </Typography>
        <Box m="11px 0">
        <Button variant="outlined" sx={{':hover':{opacity:0.6}}} startIcon={<DeleteIcon />} onClick={blockfn}>
          Ban
        </Button>
        <Button variant="contained" sx={{ml:"5px", ':hover':{opacity:0.6}}} startIcon={<CancelIcon />} onClick={cancel}>
          Cancel
        </Button>
        </Box>
        </Box>
      </Box>
    </DeleteModals>
    {loading&&<Box sx={{position:"fixed", top:"40%", left:"45%", zIndex:"99"}}>
    <Loading />
  </Box>}
  </>
  );
}

export default Block;
