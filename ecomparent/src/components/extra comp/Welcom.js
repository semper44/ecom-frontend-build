import React, {useContext} from 'react'
import CartPortal from '../carts/CartPortal'
import styles from '../carts/cart.module.css'
import { ThemeData } from '../../App'

function Welcom({setShowWelcome}) {
    const {theme}= useContext(ThemeData)
    function continueFn(){
        setShowWelcome(false)
        localStorage.setItem('welcome', false)
    }
  return (
    <CartPortal > 
        <div className={theme?styles["box-dark"]:styles.box}>
            <p id={styles.nothing}>Hy dear, thanks for cheecking out my work.
                if you interested in the admin page:
                <br />
                Username-zugo
                <br />
                password-1234567admin.
                <br />
                <br />
                <b> Here is your roadmap:</b><br />
                <br />Here you can purchase goods or upload one. get instant notification if someone follws you.<br /><br />
                Get notification if your followed sellers uploads new goods.<br /><br />
                Search for any product/profile by choosing which.<br /><br />
                You can also change/reset passwords, plus many more

            </p>
            <div style={{width:'100%', textAlign:'center', marginTop:'5px'}}>
                <button onClick={continueFn} style={{ width:'fit-content', padding:'10px 15px', cursor:'pointer', 
                border:'none', outline:'none', background:'0', borderRadius:'10px', backgroundColor:'cyan'}}>Continue</button>
            </div>
        </div>
    </ CartPortal >
  )
}

export default Welcom
