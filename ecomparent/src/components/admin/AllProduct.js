import React, { useState, useEffect, useContext } from "react";
import { DataGrid} from "@mui/x-data-grid";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { Avatar, Box, IconButton, Typography } from "@mui/material";
import axios from "axios";
import { CustomUseQuery } from "../../usequery/useQueryNo";
import Delete from "./Delete";
import EditProduct from "./EditProduct";
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

// http://127.0.0.1:8000/

const fetcher = () => {
  return axios.get(" http://127.0.0.1:8000/product/getproduct");
};

function AllProduct() {
  const [productData, setproductData] = useState("");
  const [deleteState, setdeleteState] = useState(false);
  const [edit, setEdit] = useState(false);
  // const [fullscreen, setFullscreen] = useState(false);
  const [id, setdId] = useState(null);
  const {theme}= useContext(ThemeData)
  const {dontdisplay, gridlg, gridxl}= useContext(screensizecontext)
  const { data } = CustomUseQuery(fetcher);
  const location= useLocation()
  let fullscreen= false
  const{pathname}=location

  if(pathname.includes("fullpage")){
    fullscreen=true
  }else{
    fullscreen=false

  }
  console.log(location)
  // const fullscreen=false

  console.log(data?.data)

  useEffect(() => {
    if (data) {
      setproductData(data.data);
    }
  }, [data]);

  function del(params) {
    setdeleteState(true)
    setdId(params.id)
  }
  function editing(params) {
    setEdit(true)
    setdId(params.id)
  }

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
      width:dontdisplay?60: undefined,
      flex:dontdisplay?0: 1,
      renderCell: (params) => {
        // console.log(params.row.image);
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
      hide:dontdisplay?true: false,
      flex: 1,
      cellClassName:theme?"dark":undefined,
    },

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
            {/* prevous logic that links to a new page */}
            {/* <IconButton
              aria-label="Edit"
              size="small"
              className=""
              component={Link}
              to= {`/admin/editproducts/${params.id}`} 
            >
              <EditOutlinedIcon sx={{color:theme?"cyan":undefined}} />
              <Typography color={"grey"} sx={{ ml: "5px" }}>
                Edit
              </Typography>
            </IconButton> */}
            {(!dontdisplay && ((gridlg &&fullscreen)||(gridxl && gridlg))) &&<IconButton
              aria-label="Edit"
              size="small"
              className=""
              onClick={()=>editing(params)}
            >
              <EditOutlinedIcon sx={{color:theme?"cyan":undefined}} />
              <Typography color={"grey"} sx={{ ml: "5px" }}>
                Edit
              </Typography>
            </IconButton>}
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
            {deleteState &&<Delete setdelete={setdeleteState} url={`http://127.0.0.1:8000/product/admin/deleteproduct/${id}`}/>}
          </Box>
        );
      },
    },
  ];

    console.log(gridlg)
    console.log(gridxl)
  function CustomToolbar() {
    return (
      <GridToolbarContainer>
        <GridToolbarColumnsButton />
        <GridToolbarFilterButton />
        {(!dontdisplay && ((gridlg &&fullscreen)||(gridxl && gridlg)))&&<GridToolbarQuickFilter />}
        {(!dontdisplay && gridxl && gridlg) &&<GridToolbarDensitySelector />}
        <GridToolbarExport />
      </GridToolbarContainer>
    );
  }
  return (
    <div className={styles["usersandproduct"]} >
      {productData ? (
        <Box m="0 0 0 4%" height={dontdisplay?"75vh":"80vh"} pt="2%">
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
        </Box>
      ): <Loading />}
    </div>
  );
}

export default AllProduct;
