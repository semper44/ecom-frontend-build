"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[647],{1647:(e,s,t)=>{t.r(s),t.d(s,{default:()=>g});var r=t(2791);const a="resetpassword_change-password-parent__3INH+",n="resetpassword_change-password-parent-dark__8x0NM",o="resetpassword_inputparent__hRlHS",l="resetpassword_input__VbdEb",d="resetpassword_login-button__qj1HD",c="resetpassword_login-button-dark__HQ5IG",i="resetpassword_resetbutton__8vB8l",u="resetpasswordmessage_parent__SfkVy",p="resetpasswordmessage_container__PHyM7",w="resetpasswordmessage_reset-password-message-success__4dj+W",h="resetpasswordmessage_reset-password-message-error__2kg4R";var _=t(1375),m=t(7689),f=t(184);const j=function(e){let{status:s,setshow:t,type:a,error:n}=e;const[o,l]=(0,r.useState)(null),[d,c]=(0,r.useState)(null);(0,r.useEffect)((()=>{null===n?(c("Password reset successfull"),l("We have sent you a link to reset your password, Please check your email, click on the link and follow prompt, to complete the process.")):(l(null),c(null))}),[n]);const i=(0,m.s0)();function j(){t(!1),s&&i("/resetpassword")}return(0,r.useEffect)((()=>{document.title="Reset Password"}),[]),(0,f.jsx)(f.Fragment,{children:(0,f.jsx)(_.Z,{click:j,children:(0,f.jsxs)("div",{className:u,children:[(0,f.jsx)("div",{className:p,children:(0,f.jsxs)("p",{id:s?w:h,children:[!0===s&&"passwordsent"===a?o:d,!1===s&&n]})}),(0,f.jsx)("h2",{onClick:j,children:"Ok"})]})})})};var x=t(9907);const g=function(){const[e,s]=(0,r.useState)({email:""}),[t,u]=(0,r.useState)(!1),[p,w]=(0,r.useState)(!1),[h,_]=(0,r.useState)(null),{theme:m}=(0,r.useContext)(x.yw);(0,r.useEffect)((()=>{document.title="Confirm Order"}),[]);let g=new FormData;return(0,f.jsxs)(f.Fragment,{children:[t&&(0,f.jsx)(j,{status:p,setshow:u,type:"passwordsent",error:h}),(0,f.jsxs)("div",{className:m?n:a,children:[(0,f.jsx)("h1",{children:"Reset your Password"}),(0,f.jsx)("p",{children:"Enter your email address below, and we'll email instructions for setting a new one."}),(0,f.jsx)("div",{className:o,children:(0,f.jsx)("div",{className:l,children:(0,f.jsx)("input",{type:"email",placeholder:"Enter your email",name:"email",onChange:function(e){s({[e.target.name]:e.target.value})}})})}),(0,f.jsx)("div",{className:m?c:d,children:(0,f.jsx)("p",{onClick:function(s){(async()=>{g.append("email",e.email);const s={method:"POST",body:g};let t=await fetch("".concat("http://127.0.0.1:8000","/profile/reset_password/"),s);t.ok?(u(!0),w(!0),_(null)):(w(!1),u(!0),_("Couldn't fetch data, please retry")),await t.json()})()},id:i,children:"Reset Password"})})]})]})}}}]);
//# sourceMappingURL=647.abf0db3c.chunk.js.map