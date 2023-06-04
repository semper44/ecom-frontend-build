import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// const theme= window.localStorage.getItem("themes")
// let body= document.body
// 
// let theme= false
// const toggleTheme= ()=>{
//   theme= !theme;
//   window.localStorage.setItem("themes", !theme)
// }

// if(theme){body.style.backgroundColor="#050c30"}
// else{body.style.backgroundColor="white" } 




const root = ReactDOM.createRoot(document.getElementById('root'));

// ;
root.render(
  <React.StrictMode>
        <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

