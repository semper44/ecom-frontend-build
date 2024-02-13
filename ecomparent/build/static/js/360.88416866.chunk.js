"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[360],{2360:(e,s,o)=>{o.r(s),o.d(s,{default:()=>C});var r=o(2791);const t={parent:"dashboard_parent__HrUpx",statbox:"dashboard_statbox__RWssY",infographics:"dashboard_infographics__QE1OW",charts:"dashboard_charts__XZHPK",chart3:"dashboard_chart3__Cn7mk"};var i=o(5967),n=o(3623),l=o(2978),a=o(228),d=o(184);i.kL.register(i.uw,i.f$,i.ZL,i.Dx,i.u,i.De);const c={responsive:!0,maintainAspectRatio:!1,plugins:{legend:{position:"top"},title:{display:!0,text:"Chart for monthly orders"}}};function u(e){let{MonthlyUsers:s}=e;const{Orders:o}=(0,r.useContext)(l.df);let t=s;return o&&(t={labels:["current","previous","previous Two Months"],datasets:[{label:"Monthly Orders",data:o,backgroundColor:"cyan",borderWidth:.3}]}),(0,d.jsx)(a.Z,{sx:{postion:"relative",width:"100%",height:"100%"},children:t&&(0,d.jsx)(n.$Q,{data:t,options:c})})}i.kL.register(i.qi,i.u,i.De);const v={maintainAspectRatio:!1};function h(e){const{MostBoughtCategory:s}=(0,r.useContext)(l.df);let o;return s&&(o={labels:["electronics","computing","home & office","fashion","baby product","game"],datasets:[{label:"Most bought category",data:e.values,backgroundColor:["rgba(255, 255, 0, 0.5)","rgba(255, 165, 0, 0.5)","rgba(75, 192, 192, 0.5)","rgba(153, 102, 255, 0.5)","rgba(255, 159, 64, 0.5)","rgba(50, 205, 50, 0.5)"],borderWidth:1}]}),(0,d.jsx)(d.Fragment,{children:o&&(0,d.jsx)(n.by,{data:o,options:v})})}var p=o(9751);i.kL.register(i.uw,i.f$,i.od,i.jn,i.Dx,i.u,i.De);const x={responsive:!0,maintainAspectRatio:!1,plugins:{legend:{position:"top"},title:{display:!0,text:"Chart for monthly users"}}};function g(){const{MonthlyUsers:e}=(0,r.useContext)(l.df),s=(0,r.useContext)(p.yw);let o;return e&&(o={labels:["current","previous","previous Two Months"],datasets:[{label:"Monthly Orders",data:e,backgroundColor:"cyan",borderWidth:.3,borderColor:s?"white":"black"}]}),(0,d.jsx)(d.Fragment,{children:o&&(0,d.jsx)(n.x1,{options:x,data:o})})}var b=o(4565);const y=e=>{let{progress:s=s,size:o="40"}=e;const{theme:t}=(0,r.useContext)(p.yw),i=360*s;return(0,d.jsx)(a.Z,{sx:{background:t?"radial-gradient(#050c30 55%, transparent 56%), conic-gradient(transparent 0deg ".concat(i,"deg, rgba(255, 99, 400, 0.5) ").concat(i,"deg 360deg), cyan"):"radial-gradient(white 55%, transparent 56%), conic-gradient(transparent 0deg ".concat(i,"deg, cyan ").concat(i,"deg 360deg), rgba(255, 99, 400, 0.5)"),borderRadius:"50%",width:"".concat(o,"px"),height:"".concat(o,"px")}})},j=e=>{let{title:s,subtitle:o,icon:t,progress:i,increase:n}=e;const c=(0,r.useContext)(p.yw),{dontdisplay:u}=(0,r.useContext)(l.pt);return(0,d.jsx)(a.Z,{sx:{width:"100%",boxShadow:"3"},children:(0,d.jsxs)(a.Z,{sx:{p:"3%",width:"100%"},children:[(0,d.jsxs)(a.Z,{sx:{display:"flex",justifyContent:"space-between"},children:[(0,d.jsxs)(a.Z,{children:[t,(0,d.jsx)(b.Z,{variant:"h4",fontWeight:"bold",sx:{color:c?"white":"gray"},children:s})]}),(0,d.jsx)(a.Z,{children:(0,d.jsx)(y,{progress:i,increase:n})})]}),(0,d.jsxs)(a.Z,{sx:{display:"flex",justifyContent:"space-between",gap:u&&"2%",mt:"2px"},children:[(0,d.jsx)(b.Z,{variant:"p",sx:{color:c?"cyan":"black",opacity:"0.7",mt:"12px"},children:o}),(0,d.jsx)(b.Z,{variant:"h5",fontStyle:"italic",sx:{color:"cyan"},children:n})]})]})})};var f=o(5457),m=o(4977);const C=function(){const{fetchdata:e,Orders:s,MostBoughtCategory:o,TotalUsers:i,MonthlyUsers:n}=(0,r.useContext)(l.df);return(0,r.useEffect)((()=>{e()}),[e]),(0,d.jsx)(d.Fragment,{children:n?(0,d.jsx)("div",{className:t.container,children:(0,d.jsxs)("div",{className:t.parent,children:[(0,d.jsxs)("div",{className:t.statbox,children:[(0,d.jsx)(j,{title:(null===i||void 0===i?void 0:i.seller)+i["no-seller"],subtitle:"Total Users",progress:0!==(null===i||void 0===i?void 0:i.previousBuyers2)?100*((null===i||void 0===i?void 0:i.currentBuyers)-(null===i||void 0===i?void 0:i.previousBuyers2))/(null===i||void 0===i?void 0:i.previousBuyers2):(null===i||void 0===i?void 0:i.currentBuyers)/100,increase:(null===i||void 0===i?void 0:i.seller)+(i["no-seller"]-1),icon:(0,d.jsx)(f.Z,{sx:{color:"gray",fontSize:"26px"}})}),(0,d.jsx)(j,{title:null===i||void 0===i?void 0:i.seller,subtitle:"Total Sellers",progress:0!==(null===i||void 0===i?void 0:i.previousSellers2)?100*((null===i||void 0===i?void 0:i.currentSellers)-(null===i||void 0===i?void 0:i.previousSellers2))/(null===i||void 0===i?void 0:i.previousSellers2):(null===i||void 0===i?void 0:i.currentSellers)/100,increase:null===i||void 0===i?void 0:i.seller,icon:(0,d.jsx)(f.Z,{sx:{color:"gray",fontSize:"26px"}})}),(0,d.jsx)(j,{title:i&&i["no-seller"],subtitle:"Total Buyers",progress:0!==(null===i||void 0===i?void 0:i.previousBuyers2)?100*((null===i||void 0===i?void 0:i.currentBuyers)-(null===i||void 0===i?void 0:i.previousBuyers2))/(null===i||void 0===i?void 0:i.previousBuyers2):(null===i||void 0===i?void 0:i.currentBuyers)/100,increase:i["no-seller"]-1,icon:(0,d.jsx)(f.Z,{sx:{color:"gray",fontSize:"26px"}})}),(0,d.jsx)(j,{title:null===i||void 0===i?void 0:i.goods,subtitle:"Total Goods",progress:0!==(null===i||void 0===i?void 0:i.previousGoods2)?100*((null===i||void 0===i?void 0:i.currentGoods)-(null===i||void 0===i?void 0:i.previousGoods2))/(null===i||void 0===i?void 0:i.previousGoods2):(null===i||void 0===i?void 0:i.currentGoods)/100,increase:null===i||void 0===i?void 0:i.goods,icon:(0,d.jsx)(f.Z,{sx:{color:"gray",fontSize:"26px"}})})]}),(0,d.jsxs)("div",{className:t.infographics,children:[(0,d.jsx)("div",{className:t.charts,id:t.barchart,children:(0,d.jsx)(h,{values:[i.electronics,i.computing,i["home&office"],i.fashion,i["baby product"],i.game]})}),(0,d.jsx)("div",{className:t.charts,id:t.chart2,children:(0,d.jsx)(u,{})}),(0,d.jsx)("div",{className:t.charts,id:t.chart3,children:(0,d.jsx)(g,{})})]})]})}):(0,d.jsx)("div",{className:"loading-parent",style:{height:"100vh",position:"relative",width:"100%",display:"flex",justifyContent:"center",marginTop:"2rem"},children:(0,d.jsx)("div",{className:"loading-child",style:{position:"absolute"},children:(0,d.jsx)(m.Z,{})})})})}}}]);
//# sourceMappingURL=360.88416866.chunk.js.map