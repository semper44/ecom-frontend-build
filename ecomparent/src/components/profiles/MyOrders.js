import React, { useState, useContext, useEffect, memo } from "react";
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



function MyOrders() {
    const[data, setData]=useState([])
    const[error, setError]=useState(null)
    const[loading, setLoading]=useState(true)
    const [edit, setEdit] = useState(false);
    const [deleteState, setdeleteState] = useState(false);
    const [idd, setdIdd] = useState(null);
    const[msgFn, setMsgFn]=useState(false)
    const {dontdisplay}= useContext(screensizecontext)
    const{id}=useParams()
    const {theme}= useContext(ThemeData)

    const {user}= useContext(AuthContext)
    let userDetail
    if(user){
      userDetail= jwt_decode(user.access)  
    }

  useEffect(()=>{
    let errorStatus=false
    fetch(`${process.env.REACT_APP_URLS}/profile/yourorders/${userDetail.username}`)
    .then((res)=>{
        if(!res.ok){
            setLoading(false)
            errorStatus=true
            if(res.status===417){
            }else{
              throw Error("Couldn't fetch data, please retry")
            }
        }else{
              setLoading(false)
              // setMsgFn(true)
              return res.json()
            }
        })
    .then((result)=>{
      if(errorStatus){
        setError('No orders found')
    }else{
      if(result !== undefined){
          result.forEach((data) => {
            const itemQty= JSON.parse(data.item_qty)
            // )
            // )
            data.serializer.map((obj, index)=>{
              if(Array.isArray(itemQty)){
                obj.qty=itemQty[index]
              }else{
                obj.qty=itemQty

              }
              setData(prev=>[...prev, obj])
              

            })
          })
        }
    }
    })
    .catch((err)=>{
        setLoading(false)
        setError(err.message)
        setMsgFn(true)
    })
    }, [])
  

  
  function editing(params) {
    setEdit(true)
    setdIdd(params.id)

  }

  function del(params) {
    setdeleteState(true)
    setdIdd(params.id)

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
      field: "qty",
      headerName: "qty",
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
            {deleteState &&<Delete setdelete={setdeleteState} url={`${process.env.REACT_APP_URLS}/product/admin/deleteproduct/${idd}`}/>}
          </Box>
        );
      },
    },
  ];
  useEffect(()=>{document.title="Orders"
  },[])
  return (
    <div style={{ height: "60vh", width: "100%", marginBottom:"20px", paddingRight:"6%",  paddingLeft:"3.5%"  }}>
     {error ? <h1 style={{textAlign: "center", padding:" 22% 0", color: "cyan",}}>
        {error}
      </h1>  :    
      (!loading ? (
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
      ): <Loading />)}
    </div>
  );
}

export default memo(MyOrders);
