"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[561],{1252:function(e,t,o){var n=o(4165),r=o(5861),a=o(2791),i=o(3811),c=o(3245),s=o(8237),l=o(1375),d=o(184);t.Z=function(e){var t=e.edit,o=e.id,u=e.category,p=e.description,h=e.price,x=e.colors,m=e.size,f=JSON.parse(window.localStorage.getItem("authToken"))||null;(0,a.useEffect)((function(){document.title="Edit"}),[]);var Z=function(){var e=(0,r.Z)((0,n.Z)().mark((function e(){var t;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("http://127.0.0.1:8000","/product/editproduct/").concat(o),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer "+f.access}});case 2:return t=e.sent,e.next=5,t.json();case 5:e.sent;case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();function v(){}return(0,d.jsx)(l.Z,{children:(0,d.jsxs)("div",{className:s.Z["all-items"],children:[(0,d.jsx)("button",{id:s.Z.cancel,onClick:function(){t(!1)},children:"\u2715"}),(0,d.jsxs)("div",{className:s.Z["search-items"],children:[(0,d.jsx)("input",{type:"text",className:s.Z.product,placeholder:"category",onChange:v,value:u,name:"category"}),(0,d.jsx)("input",{type:"text",className:s.Z.product,placeholder:"description",onChange:v,value:p,name:"description"}),(0,d.jsx)("input",{type:"text",className:s.Z.colors,placeholder:"colors",onChange:v,value:x,name:"colors"}),(0,d.jsx)("input",{type:"text",className:s.Z.colors,placeholder:"price",onChange:v,value:h,name:"price"}),(0,d.jsx)("input",{type:"text",className:s.Z.colors,placeholder:"size",onChange:v,value:m,name:"size"}),(0,d.jsxs)("div",{className:s.Z["send-button"],children:[(0,d.jsxs)(i.Z,{variant:"outlined",component:"label",sx:{color:"cyan",mt:"1.5rem",display:"flex",justifyContent:"center"},children:[(0,d.jsx)("input",{hidden:!0,accept:"image/*",type:"file",className:s.Z.colors,onChange:v,name:"image"}),(0,d.jsx)(c.Z,{})]}),(0,d.jsx)("button",{className:s.Z.searchcreate,onClick:function(){Z()},children:"Upload"})]})]})]})})}},5561:function(e,t,o){o.r(t);var n=o(2982),r=o(885),a=o(2791),i=o(6229),c=o(3360),s=o(3811),l=o(4565),d=o(503),u=o(8471),p=o(3978),h=o(228),x=o(7689),m=o(1087),f=o(6243),Z=o(4977),v=o(6528),j=o(456),g=o(2042),y=o(1252),b=o(2978),C=o(184);function k(){var e,t,o=(0,a.useState)([]),k=(0,r.Z)(o,2),w=k[0],_=k[1],N=(0,a.useState)(null),O=(0,r.Z)(N,2),M=O[0],S=O[1],D=(0,a.useState)(!0),z=(0,r.Z)(D,2),T=z[0],E=z[1],q=(0,a.useState)(!1),G=(0,r.Z)(q,2),B=G[0],P=G[1],A=(0,a.useState)(!1),F=(0,r.Z)(A,2),L=F[0],R=F[1],I=(0,a.useState)(null),J=(0,r.Z)(I,2),U=J[0],Q=J[1],V=(0,a.useState)(!1),H=(0,r.Z)(V,2),W=(H[0],H[1]),Y=(0,a.useContext)(b.pt).dontdisplay,K=(0,x.UO)().id,X=(0,a.useContext)(f.yw).theme,$=(0,a.useContext)(v.V).user;$&&(t=(0,j.Z)($.access)),(0,a.useEffect)((function(){var e=!1;fetch("".concat("http://127.0.0.1:8000","/profile/yourorders/").concat(t.username)).then((function(t){if(t.ok)throw Error("Couldn't fetch data, please retry");return E(!1),417===t.status?(e=!0,t.json()):200===t.status?(E(!1),t.json()):void 0})).then((function(t){e?S(t.msg):void 0!==t&&t.forEach((function(e){var t=JSON.parse(e.item_qty);e.serializer.map((function(e,o){Array.isArray(t)?e.qty=t[o]:e.qty=t,_((function(t){return[].concat((0,n.Z)(t),[e])}))}))}))})).catch((function(e){E(!1),S(e.message),W(!0)}))}),[]);var ee=[{field:"id",headerName:"ID",hide:"true"},{field:"image",headerName:"Image",filterable:!1,flex:Y?void 0:1,renderCell:function(e){return(0,C.jsx)(p.Z,{src:e.row.image})}},{field:"qty",headerName:"qty",type:"number",headerAlign:"left",align:"left",flex:Y?void 0:1,cellClassName:X?"dark":void 0},{field:"access",headerName:"Access",filterable:!1,flex:1,hide:(null===(e=t)||void 0===e?void 0:e.user_id)!==parseInt(K)&&"true",renderCell:function(e){return(0,C.jsxs)(h.Z,{width:"60%",m:"7px 2px",p:"5px",diplay:"flex",justifyContent:"center",gap:"25px",children:[(0,C.jsxs)(s.Z,{"aria-label":"Edit",size:"small",className:"",component:m.rU,onClick:function(){return function(e){P(!0),Q(e.id)}(e)},children:[(0,C.jsx)(u.Z,{sx:{color:X?"cyan":void 0}}),(0,C.jsx)(l.Z,{color:"grey",sx:{ml:"5px"},children:"Edit"})]}),B&&(0,C.jsx)(y.Z,{edit:P,id:K}),(0,C.jsxs)(s.Z,{"aria-label":"Delete",size:"small",className:"",onClick:function(){return function(e){R(!0),Q(e.id)}(e)},children:[(0,C.jsx)(d.Z,{sx:{color:X?"red":void 0}}),(0,C.jsx)(l.Z,{color:"grey",sx:{ml:"5px"},children:"Delete"})]}),L&&(0,C.jsx)(g.Z,{setdelete:R,url:"".concat("http://127.0.0.1:8000","/product/admin/deleteproduct/").concat(U)})]})}}];return(0,a.useEffect)((function(){document.title="Orders"}),[]),(0,C.jsxs)("div",{style:{height:"60vh",width:"100%",marginBottom:"20px",paddingRight:"6%",paddingLeft:"3.5%"},children:[M&&(0,C.jsx)("h1",{style:{textAlign:"center",padding:" 22% 0",color:"cyan"},children:M}),"      ",T||M?(0,C.jsx)(Z.Z,{}):(0,C.jsx)(h.Z,{m:"35px 0 0 0",height:"60vh",children:(0,C.jsx)(i._,{rows:w,columns:ee,pageSize:7,rowsPerPageOptions:[7],checkboxSelection:!0,components:{Toolbar:c.n,GridCell:{border:"none"}},disableSelectionOnClick:!0,sx:X&&{color:"white","& .MuiDataGrid-cellCheckbox":{outline:"white"},"& .MuiCheckbox-colorPrimary":{color:"white"},"& .css-levciy-MuiTablePagination-displayedRows":{backgroundColor:"#0e7878",color:"white"},"& .MuiDataGrid-footerContainer":{backgroundColor:"#0e7878",color:"white",borderTop:"none"},"& .css-78c6dr-MuiToolbar-root-MuiTablePagination-toolbar .MuiTablePagination-actions":{color:"white"},"& .MuiDataGrid-cell":{borderBottom:"none"},"& .css-1j9kmqg-MuiDataGrid-toolbarContainer":{borderTop:"none",backgroundColor:"#0e7878",color:"white"},"& .css-1knaqv7-MuiButtonBase-root-MuiButton-root":{color:"white"},"& .MuiDataGrid-root .MuiDataGrid-root--densityStandard":{borderBottom:"none"},"& .css-b1p1vf .MuiDataGrid-root ":{border:"5px solid red "}}})})]})}t.default=(0,a.memo)(k)},8471:function(e,t,o){var n=o(4836);t.Z=void 0;var r=n(o(5649)),a=o(184),i=(0,r.default)((0,a.jsx)("path",{d:"m14.06 9.02.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z"}),"EditOutlined");t.Z=i},3360:function(e,t,o){o.d(t,{n:function(){return f}});var n=o(7462),r=o(3366),a=o(2791),i=o(228),c=o(4265),s=o(2501),l=o(4283),d=o(9e3),u=o(1330),p=o(8963),h=o(3788),x=o(184),m=["className","csvOptions","printOptions","excelOptions","showQuickFilter","quickFilterProps"],f=a.forwardRef((function(e,t){var o=e.csvOptions,a=e.printOptions,f=e.excelOptions,Z=e.showQuickFilter,v=void 0!==Z&&Z,j=e.quickFilterProps,g=void 0===j?{}:j,y=(0,r.Z)(e,m),b=(0,p.B)();return b.disableColumnFilter&&b.disableColumnSelector&&b.disableDensitySelector&&!v?null:(0,x.jsxs)(c.D,(0,n.Z)({ref:t},y,{children:[(0,x.jsx)(s.S,{}),(0,x.jsx)(d.M,{}),(0,x.jsx)(l.L,{}),(0,x.jsx)(u.Zh,{csvOptions:o,printOptions:a,excelOptions:f}),(0,x.jsx)(i.Z,{sx:{flex:1}}),v&&(0,x.jsx)(h.T,(0,n.Z)({},g))]}))}))},8237:function(e,t){t.Z={"all-items":"createproduct_all-items__M4nzv","all-items-dark":"createproduct_all-items-dark__R87fU",cancel:"createproduct_cancel__2N+Og","search-items":"createproduct_search-items__x4WZy",product:"createproduct_product__wJ1Rs","send-button":"createproduct_send-button__8bJxO",searchcreate:"createproduct_searchcreate__1ZZZY","product-loading":"createproduct_product-loading__ac3aw"}}}]);
//# sourceMappingURL=561.1a93a011.chunk.js.map