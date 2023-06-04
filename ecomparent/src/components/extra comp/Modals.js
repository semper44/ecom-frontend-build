import React from 'react'
import  ReactDOM  from 'react-dom'
import styles from "./modal.module.css"

function Backdrop(props){
  
    return(
        <div className={styles.backdrop} onClick={props.onClose}>
             {props.children}
        </div>
    )
}
// function ModalOverlay(props){
//     return(
//         <div className={styles.modal}>
//             {props.children}
//         </div>
//     )
// }


const portalElement = document.getElementById("modals")
function Modals(props) {
  
  return (
    <>
    {ReactDOM.createPortal(<Backdrop  onClose={props.click}>{props.children}</ Backdrop >, portalElement)}
    {/* {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)} */}
    </>
  )
}

export default Modals