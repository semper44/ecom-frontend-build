"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[191,647],{2953:function(e,s,n){n(2791);var t=n(1523),r=n(228),a=n(184);s.Z=function(){return(0,a.jsx)(r.Z,{sx:{zIndex:"1",display:"flex",alignItems:"center",justifyContent:"center",width:"100%",height:"100%",position:"absolute"},children:(0,a.jsx)(t.g4,{height:"150",width:"150",radius:"9",color:"cyan",ariaLabel:"loading"})})}},191:function(e,s,n){n.r(s),n.d(s,{default:function(){return N}});var t=n(885),r=n(4942),a=n(1413),o=n(2791),i=n(1087),l=n(6528),c=n(1518),d=n(5556),u="login_background-dark__ca-B-",p="login_background__xNNh4",h="login_login-container__0dpa2",m="login_login__T+Ri2",f="login_logindark__JC9OQ",x="login_box__8j5hC",_="login_login-text__MfOi0",g="login_login-button__oRxWZ",w=n(1647),j=n(6616),v=n(228),Z=n(2953),k=n(184),y={username:"",password:""};function C(e,s){return(0,a.Z)((0,a.Z)({},e),{},(0,r.Z)({},s.name,s.value))}function b(){(0,o.useEffect)((function(){document.title="login"}),[]);var e=(0,o.useReducer)(C,y),s=(0,t.Z)(e,2),n=(s[0],s[1]),r=(0,o.useContext)(l.V),a=(0,o.useState)(!1),b=(0,t.Z)(a,2),N=b[0],S=(b[1],(0,o.useState)(!1)),P=(0,t.Z)(S,2),R=P[0],E=P[1],O=(0,o.useContext)(d.yw).theme,z=r.message,F=z.message,I=z.status,M=z.code,H=r.interval,L=r.intervalFn;(0,o.useEffect)((function(){var e=setInterval((function(){L(!1)}),5e3);setTimeout((function(){return clearInterval(e)}),6e3)}),[H,L]);function V(e){var s=e.target,t=s.name,r=s.value;n({name:t,value:r})}return(0,k.jsxs)(k.Fragment,{children:[H&&I&&(0,k.jsx)(c.Z,{value:F,code:M}),N&&(0,k.jsx)(w.default,{}),(0,k.jsxs)("div",{className:O?u:p,children:[(0,k.jsxs)("div",{className:h,children:[(0,k.jsx)("div",{className:O?f:m,children:(0,k.jsx)("h1",{children:"Login"})}),(0,k.jsxs)("form",{onSubmit:null===r||void 0===r?void 0:r.loginUser,children:[(0,k.jsxs)("div",{className:x,children:[(0,k.jsx)("input",{type:"text",className:"input-username",placeholder:"username",onChange:V,name:"username"}),(0,k.jsxs)(v.Z,{sx:{position:"relative"},children:[(0,k.jsx)("input",{type:R?"text":"password",className:"input-password",placeholder:"Password",onChange:V,name:"password"}),(0,k.jsx)(j.Z,{style:{cursor:"pointer",position:"absolute",top:"70%",right:"3.2rem"},onClick:function(){E((function(e){return!e}))}})]})]}),(0,k.jsx)("div",{id:"forgotpassword",className:_,children:(0,k.jsxs)("p",{children:["Forgot Password?",(0,k.jsx)("span",{children:(0,k.jsx)(i.rU,{to:"/resetpassword",children:"Change Password"})})]})}),(0,k.jsx)("div",{className:g,children:(0,k.jsx)("button",{id:g,children:"Login"})}),(0,k.jsx)("div",{className:_,children:(0,k.jsxs)("p",{children:["Not a member?",(0,k.jsx)("span",{children:(0,k.jsx)(i.rU,{to:"/register",children:"Register"})})]})})]})]}),(null===r||void 0===r?void 0:r.showModal)&&(0,k.jsx)(Z.Z,{})]})]})}var N=o.memo(b)},1647:function(e,s,n){n.r(s),n.d(s,{default:function(){return y}});var t=n(4165),r=n(5861),a=n(4942),o=n(885),i=n(2791),l="resetpassword_change-password-parent__3INH+",c="resetpassword_change-password-parent-dark__8x0NM",d="resetpassword_inputparent__hRlHS",u="resetpassword_input__VbdEb",p="resetpassword_login-button__qj1HD",h="resetpassword_login-button-dark__HQ5IG",m="resetpassword_resetbutton__8vB8l",f="resetpasswordmessage_parent__SfkVy",x="resetpasswordmessage_container__PHyM7",_="resetpasswordmessage_reset-password-message-success__4dj+W",g="resetpasswordmessage_reset-password-message-error__2kg4R",w=n(1375),j=n(7689),v=n(184);var Z=function(e){var s=e.status,n=e.setshow,t=e.type,r=e.error,a=(0,i.useState)(null),l=(0,o.Z)(a,2),c=l[0],d=l[1],u=(0,i.useState)(null),p=(0,o.Z)(u,2),h=p[0],m=p[1];(0,i.useEffect)((function(){null===r?(m("Password reset successfull"),d("We have sent you a link to reset your password, Please check your email, click on the link and follow prompt, to complete the process.")):(d(null),m(null))}),[r]);var Z=(0,j.s0)();function k(){n(!1),s&&Z("/resetpassword")}return(0,i.useEffect)((function(){document.title="Reset Password"}),[]),(0,v.jsx)(v.Fragment,{children:(0,v.jsx)(w.Z,{click:k,children:(0,v.jsxs)("div",{className:f,children:[(0,v.jsx)("div",{className:x,children:(0,v.jsxs)("p",{id:s?_:g,children:[!0===s&&"passwordsent"===t?c:h,!1===s&&r]})}),(0,v.jsx)("h2",{onClick:k,children:"Ok"})]})})})},k=n(5556);var y=function(){var e=(0,i.useState)({email:""}),s=(0,o.Z)(e,2),n=s[0],f=s[1],x=(0,i.useState)(!1),_=(0,o.Z)(x,2),g=_[0],w=_[1],j=(0,i.useState)(!1),y=(0,o.Z)(j,2),C=y[0],b=y[1],N=(0,i.useState)(null),S=(0,o.Z)(N,2),P=S[0],R=S[1],E=(0,i.useContext)(k.yw).theme;(0,i.useEffect)((function(){document.title="Confirm Order"}),[]);var O=new FormData,z=function(){var e=(0,r.Z)((0,t.Z)().mark((function e(){var s,r;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return O.append("email",n.email),s={method:"POST",body:O},e.next=4,fetch("".concat("http://127.0.0.1:8000","/profile/reset_password/"),s);case 4:return(r=e.sent).ok?(w(!0),b(!0),R(null)):(b(!1),w(!0),R("Couldn't fetch data, please retry")),e.next=8,r.json();case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,v.jsxs)(v.Fragment,{children:[g&&(0,v.jsx)(Z,{status:C,setshow:w,type:"passwordsent",error:P}),(0,v.jsxs)("div",{className:E?c:l,children:[(0,v.jsx)("h1",{children:"Reset your Password"}),(0,v.jsx)("p",{children:"Enter your email address below, and we'll email instructions for setting a new one."}),(0,v.jsx)("div",{className:d,children:(0,v.jsx)("div",{className:u,children:(0,v.jsx)("input",{type:"email",placeholder:"Enter your email",name:"email",onChange:function(e){f((0,a.Z)({},e.target.name,e.target.value))}})})}),(0,v.jsx)("div",{className:E?h:p,children:(0,v.jsx)("p",{onClick:function(e){z()},id:m,children:"Reset Password"})})]})]})}},6616:function(e,s,n){var t=n(4836);s.Z=void 0;var r=t(n(5649)),a=n(184),o=(0,r.default)((0,a.jsx)("path",{d:"M12 6c3.79 0 7.17 2.13 8.82 5.5-.59 1.22-1.42 2.27-2.41 3.12l1.41 1.41c1.39-1.23 2.49-2.77 3.18-4.53C21.27 7.11 17 4 12 4c-1.27 0-2.49.2-3.64.57l1.65 1.65C10.66 6.09 11.32 6 12 6zm-1.07 1.14L13 9.21c.57.25 1.03.71 1.28 1.28l2.07 2.07c.08-.34.14-.7.14-1.07C16.5 9.01 14.48 7 12 7c-.37 0-.72.05-1.07.14zM2.01 3.87l2.68 2.68C3.06 7.83 1.77 9.53 1 11.5 2.73 15.89 7 19 12 19c1.52 0 2.98-.29 4.32-.82l3.42 3.42 1.41-1.41L3.42 2.45 2.01 3.87zm7.5 7.5 2.61 2.61c-.04.01-.08.02-.12.02-1.38 0-2.5-1.12-2.5-2.5 0-.05.01-.08.01-.13zm-3.4-3.4 1.75 1.75c-.23.55-.36 1.15-.36 1.78 0 2.48 2.02 4.5 4.5 4.5.63 0 1.23-.13 1.77-.36l.98.98c-.88.24-1.8.38-2.75.38-3.79 0-7.17-2.13-8.82-5.5.7-1.43 1.72-2.61 2.93-3.53z"}),"VisibilityOffOutlined");s.Z=o}}]);
//# sourceMappingURL=191.13795147.chunk.js.map