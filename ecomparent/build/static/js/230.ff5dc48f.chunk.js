"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[230],{6230:(e,t,s)=>{s.r(t),s.d(t,{default:()=>d});var n=s(2791),a=s(7689),i=s(4018),c=s(1956),r=s(4977),l=s(184);const d=function(){const[e,t]=(0,n.useState)(),[s,d]=(0,n.useState)(null),[o,u]=(0,n.useState)(!0),{username:h}=(0,a.UO)();return(0,n.useEffect)((()=>{let e=!1,s="".concat("http://127.0.0.1:8000","/profile/criticalrating/").concat(h,"/");fetch(s,{method:"GET",headers:{"Content-Type":"application/json"}}).then((t=>{if(!t.ok){if(u(!1),417!==t.status)throw Error("Couldn't fetch data, please retry");e=!0}return 200===t.status&&u(!1),t.json()})).then((s=>{e?d(s.msg):t(s)})).catch((e=>{u(!1),d(e.message)}))}),[h]),(0,n.useEffect)((()=>{document.title="Critical Reviews"}),[]),(0,l.jsx)(l.Fragment,{children:o?(0,l.jsx)(r.Z,{}):(0,l.jsxs)(l.Fragment,{children:[s&&(0,l.jsx)("h1",{style:{display:"flex",justifyContent:"center",alignItems:"center",padding:" 15% 0",color:"cyan"},children:s}),e&&(0,l.jsx)("div",{className:i.Z.parent,children:e.map((e=>(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("div",{className:i.Z.container,children:[(0,l.jsx)("div",{className:i.Z.pics,children:(0,l.jsx)("img",{src:null===e||void 0===e?void 0:e.image_url,alt:""})}),(0,l.jsxs)("div",{children:[(0,l.jsx)("p",{style:{color:"cyan"},children:null===e||void 0===e?void 0:e.sender_name}),(0,l.jsx)("div",{className:i.Z.rated,children:(0,l.jsx)(c.Z,{value:null===e||void 0===e?void 0:e.value})})]})]}),(0,l.jsx)("div",{className:i.Z["rating-text"],children:null===e||void 0===e?void 0:e.text})]})))})]})})}},4018:(e,t,s)=>{s.d(t,{Z:()=>n});const n={parent:"reviews_parent__zcbsR",container:"reviews_container__w16Fo",pics:"reviews_pics__xJAfO"}}}]);
//# sourceMappingURL=230.ff5dc48f.chunk.js.map