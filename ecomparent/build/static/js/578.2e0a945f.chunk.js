"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[578],{578:function(e,r,n){n.r(r);var t=n(2791),a=n(5271),l=n(4977),o=n(3195),s=n(1087),i=n(5021),c=n(5556),u=n(184);r.default=function(){var e=(0,a.Z)("".concat({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_URLS,"/profile/sellers/")),r=e.data,n=e.loading,f=e.error,d=(0,t.useContext)(c.yw).theme;return(0,t.useEffect)((function(){document.title="All Sellers"}),[]),console.log(d),(0,u.jsx)(u.Fragment,{children:n?(0,u.jsx)(l.Z,{}):(0,u.jsxs)(u.Fragment,{children:[f&&(0,u.jsx)("h1",{style:{display:"flex",justifyContent:"center",alignItems:"center",padding:" 15% 0",color:"cyan"},children:f}),(0,u.jsx)("div",{className:o.Z.parent,children:null===r||void 0===r?void 0:r.map((function(e){return(0,u.jsx)(s.rU,{to:"/profile/".concat(e.name),children:(0,u.jsxs)("div",{className:d?o.Z.followersdark:o.Z.followers,children:[(0,u.jsx)("h2",{children:e.name}),(0,u.jsx)(i.Z,{value:e.ratings_value}),(0,u.jsx)("p",{children:e.location}),(0,u.jsx)("p",{children:"".concat(e.followers.length," Follower")}),(0,u.jsx)("p",{children:e.businessName})]})})}))})]})})}},5021:function(e,r,n){var t=n(885),a=n(2791),l=n(2481),o=n(1675),s=n(184);r.Z=function(e){var r=e.value,n=(0,a.useState)(r),i=(0,t.Z)(n,1)[0],c=Array(5).fill(0);return(0,s.jsx)("div",{className:o.Z.profilestars,children:c.map((function(e,r){return(0,s.jsx)(l.Z,{size:15,sx:{color:i>r?"orange":"black"}},r)}))})}},5271:function(e,r,n){var t=n(885),a=n(2791);r.Z=function(e,r){var n=(0,a.useState)(),l=(0,t.Z)(n,2),o=l[0],s=l[1],i=(0,a.useState)(!0),c=(0,t.Z)(i,2),u=c[0],f=c[1],d=(0,a.useState)(null),_=(0,t.Z)(d,2),h=_[0],g=_[1];return(0,a.useEffect)((function(){var n=!1;fetch(e,r).then((function(e){if(!e.ok){if(f(!1),417!==e.status)throw Error("Couldn't fetch data, please retry");n=!0}return 200===e.status&&f(!1),e.json()})).then((function(e){n?g(e.msg):s(e)})).catch((function(e){f(!1),g(e.message)}))}),[r,e]),{data:o,loading:u,error:h}}},2481:function(e,r,n){var t=n(4836);r.Z=void 0;var a=t(n(5649)),l=n(184),o=(0,a.default)((0,l.jsx)("path",{d:"M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z"}),"StarOutlined");r.Z=o},1675:function(e,r){r.Z={container:"ratings_container__cpm8r","container-dark":"ratings_container-dark__rzQUJ",profilestars:"ratings_profilestars__6Skcw",stars:"ratings_stars__x5hCP",rate:"ratings_rate__LLWR7","input-review":"ratings_input-review__JGBFg",rated:"ratings_rated__HAuVe",later:"ratings_later__v8qHq"}},3195:function(e,r){r.Z={parent:"followersandfollowing_parent__I1OmT",followers:"followersandfollowing_followers__A62IT",followersdark:"followersandfollowing_followersdark__8Y48z"}}}]);
//# sourceMappingURL=578.2e0a945f.chunk.js.map