"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[521],{1252:(e,t,o)=>{o.d(t,{Z:()=>l});var r=o(2791),s=o(3811),a=o(3245),c=o(8237),i=o(1375),n=o(184);const l=function(e){let{edit:t,id:o,category:l,description:d,price:u,colors:p,size:h}=e;const x=JSON.parse(window.localStorage.getItem("authToken"))||null;function m(){}return(0,r.useEffect)((()=>{document.title="Edit"}),[]),(0,n.jsx)(i.Z,{children:(0,n.jsxs)("div",{className:c.Z["all-items"],children:[(0,n.jsx)("button",{id:c.Z.cancel,onClick:function(){t(!1)},children:"\u2715"}),(0,n.jsxs)("div",{className:c.Z["search-items"],children:[(0,n.jsx)("input",{type:"text",className:c.Z.product,placeholder:"category",onChange:m,value:l,name:"category"}),(0,n.jsx)("input",{type:"text",className:c.Z.product,placeholder:"description",onChange:m,value:d,name:"description"}),(0,n.jsx)("input",{type:"text",className:c.Z.colors,placeholder:"colors",onChange:m,value:p,name:"colors"}),(0,n.jsx)("input",{type:"text",className:c.Z.colors,placeholder:"price",onChange:m,value:u,name:"price"}),(0,n.jsx)("input",{type:"text",className:c.Z.colors,placeholder:"size",onChange:m,value:h,name:"size"}),(0,n.jsxs)("div",{className:c.Z["send-button"],children:[(0,n.jsxs)(s.Z,{variant:"outlined",component:"label",sx:{color:"cyan",mt:"1.5rem",display:"flex",justifyContent:"center"},children:[(0,n.jsx)("input",{hidden:!0,accept:"image/*",type:"file",className:c.Z.colors,onChange:m,name:"image"}),(0,n.jsx)(a.Z,{})]}),(0,n.jsx)("button",{className:c.Z.searchcreate,onClick:function(){(async()=>{let e=await fetch("".concat("http://127.0.0.1:8000","/product/editproduct/").concat(o),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer "+x.access}});await e.json()})()},children:"Upload"})]})]})]})})}},1521:(e,t,o)=>{o.r(t),o.d(t,{default:()=>w});var r=o(2791),s=o(1173),a=o(3360),c=o(3811),i=o(4565),n=o(503),l=o(8471),d=o(3978),u=o(228),p=o(7689),h=o(1087),x=o(9907),m=o(4977),g=o(6528),f=o(456),j=o(2042),Z=o(1252),b=o(2978),y=o(5814),v=o(184);function C(){var e;const[t,o]=(0,r.useState)(!1),[C,w]=(0,r.useState)(!1),[k,_]=(0,r.useState)(),[N,M]=(0,r.useState)({}),[O,S]=(0,r.useState)(null),[T,z]=(0,r.useState)(!0),{dontdisplay:D,gridlg:E,gridxl:G}=(0,r.useContext)(b.pt),{user:P}=(0,r.useContext)(g.V),B=(0,p.TH)(),{username:F}=(0,p.UO)();let L=!1;const{pathname:q}=B;let I;L=!!q.includes("userproducts"),P&&(I=(0,f.Z)(P.access));const{theme:R}=(0,r.useContext)(x.yw);(0,r.useEffect)((()=>{let e=!1,t="".concat("http://127.0.0.1:8000","/product/listproductsbysellers/").concat(F,"/");fetch(t,{method:"GET",headers:{"Content-Type":"application/json"}}).then((t=>{if(!t.ok){if(z(!1),417!==t.status)throw Error("Couldn't fetch data, please retry");return e=!0,t.json()}if(200===t.status)return z(!1),t.json()})).then((t=>{e?S(t.msg):_(t)})).catch((e=>{z(!1),S(e.message)}))}),[F]),(0,r.useEffect)((()=>{document.title="Products"}),[]);const A=[{field:"id",headerName:"ID",hide:"true"},{field:"image",headerName:"Image",filterable:!1,flex:D?void 0:1,renderCell:e=>(0,v.jsx)(d.Z,{src:e.row.image})},{field:"price",headerName:"Price",type:"number",headerAlign:"left",align:"left",flex:D?void 0:1,cellClassName:R?"dark":void 0},{field:"access",headerName:"Access",filterable:!1,flex:1,hide:(null===(e=I)||void 0===e?void 0:e.username)!==F&&"true",renderCell:e=>(0,v.jsxs)(u.Z,{width:"60%",m:"7px 2px",p:"5px",diplay:"flex",justifyContent:"center",gap:"25px",children:[!D&&(E&&L||G&&E)&&(0,v.jsxs)(c.Z,{"aria-label":"Edit",size:"small",className:"",component:h.rU,onClick:()=>function(e){o(!0),M(e.row)}(e),children:[(0,v.jsx)(y.Z,{title:"Edit",arrow:!0,children:(0,v.jsx)(l.Z,{sx:{color:R?"cyan":void 0}})}),(0,v.jsx)(i.Z,{color:"grey",sx:{ml:"5px"},children:"Edit"})]}),t&&(0,v.jsx)(Z.Z,{edit:o,id:N.id,category:N.category,description:N.description,price:N.price,colors:N.colors,size:N.size}),(0,v.jsxs)(c.Z,{"aria-label":"Delete",size:"small",className:"",onClick:()=>{w(!0)},children:[(0,v.jsx)(n.Z,{sx:{color:R?"red":void 0}}),(0,v.jsx)(i.Z,{color:"grey",sx:{ml:"5px"},children:"Delete"})]}),C&&(0,v.jsx)(j.Z,{setdelete:w,url:"".concat("http://127.0.0.1:8000","/product/admin/deleteproduct/").concat(e.id)})]})}];return(0,v.jsx)(v.Fragment,{children:T?(0,v.jsx)(m.Z,{}):(0,v.jsxs)(v.Fragment,{children:[O&&(0,v.jsx)("h1",{style:{textAlign:"center",padding:" 15% 0",color:"cyan"},children:O}),k&&(0,v.jsx)("div",{style:{height:L?"100%":"60vh",width:"100%",marginBottom:"20px",paddingRight:"6%",paddingLeft:"3.5%"},children:(0,v.jsx)(u.Z,{m:"0 0 0 4%",height:D?L?"75vh":"80vh":L?"80vh":"60vh",pt:L?"4%":"6%",mb:L&&"29%",children:(0,v.jsx)(s._,{rows:k,columns:A,pageSize:L?9:5,rowsPerPageOptions:[6],checkboxSelection:!0,components:{Toolbar:a.n,GridCell:{border:"none"}},disableSelectionOnClick:!0,style:R?{color:"white","& .MuiDataGrid-cellCheckbox":{outline:"white"},"& .MuiDataGrid-cell":{borderBottom:"none"},"& .MuiCheckbox-colorPrimary":{color:"white"},"& .css-levciy-MuiTablePagination-displayedRows":{backgroundColor:"#0e7878",color:"white"},"& .MuiDataGrid-footerContainer":{backgroundColor:"#0e7878",color:"white",borderTop:"none"},"& .css-78c6dr-MuiToolbar-root-MuiTablePagination-toolbar .MuiTablePagination-actions":{color:"white"},"& .css-1j9kmqg-MuiDataGrid-toolbarContainer":{borderTop:"none",backgroundColor:"#0e7878",color:"white",gap:D?"0":"5%",paddingLeft:"1.5%"},"& .css-1knaqv7-MuiButtonBase-root-MuiButton-root":{color:"white"},"& .css-1ptx2yq-MuiInputBase-root-MuiInput-root":{color:"white"},"& .MuiDataGrid-root .MuiDataGrid-root--densityStandard":{borderBottom:"none"},"& .css-b1p1vf .MuiDataGrid-root ":{border:"5px solid red"}}:{}})})})]})})}const w=(0,r.memo)(C)},8471:(e,t,o)=>{var r=o(4836);t.Z=void 0;var s=r(o(5649)),a=o(184),c=(0,s.default)((0,a.jsx)("path",{d:"m14.06 9.02.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z"}),"EditOutlined");t.Z=c},3360:(e,t,o)=>{o.d(t,{n:()=>g});var r=o(7462),s=o(3366),a=o(2791),c=o(228),i=o(4265),n=o(2501),l=o(4283),d=o(9e3),u=o(1330),p=o(8963),h=o(3788),x=o(184);const m=["className","csvOptions","printOptions","excelOptions","showQuickFilter","quickFilterProps"],g=a.forwardRef((function(e,t){const{csvOptions:o,printOptions:a,excelOptions:g,showQuickFilter:f=!1,quickFilterProps:j={}}=e,Z=(0,s.Z)(e,m),b=(0,p.B)();return b.disableColumnFilter&&b.disableColumnSelector&&b.disableDensitySelector&&!f?null:(0,x.jsxs)(i.D,(0,r.Z)({ref:t},Z,{children:[(0,x.jsx)(n.S,{}),(0,x.jsx)(d.M,{}),(0,x.jsx)(l.L,{}),(0,x.jsx)(u.Zh,{csvOptions:o,printOptions:a,excelOptions:g}),(0,x.jsx)(c.Z,{sx:{flex:1}}),f&&(0,x.jsx)(h.T,(0,r.Z)({},j))]}))}))},8237:(e,t,o)=>{o.d(t,{Z:()=>r});const r={"all-items":"createproduct_all-items__M4nzv","all-items-dark":"createproduct_all-items-dark__R87fU",cancel:"createproduct_cancel__2N+Og","search-items":"createproduct_search-items__x4WZy",product:"createproduct_product__wJ1Rs","send-button":"createproduct_send-button__8bJxO",searchcreate:"createproduct_searchcreate__1ZZZY","product-loading":"createproduct_product-loading__ac3aw"}}}]);
//# sourceMappingURL=521.76c317ee.chunk.js.map