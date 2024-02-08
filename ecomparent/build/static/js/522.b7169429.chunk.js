"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[522],{5522:(e,t,o)=>{o.r(t),o.d(t,{default:()=>k});var r=o(2791),c=o(1489),a=o(503),s=o(8471),l=o(3978),i=o(228),n=o(3811),d=o(4565),u=o(2388),p=o(2042),h=o(1252),m=o(5191),x=o(4265),g=o(4283),f=o(1330),j=o(3788),Z=o(2501),y=o(9e3),b=o(9751),C=o(4977),_=o(2978),v=o(7689),w=o(184);const k=function(){const[e,t]=(0,r.useState)(""),[o,k]=(0,r.useState)(!1),[N,M]=(0,r.useState)(!1),[S,z]=(0,r.useState)({}),[D,T]=(0,r.useState)(!0),[P,E]=(0,r.useState)(null),{theme:G}=(0,r.useContext)(b.yw),{dontdisplay:B,gridlg:I,gridxl:L}=(0,r.useContext)(_.pt),H=(0,v.TH)();let A=!1;const{pathname:O}=H;A=!!O.includes("fullpage"),(0,r.useEffect)((()=>{(async()=>{try{const e=await u.Z.get("".concat("https://epcommerce.onrender.com","/product/getproduct"));200===e.status&&(T(!1),t(e.data))}catch(P){T(!1),E(P)}})()}),[]);const q=[{field:"id",headerName:"ID",hide:"true"},{field:"category",headerName:"Category",hide:"true",flex:1,headerAlign:"left"},{field:"image_url",headerName:"Image",filterable:!1,width:B?60:void 0,flex:B?0:1,renderCell:e=>(0,w.jsx)(l.Z,{src:e.row.image_url})},{field:"sellers",headerName:"Sellers",flex:1},{field:"description",headerName:"Description",flex:1,hide:"true"},{field:"price",headerName:"Price",type:"number",headerAlign:"left",align:"left",hide:!!B,flex:1,cellClassName:G?"dark":void 0},{field:"access",headerName:"Access",filterable:!1,flex:1,width:B?20:void 0,renderCell:e=>(0,w.jsxs)(i.Z,{m:B?"0 0":"7px 2%",p:B?"0 ":"5px",diplay:"flex",justifyContent:"center",gap:"0",children:[!B&&(I&&A||L&&I)&&(0,w.jsxs)(n.Z,{"aria-label":"Edit",size:"small",className:"",onClick:()=>function(e){M(!0),z(e.row)}(e),children:[(0,w.jsx)(s.Z,{sx:{color:G?"cyan":void 0}}),(0,w.jsx)(d.Z,{color:"grey",sx:{ml:"5px"},children:"Edit"})]}),N&&(0,w.jsx)(h.Z,{edit:M,id:S.id,category:S.category,description:S.description,price:S.price,colors:S.colors,size:S.size}),(0,w.jsxs)(n.Z,{"aria-label":"Delete",size:"small",className:"",onClick:()=>{k(!0)},children:[(0,w.jsx)(a.Z,{sx:{color:G?"red":void 0}}),(0,w.jsx)(d.Z,{color:"grey",sx:{ml:"5px"},children:"Delete"})]}),o&&(0,w.jsx)(p.Z,{setdelete:k,url:"".concat("https://epcommerce.onrender.com","/product/admin/deleteproduct/").concat(e.id),type:"admin"})]})}];return(0,r.useEffect)((()=>{document.title="Products"}),[]),(0,w.jsx)("div",{className:m.Z.usersandproduct,children:D?(0,w.jsx)(C.Z,{}):(0,w.jsxs)(w.Fragment,{children:[P&&(0,w.jsx)("h1",{id:m.Z.errors,children:P}),e&&(0,w.jsx)(i.Z,{m:"0 0 0 4%",height:B?"75vh":"80vh",pt:"2%",children:(0,w.jsx)(c._,{rows:e,columns:q,pageSize:7,rowsPerPageOptions:[7],checkboxSelection:!0,components:{Toolbar:function(){return(0,w.jsxs)(x.D,{children:[(0,w.jsx)(Z.S,{}),(0,w.jsx)(y.M,{}),!B&&(I&&A||L&&I)&&(0,w.jsx)(j.T,{}),!B&&L&&I&&(0,w.jsx)(g.L,{}),(0,w.jsx)(f.Zh,{})]})},GridCell:{border:"none"}},disableSelectionOnClick:!0,sx:G?{color:"white","& .MuiDataGrid-cellCheckbox":{outline:"white"},"& :rli:":{outline:"yellow",color:"black"},"& .MuiCheckbox-colorPrimary":{color:"white"},"& .css-levciy-MuiTablePagination-displayedRows":{backgroundColor:"#0e7878",color:"white"},"& .MuiDataGrid-footerContainer":{backgroundColor:"#0e7878",color:"white",borderTop:"none"},"& .css-78c6dr-MuiToolbar-root-MuiTablePagination-toolbar .MuiTablePagination-actions":{color:"white"},"& .MuiDataGrid-cell":{borderBottom:"none"},"& .css-1j9kmqg-MuiDataGrid-toolbarContainer":{borderTop:"none",backgroundColor:"#0e7878",color:"white",gap:B?"0":"5%",paddingLeft:"1.5%"},"& .css-1knaqv7-MuiButtonBase-root-MuiButton-root":{color:"white"},"& .css-1ptx2yq-MuiInputBase-root-MuiInput-root":{color:"white"},"& .MuiDataGrid-root .MuiDataGrid-root--densityStandard":{borderBottom:"none"},"& .css-b1p1vf .MuiDataGrid-root ":{border:"5px solid red "}}:{}})})]})})}},1252:(e,t,o)=>{o.d(t,{Z:()=>n});var r=o(2791),c=o(3811),a=o(7580),s=o(8237),l=o(1375),i=o(184);const n=function(e){let{edit:t,id:o,category:n,description:d,price:u,colors:p,size:h}=e;const m=JSON.parse(window.localStorage.getItem("authToken"))||null;function x(){}return(0,r.useEffect)((()=>{document.title="Edit"}),[]),(0,i.jsx)(l.Z,{children:(0,i.jsxs)("div",{className:s.Z["all-items"],children:[(0,i.jsx)("button",{id:s.Z.cancel,onClick:function(){t(!1)},children:"\u2715"}),(0,i.jsxs)("div",{className:s.Z["search-items"],children:[(0,i.jsx)("input",{type:"text",className:s.Z.product,placeholder:"category",onChange:x,value:n,name:"category"}),(0,i.jsx)("input",{type:"text",className:s.Z.product,placeholder:"description",onChange:x,value:d,name:"description"}),(0,i.jsx)("input",{type:"text",className:s.Z.colors,placeholder:"colors",onChange:x,value:p,name:"colors"}),(0,i.jsx)("input",{type:"text",className:s.Z.colors,placeholder:"price",onChange:x,value:u,name:"price"}),(0,i.jsx)("input",{type:"text",className:s.Z.colors,placeholder:"size",onChange:x,value:h,name:"size"}),(0,i.jsxs)("div",{className:s.Z["send-button"],children:[(0,i.jsxs)(c.Z,{variant:"outlined",component:"label",sx:{color:"cyan",mt:"1.5rem",display:"flex",justifyContent:"center"},children:[(0,i.jsx)("input",{hidden:!0,accept:"image/*",type:"file",className:s.Z.colors,onChange:x,name:"image"}),(0,i.jsx)(a.Z,{})]}),(0,i.jsx)("button",{className:s.Z.searchcreate,onClick:function(){(async()=>{let e=await fetch("".concat("https://epcommerce.onrender.com","/product/editproduct/").concat(o),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer "+m.access}});await e.json()})()},children:"Upload"})]})]})]})})}},8471:(e,t,o)=>{var r=o(4836);t.Z=void 0;var c=r(o(5649)),a=o(184),s=(0,c.default)((0,a.jsx)("path",{d:"m14.06 9.02.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z"}),"EditOutlined");t.Z=s},7580:(e,t,o)=>{o.d(t,{Z:()=>a});var r=o(1245),c=o(184);const a=(0,r.Z)([(0,c.jsx)("circle",{cx:"12",cy:"12",r:"3.2"},"0"),(0,c.jsx)("path",{d:"M9 2 7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"},"1")],"PhotoCamera")},5191:(e,t,o)=>{o.d(t,{Z:()=>r});const r={usersandproduct:"usersandproducts_usersandproduct__K91gH"}},8237:(e,t,o)=>{o.d(t,{Z:()=>r});const r={"all-items":"createproduct_all-items__3XPEk","all-items-dark":"createproduct_all-items-dark__ovcJj",cancel:"createproduct_cancel__Ix-rT","search-items":"createproduct_search-items__wuPen",product:"createproduct_product__4gm6y","send-button":"createproduct_send-button__bBhZS",searchcreate:"createproduct_searchcreate__Q0IdN","product-loading":"createproduct_product-loading__5SDuE"}}}]);
//# sourceMappingURL=522.b7169429.chunk.js.map