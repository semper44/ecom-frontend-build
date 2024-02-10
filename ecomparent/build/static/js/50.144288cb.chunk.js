"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[50],{8050:(t,o,i)=>{i.r(o),i.d(o,{default:()=>h});var e=i(2791),n=i(6528),c=i(2978),l=i(456),a=i(3477),s=i(4977),d=i(9751),r=i(6099),u=i(6616),f=i(184);const h=function(){const t=(0,e.useContext)(n.V),{profileNotification:o,setProfileNotifications:i}=(0,e.useContext)(c.lw),[h,p]=(0,e.useState)(null),v=JSON.parse(window.localStorage.getItem("authToken"))||null,{sidebar:m,hideSidebar:x}=(0,e.useContext)(c.Ou),{theme:_}=(0,e.useContext)(d.yw);let g;var j;return null!==t&&void 0!==t&&t.user&&(g=(0,l.Z)(null===t||void 0===t||null===(j=t.user)||void 0===j?void 0:j.access)),(0,e.useEffect)((()=>{document.title="Notifications"}),[]),(0,e.useEffect)((()=>{let t={method:"PATCH",headers:{"Content-Type":"application/json",Authorization:"Bearer "+(null===v||void 0===v?void 0:v.access)}},o={method:"GET",redirect:"follow",headers:{"Content-Type":"application/json",Authorization:"Bearer "+(null===v||void 0===v?void 0:v.access)}};Promise.all([fetch("".concat("http://127.0.0.1:8000","/profile/productedit/").concat(g.user_id,"/"),t),fetch("".concat("http://127.0.0.1:8000","/profile/getproductnotifications/"),o)]).then((t=>{let[o,e]=t;return o.ok&&(localStorage.removeItem("productNotification"),i([])),Promise.all([o.json(),e.json()])})).then((t=>{let[o,i]=t;i&&i.map((()=>{p(i)}))}))}),[null===o||void 0===o?void 0:o.length,i,null===v||void 0===v?void 0:v.access,g.user_id]),(0,f.jsx)(f.Fragment,{children:h?(0,f.jsx)("div",{className:a.Z.parent,onClick:function(){m&&x()},children:(0,f.jsx)("div",{className:_?a.Z["children-dark"]:a.Z.children,children:(null===h||void 0===h?void 0:h.length)>1?h.map((t=>(0,f.jsx)(f.Fragment,{children:(0,f.jsxs)("div",{className:a.Z.text,children:[(0,f.jsxs)("p",{children:[t.text,"-",t.time]}),(0,f.jsx)("div",{className:a.Z.eye,children:"seen"!==t.seen?(0,f.jsx)(u.Z,{sx:{color:"red"}}):(0,f.jsx)(r.Z,{sx:{color:_?"azure":"cyan"}})})]})}))):(0,f.jsx)("div",{className:_?a.Z["no-notifications-dark"]:a.Z["no-notifications"],children:(0,f.jsx)("h1",{children:" No Notifications yet"})})})}):(0,f.jsx)(s.Z,{})})}},6099:(t,o,i)=>{var e=i(4836);o.Z=void 0;var n=e(i(5649)),c=i(184),l=(0,n.default)((0,c.jsx)("path",{d:"M12 6.5c3.79 0 7.17 2.13 8.82 5.5-1.65 3.37-5.02 5.5-8.82 5.5S4.83 15.37 3.18 12C4.83 8.63 8.21 6.5 12 6.5m0-2C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zm0 5c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5-2.5-1.12-2.5-2.5 1.12-2.5 2.5-2.5m0-2c-2.48 0-4.5 2.02-4.5 4.5s2.02 4.5 4.5 4.5 4.5-2.02 4.5-4.5-2.02-4.5-4.5-4.5z"}),"RemoveRedEyeOutlined");o.Z=l},6616:(t,o,i)=>{var e=i(4836);o.Z=void 0;var n=e(i(5649)),c=i(184),l=(0,n.default)((0,c.jsx)("path",{d:"M12 6c3.79 0 7.17 2.13 8.82 5.5-.59 1.22-1.42 2.27-2.41 3.12l1.41 1.41c1.39-1.23 2.49-2.77 3.18-4.53C21.27 7.11 17 4 12 4c-1.27 0-2.49.2-3.64.57l1.65 1.65C10.66 6.09 11.32 6 12 6zm-1.07 1.14L13 9.21c.57.25 1.03.71 1.28 1.28l2.07 2.07c.08-.34.14-.7.14-1.07C16.5 9.01 14.48 7 12 7c-.37 0-.72.05-1.07.14zM2.01 3.87l2.68 2.68C3.06 7.83 1.77 9.53 1 11.5 2.73 15.89 7 19 12 19c1.52 0 2.98-.29 4.32-.82l3.42 3.42 1.41-1.41L3.42 2.45 2.01 3.87zm7.5 7.5 2.61 2.61c-.04.01-.08.02-.12.02-1.38 0-2.5-1.12-2.5-2.5 0-.05.01-.08.01-.13zm-3.4-3.4 1.75 1.75c-.23.55-.36 1.15-.36 1.78 0 2.48 2.02 4.5 4.5 4.5.63 0 1.23-.13 1.77-.36l.98.98c-.88.24-1.8.38-2.75.38-3.79 0-7.17-2.13-8.82-5.5.7-1.43 1.72-2.61 2.93-3.53z"}),"VisibilityOffOutlined");o.Z=l},3477:(t,o,i)=>{i.d(o,{Z:()=>e});const e={parent:"productandfollowingnotification_parent__r0ID6",children:"productandfollowingnotification_children__SWTT4","children-dark":"productandfollowingnotification_children-dark__oYaxR",unseen:"productandfollowingnotification_unseen__K7gsw",text:"productandfollowingnotification_text__YtlbS","no-notifications":"productandfollowingnotification_no-notifications__NgPgX","no-notifications-dark":"productandfollowingnotification_no-notifications-dark__BWWel"}}}]);
//# sourceMappingURL=50.144288cb.chunk.js.map