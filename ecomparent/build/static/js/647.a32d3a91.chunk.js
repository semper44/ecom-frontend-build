"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[647],{1647:function(e,s,t){t.r(s),t.d(s,{default:function(){return Z}});var r=t(4165),n=t(5861),a=t(4942),o=t(885),l=t(2791),c="resetpassword_change-password-parent__3INH+",i="resetpassword_change-password-parent-dark__8x0NM",u="resetpassword_inputparent__hRlHS",d="resetpassword_input__VbdEb",p="resetpassword_login-button__qj1HD",h="resetpassword_login-button-dark__HQ5IG",w="resetpassword_resetbutton__8vB8l",m="resetpasswordmessage_parent__SfkVy",_="resetpasswordmessage_container__PHyM7",f="resetpasswordmessage_reset-password-message-success__4dj+W",x="resetpasswordmessage_reset-password-message-error__2kg4R",j=t(1375),v=t(7689),k=t(184);var g=function(e){var s=e.status,t=e.setshow,r=e.type,n=e.error,a=(0,l.useState)(null),c=(0,o.Z)(a,2),i=c[0],u=c[1],d=(0,l.useState)(null),p=(0,o.Z)(d,2),h=p[0],w=p[1];(0,l.useEffect)((function(){null===n?(w("Password reset successfull"),u("We have sent you a link to reset your password, Please check your email, click on the link and follow prompt, to complete the process.")):(u(null),w(null))}),[n]);var g=(0,v.s0)();function y(){t(!1),s&&g("/resetpassword")}return(0,l.useEffect)((function(){document.title="Reset Password"}),[]),(0,k.jsx)(k.Fragment,{children:(0,k.jsx)(j.Z,{click:y,children:(0,k.jsxs)("div",{className:m,children:[(0,k.jsx)("div",{className:_,children:(0,k.jsxs)("p",{id:s?f:x,children:[!0===s&&"passwordsent"===r?i:h,!1===s&&n]})}),(0,k.jsx)("h2",{onClick:y,children:"Ok"})]})})})},y=t(5556);var Z=function(){var e=(0,l.useState)({email:""}),s=(0,o.Z)(e,2),t=s[0],m=s[1],_=(0,l.useState)(!1),f=(0,o.Z)(_,2),x=f[0],j=f[1],v=(0,l.useState)(!1),Z=(0,o.Z)(v,2),b=Z[0],S=Z[1],C=(0,l.useState)(null),N=(0,o.Z)(C,2),P=N[0],E=N[1],H=(0,l.useContext)(y.yw).theme;(0,l.useEffect)((function(){document.title="Confirm Order"}),[]);var R=new FormData,F=function(){var e=(0,n.Z)((0,r.Z)().mark((function e(){var s,n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return R.append("email",t.email),s={method:"POST",body:R},e.next=4,fetch("".concat("127.0.0.1:8000/","/profile/reset_password/"),s);case 4:return(n=e.sent).ok?(j(!0),S(!0),E(null)):(S(!1),j(!0),E("Couldn't fetch data, please retry")),e.next=8,n.json();case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,k.jsxs)(k.Fragment,{children:[x&&(0,k.jsx)(g,{status:b,setshow:j,type:"passwordsent",error:P}),(0,k.jsxs)("div",{className:H?i:c,children:[(0,k.jsx)("h1",{children:"Reset your Password"}),(0,k.jsx)("p",{children:"Enter your email address below, and we'll email instructions for setting a new one."}),(0,k.jsx)("div",{className:u,children:(0,k.jsx)("div",{className:d,children:(0,k.jsx)("input",{type:"email",placeholder:"Enter your email",name:"email",onChange:function(e){m((0,a.Z)({},e.target.name,e.target.value))}})})}),(0,k.jsx)("div",{className:H?h:p,children:(0,k.jsx)("p",{onClick:function(e){F()},id:w,children:"Reset Password"})})]})]})}}}]);
//# sourceMappingURL=647.a32d3a91.chunk.js.map