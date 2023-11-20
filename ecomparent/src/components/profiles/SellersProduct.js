import React, { useState, useContext, memo, useEffect } from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import {IconButton, Typography} from "@mui/material";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";import { Avatar, Box} from "@mui/material";
import {useParams, Link} from "react-router-dom"
import { ThemeData } from "../../App";
import Loading from "../extra comp/Loading";
import { AuthContext } from "../profiles/login/LoginFetch"
import jwt_decode from "jwt-decode"
import Delete from "../admin/DeleteComp";
import EditProduct from "../admin/EditProduct";
import { screensizecontext } from "../../stores/CartContxt";
import { useLocation } from "react-router-dom";




function SellersProduct() {
  const [edit, setEdit] = useState(false);
  const [deleteState, setdeleteState] = useState(false);
  const[data, setData]=useState()
  const[details, setDetails]=useState({})
  const[error, setError]=useState(null)
  const[loading, setLoading]=useState(true)
  const {dontdisplay, gridlg, gridxl}= useContext(screensizecontext)
  const {user}= useContext(AuthContext)
  const location= useLocation()
  const{username}= useParams()
  let fullscreen= false
  const{pathname}=location

  if(pathname.includes("userproducts")){
    fullscreen=true
  }else{
    fullscreen=false

  }

  let userDetail
  if(user){
    userDetail= jwt_decode(user.access)  
  }  
  
  ;
  const {theme}= useContext(ThemeData)
  


  useEffect(()=>{
    let errorStatus=false
    let url= `${process.env.REACT_APP_URLS}/product/listproductsbysellers/${username}`
    let method = "GET"
    fetch(url,
      {method:method,
      headers:{
      'Content-Type':'application/json',
      }})
      .then((response)=>{
          if(!response.ok){
              setLoading(false)
              if(response.status===417){
                  errorStatus=true
              }else{
                  throw Error("Couldn't fetch data, please retry")
              }
          }
          if (response.status===200){
              setLoading(false)
          }       
          ;     
          return response.json()
      })
      .then((data)=>{
          ;     
          if(errorStatus){
              setError(data.msg)
          }else{
              setData(data)
          }
      })
      .catch(err=>{
          setLoading(false)
          setError(err.message)
  })  }, [username])
 

  useEffect(()=>{document.title="Products"
    },[])
  
  function editing(params) {
    setEdit(true)
    setDetails(params.row);
  }


  // useEffect(() => {
  //   (async()=>{
  //     let response= await axios.get(`${process.env.REACT_APP_URLS}/product/listproductsnoauthorizatio/${id}`)
  //     setproductData(response.data)
  //     if(response.status===200){
  //       setLoading(false)}
  //     })()
  // }, [id]);

  function del(params) {
    setdeleteState(true)
  }

  const columns = [
    { field: "id", headerName: "ID", hide: "true" },
    {
      field: "image",
      headerName: "Image",
      filterable: false,      
      flex:dontdisplay?undefined: 1,
      renderCell: (params) => {
        // ;
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
      hide:userDetail?.username !== username && "true",
      renderCell: (params) => {
        ;
        return (
          <Box
            width="60%"
            m="7px 2px"
            p="5px"
            diplay="flex"
            justifyContent="center"
            gap="25px"
          >
            {(!dontdisplay && ((gridlg &&fullscreen)||(gridxl && gridlg))) &&<IconButton
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
            </IconButton>}
            {edit &&<EditProduct edit={setEdit} 
            id={details.id}
            category={details.category}
            description={details.description}
            price={details.price}
            colors={details.colors}
            size={details.size}
            />}


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
            {deleteState &&<Delete setdelete={setdeleteState} url={`${process.env.REACT_APP_URLS}/product/admin/deleteproduct/${params.id}`}/>}
          </Box>
        );
      },
    },
  ];
  return (
    <>
      {!loading?
      <>
      {error && <h1 style={{display: "flex", justifyContent: "center", alignItems: "center", padding:" 15% 0", color: "cyan",}}>
        {error}
      </h1> }
    {data &&<div style={{ height:fullscreen?"100%":"60vh", width: "100%", marginBottom:"20px", paddingRight:"6%",  paddingLeft:"3.5%"  }}>
    {/* components={{Toolbar:GridToolbar, GridCell:{border:"none"}}} */}

    <Box m="0 0 0 4%" height={dontdisplay?(fullscreen?"75vh":"80vh"):(fullscreen?"80vh":"60vh")} pt={fullscreen?"4%":"6%"} mb={fullscreen&&"29%"}>
          <DataGrid
            rows={data}
            columns={columns}
            pageSize={fullscreen?9:5}
            rowsPerPageOptions={[6]}
            checkboxSelection
            components={{Toolbar:GridToolbar, GridCell:{border:"none"}}}
 // showColumnRightBorder={false}
            disableSelectionOnClick={true}
            sx={theme && {color:"white", 
            "& .MuiDataGrid-cellCheckbox":{outline:"white"},
            "& :rli:":{outline:"yellow", color:"black"},
            "& .MuiCheckbox-colorPrimary":{color:"white"},
            "& .css-levciy-MuiTablePagination-displayedRows":{backgroundColor:"#0e7878",color:"white"},
            "& .MuiDataGrid-footerContainer":{backgroundColor:"#0e7878",color:"white", borderTop:"none"},
            "& .css-78c6dr-MuiToolbar-root-MuiTablePagination-toolbar .MuiTablePagination-actions":{color:"white"},
            "& .MuiDataGrid-cell":{borderBottom:"none"},
            "& .css-1j9kmqg-MuiDataGrid-toolbarContainer":{borderTop:"none", backgroundColor:"#0e7878", color:"white", gap:dontdisplay?"0":"5%", paddingLeft:"1.5%"},
            "& .css-1knaqv7-MuiButtonBase-root-MuiButton-root":{ color:"white"},
            "& .css-1ptx2yq-MuiInputBase-root-MuiInput-root":{ color:"white"},
            "& .MuiDataGrid-root .MuiDataGrid-root--densityStandard":{borderBottom:"none"},
            "& .css-b1p1vf .MuiDataGrid-root ":{border:"5px solid red "},
          }}
            
          />
        </Box>
    </div>}</>:<Loading /> }
    </>
  );
}

export default memo(SellersProduct);
