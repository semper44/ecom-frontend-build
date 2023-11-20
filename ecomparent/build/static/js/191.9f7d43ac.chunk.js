"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[191,647],{191:function(e,s,n){n.r(s),n.d(s,{default:function(){return N}});var t=n(885),r=n(4942),a=n(1413),o=n(2791),i=n(1087),l=n(6528),c=n(1518),d=n(5556),u="login_background-dark__ca-B-",p="login_background__xNNh4",m="login_login-container__0dpa2",_="login_login__T+Ri2",h="login_box__8j5hC",f="login_login-text__MfOi0",x="login_login-button__oRxWZ",v=n(1647),g=n(6616),w=n(228),j=n(184),C={username:"",password:""};function Z(e,s){return(0,a.Z)((0,a.Z)({},e),{},(0,r.Z)({},s.name,s.value))}function k(){(0,o.useEffect)((function(){document.title="login"}),[]);var e=(0,o.useReducer)(Z,C),s=(0,t.Z)(e,2),n=(s[0],s[1]),r=(0,o.useContext)(l.V),a=(0,o.useState)(!1),k=(0,t.Z)(a,2),N=k[0],S=(k[1],(0,o.useState)(!1)),y=(0,t.Z)(S,2),b=y[0],E=y[1],P=(0,o.useContext)(d.yw).theme,R=r.message,O=R.message,T=R.status,F=R.code,H=r.interval,L=r.intervalFn;(0,o.useEffect)((function(){var e=setInterval((function(){L(!1)}),5e3);setTimeout((function(){return clearInterval(e)}),6e3)}),[H,L]);function D(e){var s=e.target,t=s.name,r=s.value;n({name:t,value:r})}return(0,j.jsxs)(j.Fragment,{children:[H&&T&&(0,j.jsx)(c.Z,{value:O,code:F}),N&&(0,j.jsx)(v.default,{}),(0,j.jsx)("div",{className:P?u:p,children:(0,j.jsxs)("div",{className:m,children:[(0,j.jsx)("div",{className:_,children:(0,j.jsx)("h1",{children:"Login"})}),(0,j.jsxs)("form",{onSubmit:null===r||void 0===r?void 0:r.loginUser,children:[(0,j.jsxs)("div",{className:h,children:[(0,j.jsx)("input",{type:"text",className:"input-username",placeholder:"username",onChange:D,name:"username"}),(0,j.jsxs)(w.Z,{sx:{position:"relative"},children:[(0,j.jsx)("input",{type:b?"text":"password",className:"input-password",placeholder:"Password",onChange:D,name:"password"}),(0,j.jsx)(g.Z,{style:{cursor:"pointer",position:"absolute",top:"70%",right:"3.2rem"},onClick:function(){E((function(e){return!e}))}})]})]}),(0,j.jsx)("div",{id:"forgotpassword",className:f,children:(0,j.jsxs)("p",{children:["Forgot Password?",(0,j.jsx)("span",{children:(0,j.jsx)(i.rU,{to:"/resetpassword",children:"Change Password"})})]})}),(0,j.jsx)("div",{className:x,children:(0,j.jsx)("button",{id:x,children:"Login"})}),(0,j.jsx)("div",{className:f,children:(0,j.jsxs)("p",{children:["Not a member?",(0,j.jsx)("span",{children:(0,j.jsx)(i.rU,{to:"/register",children:"Register"})})]})})]})]})})]})}var N=o.memo(k)},1647:function(e,s,n){n.r(s),n.d(s,{default:function(){return k}});var t=n(4165),r=n(5861),a=n(4942),o=n(885),i=n(2791),l="resetpassword_change-password-parent__3INH+",c="resetpassword_change-password-parent-dark__8x0NM",d="resetpassword_inputparent__hRlHS",u="resetpassword_input__VbdEb",p="resetpassword_login-button__qj1HD",m="resetpassword_login-button-dark__HQ5IG",_="resetpassword_resetbutton__8vB8l",h="resetpasswordmessage_parent__SfkVy",f="resetpasswordmessage_container__PHyM7",x="resetpasswordmessage_reset-password-message-success__4dj+W",v="resetpasswordmessage_reset-password-message-error__2kg4R",g=n(1375),w=n(7689),j=n(184);var C=function(e){var s=e.status,n=e.setshow,t=e.type,r=e.error,a=(0,i.useState)(null),l=(0,o.Z)(a,2),c=l[0],d=l[1],u=(0,i.useState)(null),p=(0,o.Z)(u,2),m=p[0],_=p[1];(0,i.useEffect)((function(){null===r?(_("Password reset successfull"),d("We have sent you a link to reset your password, Please check your email, click on the link and follow prompt, to complete the process.")):(d(null),_(null))}),[r]);var C=(0,w.s0)();function Z(){n(!1),s&&C("/resetpassword")}return(0,i.useEffect)((function(){document.title="Reset Password"}),[]),(0,j.jsx)(j.Fragment,{children:(0,j.jsx)(g.Z,{click:Z,children:(0,j.jsxs)("div",{className:h,children:[(0,j.jsx)("div",{className:f,children:(0,j.jsxs)("p",{id:s?x:v,children:[!0===s&&"passwordsent"===t?c:m,!1===s&&r]})}),(0,j.jsx)("h2",{onClick:Z,children:"Ok"})]})})})},Z=n(5556);var k=function(){var e=(0,i.useState)({email:""}),s=(0,o.Z)(e,2),n=s[0],h=s[1],f=(0,i.useState)(!1),x=(0,o.Z)(f,2),v=x[0],g=x[1],w=(0,i.useState)(!1),k=(0,o.Z)(w,2),N=k[0],S=k[1],y=(0,i.useState)(null),b=(0,o.Z)(y,2),E=b[0],P=b[1],R=(0,i.useContext)(Z.yw).theme;(0,i.useEffect)((function(){document.title="Confirm Order"}),[]);var O=new FormData,T=function(){var e=(0,r.Z)((0,t.Z)().mark((function e(){var s,r;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return O.append("email",n.email),s={method:"POST",body:O},e.next=4,fetch("".concat({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_URLS,"/profile/reset_password/"),s);case 4:return(r=e.sent).ok?(g(!0),S(!0),P(null)):(S(!1),g(!0),P("Couldn't fetch data, please retry")),e.next=8,r.json();case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,j.jsxs)(j.Fragment,{children:[v&&(0,j.jsx)(C,{status:N,setshow:g,type:"passwordsent",error:E}),(0,j.jsxs)("div",{className:R?c:l,children:[(0,j.jsx)("h1",{children:"Reset your Password"}),(0,j.jsx)("p",{children:"Enter your email address below, and we'll email instructions for setting a new one."}),(0,j.jsx)("div",{className:d,children:(0,j.jsx)("div",{className:u,children:(0,j.jsx)("input",{type:"email",placeholder:"Enter your email",name:"email",onChange:function(e){h((0,a.Z)({},e.target.name,e.target.value))}})})}),(0,j.jsx)("div",{className:R?m:p,children:(0,j.jsx)("p",{onClick:function(e){T()},id:_,children:"Reset Password"})})]})]})}},6616:function(e,s,n){var t=n(4836);s.Z=void 0;var r=t(n(5649)),a=n(184),o=(0,r.default)((0,a.jsx)("path",{d:"M12 6c3.79 0 7.17 2.13 8.82 5.5-.59 1.22-1.42 2.27-2.41 3.12l1.41 1.41c1.39-1.23 2.49-2.77 3.18-4.53C21.27 7.11 17 4 12 4c-1.27 0-2.49.2-3.64.57l1.65 1.65C10.66 6.09 11.32 6 12 6zm-1.07 1.14L13 9.21c.57.25 1.03.71 1.28 1.28l2.07 2.07c.08-.34.14-.7.14-1.07C16.5 9.01 14.48 7 12 7c-.37 0-.72.05-1.07.14zM2.01 3.87l2.68 2.68C3.06 7.83 1.77 9.53 1 11.5 2.73 15.89 7 19 12 19c1.52 0 2.98-.29 4.32-.82l3.42 3.42 1.41-1.41L3.42 2.45 2.01 3.87zm7.5 7.5 2.61 2.61c-.04.01-.08.02-.12.02-1.38 0-2.5-1.12-2.5-2.5 0-.05.01-.08.01-.13zm-3.4-3.4 1.75 1.75c-.23.55-.36 1.15-.36 1.78 0 2.48 2.02 4.5 4.5 4.5.63 0 1.23-.13 1.77-.36l.98.98c-.88.24-1.8.38-2.75.38-3.79 0-7.17-2.13-8.82-5.5.7-1.43 1.72-2.61 2.93-3.53z"}),"VisibilityOffOutlined");s.Z=o}}]);
//# sourceMappingURL=191.9f7d43ac.chunk.js.map