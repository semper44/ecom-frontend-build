"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[668],{4668:(e,t,r)=>{r.r(t),r.d(t,{default:()=>f});var a=r(2791),l=r(1173),i=r(3978),n=r(228),s=r(4977);const d=function(e,t){const[r,l]=(0,a.useState)(),[i,n]=(0,a.useState)(null),[s,d]=(0,a.useState)(!0),o=JSON.parse(window.localStorage.getItem("authToken"))||null;return(0,a.useEffect)((()=>{let r=!1;fetch(e,{method:t,headers:{"Content-Type":"application/json",Authorization:"Bearer "+(null===o||void 0===o?void 0:o.access)}}).then((e=>{if(!e.ok){if(d(!1),417!==e.status)throw Error("Couldn't fetch data, please retry");r=!0}return 200===e.status&&d(!1),e.json()})).then((e=>{r?n(e.msg):l(e)})).catch((e=>{d(!1),n(e.message)}))}),[t,null===o||void 0===o?void 0:o.access,e]),{loading:s,error:i,data:r}};var o=r(6528),c=r(456),h=r(184);function u(){const{user:e}=(0,a.useContext)(o.V);let t;e&&(t=(0,c.Z)(e.access));let r="".concat("http://127.0.0.1:8000","/profile/yourorders/").concat(t.username);const{data:u,loading:f,error:m}=d(r,"GET"),g=[{field:"id",headerName:"ID",hide:"true"},{field:"category",headerName:"Category",hide:"true",flex:1,headerAlign:"left"},{field:"image",headerName:"Image",filterable:!1,renderCell:e=>(0,h.jsx)(i.Z,{src:e.row.image})},{field:"sellers",headerName:"Sellers",flex:1},{field:"description",headerName:"Description",flex:1,hide:"true"},{field:"price",headerName:"Price",type:"number",headerAlign:"left",align:"left"},{field:"size",headerName:"Size",type:"number",headerAlign:"left",align:"left",hide:"true"}];return(0,a.useEffect)((()=>{document.title="Orders"}),[]),(0,h.jsx)(h.Fragment,{children:f?(0,h.jsx)(s.Z,{}):(0,h.jsxs)(h.Fragment,{children:[m&&(0,h.jsx)("h1",{style:{display:"flex",justifyContent:"center",alignItems:"center",padding:" 22% 0",color:"cyan"},children:m}),u&&(0,h.jsxs)("div",{style:{height:"100%",width:"100%"},children:["(",(0,h.jsx)(n.Z,{m:"35px 0 0 0",height:"40vh",children:(0,h.jsx)(l._,{rows:u,columns:g,pageSize:7,rowsPerPageOptions:[7],checkboxSelection:!0,disableSelectionOnClick:!0})}),")"]})]})})}const f=(0,a.memo)(u)}}]);
//# sourceMappingURL=668.c493e4ce.chunk.js.map