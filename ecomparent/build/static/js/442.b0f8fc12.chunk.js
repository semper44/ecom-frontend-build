"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[442],{4442:function(e,n,t){t.r(n);var l=t(2791),r=t(5271),s=t(4977),o=t(3195),a=t(1087),c=t(228),i=t(7689),f=t(184);n.default=function(){var e=(0,i.UO)().username;console.log("userDetails");var n=(0,r.Z)("".concat("http://127.0.0.1:8000","/profile/allfollowers/").concat(e,"/")),t=n.data,u=n.loading,d=n.error;return(0,l.useEffect)((function(){document.title="Followers"}),[]),(0,f.jsx)(f.Fragment,{children:u?(0,f.jsx)(s.Z,{}):(0,f.jsxs)(f.Fragment,{children:[d&&(0,f.jsx)("h1",{style:{display:"flex",justifyContent:"center",alignItems:"center",padding:" 15% 0",color:"cyan"},children:d}),(0,f.jsx)("div",{className:o.Z.parent,children:null===t||void 0===t?void 0:t.map((function(e){return(0,f.jsxs)(a.rU,{to:"/profile/".concat(e.name),children:[(0,f.jsxs)(c.Z,{sx:{display:"flex",alignItems:"center",gap:"1rem"},children:[(0,f.jsx)("img",{src:e.pics,alt:"",style:{borderRadius:"50%",width:"100px",height:"100px"}}),(0,f.jsx)("h2",{style:{color:"cyan"},children:e.name})]}),(0,f.jsxs)("div",{className:o.Z.followers,children:[(0,f.jsx)("p",{children:e.location}),(0,f.jsx)("p",{children:e.country}),(0,f.jsx)("p",{children:e.businessName})]})]})}))})]})})}},5271:function(e,n,t){var l=t(885),r=t(2791);n.Z=function(e,n){var t=(0,r.useState)(),s=(0,l.Z)(t,2),o=s[0],a=s[1],c=(0,r.useState)(!0),i=(0,l.Z)(c,2),f=i[0],u=i[1],d=(0,r.useState)(null),h=(0,l.Z)(d,2),p=h[0],x=h[1];return(0,r.useEffect)((function(){var t=!1;fetch(e,n).then((function(e){if(!e.ok){if(u(!1),417!==e.status)throw Error("Couldn't fetch data, please retry");t=!0}return 200===e.status&&u(!1),e.json()})).then((function(e){t?x(e.msg):a(e)})).catch((function(e){u(!1),x(e.message)}))}),[n,e]),{data:o,loading:f,error:p}}},3195:function(e,n){n.Z={parent:"followersandfollowing_parent__I1OmT",followers:"followersandfollowing_followers__A62IT",followersdark:"followersandfollowing_followersdark__8Y48z"}}}]);
//# sourceMappingURL=442.b0f8fc12.chunk.js.map