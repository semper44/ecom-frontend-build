"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[668],{4668:function(e,t,r){r.r(t),r.d(t,{default:function(){return m}});var n=r(2791),a=r(6229),i=r(3978),l=r(228),s=r(4977),o=r(885);var c=function(e,t){var r=(0,n.useState)(),a=(0,o.Z)(r,2),i=a[0],l=a[1],s=(0,n.useState)(null),c=(0,o.Z)(s,2),d=c[0],u=c[1],h=(0,n.useState)(!0),f=(0,o.Z)(h,2),m=f[0],g=f[1],p=JSON.parse(window.localStorage.getItem("authToken"))||null;return(0,n.useEffect)((function(){var r=!1;fetch(e,{method:t,headers:{"Content-Type":"application/json",Authorization:"Bearer "+(null===p||void 0===p?void 0:p.access)}}).then((function(e){if(!e.ok){if(g(!1),417!==e.status)throw Error("Couldn't fetch data, please retry");r=!0}return 200===e.status&&g(!1),e.json()})).then((function(e){r?u(e.msg):l(e)})).catch((function(e){g(!1),u(e.message)}))}),[t,null===p||void 0===p?void 0:p.access,e]),{loading:m,error:d,data:i}},d=r(6528),u=r(456),h=r(184);function f(){var e,t=(0,n.useContext)(d.V).user;t&&(e=(0,u.Z)(t.access));var r="".concat("http://127.0.0.1:8000","/profile/yourorders/").concat(e.username),o=c(r,"GET"),f=o.data,m=o.loading,g=o.error,p=[{field:"id",headerName:"ID",hide:"true"},{field:"category",headerName:"Category",hide:"true",flex:1,headerAlign:"left"},{field:"image",headerName:"Image",filterable:!1,renderCell:function(e){return(0,h.jsx)(i.Z,{src:e.row.image})}},{field:"sellers",headerName:"Sellers",flex:1},{field:"description",headerName:"Description",flex:1,hide:"true"},{field:"price",headerName:"Price",type:"number",headerAlign:"left",align:"left"},{field:"size",headerName:"Size",type:"number",headerAlign:"left",align:"left",hide:"true"}];return(0,n.useEffect)((function(){document.title="Orders"}),[]),(0,h.jsx)(h.Fragment,{children:m?(0,h.jsx)(s.Z,{}):(0,h.jsxs)(h.Fragment,{children:[g&&(0,h.jsx)("h1",{style:{display:"flex",justifyContent:"center",alignItems:"center",padding:" 22% 0",color:"cyan"},children:g}),f&&(0,h.jsxs)("div",{style:{height:"100%",width:"100%"},children:["(",(0,h.jsx)(l.Z,{m:"35px 0 0 0",height:"40vh",children:(0,h.jsx)(a._,{rows:f,columns:p,pageSize:7,rowsPerPageOptions:[7],checkboxSelection:!0,disableSelectionOnClick:!0})}),")"]})]})})}var m=(0,n.memo)(f)}}]);
//# sourceMappingURL=668.ab21d1a8.chunk.js.map