"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[873],{7755:(e,s,t)=>{t.d(s,{Z:()=>a});var r=t(4657),i=t(3362),c=t(184);const a=function(e){let{item:s}=e;const t=(0,r.I0)();return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("button",{className:"plus",onClick:()=>(e=>{t((0,i.jX)({id:e.id,category:e.category,image:e.image,price:e.price,qty:0}))})(s),children:"+"})})}},4261:(e,s,t)=>{t.d(s,{Z:()=>a});t(2791);var r=t(4657),i=t(3362),c=t(184);const a=function(e){let{item:s}=e;const t=(0,r.I0)();return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("button",{className:"minus",onClick:()=>(e=>{t((0,i.cl)({id:e.id}))})(s),children:"-"})})}},4621:(e,s,t)=>{t.d(s,{Z:()=>h});t(2791);var r=t(9846),i=t(3127),c=t(5904),a=t(6720),l=t(6971),d=t(2709);const n="social_socialmediaparent__ud6td",o="social_children__Le6jV";var u=t(184);const h=()=>(0,u.jsxs)("div",{className:n,children:[(0,u.jsx)("div",{className:o,children:(0,u.jsx)(r.Z,{url:"https://www.example.com",quote:"Dummy text!",hashtag:"#muo",children:(0,u.jsx)(i.Z,{size:32,round:!0})})}),(0,u.jsx)("div",{className:o,children:(0,u.jsx)(c.Z,{url:"https://www.example.com",quote:"Dummy text!",hashtag:"#muo",children:(0,u.jsx)(a.Z,{size:32,round:!0})})}),(0,u.jsx)("div",{className:o,children:(0,u.jsx)(l.Z,{url:"https://www.example.com",quote:"Dummy text!",hashtag:"#muo",children:(0,u.jsx)(d.Z,{size:32,round:!0})})})]})},2873:(e,s,t)=>{t.r(s),t.d(s,{default:()=>x});var r=t(2791),i=t(1087),c=t(7755),a=t(4261),l=t(2287),d=t(4977),n=t(9907),o=t(5271),u=t(4949),h=t(4621),m=t(184);const x=function(e){let{url:s}=e;const[t,x]=(0,r.useState)(!1),{theme:j}=(0,r.useContext)(n.yw),{data:p,loading:Z,error:g}=(0,o.Z)(s);let v=s.split("/"),f=v[v.length-2];function w(){x((e=>!e))}return(0,r.useEffect)((()=>{document.title=f.charAt(0).toUpperCase()+f.slice(1)}),[f]),(0,m.jsxs)(m.Fragment,{children:[g&&(0,m.jsx)("h1",{id:l.Z.errors,children:g}),Z?(0,m.jsx)(d.Z,{}):(0,m.jsx)("div",{id:l.Z["related-products-parents"],className:j?l.Z.id:void 0,children:null===p||void 0===p?void 0:p.map((e=>(0,m.jsx)(m.Fragment,{children:(0,m.jsxs)("div",{className:j?l.Z["holder-dark"]:l.Z.holder,children:[(0,m.jsx)(i.rU,{to:"/productdetails/".concat(e.id),children:(0,m.jsx)("div",{className:l.Z["related-products-image"],children:(0,m.jsx)("img",{src:e.image,alt:e.description})})}),(0,m.jsxs)("div",{className:l.Z["related-products-others"],children:[(0,m.jsx)("h4",{id:l.Z["p-category"],children:e.category}),(0,m.jsxs)("h2",{id:j?l.Z["h2-price-dark"]:l.Z["h2-price"],children:["$",e.price]}),(0,m.jsx)("p",{children:e.tittle}),(0,m.jsxs)("div",{className:"minus-plus",id:l.Z["minus-plus"],children:[(0,m.jsx)(c.Z,{item:e}),(0,m.jsxs)("div",{className:"share",onClick:w,children:[(0,m.jsx)(u.Z,{sx:{color:j&&"white"}}),t&&(0,m.jsx)(h.Z,{})]}),(0,m.jsx)(a.Z,{item:e})]})]})]},e.id)})))})]})}},5271:(e,s,t)=>{t.d(s,{Z:()=>i});var r=t(2791);const i=function(e,s){const[t,i]=(0,r.useState)(),[c,a]=(0,r.useState)(!0),[l,d]=(0,r.useState)(null);return(0,r.useEffect)((()=>{let t=!1;fetch(e,s).then((e=>{if(!e.ok){if(a(!1),417!==e.status)throw Error("Couldn't fetch data, please retry");t=!0}return 200===e.status&&a(!1),e.json()})).then((e=>{t?d(e.msg):i(e)})).catch((e=>{a(!1),d(e.message)}))}),[s,e]),{data:t,loading:c,error:l}}}}]);
//# sourceMappingURL=873.28bfeb11.chunk.js.map