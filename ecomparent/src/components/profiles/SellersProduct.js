import React, { useState, useContext } from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import {IconButton, Typography} from "@mui/material";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";import { Avatar, Box} from "@mui/material";
import {useParams, Link} from "react-router-dom"
import { ThemeData } from "../../App";
import Loading from "../extra comp/Loading";
import { AuthContext } from "../profiles/login/LoginFetch"
import jwt_decode from "jwt-decode"
import Delete from "../admin/Delete";
import EditProduct from "../admin/EditProduct";
import useFetchToken from "../../usequery/useFetchToken.js";
import Message from "../extra comp/Message";
import { screensizecontext } from "../../stores/CartContxt";



function SellersProduct() {
  // const [productData, setproductData] = useState("");
  const [edit, setEdit] = useState(false);
  const [deleteState, setdeleteState] = useState(false);
  const [idd, setdIdd] = useState(null);
  const {dontdisplay}= useContext(screensizecontext)
  const{id}=useParams()
  const {theme}= useContext(ThemeData)
  let url= `https://cras.serveo.net/product/listproductsbyseller/${id}`
  let method = "GET"
  const {data, loading:loadingState, error, setMsgFn, msgFn}= useFetchToken(url, method)

  console.log(data)

  const {user}= useContext(AuthContext)
  let userDetail
  if(user){
    userDetail= jwt_decode(user.access)  
  }
  function editing(params) {
    setEdit(true)
    setdIdd(params.id)

  }
  console.log(id)



  // useEffect(() => {
  //   (async()=>{
  //     let response= await axios.get(`http://127.0.0.1:8000/product/listproductsnoauthorizatio/${id}`)
  //     setproductData(response.data)
  //     if(response.status===200){
  //       setLoading(false)}
  //     })()
  // }, [id]);

  function del(params) {
    setdeleteState(true)
    setdIdd(params.id)

  }
  console.log(msgFn)

  // function del(params) {
  //   setdeleteState(true)
  //   setdId(params.id)
  // }
  const columns = [
    { field: "id", headerName: "ID", hide: "true" },
    {
      field: "image",
      headerName: "Image",
      filterable: false,      
      flex:dontdisplay?undefined: 1,
      renderCell: (params) => {
        // console.log(params.row.image);
        return <Avatar src={params.row.image} />;
      },
    },
    {
      field: "price",
      headerName: "Price",
      type: "number",
      headerAlign: "left",
      align: "left",
      flex:dontdisplay?undefined: 1,
      cellClassName:theme?"dark":undefined,
    },
    {
      field: "access",
      headerName: "Access",
      filterable: false,
      flex: 1,
      hide:userDetail?.user_id !== parseInt(id) && "true",
      renderCell: (params) => {
        return (
          <Box
            width="60%"
            m="7px 2px"
            p="5px"
            diplay="flex"
            justifyContent="center"
            gap="25px"
          >
            <IconButton
              aria-label="Edit"
              size="small"
              className=""
              component={Link}
              onClick={()=>editing(params)}
            >
              <EditOutlinedIcon sx={{color:theme?"cyan":undefined}} />
              <Typography color={"grey"} sx={{ ml: "5px" }}>
                Edit
              </Typography>
            </IconButton>
            {edit &&<EditProduct edit={setEdit} id={id}/>}


            <IconButton
              aria-label="Delete"
              size="small"
              className=""
              onClick={()=>del(params)}
            >
              <DeleteOutlinedIcon sx={{color:theme?"red":undefined}}/>
              <Typography color={"grey"} sx={{ ml: "5px" }}>
                Delete
              </Typography>
            </IconButton>
            {deleteState &&<Delete setdelete={setdeleteState} url={`http://127.0.0.1:8000/product/admin/deleteproduct/${idd}`}/>}
          </Box>
        );
      },
    },
  ];
  return (
    <div style={{ height: "60vh", width: "100%", marginBottom:"20px", paddingRight:"6%",  paddingLeft:"3.5%"  }}>
      {msgFn && <Message value={error} code={"error"} fn={setMsgFn}/>}
      {data && !loadingState? (
        <Box m="35px 0 0 0" height="60vh">
          <DataGrid
            rows={data}
            columns={columns}
            pageSize={7}
            rowsPerPageOptions={[7]}
            checkboxSelection
            components={{Toolbar:GridToolbar, GridCell:{border:"none"}}}
            // showColumnRightBorder={false}
            disableSelectionOnClick={true}
            sx={theme && {color:"white", 
            "& .MuiDataGrid-cellCheckbox":{outline:"white"},
            "& .MuiCheckbox-colorPrimary":{color:"white"},
            "& .css-levciy-MuiTablePagination-displayedRows":{backgroundColor:"#0e7878",color:"white"},
            "& .MuiDataGrid-footerContainer":{backgroundColor:"#0e7878",color:"white", borderTop:"none"},
            "& .css-78c6dr-MuiToolbar-root-MuiTablePagination-toolbar .MuiTablePagination-actions":{color:"white"},
            "& .MuiDataGrid-cell":{borderBottom:"none"},
            "& .css-1j9kmqg-MuiDataGrid-toolbarContainer":{borderTop:"none", backgroundColor:"#0e7878", color:"white"},
            "& .css-1knaqv7-MuiButtonBase-root-MuiButton-root":{ color:"white"},
            "& .MuiDataGrid-root .MuiDataGrid-root--densityStandard":{borderBottom:"none"},
            "& .css-b1p1vf .MuiDataGrid-root ":{border:"5px solid red "},
          }}
            
          />
        </Box>
      ): <Loading />}
    </div>
  );
}

export default SellersProduct;
