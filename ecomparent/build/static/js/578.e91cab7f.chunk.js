"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[578],{578:(e,t,r)=>{r.r(t),r.d(t,{default:()=>u});var s=r(2791),a=r(5271),n=r(4977),l=r(3195),o=r(1087),i=r(5021),c=r(6243),d=r(184);const u=function(){const{data:e,loading:t,error:r}=(0,a.Z)("".concat("http://127.0.0.1:8000","/profile/sellers/")),{theme:u}=(0,s.useContext)(c.yw);return(0,s.useEffect)((()=>{document.title="All Sellers"}),[]),(0,d.jsx)(d.Fragment,{children:t?(0,d.jsx)(n.Z,{}):(0,d.jsxs)(d.Fragment,{children:[r&&(0,d.jsx)("h1",{style:{display:"flex",justifyContent:"center",alignItems:"center",padding:" 15% 0",color:"cyan"},children:r}),(0,d.jsx)("div",{className:l.Z.parent,children:null===e||void 0===e?void 0:e.map((e=>(0,d.jsx)(o.rU,{to:"/profile/".concat(e.name),children:(0,d.jsxs)("div",{className:u?l.Z.followersdark:l.Z.followers,children:[(0,d.jsx)("h2",{children:e.name}),(0,d.jsx)(i.Z,{value:e.ratings_value}),(0,d.jsx)("p",{children:e.location}),(0,d.jsx)("p",{children:"".concat(e.followers.length," Follower")}),(0,d.jsx)("p",{children:e.businessName})]})},e.id)))})]})})}},5021:(e,t,r)=>{r.d(t,{Z:()=>o});var s=r(2791),a=r(2481),n=r(1675),l=r(184);const o=function(e){let{value:t}=e;const[r]=(0,s.useState)(t),o=Array(5).fill(0);return(0,l.jsx)("div",{className:n.Z.profilestars,children:o.map(((e,t)=>(0,l.jsx)(a.Z,{size:15,sx:{color:r>t?"orange":"black"}},t)))})}},5271:(e,t,r)=>{r.d(t,{Z:()=>a});var s=r(2791);const a=function(e,t){const[r,a]=(0,s.useState)(),[n,l]=(0,s.useState)(!0),[o,i]=(0,s.useState)(null);return(0,s.useEffect)((()=>{let r=!1;fetch(e,t).then((e=>{if(!e.ok){if(l(!1),417!==e.status)throw Error("Couldn't fetch data, please retry");r=!0}return 200===e.status&&l(!1),e.json()})).then((e=>{r?i(e.msg):a(e)})).catch((e=>{l(!1),i(e.message)}))}),[t,e]),{data:r,loading:n,error:o}}},2481:(e,t,r)=>{var s=r(4836);t.Z=void 0;var a=s(r(5649)),n=r(184),l=(0,a.default)((0,n.jsx)("path",{d:"M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z"}),"StarOutlined");t.Z=l},1675:(e,t,r)=>{r.d(t,{Z:()=>s});const s={container:"ratings_container__y9Suk","container-dark":"ratings_container-dark__-dbAb",profilestars:"ratings_profilestars__jdvMj",stars:"ratings_stars__uoZRM",rate:"ratings_rate__G9DnD","input-review":"ratings_input-review__FunSv",rated:"ratings_rated__tZayY",later:"ratings_later__2paYN"}},3195:(e,t,r)=>{r.d(t,{Z:()=>s});const s={parent:"followersandfollowing_parent__Qk1OD",followers:"followersandfollowing_followers__hA1N5",followersdark:"followersandfollowing_followersdark__P1UYG"}}}]);
//# sourceMappingURL=578.e91cab7f.chunk.js.map