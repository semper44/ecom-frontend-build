import React,{useState} from 'react'
import { useEffect } from 'react'
import { DataGrid } from "@mui/x-data-grid";
import { Avatar, Box} from "@mui/material";
import Loading from '../extra comp/Loading';
import useFetchToken from "../../usequery/useFetchToken.js";
import Message from '../extra comp/Message';




function YourOrders() {
    // const method='GET'
    // let url= `http://127.0.0.1:8000/profile/details/${id}`
    // const {data}= useAuthFetch(url, method) 
    // console.log(id)
    // const[data, setData]= useState()
    // const [loading, setLoading] = useState(true);
    // const token= JSON.parse(window.localStorage.getItem("authToken"))|| null
    let url= `http://127.0.0.1:8000/product/orde/`
    let method = "GET"
    const {data, loading, error, setMsgFn, msgFn}= useFetchToken(url, method)
    console.log("na me")
    console.log(data, loading, error, msgFn)

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
  return (
    <div style={{ height: "100%", width: "100%" }}>
      {msgFn && <Message value={error} code={"error"} fn={setMsgFn}/>}

      {data && !loading ? (
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
      ): <Loading />}
  </div>
  )
}

export default YourOrders