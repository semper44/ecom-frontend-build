"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[50],{8050:function(n,i,o){o.r(i);var t=o(885),e=o(2791),c=o(6528),a=o(2978),l=o(456),r=o(3477),d=o(4977),s=o(5556),u=o(6099),f=o(6616),h=o(184);i.default=function(){var n,i,o=(0,e.useContext)(c.V),p=(0,e.useContext)(a.lw),v=p.profileNotification,m=p.setProfileNotifications,x=(0,e.useState)(null),_=(0,t.Z)(x,2),j=_[0],Z=_[1],C=JSON.parse(window.localStorage.getItem("authToken"))||null,g=(0,e.useContext)(a.Ou),k=g.sidebar,w=g.hideSidebar,N=(0,e.useContext)(s.yw).theme;return null!==o&&void 0!==o&&o.user&&(n=(0,l.Z)(null===o||void 0===o||null===(i=o.user)||void 0===i?void 0:i.access)),(0,e.useEffect)((function(){document.title="Notifications"}),[]),(0,e.useEffect)((function(){var i={method:"PATCH",headers:{"Content-Type":"application/json",Authorization:"Bearer "+(null===C||void 0===C?void 0:C.access)}},o={method:"GET",redirect:"follow",headers:{"Content-Type":"application/json",Authorization:"Bearer "+(null===C||void 0===C?void 0:C.access)}};Promise.all([fetch("".concat("127.0.0.1:8000/","/profile/productedit/").concat(n.user_id,"/"),i),fetch("".concat("127.0.0.1:8000/","/profile/getproductnotifications/"),o)]).then((function(n){var i=(0,t.Z)(n,2),o=i[0],e=i[1];return o.ok&&(localStorage.removeItem("productNotification"),m([])),Promise.all([o.json(),e.json()])})).then((function(n){var i=(0,t.Z)(n,2),o=(i[0],i[1]);o&&o.map((function(){Z(o)}))}))}),[null===v||void 0===v?void 0:v.length,m,null===C||void 0===C?void 0:C.access,n.user_id]),(0,h.jsx)(h.Fragment,{children:j?(0,h.jsx)("div",{className:r.Z.parent,onClick:function(){k&&w()},children:(0,h.jsx)("div",{className:N?r.Z["children-dark"]:r.Z.children,children:(null===j||void 0===j?void 0:j.length)>1?j.map((function(n){return(0,h.jsx)(h.Fragment,{children:(0,h.jsxs)("div",{className:r.Z.text,children:[(0,h.jsxs)("p",{children:[n.text,"-",n.time]}),(0,h.jsx)("div",{className:r.Z.eye,children:"seen"!==n.seen?(0,h.jsx)(f.Z,{sx:{color:"red"}}):(0,h.jsx)(u.Z,{sx:{color:N?"azure":"cyan"}})})]})})})):(0,h.jsx)("div",{className:N?r.Z["no-notifications-dark"]:r.Z["no-notifications"],children:(0,h.jsx)("h1",{children:" No Notifications yet"})})})}):(0,h.jsx)(d.Z,{})})}},6099:function(n,i,o){var t=o(4836);i.Z=void 0;var e=t(o(5649)),c=o(184),a=(0,e.default)((0,c.jsx)("path",{d:"M12 6.5c3.79 0 7.17 2.13 8.82 5.5-1.65 3.37-5.02 5.5-8.82 5.5S4.83 15.37 3.18 12C4.83 8.63 8.21 6.5 12 6.5m0-2C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zm0 5c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5-2.5-1.12-2.5-2.5 1.12-2.5 2.5-2.5m0-2c-2.48 0-4.5 2.02-4.5 4.5s2.02 4.5 4.5 4.5 4.5-2.02 4.5-4.5-2.02-4.5-4.5-4.5z"}),"RemoveRedEyeOutlined");i.Z=a},6616:function(n,i,o){var t=o(4836);i.Z=void 0;var e=t(o(5649)),c=o(184),a=(0,e.default)((0,c.jsx)("path",{d:"M12 6c3.79 0 7.17 2.13 8.82 5.5-.59 1.22-1.42 2.27-2.41 3.12l1.41 1.41c1.39-1.23 2.49-2.77 3.18-4.53C21.27 7.11 17 4 12 4c-1.27 0-2.49.2-3.64.57l1.65 1.65C10.66 6.09 11.32 6 12 6zm-1.07 1.14L13 9.21c.57.25 1.03.71 1.28 1.28l2.07 2.07c.08-.34.14-.7.14-1.07C16.5 9.01 14.48 7 12 7c-.37 0-.72.05-1.07.14zM2.01 3.87l2.68 2.68C3.06 7.83 1.77 9.53 1 11.5 2.73 15.89 7 19 12 19c1.52 0 2.98-.29 4.32-.82l3.42 3.42 1.41-1.41L3.42 2.45 2.01 3.87zm7.5 7.5 2.61 2.61c-.04.01-.08.02-.12.02-1.38 0-2.5-1.12-2.5-2.5 0-.05.01-.08.01-.13zm-3.4-3.4 1.75 1.75c-.23.55-.36 1.15-.36 1.78 0 2.48 2.02 4.5 4.5 4.5.63 0 1.23-.13 1.77-.36l.98.98c-.88.24-1.8.38-2.75.38-3.79 0-7.17-2.13-8.82-5.5.7-1.43 1.72-2.61 2.93-3.53z"}),"VisibilityOffOutlined");i.Z=a},3477:function(n,i){i.Z={parent:"productandfollowingnotification_parent__Ttdcs",children:"productandfollowingnotification_children__PLqa+","children-dark":"productandfollowingnotification_children-dark__gGtCL",unseen:"productandfollowingnotification_unseen__Ejkno",text:"productandfollowingnotification_text__fF-S-","no-notifications":"productandfollowingnotification_no-notifications__eD7p+","no-notifications-dark":"productandfollowingnotification_no-notifications-dark__pAO6r"}}}]);
//# sourceMappingURL=50.aa5ee7ee.chunk.js.map