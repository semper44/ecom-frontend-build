import React,{useState} from "react";
import CancelIcon from "@mui/icons-material/Cancel";
import DeleteIcon from "@mui/icons-material/Delete";
import {Typography, Button } from "@mui/material";
import { Box } from "@mui/system";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import DeleteModals from "./DeleteModal";
import Message from "../extra comp/Message";
import Loading from "../extra comp/Loading";
// import { useNavigate } from "react-router-dom";

// const fetcher=(productId)=>{
//   return axios.delete(`${process.env.REACT_APP_URLS}/product/deleteproduct/${productId}`)
// }

function DeleteComp({setdelete, url,id, type}) {
  const [loading, isLoading] = useState(false)
  const [error, setError] = useState(null)
  const [unsuccessful, setUnsuccessful] = useState(false)
  const [responseData, setResponseData] = useState(false)
  const joinedUrl = url+'/'+id
  let navigate=useNavigate()

  const token= JSON.parse(window.localStorage.getItem("authToken"))|| null
  const config= {headers:{
      'Content-Type':'multipart/form-data',
      'Authorization': 'Bearer '+ token?.access
  }}
    function deletefn(){
      isLoading(true)
      axios.delete(joinedUrl,config)
        .then(res=>{
          if(res.status===200){
            isLoading(false)
            setResponseData(true)
            if(type==="profile"){
              navigate("./")
              window.localStorage.removeItem("MY_CARTSTATE")
              window.localStorage.removeItem("authToken")
              window.localStorage.removeItem("themes")
            }else{
              window.location.reload()
            }
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
  
  function cancel(){
    setdelete(false)
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
      {responseData && <Message 
      value={"product deleted"}
      code={"success"}
      fn={setResponseData}
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
        zIndex="100"
      >
        <Box>
        <Typography color={"grey"} sx={{ ml: "5px" }}>
          Are you sure you want to delete?
        </Typography>
        <Box m="11px 0">
        <Button variant="outlined" sx={{':hover':{opacity:0.6}}} startIcon={<DeleteIcon />} onClick={deletefn}>
          Delete
        </Button>
        <Button variant="contained" sx={{ml:"5px", backgroundColor:"red", ':hover':{opacity:0.6}}} startIcon={<CancelIcon />} onClick={cancel}>
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

export default DeleteComp;
