"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[230],{1956:(e,t,s)=>{s.d(t,{Z:()=>c});var a=s(2791),n=s(2481),r=s(1675),i=s(184);const c=function(e){let{value:t}=e;const[s]=(0,a.useState)(t),c=Array(5).fill(0);return(0,i.jsx)("div",{className:r.Z.stars,children:c.map(((e,t)=>(0,i.jsx)(n.Z,{size:15,sx:{color:s>t?"orange":"black"}},t)))})}},6230:(e,t,s)=>{s.r(t),s.d(t,{default:()=>d});var a=s(2791),n=s(7689),r=s(4018),i=s(1956),c=s(4977),l=s(184);const d=function(){const[e,t]=(0,a.useState)(),[s,d]=(0,a.useState)(null),[o,u]=(0,a.useState)(!0),{username:_}=(0,n.UO)();return(0,a.useEffect)((()=>{let e=!1,s="".concat("http://127.0.0.1:8000","/profile/criticalrating/").concat(_,"/");fetch(s,{method:"GET",headers:{"Content-Type":"application/json"}}).then((t=>{if(!t.ok){if(u(!1),417!==t.status)throw Error("Couldn't fetch data, please retry");e=!0}return 200===t.status&&u(!1),t.json()})).then((s=>{e?d(s.msg):t(s)})).catch((e=>{u(!1),d(e.message)}))}),[_]),(0,a.useEffect)((()=>{document.title="Critical Reviews"}),[]),(0,l.jsx)(l.Fragment,{children:o?(0,l.jsx)(c.Z,{}):(0,l.jsxs)(l.Fragment,{children:[s&&(0,l.jsx)("h1",{style:{display:"flex",justifyContent:"center",alignItems:"center",padding:" 15% 0",color:"cyan"},children:s}),e&&(0,l.jsx)("div",{className:r.Z.parent,children:e.map((e=>(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("div",{className:r.Z.container,children:[(0,l.jsx)("div",{className:r.Z.pics,children:(0,l.jsx)("img",{src:null===e||void 0===e?void 0:e.pics,alt:""})}),(0,l.jsx)("p",{children:null===e||void 0===e?void 0:e.sender_name}),(0,l.jsx)("div",{className:r.Z.rated,children:(0,l.jsx)(i.Z,{value:null===e||void 0===e?void 0:e.value})})]}),(0,l.jsx)("div",{className:r.Z["rating-text"],children:null===e||void 0===e?void 0:e.text})]})))})]})})}},2481:(e,t,s)=>{var a=s(4836);t.Z=void 0;var n=a(s(5649)),r=s(184),i=(0,n.default)((0,r.jsx)("path",{d:"M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z"}),"StarOutlined");t.Z=i},1675:(e,t,s)=>{s.d(t,{Z:()=>a});const a={container:"ratings_container__y9Suk","container-dark":"ratings_container-dark__-dbAb",profilestars:"ratings_profilestars__jdvMj",stars:"ratings_stars__uoZRM",rate:"ratings_rate__G9DnD","input-review":"ratings_input-review__FunSv",rated:"ratings_rated__tZayY",later:"ratings_later__2paYN"}},4018:(e,t,s)=>{s.d(t,{Z:()=>a});const a={parent:"reviews_parent__zcbsR",container:"reviews_container__w16Fo",pics:"reviews_pics__xJAfO"}}}]);
//# sourceMappingURL=230.8f5b24a3.chunk.js.map