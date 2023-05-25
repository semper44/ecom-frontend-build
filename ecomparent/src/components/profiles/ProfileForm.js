import React, { useState, useEffect , useContext} from 'react'
import styles from "./profileform.module.css"
import Modals from '../extra comp/Modals'
import { useParams } from 'react-router-dom'
import { ThemeData } from '../../App'

// const intialData={

// }

function ProfileForm(props) {
    const[data, setData]=useState({})
    const[response, setResponse]=useState({active:"no"})
    const[empty, setEmpty]=useState(false)
    const[incorrectEmail, setIncorrectEmail]=useState(false)
    const[UnCorrectPassword, setUnCorrectPassword]=useState(false)
    const{id}=useParams()   
    const {theme}= useContext(ThemeData)
 

    // console.log(cancelProfileForm)
    function change(e){
        setData({...data, [e.target.name]:e.target.value})
}
// let BankAccount=parseInt(data.BankAccount)
// let accountNumber=parseInt(data.AccountNumber)
// let phoneNumber=parseInt(data.PhoneNumber)
// let country=data.Country
// let state=data.State
// let email=data.Email
// let businessName=data.BusinessName

console.log(data)



useEffect(()=>{
    if(
        (data.BankAccount &&
        data.AccountNumber &&
        data.PhoneNumber &&
        data.Country &&
        data.State &&
        data.Email &&
        data.BusinessName)
        ){setEmpty(true)}
    
}, [data, data.AccountNumber, data.BankAccount, data.BusinessName, data.Country, data.Email, data.PhoneNumber, data.State])
// console.log(data.BankAccount)
let formData= new FormData()
formData.append("bankAccount",  parseInt(data.BankAccount))
formData.append("accountNumber", parseInt(data.AccountNumber))
formData.append("phoneNumber", data.PhoneNumber)
formData.append("country", data.Country)
formData.append("state", data.State)
formData.append("email", data.Email)
formData.append("businessName", data.BusinessName)


const requestOptions = {
    method: 'PATCH',
    body: formData,
    redirect: 'follow'
  };

function sendFormDetail(){
    
    if(data?.PhoneNumber?.length !==11){
        setUnCorrectPassword(true)
    }else if(data?.Email==="" || !data?.Email?.includes("@")){
        setIncorrectEmail(true)
        console.log("great")
    }
    else{
      (async()=>{
       const response= await fetch(`http://127.0.0.1:8000/profile/sellersprofileform/${id}/`, requestOptions)
       let res= await response.json();
       if(response.status===400){
        setResponse({...response, code:response.status, msg:res, active:"yes"})
        // window.location.reload()
      }else{
        setResponse({...response, code:response.status, msg:res, active:"yes"})
        // window.location.reload()
      }
      // console.log(response)
      // console.log(res)
      })()                  
    }  
}
console.log(response)
// console.log(formData.get("businessName"))
// console.log(empty, UnCorrectPassword, incorrectEmail)
// console.log(data?.Email==="", data?.PhoneNumber?.length !==11)
  return (
    <>
    {/* {response.active==="yes" &&<Modals>
        <div className={styles["succes-bad"]}>
          {response.status===400?<p>Task unsuccessful-{response.msg}</p>:<p>Task done succesfully</p>}
        </div>
      </Modals>} */}
    <Modals>
        <div className={theme?styles["form-holder-dark"]:styles["form-holder"]}>
            <div className={styles.cancel} onClick={()=>props.setProfileFormstate(false)}>
            &#10005;
            </div>
            <div className={styles.input}>
                <input type="text"
                name='BankAccount'
                placeholder='Bank account'
                onChange={change} />

                <input type="number"
                name='AccountNumber'
                placeholder='Account number'
                onChange={change} />

                <input type="number"
                name='PhoneNumber'
                placeholder='Phone number'
                onChange={change} />
              {UnCorrectPassword && 
              <div className={styles.incorrectpassword}>
                <p>phoneNumber not complete</p>
              </div>}

                <input type="text"
                name='Country'
                placeholder='Country'
                onChange={change} />

                <input type="text"
                name='State'
                placeholder='State'
                onChange={change} />

                <input type="email"
                name='Email'
                placeholder='Email'
                onChange={change} />
                {incorrectEmail && 
              <div className={styles.incorrectpassword}>
                <p>Email is not correct</p>
              </div>}

                <input type="text"
                name='BusinessName'
                placeholder='Business name'
                onChange={change} />
            </div>
            <button className="btn" onClick={sendFormDetail}>
                Submit
            </button>
        </div>
    </Modals>
    </>
  )
}

export default ProfileForm