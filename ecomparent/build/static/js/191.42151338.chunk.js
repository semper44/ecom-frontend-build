"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[191,647],{2953:(e,s,t)=>{t.d(s,{Z:()=>o});t(2791);var n=t(1523),a=t(228),r=t(184);const o=()=>(0,r.jsx)(a.Z,{sx:{zIndex:"1",display:"flex",alignItems:"center",justifyContent:"center",width:"100%",height:"100%",position:"absolute"},children:(0,r.jsx)(n.g4,{height:"150",width:"150",radius:"9",color:"cyan",ariaLabel:"loading"})})},191:(e,s,t)=>{t.r(s),t.d(s,{default:()=>C});var n=t(2791),a=t(1087),r=t(6528),o=t(1518),l=t(9907);const i="login_background-dark__ca-B-",c="login_background__xNNh4",d="login_login-container__0dpa2",u="login_login__T+Ri2",h="login_box__8j5hC",p="login_login-container-dark__uS-Pm",m="login_login-text-dark__KWnB6",_="login_login-text__MfOi0",x="login_login-button__oRxWZ";var g=t(1647),w=t(6616),j=t(228),f=t(2953),v=t(184);const y={username:"",password:""};function k(e,s){return{...e,[s.name]:s.value}}function b(){(0,n.useEffect)((()=>{document.title="login"}),[]);const[e,s]=(0,n.useReducer)(k,y);let t=(0,n.useContext)(r.V);const[b,C]=(0,n.useState)(!1),[N,S]=(0,n.useState)(!1);let{theme:P}=(0,n.useContext)(l.yw);const{message:Z,status:R,code:E}=t.message,z=t.interval,F=t.intervalFn;(0,n.useEffect)((()=>{const e=setInterval((()=>{F(!1)}),5e3);setTimeout((()=>clearInterval(e)),6e3)}),[z,F]);function I(e){const{name:t,value:n}=e.target;s({name:t,value:n})}return(0,v.jsxs)(v.Fragment,{children:[z&&R&&(0,v.jsx)(o.Z,{value:Z,code:E}),b&&(0,v.jsx)(g.default,{}),(0,v.jsxs)("div",{className:P?i:c,children:[(0,v.jsxs)("div",{className:P?p:d,children:[(0,v.jsx)("div",{className:u,children:(0,v.jsx)("h1",{children:"Login"})}),(0,v.jsxs)("form",{onSubmit:null===t||void 0===t?void 0:t.loginUser,children:[(0,v.jsxs)("div",{className:h,children:[(0,v.jsx)("input",{type:"text",className:"input-username",placeholder:"username",onChange:I,name:"username"}),(0,v.jsxs)(j.Z,{sx:{position:"relative"},children:[(0,v.jsx)("input",{type:N?"text":"password",className:"input-password",placeholder:"Password",onChange:I,name:"password"}),(0,v.jsx)(w.Z,{style:{color:P&&"cyan",cursor:"pointer",position:"absolute",top:"70%",right:"3.2rem"},onClick:()=>{S((e=>!e))}})]})]}),(0,v.jsx)("div",{id:"forgotpassword",className:P?m:_,children:(0,v.jsxs)("p",{children:["Forgot Password?",(0,v.jsx)("span",{children:(0,v.jsx)(a.rU,{to:"/resetpassword",children:"Change Password"})})]})}),(0,v.jsx)("div",{className:x,children:(0,v.jsx)("button",{id:x,children:"Login"})}),(0,v.jsx)("div",{className:P?m:_,children:(0,v.jsxs)("p",{children:["Not a member?",(0,v.jsx)("span",{children:(0,v.jsx)(a.rU,{to:"/register",children:"Register"})})]})})]})]}),(null===t||void 0===t?void 0:t.showModal)&&(0,v.jsx)(f.Z,{})]})]})}const C=n.memo(b)},1647:(e,s,t)=>{t.r(s),t.d(s,{default:()=>f});var n=t(2791);const a="resetpassword_change-password-parent__3INH+",r="resetpassword_change-password-parent-dark__8x0NM",o="resetpassword_inputparent__hRlHS",l="resetpassword_input__VbdEb",i="resetpassword_login-button__qj1HD",c="resetpassword_login-button-dark__HQ5IG",d="resetpassword_resetbutton__8vB8l",u="resetpasswordmessage_parent__SfkVy",h="resetpasswordmessage_container__PHyM7",p="resetpasswordmessage_reset-password-message-success__4dj+W",m="resetpasswordmessage_reset-password-message-error__2kg4R";var _=t(1375),x=t(7689),g=t(184);const w=function(e){let{status:s,setshow:t,type:a,error:r}=e;const[o,l]=(0,n.useState)(null),[i,c]=(0,n.useState)(null);(0,n.useEffect)((()=>{null===r?(c("Password reset successfull"),l("We have sent you a link to reset your password, Please check your email, click on the link and follow prompt, to complete the process.")):(l(null),c(null))}),[r]);const d=(0,x.s0)();function w(){t(!1),s&&d("/resetpassword")}return(0,n.useEffect)((()=>{document.title="Reset Password"}),[]),(0,g.jsx)(g.Fragment,{children:(0,g.jsx)(_.Z,{click:w,children:(0,g.jsxs)("div",{className:u,children:[(0,g.jsx)("div",{className:h,children:(0,g.jsxs)("p",{id:s?p:m,children:[!0===s&&"passwordsent"===a?o:i,!1===s&&r]})}),(0,g.jsx)("h2",{onClick:w,children:"Ok"})]})})})};var j=t(9907);const f=function(){const[e,s]=(0,n.useState)({email:""}),[t,u]=(0,n.useState)(!1),[h,p]=(0,n.useState)(!1),[m,_]=(0,n.useState)(null),{theme:x}=(0,n.useContext)(j.yw);(0,n.useEffect)((()=>{document.title="Confirm Order"}),[]);let f=new FormData;return(0,g.jsxs)(g.Fragment,{children:[t&&(0,g.jsx)(w,{status:h,setshow:u,type:"passwordsent",error:m}),(0,g.jsxs)("div",{className:x?r:a,children:[(0,g.jsx)("h1",{children:"Reset your Password"}),(0,g.jsx)("p",{children:"Enter your email address below, and we'll email instructions for setting a new one."}),(0,g.jsx)("div",{className:o,children:(0,g.jsx)("div",{className:l,children:(0,g.jsx)("input",{type:"email",placeholder:"Enter your email",name:"email",onChange:function(e){s({[e.target.name]:e.target.value})}})})}),(0,g.jsx)("div",{className:x?c:i,children:(0,g.jsx)("p",{onClick:function(s){(async()=>{f.append("email",e.email);const s={method:"POST",body:f};let t=await fetch("".concat("http://127.0.0.1:8000","/profile/reset_password/"),s);t.ok?(u(!0),p(!0),_(null)):(p(!1),u(!0),_("Couldn't fetch data, please retry")),await t.json()})()},id:d,children:"Reset Password"})})]})]})}},6616:(e,s,t)=>{var n=t(4836);s.Z=void 0;var a=n(t(5649)),r=t(184),o=(0,a.default)((0,r.jsx)("path",{d:"M12 6c3.79 0 7.17 2.13 8.82 5.5-.59 1.22-1.42 2.27-2.41 3.12l1.41 1.41c1.39-1.23 2.49-2.77 3.18-4.53C21.27 7.11 17 4 12 4c-1.27 0-2.49.2-3.64.57l1.65 1.65C10.66 6.09 11.32 6 12 6zm-1.07 1.14L13 9.21c.57.25 1.03.71 1.28 1.28l2.07 2.07c.08-.34.14-.7.14-1.07C16.5 9.01 14.48 7 12 7c-.37 0-.72.05-1.07.14zM2.01 3.87l2.68 2.68C3.06 7.83 1.77 9.53 1 11.5 2.73 15.89 7 19 12 19c1.52 0 2.98-.29 4.32-.82l3.42 3.42 1.41-1.41L3.42 2.45 2.01 3.87zm7.5 7.5 2.61 2.61c-.04.01-.08.02-.12.02-1.38 0-2.5-1.12-2.5-2.5 0-.05.01-.08.01-.13zm-3.4-3.4 1.75 1.75c-.23.55-.36 1.15-.36 1.78 0 2.48 2.02 4.5 4.5 4.5.63 0 1.23-.13 1.77-.36l.98.98c-.88.24-1.8.38-2.75.38-3.79 0-7.17-2.13-8.82-5.5.7-1.43 1.72-2.61 2.93-3.53z"}),"VisibilityOffOutlined");s.Z=o}}]);
//# sourceMappingURL=191.42151338.chunk.js.map