"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[305],{7755:(e,s,t)=>{t.d(s,{Z:()=>a});var i=t(4657),c=t(3362),r=t(184);const a=function(e){let{item:s}=e;const t=(0,i.I0)();return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("button",{className:"plus",onClick:()=>(e=>{t((0,c.jX)({id:e.id,category:e.category,image:e.image,price:e.price,qty:0}))})(s),children:"+"})})}},4261:(e,s,t)=>{t.d(s,{Z:()=>a});t(2791);var i=t(4657),c=t(3362),r=t(184);const a=function(e){let{item:s}=e;const t=(0,i.I0)();return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("button",{className:"minus",onClick:()=>(e=>{t((0,c.cl)({id:e.id}))})(s),children:"-"})})}},4621:(e,s,t)=>{t.d(s,{Z:()=>u});t(2791);var i=t(9846),c=t(3127),r=t(5904),a=t(6720),d=t(6971),l=t(2709);const n="social_socialmediaparent__ud6td",o="social_children__Le6jV";var h=t(184);const u=()=>(0,h.jsxs)("div",{className:n,children:[(0,h.jsx)("div",{className:o,children:(0,h.jsx)(i.Z,{url:"https://www.example.com",quote:"Dummy text!",hashtag:"#muo",children:(0,h.jsx)(c.Z,{size:32,round:!0})})}),(0,h.jsx)("div",{className:o,children:(0,h.jsx)(r.Z,{url:"https://www.example.com",quote:"Dummy text!",hashtag:"#muo",children:(0,h.jsx)(a.Z,{size:32,round:!0})})}),(0,h.jsx)("div",{className:o,children:(0,h.jsx)(d.Z,{url:"https://www.example.com",quote:"Dummy text!",hashtag:"#muo",children:(0,h.jsx)(l.Z,{size:32,round:!0})})})]})},2305:(e,s,t)=>{t.r(s),t.d(s,{default:()=>Z});var i=t(2791),c=t(7689),r=t(4977),a=t(1087),d=t(7755),l=t(4261),n=t(2287),o=t(9907);const h=function(e,s){const[t,c]=(0,i.useState)(),[r,a]=(0,i.useState)(),[d,l]=(0,i.useState)(!0),[n,o]=(0,i.useState)(null);return(0,i.useEffect)((()=>{Promise.all([fetch(e),fetch(s)]).then((e=>{let[s,t]=e;if(!t.ok||!s.ok)throw Error("Couldn't fetch data, please retry");return 200===t.status&&200===s.status&&l(!1),Promise.all([s.json(),t.json()])})).then((e=>{let[s,t]=e;s&&a(s),t&&c(t)})).catch((e=>{l(!1),o(e.message)}))}),[d,e,s]),{data:t,loading:d,productDetails:r,error:n}};var u=t(4949),m=t(4621),x=t(4657),j=t(3362),p=t(184);const Z=function(){const[e,s]=(0,i.useState)(!1),{id:t}=(0,c.UO)(),Z=(0,x.I0)();(0,i.useEffect)((()=>{document.title="Product Details"}),[]);let g="".concat("http://127.0.0.1:8000","/product/listproductdetails/").concat(t,"/"),v="".concat("http://127.0.0.1:8000","/product/allproducts/electronics/");const{data:f,error:N,productDetails:k,loading:y}=h(g,v);function w(){s((e=>!e))}const{theme:C}=(0,i.useContext)(o.yw);return(0,p.jsxs)(p.Fragment,{children:[N&&(0,p.jsx)("h1",{id:n.Z.errors,children:N}),y?(0,p.jsx)(r.Z,{}):(0,p.jsxs)("div",{id:n.Z["container-parent"],children:[k&&k.map((e=>(0,p.jsxs)("div",{className:n.Z["featured-details-parent"],children:[(0,p.jsx)("div",{className:n.Z["featured-details-image"],children:(0,p.jsx)("img",{src:e.image,alt:""})}),(0,p.jsxs)("div",{className:C?n.Z["product-details-dark"]:n.Z["product-details"],children:[(0,p.jsx)("h1",{children:e.category}),(0,p.jsx)("p",{children:e.description}),(0,p.jsxs)("h2",{children:["$",e.price]}),(0,p.jsx)("h3",{onClick:()=>{!function(e){Z((0,j.jX)({id:e.id,category:e.category,image:e.image,price:e.price,qty:0}))}(e)},children:" ADD TO CART "})]})]},e.id))),(0,p.jsx)("div",{className:n.Z["pre-link-text"],children:f&&(0,p.jsxs)("h1",{id:C&&n.Z.h1dark,children:["Related",(0,p.jsx)("span",{children:"Products"})]})}),(0,p.jsx)("div",{id:n.Z["related-products-parents"],children:f?f.map((s=>(0,p.jsxs)("div",{className:C?n.Z["holder-dark"]:n.Z.holder,children:[(0,p.jsx)(a.rU,{to:"/productdetails/".concat(s.id),children:(0,p.jsx)("div",{className:n.Z["related-products-image"],children:(0,p.jsx)("img",{src:s.image,alt:s.description})})}),(0,p.jsxs)("div",{className:n.Z["related-products-others"],children:[(0,p.jsx)("h4",{id:n.Z["p-category"],children:s.category}),(0,p.jsxs)("h2",{id:C?n.Z["h2-price-dark"]:n.Z["h2-price"],children:["$",s.price]}),(0,p.jsx)("p",{children:s.tittle}),(0,p.jsxs)("div",{className:"minus-plus",id:n.Z["minus-plus"],children:[(0,p.jsx)(d.Z,{item:s}),(0,p.jsxs)("div",{className:"share",onClick:w,children:[(0,p.jsx)(u.Z,{}),e&&(0,p.jsx)("div",{className:"socialmediashare",children:(0,p.jsx)(m.Z,{})})]}),(0,p.jsx)(l.Z,{item:s})]})]})]},s.id))):void 0})]})]})}}}]);
//# sourceMappingURL=305.402e7f4b.chunk.js.map