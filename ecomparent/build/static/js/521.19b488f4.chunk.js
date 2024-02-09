"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[521],{1252:(e,t,o)=>{o.d(t,{Z:()=>l});var r=o(2791),c=o(3811),s=o(7580),a=o(8237),i=o(1375),n=o(184);const l=function(e){let{edit:t,id:o,category:l,description:d,price:u,colors:p,size:h}=e;const m=JSON.parse(window.localStorage.getItem("authToken"))||null;function x(){}return(0,r.useEffect)((()=>{document.title="Edit"}),[]),(0,n.jsx)(i.Z,{children:(0,n.jsxs)("div",{className:a.Z["all-items"],children:[(0,n.jsx)("button",{id:a.Z.cancel,onClick:function(){t(!1)},children:"\u2715"}),(0,n.jsxs)("div",{className:a.Z["search-items"],children:[(0,n.jsx)("input",{type:"text",className:a.Z.product,placeholder:"category",onChange:x,value:l,name:"category"}),(0,n.jsx)("input",{type:"text",className:a.Z.product,placeholder:"description",onChange:x,value:d,name:"description"}),(0,n.jsx)("input",{type:"text",className:a.Z.colors,placeholder:"colors",onChange:x,value:p,name:"colors"}),(0,n.jsx)("input",{type:"text",className:a.Z.colors,placeholder:"price",onChange:x,value:u,name:"price"}),(0,n.jsx)("input",{type:"text",className:a.Z.colors,placeholder:"size",onChange:x,value:h,name:"size"}),(0,n.jsxs)("div",{className:a.Z["send-button"],children:[(0,n.jsxs)(c.Z,{variant:"outlined",component:"label",sx:{color:"cyan",mt:"1.5rem",display:"flex",justifyContent:"center"},children:[(0,n.jsx)("input",{hidden:!0,accept:"image/*",type:"file",className:a.Z.colors,onChange:x,name:"image"}),(0,n.jsx)(s.Z,{})]}),(0,n.jsx)("button",{className:a.Z.searchcreate,onClick:function(){(async()=>{let e=await fetch("".concat("https://epcommerce.onrender.com","/product/editproduct/").concat(o),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer "+m.access}});await e.json()})()},children:"Upload"})]})]})]})})}},1521:(e,t,o)=>{o.r(t),o.d(t,{default:()=>w});var r=o(2791),c=o(1489),s=o(3360),a=o(3811),i=o(4565),n=o(503),l=o(8471),d=o(3978),u=o(228),p=o(7689),h=o(1087),m=o(9751),x=o(4977),g=o(6528),j=o(456),f=o(2042),b=o(1252),Z=o(2978),v=o(5814),y=o(184);function C(){var e;const[t,o]=(0,r.useState)(!1),[C,w]=(0,r.useState)(!1),[k,_]=(0,r.useState)(),[N,M]=(0,r.useState)({}),[S,T]=(0,r.useState)(null),[O,z]=(0,r.useState)(!0),{dontdisplay:D,gridlg:E,gridxl:P}=(0,r.useContext)(Z.pt),{user:B}=(0,r.useContext)(g.V),G=(0,p.TH)(),{username:F}=(0,p.UO)();let I=!1;const{pathname:L}=G;let q;I=!!L.includes("userproducts"),B&&(q=(0,j.Z)(B.access));const{theme:A}=(0,r.useContext)(m.yw);(0,r.useEffect)((()=>{let e=!1,t="".concat("https://epcommerce.onrender.com","/product/listproductsbysellers/").concat(F,"/");fetch(t,{method:"GET",headers:{"Content-Type":"application/json"}}).then((t=>{if(!t.ok){if(z(!1),417!==t.status)throw Error("Couldn't fetch data, please retry");return e=!0,t.json()}if(200===t.status)return z(!1),t.json()})).then((t=>{e?T(t.msg):_(t)})).catch((e=>{z(!1),T(e.message)}))}),[F]),(0,r.useEffect)((()=>{document.title="Products"}),[]);const H=[{field:"id",headerName:"ID",hide:"true"},{field:"image_url",headerName:"Image",filterable:!1,flex:D?void 0:1,renderCell:e=>(0,y.jsx)(d.Z,{src:e.row.image_url})},{field:"price",headerName:"Price",type:"number",headerAlign:"left",align:"left",flex:D?void 0:1,cellClassName:A?"dark":void 0},{field:"access",headerName:"Access",filterable:!1,flex:1,hide:(null===(e=q)||void 0===e?void 0:e.username)!==F&&"true",renderCell:e=>(0,y.jsxs)(u.Z,{width:"60%",m:"7px 2px",p:"5px",diplay:"flex",justifyContent:"center",gap:"25px",children:[!D&&(E&&I||P&&E)&&(0,y.jsxs)(a.Z,{"aria-label":"Edit",size:"small",className:"",component:h.rU,onClick:()=>function(e){o(!0),M(e.row)}(e),children:[(0,y.jsx)(v.Z,{title:"Edit",arrow:!0,children:(0,y.jsx)(l.Z,{sx:{color:A?"cyan":void 0}})}),(0,y.jsx)(i.Z,{color:"grey",sx:{ml:"5px"},children:"Edit"})]}),t&&(0,y.jsx)(b.Z,{edit:o,id:N.id,category:N.category,description:N.description,price:N.price,colors:N.colors,size:N.size}),(0,y.jsxs)(a.Z,{"aria-label":"Delete",size:"small",className:"",onClick:()=>{w(!0)},children:[(0,y.jsx)(n.Z,{sx:{color:A?"red":void 0}}),(0,y.jsx)(i.Z,{color:"grey",sx:{ml:"5px"},children:"Delete"})]}),C&&(0,y.jsx)(f.Z,{setdelete:w,url:"".concat("https://epcommerce.onrender.com","/product/admin/deleteproduct/").concat(e.id)})]})}];return(0,y.jsx)(y.Fragment,{children:O?(0,y.jsx)(x.Z,{}):(0,y.jsxs)(y.Fragment,{children:[S&&(0,y.jsx)("h1",{style:{textAlign:"center",padding:" 15% 0",color:"cyan"},children:S}),k&&(0,y.jsx)("div",{style:{height:I?"100%":"60vh",width:"100%",marginBottom:"20px",paddingRight:"6%",paddingLeft:"3.5%"},children:(0,y.jsx)(u.Z,{m:"0 0 0 4%",height:D?I?"75vh":"80vh":I?"80vh":"60vh",pt:I?"4%":"6%",mb:I&&"29%",children:(0,y.jsx)(c._,{rows:k,columns:H,pageSize:I?9:5,rowsPerPageOptions:[6],checkboxSelection:!0,components:{Toolbar:s.n,GridCell:{border:"none"}},disableSelectionOnClick:!0,style:A?{color:"white","& .MuiDataGrid-cellCheckbox":{outline:"white"},"& .MuiDataGrid-cell":{borderBottom:"none"},"& .MuiCheckbox-colorPrimary":{color:"white"},"& .css-levciy-MuiTablePagination-displayedRows":{backgroundColor:"#0e7878",color:"white"},"& .MuiDataGrid-footerContainer":{backgroundColor:"#0e7878",color:"white",borderTop:"none"},"& .css-78c6dr-MuiToolbar-root-MuiTablePagination-toolbar .MuiTablePagination-actions":{color:"white"},"& .css-1j9kmqg-MuiDataGrid-toolbarContainer":{borderTop:"none",backgroundColor:"#0e7878",color:"white",gap:D?"0":"5%",paddingLeft:"1.5%"},"& .css-1knaqv7-MuiButtonBase-root-MuiButton-root":{color:"white"},"& .css-1ptx2yq-MuiInputBase-root-MuiInput-root":{color:"white"},"& .MuiDataGrid-root .MuiDataGrid-root--densityStandard":{borderBottom:"none"},"& .css-b1p1vf .MuiDataGrid-root ":{border:"5px solid red"}}:{}})})})]})})}const w=(0,r.memo)(C)},8471:(e,t,o)=>{var r=o(4836);t.Z=void 0;var c=r(o(5649)),s=o(184),a=(0,c.default)((0,s.jsx)("path",{d:"m14.06 9.02.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z"}),"EditOutlined");t.Z=a},7580:(e,t,o)=>{o.d(t,{Z:()=>s});var r=o(1245),c=o(184);const s=(0,r.Z)([(0,c.jsx)("circle",{cx:"12",cy:"12",r:"3.2"},"0"),(0,c.jsx)("path",{d:"M9 2 7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"},"1")],"PhotoCamera")},3360:(e,t,o)=>{o.d(t,{n:()=>g});var r=o(7462),c=o(3366),s=o(2791),a=o(228),i=o(4265),n=o(2501),l=o(4283),d=o(9e3),u=o(1330),p=o(8963),h=o(3788),m=o(184);const x=["className","csvOptions","printOptions","excelOptions","showQuickFilter","quickFilterProps"],g=s.forwardRef((function(e,t){const{csvOptions:o,printOptions:s,excelOptions:g,showQuickFilter:j=!1,quickFilterProps:f={}}=e,b=(0,c.Z)(e,x),Z=(0,p.B)();return Z.disableColumnFilter&&Z.disableColumnSelector&&Z.disableDensitySelector&&!j?null:(0,m.jsxs)(i.D,(0,r.Z)({ref:t},b,{children:[(0,m.jsx)(n.S,{}),(0,m.jsx)(d.M,{}),(0,m.jsx)(l.L,{}),(0,m.jsx)(u.Zh,{csvOptions:o,printOptions:s,excelOptions:g}),(0,m.jsx)(a.Z,{sx:{flex:1}}),j&&(0,m.jsx)(h.T,(0,r.Z)({},f))]}))}))},8237:(e,t,o)=>{o.d(t,{Z:()=>r});const r={"all-items":"createproduct_all-items__3XPEk","all-items-dark":"createproduct_all-items-dark__ovcJj",cancel:"createproduct_cancel__Ix-rT","search-items":"createproduct_search-items__wuPen",product:"createproduct_product__4gm6y","send-button":"createproduct_send-button__bBhZS",searchcreate:"createproduct_searchcreate__Q0IdN","product-loading":"createproduct_product-loading__5SDuE"}}}]);
//# sourceMappingURL=521.19b488f4.chunk.js.map