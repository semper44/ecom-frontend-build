"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[234],{7561:(e,o,l)=>{l.r(o),l.d(o,{default:()=>S});var r=l(2791),t=l(1173),s=l(503),a=l(3978),i=l(228),n=l(3811),c=l(4565),d=l(2388),u=l(2879),h=l(3181),x=l(4265),p=l(4283),b=l(1330),g=l(3788),w=l(2501),f=l(9e3),m=l(5556),j=l(4977),k=l(2978),Z=l(7689),y=l(5814),C=l(2702),M=l(184);const S=function(){const[e,o]=(0,r.useState)(""),[l,S]=(0,r.useState)(!1),[D,v]=(0,r.useState)(!0),[T,N]=(0,r.useState)(null),[B,G]=(0,r.useState)(!1),[z,P]=(0,r.useState)(""),[I,L]=(0,r.useState)(null),{theme:O}=(0,r.useContext)(m.yw),{dontdisplay:_,gridlg:q,gridxl:E,gridxlxl:U}=(0,r.useContext)(k.pt),A=(0,Z.TH)();let H=!1;const{pathname:J}=A;function F(e){"True"===e.row.blocked&&"seller"===e.row.tags?(P("http://127.0.0.1:8000/profile/unblockseller/".concat(e.id,"/")),console.log("hy")):"false"===e.row.blocked&&"seller"===e.row.tags?(P("http://127.0.0.1:8000/profile/blockseller/".concat(e.id,"/")),console.log("hy2")):"True"===e.row.blocked&&"no-seller"===e.row.tags?(P("http://127.0.0.1:8000/profile/unblockuser/".concat(e.id,"/")),console.log("hy3")):"false"===e.row.blocked&&"no-seller"===e.row.tags&&(P("http://127.0.0.1:8000/profile/blockuser/".concat(e.id,"/")),console.log("hy4")),G(!0),L(e.id)}H=!!J.includes("fullpage"),(0,r.useEffect)((()=>{"/users"===window.location.pathname&&(async()=>{try{const e=await d.Z.get("".concat("http://127.0.0.1:8000","/profile/allusers"));200===e.status&&(v(!1),o(e.data))}catch(T){v(!1),N(T)}})()}),[]);const R=[{field:"id",headerName:"ID",hide:"true"},{field:"pics",headerName:"PICS",filterable:!1,flex:1,renderCell:e=>(console.log(e.row),(0,M.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[(0,M.jsx)(a.Z,{src:e.row.pics}),"seller"===e.row.tags&&(0,M.jsx)(y.Z,{title:"Seller",arrow:!0,children:(0,M.jsx)(C.Z,{style:{color:"green",marginLeft:"5px"}})})]}))},{field:"username",headerName:"NAME",flex:1},{field:"access",headerName:"Access",filterable:!1,flex:1,width:_?20:void 0,renderCell:e=>(0,M.jsxs)(i.Z,{m:_?"0 0":"7px 2%",p:_?"0 ":"5px",diplay:"flex",justifyContent:"center",gap:"0",children:[(0,M.jsxs)(n.Z,{"aria-label":"Delete",size:"small",className:"",onClick:()=>function(e){S(!0),L(e.id)}(e),children:[(0,M.jsx)(y.Z,{title:"Delete",arrow:!0,children:(0,M.jsx)(s.Z,{sx:{color:O?"red":void 0}})}),_?"":(0,M.jsx)(c.Z,{color:"grey",sx:{ml:"5px"},children:"Delete"})]}),l&&(0,M.jsx)(u.Z,{setdelete:S,url:"".concat("http://127.0.0.1:8000","/product/admin/deleteproduct/").concat(I),type:"admin"}),!_&&("false"===e.row.blocked?(0,M.jsxs)(n.Z,{"aria-label":"Delete",size:"small",className:"",onClick:()=>F(e),children:[(0,M.jsx)(y.Z,{title:"Ban",arrow:!0,children:(0,M.jsx)(s.Z,{sx:{color:O||"no-seller"===e.row.tags?"red":"cyan"}})}),U&&(0,M.jsx)(c.Z,{color:"grey",sx:{ml:"5px"},children:"Ban"})]}):(0,M.jsxs)(n.Z,{"aria-label":"Delete",size:"small",className:"",onClick:()=>F(e),children:[(0,M.jsx)(y.Z,{title:"Unban",arrow:!0,children:(0,M.jsx)(s.Z,{sx:{color:O||"no-seller"===e.row.tags?"red":"cyan"}})}),U&&(0,M.jsx)(c.Z,{color:"grey",sx:{ml:"5px"},children:"Unban"})]}))]})}];return(0,r.useEffect)((()=>{document.title="Users"}),[]),(0,M.jsx)("div",{className:h.Z.usersandproduct,children:D?(0,M.jsx)(j.Z,{}):(0,M.jsxs)(M.Fragment,{children:[T&&(0,M.jsx)("h1",{id:h.Z.errors,children:T}),e&&(0,M.jsx)(i.Z,{m:"0 0 0 4%",height:_?"75vh":"80vh",pt:"2%",children:(0,M.jsx)(t._,{rows:e,columns:R,pageSize:7,rowsPerPageOptions:[7],checkboxSelection:!0,components:{Toolbar:function(){return(0,M.jsxs)(x.D,{children:[(0,M.jsx)(w.S,{}),(0,M.jsx)(f.M,{}),!_&&(q&&H||E&&q)&&(0,M.jsx)(g.T,{}),(!_&&q||H)&&(0,M.jsx)(p.L,{}),(!_&&U||H)&&(0,M.jsx)(b.Zh,{})]})},GridCell:{border:"none"}},disableSelectionOnClick:!0,sx:O&&{color:"white","& .MuiDataGrid-cellCheckbox":{outline:"white"},"& :rli:":{outline:"yellow",color:"black"},"& .MuiCheckbox-colorPrimary":{color:"white"},"& .css-levciy-MuiTablePagination-displayedRows":{backgroundColor:"#0e7878",color:"white"},"& .MuiDataGrid-footerContainer":{backgroundColor:"#0e7878",color:"white",borderTop:"none"},"& .css-78c6dr-MuiToolbar-root-MuiTablePagination-toolbar .MuiTablePagination-actions":{color:"white"},"& .MuiDataGrid-cell":{borderBottom:"none"},"& .css-1j9kmqg-MuiDataGrid-toolbarContainer":{borderTop:"none",backgroundColor:"#0e7878",color:"white",gap:_?"0":"5%",paddingLeft:"1.5%"},"& .css-1knaqv7-MuiButtonBase-root-MuiButton-root":{color:"white"},"& .css-1ptx2yq-MuiInputBase-root-MuiInput-root":{color:"white"},"& .MuiDataGrid-root .MuiDataGrid-root--densityStandard":{borderBottom:"none"},"& .css-b1p1vf .MuiDataGrid-root ":{border:"5px solid red "}}})})]})})}},2702:(e,o,l)=>{var r=l(4836);o.Z=void 0;var t=r(l(5649)),s=l(184),a=(0,t.default)((0,s.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4 8-8z"}),"CheckCircleOutlineOutlined");o.Z=a},3181:(e,o,l)=>{l.d(o,{Z:()=>r});const r={usersandproduct:"usersandproducts_usersandproduct__dJTHJ"}}}]);
//# sourceMappingURL=234.a7281bba.chunk.js.map