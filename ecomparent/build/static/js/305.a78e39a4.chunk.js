"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[305],{7755:(e,s,t)=>{t.d(s,{Z:()=>a});var r=t(4420),i=t(3362),c=t(184);const a=function(e){let{item:s}=e;const t=(0,r.I0)();return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("button",{className:"plus",onClick:()=>(e=>{t((0,i.jX)({id:e.id,category:e.category,image:e.image_url,price:e.price,qty:0}))})(s),children:"+"})})}},4261:(e,s,t)=>{t.d(s,{Z:()=>a});t(2791);var r=t(4420),i=t(3362),c=t(184);const a=function(e){let{item:s}=e;const t=(0,r.I0)();return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("button",{className:"minus",onClick:()=>(e=>{t((0,i.cl)({id:e.id}))})(s),children:"-"})})}},4621:(e,s,t)=>{t.d(s,{Z:()=>u});t(2791);var r=t(9846),i=t(3127),c=t(5904),a=t(6720),d=t(6971),l=t(2709);const n="social_socialmediaparent__84RvF",o="social_children__wW+gS";var h=t(184);const u=()=>(0,h.jsxs)("div",{className:n,children:[(0,h.jsx)("div",{className:o,children:(0,h.jsx)(r.Z,{url:"https://www.example.com",quote:"Dummy text!",hashtag:"#muo",children:(0,h.jsx)(i.Z,{size:32,round:!0})})}),(0,h.jsx)("div",{className:o,children:(0,h.jsx)(c.Z,{url:"https://www.example.com",quote:"Dummy text!",hashtag:"#muo",children:(0,h.jsx)(a.Z,{size:32,round:!0})})}),(0,h.jsx)("div",{className:o,children:(0,h.jsx)(d.Z,{url:"https://www.example.com",quote:"Dummy text!",hashtag:"#muo",children:(0,h.jsx)(l.Z,{size:32,round:!0})})})]})},2305:(e,s,t)=>{t.r(s),t.d(s,{default:()=>Z});var r=t(2791),i=t(7689),c=t(4977),a=t(1087),d=t(7755),l=t(4261),n=t(2287),o=t(9751);const h=function(e,s){const[t,i]=(0,r.useState)(),[c,a]=(0,r.useState)(),[d,l]=(0,r.useState)(!0),[n,o]=(0,r.useState)(null);return(0,r.useEffect)((()=>{Promise.all([fetch(e),fetch(s)]).then((e=>{let[s,t]=e;if(!t.ok||!s.ok)throw Error("Couldn't fetch data, please retry");return 200===t.status&&200===s.status&&l(!1),Promise.all([s.json(),t.json()])})).then((e=>{let[s,t]=e;s&&a(s),t&&i(t)})).catch((e=>{l(!1),o(e.message)}))}),[d,e,s]),{data:t,loading:d,productDetails:c,error:n}};var u=t(4949),m=t(4621),x=t(4420),j=t(3362),p=t(184);const Z=function(){const[e,s]=(0,r.useState)(!1),{id:t}=(0,i.UO)(),Z=(0,x.I0)();(0,r.useEffect)((()=>{document.title="Product Details"}),[]);let g="".concat("http://127.0.0.1:8000","/product/listproductdetails/").concat(t,"/"),v="".concat("http://127.0.0.1:8000","/product/allproducts/electronics/");const{data:f,error:N,productDetails:k,loading:w}=h(g,v);function y(){s((e=>!e))}const{theme:_}=(0,r.useContext)(o.yw);return(0,p.jsxs)(p.Fragment,{children:[N&&(0,p.jsx)("h1",{id:n.Z.errors,children:N}),w?(0,p.jsx)(c.Z,{}):(0,p.jsxs)("div",{id:n.Z["container-parent"],children:[k&&k.map((e=>(0,p.jsxs)("div",{className:n.Z["featured-details-parent"],children:[(0,p.jsx)("div",{className:n.Z["featured-details-image"],children:(0,p.jsx)("img",{src:e.image_url,alt:""})}),(0,p.jsxs)("div",{className:_?n.Z["product-details-dark"]:n.Z["product-details"],children:[(0,p.jsx)("h1",{children:e.category}),(0,p.jsx)("p",{children:e.description}),(0,p.jsxs)("h2",{children:["$",e.price]}),(0,p.jsx)("h3",{onClick:()=>{(e=>{Z((0,j.jX)({id:e.id,category:e.category,image:e.image_url,price:e.price,qty:0}))})(e)},children:" ADD TO CART "})]})]},e.id))),(0,p.jsx)("div",{className:n.Z["pre-link-text"],children:f&&(0,p.jsxs)("h1",{id:_&&n.Z.h1dark,children:["Related",(0,p.jsx)("span",{children:"Products"})]})}),(0,p.jsx)("div",{id:n.Z["related-products-parents"],children:f?f.map((s=>(0,p.jsxs)("div",{className:_?n.Z["holder-dark"]:n.Z.holder,children:[(0,p.jsx)(a.rU,{to:"/productdetails/".concat(s.id),children:(0,p.jsx)("div",{className:n.Z["related-products-image"],children:(0,p.jsx)("img",{src:s.image_url,alt:s.description})})}),(0,p.jsxs)("div",{className:n.Z["related-products-others"],children:[(0,p.jsx)("h4",{id:n.Z["p-category"],children:s.category}),(0,p.jsxs)("h2",{id:_?n.Z["h2-price-dark"]:n.Z["h2-price"],children:["$",s.price]}),(0,p.jsxs)("div",{className:"minus-plus",id:n.Z["minus-plus"],children:[(0,p.jsx)(d.Z,{item:s}),(0,p.jsxs)("div",{className:"share",onClick:y,children:[(0,p.jsx)(u.Z,{}),e&&(0,p.jsx)("div",{className:"socialmediashare",children:(0,p.jsx)(m.Z,{})})]}),(0,p.jsx)(l.Z,{item:s})]})]})]},s.id))):void 0})]})]})}}}]);
//# sourceMappingURL=305.a78e39a4.chunk.js.map