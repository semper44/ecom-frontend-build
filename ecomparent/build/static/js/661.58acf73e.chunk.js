"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[661],{7661:function(n,o,t){t.r(o);var i=t(4165),e=t(5861),c=t(2791),a=t(2978),s=t(3477),r=t(4977),l=t(5556),d=t(6528),u=t(456),f=t(6099),_=t(6616),h=t(184);o.default=function(){var n,o,t=(0,c.useContext)(a.kk),v=t.setNotificationsstore,p=t.notificationData,x=t.notificationsstore,m=(0,c.useContext)(a.Ou),C=m.sidebar,k=m.hideSidebar,Z=JSON.parse(window.localStorage.getItem("authToken"))||null,g=(0,c.useContext)(d.V);null!==g&&void 0!==g&&g.user&&(n=(0,u.Z)(null===g||void 0===g||null===(o=g.user)||void 0===o?void 0:o.access));var j=(0,c.useContext)(l.yw).theme;return(0,c.useEffect)((function(){document.title="Followers Notifications"}),[]),(0,c.useEffect)((function(){(0,e.Z)((0,i.Z)().mark((function o(){var t;return(0,i.Z)().wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.prev=0,o.next=3,fetch("".concat({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_URLS,"/profile/editnotifications/").concat(n.user_id,"/"),{method:"PATCH",headers:{"Content-Type":"application/json",Authorization:"Bearer "+(null===Z||void 0===Z?void 0:Z.access)},body:JSON.stringify(p)});case 3:return t=o.sent,o.next=6,t.json();case 6:t.ok&&(console.log(t.ok),window.localStorage.removeItem("gottenNotification"),v([])),o.next=11;break;case 9:o.prev=9,o.t0=o.catch(0);case 11:case"end":return o.stop()}}),o,null,[[0,9]])})))()}),[p,v]),console.log(x),(0,h.jsx)(h.Fragment,{children:p?(0,h.jsx)("div",{className:s.Z.parent,onClick:function(){C&&k()},children:(0,h.jsx)("div",{className:j?s.Z["children-dark"]:s.Z.children,children:(null===p||void 0===p?void 0:p.length)>=1?p.map((function(n){return(0,h.jsx)(h.Fragment,{children:(0,h.jsxs)("div",{className:s.Z.text,children:[(0,h.jsxs)("p",{children:[n.text,"-",n.time]}),(0,h.jsx)("div",{className:s.Z.eye,children:"seen"!==n.seen?(0,h.jsx)(_.Z,{sx:{color:"red"}}):(0,h.jsx)(f.Z,{sx:{color:j?"azure":"cyan"}})})]})})})):(0,h.jsx)("div",{className:j?s.Z["no-notifications-dark"]:s.Z["no-notifications"],children:(0,h.jsx)("h1",{children:" No Notifications yet"})})})}):(0,h.jsx)(r.Z,{})})}},6099:function(n,o,t){var i=t(4836);o.Z=void 0;var e=i(t(5649)),c=t(184),a=(0,e.default)((0,c.jsx)("path",{d:"M12 6.5c3.79 0 7.17 2.13 8.82 5.5-1.65 3.37-5.02 5.5-8.82 5.5S4.83 15.37 3.18 12C4.83 8.63 8.21 6.5 12 6.5m0-2C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zm0 5c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5-2.5-1.12-2.5-2.5 1.12-2.5 2.5-2.5m0-2c-2.48 0-4.5 2.02-4.5 4.5s2.02 4.5 4.5 4.5 4.5-2.02 4.5-4.5-2.02-4.5-4.5-4.5z"}),"RemoveRedEyeOutlined");o.Z=a},6616:function(n,o,t){var i=t(4836);o.Z=void 0;var e=i(t(5649)),c=t(184),a=(0,e.default)((0,c.jsx)("path",{d:"M12 6c3.79 0 7.17 2.13 8.82 5.5-.59 1.22-1.42 2.27-2.41 3.12l1.41 1.41c1.39-1.23 2.49-2.77 3.18-4.53C21.27 7.11 17 4 12 4c-1.27 0-2.49.2-3.64.57l1.65 1.65C10.66 6.09 11.32 6 12 6zm-1.07 1.14L13 9.21c.57.25 1.03.71 1.28 1.28l2.07 2.07c.08-.34.14-.7.14-1.07C16.5 9.01 14.48 7 12 7c-.37 0-.72.05-1.07.14zM2.01 3.87l2.68 2.68C3.06 7.83 1.77 9.53 1 11.5 2.73 15.89 7 19 12 19c1.52 0 2.98-.29 4.32-.82l3.42 3.42 1.41-1.41L3.42 2.45 2.01 3.87zm7.5 7.5 2.61 2.61c-.04.01-.08.02-.12.02-1.38 0-2.5-1.12-2.5-2.5 0-.05.01-.08.01-.13zm-3.4-3.4 1.75 1.75c-.23.55-.36 1.15-.36 1.78 0 2.48 2.02 4.5 4.5 4.5.63 0 1.23-.13 1.77-.36l.98.98c-.88.24-1.8.38-2.75.38-3.79 0-7.17-2.13-8.82-5.5.7-1.43 1.72-2.61 2.93-3.53z"}),"VisibilityOffOutlined");o.Z=a},3477:function(n,o){o.Z={parent:"productandfollowingnotification_parent__Ttdcs",children:"productandfollowingnotification_children__PLqa+","children-dark":"productandfollowingnotification_children-dark__gGtCL",unseen:"productandfollowingnotification_unseen__Ejkno",text:"productandfollowingnotification_text__fF-S-","no-notifications":"productandfollowingnotification_no-notifications__eD7p+","no-notifications-dark":"productandfollowingnotification_no-notifications-dark__pAO6r"}}}]);
//# sourceMappingURL=661.58acf73e.chunk.js.map