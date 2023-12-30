import React, { useState, useEffect, useContext } from "react";
import { DataGrid} from "@mui/x-data-grid";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { Avatar, Box, IconButton, Typography } from "@mui/material";
import axios from "axios";
import Delete from "./DeleteComp";
import styles from "./usersandproducts.module.css"
import { GridToolbarContainer,
  GridToolbarDensitySelector,
  GridToolbarExport, } from "@mui/x-data-grid";
  import { GridToolbarQuickFilter } from "@mui/x-data-grid";
import { GridToolbarColumnsButton } from "@mui/x-data-grid";
import { GridToolbarFilterButton } from "@mui/x-data-grid";
// import { GridToolbarDensitySelector } from "@mui/x-data-grid";
// import {Link} from "react-router-dom"
import { ThemeData } from "../../App";
import Loading from "../extra comp/Loading";
import { screensizecontext } from "../../stores/CartContxt";
import { useLocation } from "react-router-dom";
import Tooltip from "@mui/material/Tooltip";
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';


function AllProduct() {
  const [productData, setproductData] = useState("");
  const [deleteState, setdeleteState] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [blockState, setBlockState] = useState(false);
  const [urls, setUrls] = useState("");
  // const [fullscreen, setFullscreen] = useState(false);
  const [id, setdId] = useState(null);
  const {theme}= useContext(ThemeData)
  const {dontdisplay, gridlg, gridxl, gridxlxl}= useContext(screensizecontext)
  const location= useLocation()
  let fullscreen= false
  const{pathname}=location

  if(pathname.includes("fullpage")){
    fullscreen=true
  }else{
    fullscreen=false

  }
  


  // const fullscreen=false
  const getData= async()=>{
    try{
      const res= await axios.get(`${process.env.REACT_APP_URLS}/profile/allusers`)
      if(res.status===200){
        ;
        setLoading(false)
        setproductData(res.data)
      }

    }catch(error){
      setLoading(false)
      setError(error)
    }
  }


  useEffect(()=>{
    window.location.pathname==="/users"&&getData()
  },[])



  function del(params) {
    setdeleteState(true)
    setdId(params.id)
  }

  function block(params) {
    if(params.row.blocked==="True" && params.row.tags==="seller"){
      setUrls(`http://127.0.0.1:8000/profile/unblockseller/${params.id}/`)
      console.log("hy")

    }
    else if(params.row.blocked==="false" && params.row.tags==="seller"){
      setUrls(`http://127.0.0.1:8000/profile/blockseller/${params.id}/`)
      console.log("hy2")

    }
    else if(params.row.blocked==="True" && params.row.tags==="no-seller"){
      setUrls(`http://127.0.0.1:8000/profile/unblockuser/${params.id}/`)
      console.log("hy3")

    }
    else if(params.row.blocked==="false" && params.row.tags==="no-seller"){
      setUrls(`http://127.0.0.1:8000/profile/blockuser/${params.id}/`)
      console.log("hy4")

    }
    setBlockState(true)
    setdId(params.id)
    
  }

  const columns = [
    { field: "id", headerName: "ID", hide: "true" },
    {
      field: "pics",
      headerName: "PICS",
      filterable: false,
      flex: 1,
      renderCell: (params) => {
        // ;
        console.log(params.row);
        return (
          <div style={{ display: "flex", alignItems: "center" }}>
            <Avatar src={params.row.pics} />
            {params.row.tags === "seller" && (
              <Tooltip title="Seller" arrow>
                <CheckCircleOutlineOutlinedIcon  style={{ color: "green", marginLeft: "5px" }} />
              </Tooltip>
            ) }
          </div>
        )
      },
    },
    { field: "username", headerName: "NAME", flex: 1 },

    {
      field: "access",
      headerName: "Access",
      filterable: false,
      flex: 1,
      width:dontdisplay?20:undefined,
      renderCell: (params) => {
        return (
          <Box
            // width="20%"
            m={dontdisplay?"0 0":"7px 2%"}
            p={dontdisplay?"0 ":"5px"}
            diplay="flex"
            justifyContent="center"
            gap="0"
          >
          
            <IconButton
              aria-label="Delete"
              size="small"
              className=""
              onClick={()=>del(params)}
            >
              <Tooltip title="Delete" arrow>
                <DeleteOutlinedIcon sx={{color:theme?"red":undefined}}/>
              </Tooltip>
              {dontdisplay? "" :<Typography color={"grey"} sx={{ ml: "5px" }}>
                Delete
              </Typography>}
            </IconButton>
            {deleteState &&<Delete setdelete={setdeleteState} url={`${process.env.REACT_APP_URLS}/product/admin/deleteproduct/${id}`} type={"admin"}/>}
            {!dontdisplay &&(params.row.blocked==="false"? 
            <IconButton
              aria-label="Delete"
              size="small"
              className=""
              onClick={()=>block(params)}
            >
            <Tooltip title="Ban" arrow>
              <DeleteOutlinedIcon sx={{color:theme?"red":params.row.tags==="no-seller"? "red":"cyan"}}/>
            </Tooltip>
              {gridxlxl &&<Typography color={"grey"} sx={{ ml: "5px" }}>
                Ban
              </Typography>}
            </IconButton>
            // blockState &&<Block setblock={setBlockState} url= {params.row.tags==="no-seller"?`http://127.0.0.1:8000/profile/blockuser/${params.id}`:`http://127.0.0.1:8000/profile/blockseller/${params.id}`}/>
            :<IconButton
              aria-label="Delete"
              size="small"
              className=""
              onClick={()=>block(params)}
            >
            <Tooltip title="Unban" arrow>
              <DeleteOutlinedIcon sx={{color:theme?"red":params.row.tags==="no-seller"? "red":"cyan"}}/>
            </Tooltip>
              {gridxlxl && <Typography color={"grey"} sx={{ ml: "5px" }}>
                Unban
              </Typography>}
            </IconButton>)}
          </Box>
        );
      },
    },
  ];

  useEffect(()=>{document.title="Users"
    },[])
    
  function CustomToolbar() {
    return (
      <GridToolbarContainer>
        <GridToolbarColumnsButton />
        <GridToolbarFilterButton />
        {(!dontdisplay && ((gridlg &&fullscreen)||(gridxl && gridlg)))&&<GridToolbarQuickFilter />}
        {((!dontdisplay && gridlg) || fullscreen) &&<GridToolbarDensitySelector />}
        {((!dontdisplay && gridxlxl) || fullscreen) &&<GridToolbarExport />}
      </GridToolbarContainer>
    );
  }
  return (
    <div className={styles["usersandproduct"]} >
      {!loading ?
      <> 
        {error && <h1 id={styles.errors}>{error}</h1> }
        {productData&&<Box m="0 0 0 4%" height={dontdisplay?"75vh":"80vh"} pt="2%">
          <DataGrid
            rows={productData}
            columns={columns}
            pageSize={7}
            rowsPerPageOptions={[7]}
            checkboxSelection
            components={{Toolbar:CustomToolbar, GridCell:{border:"none"}}}
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
        </Box>}</>: <Loading />}
    </div>
  );
}

export default AllProduct;
