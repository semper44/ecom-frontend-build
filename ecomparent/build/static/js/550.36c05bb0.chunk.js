"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[550],{5550:function(e,n,t){t.r(n);var l=t(2791),r=t(5271),o=t(4977),s=t(3195),a=t(1087),i=t(228),c=t(7689),f=t(184);n.default=function(){var e=(0,c.UO)().username,n=(0,r.Z)("".concat("127.0.0.1:8000/","/profile/allfollowing/").concat(e,"/")),t=n.data,u=n.loading,d=n.error;return(0,l.useEffect)((function(){document.title="Following"}),[]),(0,f.jsx)(f.Fragment,{children:u?(0,f.jsx)(o.Z,{}):(0,f.jsxs)(f.Fragment,{children:[!t&&d&&(0,f.jsx)("h1",{style:{display:"flex",justifyContent:"center",alignItems:"center",padding:" 15% 0",color:"cyan"},children:d}),(0,f.jsx)("div",{className:s.Z.parent,children:null===t||void 0===t?void 0:t.map((function(e){return(0,f.jsxs)(a.rU,{to:"/profile/".concat(e.name),children:[(0,f.jsxs)(i.Z,{sx:{display:"flex",alignItems:"center",gap:"1rem"},children:[(0,f.jsx)("img",{src:e.pics,alt:"",style:{borderRadius:"50%",width:"100px",height:"100px"}}),(0,f.jsx)("h2",{style:{color:"cyan"},children:e.name})]}),(0,f.jsxs)("div",{className:s.Z.followers,children:[(0,f.jsx)("p",{children:e.location}),(0,f.jsx)("p",{children:e.country}),(0,f.jsx)("p",{children:e.businessName})]})]})}))})]})})}},5271:function(e,n,t){var l=t(885),r=t(2791);n.Z=function(e,n){var t=(0,r.useState)(),o=(0,l.Z)(t,2),s=o[0],a=o[1],i=(0,r.useState)(!0),c=(0,l.Z)(i,2),f=c[0],u=c[1],d=(0,r.useState)(null),h=(0,l.Z)(d,2),p=h[0],x=h[1];return(0,r.useEffect)((function(){var t=!1;fetch(e,n).then((function(e){if(!e.ok){if(u(!1),417!==e.status)throw Error("Couldn't fetch data, please retry");t=!0}return 200===e.status&&u(!1),e.json()})).then((function(e){t?x(e.msg):a(e)})).catch((function(e){u(!1),x(e.message)}))}),[n,e]),{data:s,loading:f,error:p}}},3195:function(e,n){n.Z={parent:"followersandfollowing_parent__I1OmT",followers:"followersandfollowing_followers__A62IT",followersdark:"followersandfollowing_followersdark__8Y48z"}}}]);
//# sourceMappingURL=550.36c05bb0.chunk.js.map