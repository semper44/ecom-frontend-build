import React, { memo, useEffect,useContext } from 'react'
import { DataGrid } from "@mui/x-data-grid";
import { Avatar, Box} from "@mui/material";
import Loading from '../extra comp/Loading';
import useFetchToken from "../../usequery/useFetchToken.js";
import { AuthContext } from "../profiles/login/LoginFetch"
import jwt_decode from "jwt-decode"




function YourOrders() {
    // const method='GET'
    // let url= `${process.env.REACT_APP_URLS}/profile/details/${id}`
    // const {data}= useAuthFetch(url, method) 
    // 
    // const[data, setData]= useState()
    // const [loading, setLoading] = useState(true);
    // const token= JSON.parse(window.localStorage.getItem("authToken"))|| null
    const {user}= useContext(AuthContext)
    let userDetail
    if(user){
      userDetail= jwt_decode(user.access)  
    }
    
    let url= `${process.env.REACT_APP_URLS}/profile/yourorders/${userDetail.username}`
    let method = "GET"
    const {data, loading, error}= useFetchToken(url, method)
    
    

    const columns = [
        { field: "id", headerName: "ID", hide: "true" },
        {
          field: "category",
          headerName: "Category",
          hide: "true",
          flex: 1,
          headerAlign: "left",
        },
        {
          field: "image",
          headerName: "Image",
          filterable: false,
          renderCell: (params) => {
            // ;
            return <Avatar src={params.row.image} />;
          },
        },
        { field: "sellers", headerName: "Sellers", flex: 1 },
        { field: "description", headerName: "Description", flex: 1, hide: "true" },
        {
          field: "price",
          headerName: "Price",
          type: "number",
          headerAlign: "left",
          align: "left",
        },
        {
          field: "size",
          headerName: "Size",
          type: "number",
          headerAlign: "left",
          align: "left",
          hide: "true",
        },
      ];

      useEffect(()=>{document.title="Orders"
    },[])
  return (
    <>
      {!loading?
      <>
      {error && <h1 style={{display: "flex", justifyContent: "center", alignItems: "center", padding:" 22% 0", color: "cyan",}}>
        {error}
      </h1> }
    {data &&<div style={{ height: "100%", width: "100%" }}>
       (
        <Box m="35px 0 0 0" height="40vh">
          <DataGrid
            rows={data}
            columns={columns}
            pageSize={7}
            rowsPerPageOptions={[7]}
            checkboxSelection
            disableSelectionOnClick={true}
          />
        </Box>
      )
    </div>}</>: <Loading />}
  </>
  )
}

export default memo(YourOrders)