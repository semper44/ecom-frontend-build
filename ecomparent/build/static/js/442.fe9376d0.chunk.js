"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[442],{4442:(e,s,l)=>{l.r(s),l.d(s,{default:()=>f});var t=l(2791),n=l(5271),r=l(4977),o=l(3195),a=l(1087),c=l(228),i=l(7689),d=l(184);const f=function(){const{username:e}=(0,i.UO)(),{data:s,loading:l,error:f}=(0,n.Z)("".concat("http://127.0.0.1:8000","/profile/allfollowers/").concat(e,"/"));return(0,t.useEffect)((()=>{document.title="Followers"}),[]),(0,d.jsx)(d.Fragment,{children:l?(0,d.jsx)(r.Z,{}):(0,d.jsxs)(d.Fragment,{children:[f&&(0,d.jsx)("h1",{style:{display:"flex",justifyContent:"center",alignItems:"center",padding:" 15% 0",color:"cyan"},children:f}),(0,d.jsx)("div",{className:o.Z.parent,children:null===s||void 0===s?void 0:s.map((e=>(0,d.jsxs)(a.rU,{to:"/profile/".concat(e.name),children:[(0,d.jsxs)(c.Z,{sx:{display:"flex",alignItems:"center",gap:"1rem"},children:[(0,d.jsx)("img",{src:e.pics,alt:"",style:{borderRadius:"50%",width:"100px",height:"100px"}}),(0,d.jsx)("h2",{style:{color:"cyan"},children:e.name})]}),(0,d.jsxs)("div",{className:o.Z.followers,children:[(0,d.jsx)("p",{children:e.location}),(0,d.jsx)("p",{children:e.country}),(0,d.jsx)("p",{children:e.businessName})]})]},e.id)))})]})})}},5271:(e,s,l)=>{l.d(s,{Z:()=>n});var t=l(2791);const n=function(e,s){const[l,n]=(0,t.useState)(),[r,o]=(0,t.useState)(!0),[a,c]=(0,t.useState)(null);return(0,t.useEffect)((()=>{let l=!1;fetch(e,s).then((e=>{if(!e.ok){if(o(!1),417!==e.status)throw Error("Couldn't fetch data, please retry");l=!0}return 200===e.status&&o(!1),e.json()})).then((e=>{l?c(e.msg):n(e)})).catch((e=>{o(!1),c(e.message)}))}),[s,e]),{data:l,loading:r,error:a}}},3195:(e,s,l)=>{l.d(s,{Z:()=>t});const t={parent:"followersandfollowing_parent__Qk1OD",followers:"followersandfollowing_followers__hA1N5",followersdark:"followersandfollowing_followersdark__P1UYG"}}}]);
//# sourceMappingURL=442.fe9376d0.chunk.js.map