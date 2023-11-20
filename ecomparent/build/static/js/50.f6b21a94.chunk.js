"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[50],{8050:function(i,o,n){n.r(o);var t=n(885),e=n(2791),c=n(6528),a=n(2978),l=n(456),d=n(3477),r=n(4977),s=n(5556),u=n(6099),f=n(6616),_=n(184);o.default=function(){var i,o,n=(0,e.useContext)(c.V),v=(0,e.useContext)(a.lw),h=v.profileNotification,p=v.setProfileNotifications,C=(0,e.useState)(null),S=(0,t.Z)(C,2),m=S[0],x=S[1],T=JSON.parse(window.localStorage.getItem("authToken"))||null,E=(0,e.useContext)(a.Ou),j=E.sidebar,Z=E.hideSidebar,O=(0,e.useContext)(s.yw).theme;return null!==n&&void 0!==n&&n.user&&(i=(0,l.Z)(null===n||void 0===n||null===(o=n.user)||void 0===o?void 0:o.access)),(0,e.useEffect)((function(){document.title="Notifications"}),[]),(0,e.useEffect)((function(){var o={method:"PATCH",headers:{"Content-Type":"application/json",Authorization:"Bearer "+(null===T||void 0===T?void 0:T.access)}},n={method:"GET",redirect:"follow",headers:{"Content-Type":"application/json",Authorization:"Bearer "+(null===T||void 0===T?void 0:T.access)}};Promise.all([fetch("".concat({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_URLS,"/profile/productedit/").concat(i.user_id,"/"),o),fetch("".concat({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_URLS,"/profile/getproductnotifications/"),n)]).then((function(i){var o=(0,t.Z)(i,2),n=o[0],e=o[1];return n.ok&&(localStorage.removeItem("productNotification"),p([])),Promise.all([n.json(),e.json()])})).then((function(i){var o=(0,t.Z)(i,2),n=(o[0],o[1]);n&&n.map((function(){x(n)}))}))}),[null===h||void 0===h?void 0:h.length,p,null===T||void 0===T?void 0:T.access,i.user_id]),(0,_.jsx)(_.Fragment,{children:m?(0,_.jsx)("div",{className:d.Z.parent,onClick:function(){j&&Z()},children:(0,_.jsx)("div",{className:O?d.Z["children-dark"]:d.Z.children,children:(null===m||void 0===m?void 0:m.length)>1?m.map((function(i){return(0,_.jsx)(_.Fragment,{children:(0,_.jsxs)("div",{className:d.Z.text,children:[(0,_.jsxs)("p",{children:[i.text,"-",i.time]}),(0,_.jsx)("div",{className:d.Z.eye,children:"seen"!==i.seen?(0,_.jsx)(f.Z,{sx:{color:"red"}}):(0,_.jsx)(u.Z,{sx:{color:O?"azure":"cyan"}})})]})})})):(0,_.jsx)("div",{className:O?d.Z["no-notifications-dark"]:d.Z["no-notifications"],children:(0,_.jsx)("h1",{children:" No Notifications yet"})})})}):(0,_.jsx)(r.Z,{})})}},6099:function(i,o,n){var t=n(4836);o.Z=void 0;var e=t(n(5649)),c=n(184),a=(0,e.default)((0,c.jsx)("path",{d:"M12 6.5c3.79 0 7.17 2.13 8.82 5.5-1.65 3.37-5.02 5.5-8.82 5.5S4.83 15.37 3.18 12C4.83 8.63 8.21 6.5 12 6.5m0-2C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zm0 5c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5-2.5-1.12-2.5-2.5 1.12-2.5 2.5-2.5m0-2c-2.48 0-4.5 2.02-4.5 4.5s2.02 4.5 4.5 4.5 4.5-2.02 4.5-4.5-2.02-4.5-4.5-4.5z"}),"RemoveRedEyeOutlined");o.Z=a},6616:function(i,o,n){var t=n(4836);o.Z=void 0;var e=t(n(5649)),c=n(184),a=(0,e.default)((0,c.jsx)("path",{d:"M12 6c3.79 0 7.17 2.13 8.82 5.5-.59 1.22-1.42 2.27-2.41 3.12l1.41 1.41c1.39-1.23 2.49-2.77 3.18-4.53C21.27 7.11 17 4 12 4c-1.27 0-2.49.2-3.64.57l1.65 1.65C10.66 6.09 11.32 6 12 6zm-1.07 1.14L13 9.21c.57.25 1.03.71 1.28 1.28l2.07 2.07c.08-.34.14-.7.14-1.07C16.5 9.01 14.48 7 12 7c-.37 0-.72.05-1.07.14zM2.01 3.87l2.68 2.68C3.06 7.83 1.77 9.53 1 11.5 2.73 15.89 7 19 12 19c1.52 0 2.98-.29 4.32-.82l3.42 3.42 1.41-1.41L3.42 2.45 2.01 3.87zm7.5 7.5 2.61 2.61c-.04.01-.08.02-.12.02-1.38 0-2.5-1.12-2.5-2.5 0-.05.01-.08.01-.13zm-3.4-3.4 1.75 1.75c-.23.55-.36 1.15-.36 1.78 0 2.48 2.02 4.5 4.5 4.5.63 0 1.23-.13 1.77-.36l.98.98c-.88.24-1.8.38-2.75.38-3.79 0-7.17-2.13-8.82-5.5.7-1.43 1.72-2.61 2.93-3.53z"}),"VisibilityOffOutlined");o.Z=a},3477:function(i,o){o.Z={parent:"productandfollowingnotification_parent__Ttdcs",children:"productandfollowingnotification_children__PLqa+","children-dark":"productandfollowingnotification_children-dark__gGtCL",unseen:"productandfollowingnotification_unseen__Ejkno",text:"productandfollowingnotification_text__fF-S-","no-notifications":"productandfollowingnotification_no-notifications__eD7p+","no-notifications-dark":"productandfollowingnotification_no-notifications-dark__pAO6r"}}}]);
//# sourceMappingURL=50.f6b21a94.chunk.js.map