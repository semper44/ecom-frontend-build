import React from 'react'
import  ReactDOM  from 'react-dom'
import styles from "../extra comp/modal.module.css"


const ModalOverlay=(props)=>{
    return(
      <div className={styles.backdrop} onClick={props.onClose}>
        {props.children}
      </div>
    )
}

function CartPortal(props) {
  return (
    <>
    {ReactDOM.createPortal(<ModalOverlay onClose={props.click}>{props.children}</ModalOverlay>, document.getElementById("modals"))}
    </>
  )
}

export default CartPortal