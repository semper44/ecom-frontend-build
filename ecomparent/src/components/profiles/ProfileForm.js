import React, { useState , useContext} from 'react'
import styles from "./profileform.module.css"
import Modals from '../extra comp/Modals'
import { ThemeData } from '../../App'
import Loading from '../extra comp/NewLoadingModal'
import jwt_decode from "jwt-decode";
import Message from '../extra comp/Message'




function ProfileForm(props) {
    const[data, setData]=useState({})
    const[unsuccessful, setUnsuccessful]=useState(false)
    const[alreadyAseller, setAlreadyAseller]=useState(false)
    const[loading, setLoading]=useState(false)
    const[responseData, setResponseData]=useState(null)
    const[incorrectEmail, setIncorrectEmail]=useState(false)
    const[UnCorrectPassword, setUnCorrectPassword]=useState(false)
    const[accountnunber, setAccountnunber]=useState(false)
    const[accountname, setAccountname]=useState(false)
    const {theme}= useContext(ThemeData)

    const token= JSON.parse(window.localStorage.getItem("authToken"))|| null

    let userDetails;
    if(token){
      userDetails=jwt_decode(token?.access)
    }
    ;
    function change(e){
        setData({...data, [e.target.name]:e.target.value})
}






// useEffect(()=>{
//     if(
//         (data.BankAccount &&
//         data.AccountNumber &&
//         data.PhoneNumber &&
//         data.Country &&
//         data.State &&
//         data.Email &&
//         data.BusinessName)
//         ){setEmpty(true)}
    
// }, [data, data.AccountNumber, data.BankAccount, data.BusinessName, data.Country, data.Email, data.PhoneNumber, data.State])


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
    headers: {
      'Authorization': 'Bearer '+ token?.access
      },  
    body: formData,
    redirect: 'follow'
  };

  async function sendFormDetail() {
    try {
      if (data?.PhoneNumber?.length < 11) {
        setUnCorrectPassword(true);
      } else if (data?.Email === "" || !data?.Email?.includes("@")) {
        setIncorrectEmail(true);
      } else if (!data.hasOwnProperty("AccountNumber")) {
        setAccountnunber(true);
      } else if (!data.hasOwnProperty("BankAccount")) {
        setAccountname(true);
      } else {
        setLoading(true);
  
        const response = await fetch(`${process.env.REACT_APP_URLS}/profile/sellersprofileform/${userDetails.user_id}/`, requestOptions);
        const res = await response.json();
  
        if (response.status === 400) {
          setLoading(false);
          setUnsuccessful(true);
          window.location.reload();
        } else if (response.status === 200) {
          setLoading(false);
          setUnsuccessful(false);
          setResponseData(res);
          window.location.reload();
        } else if (response.status === 226) {
          setLoading(false);
          setAlreadyAseller(true);
        } else {
          setLoading(false);
          setUnsuccessful(true);
        }
      }
    } catch (error) {
      alert("Error in sendFormDetail:", error);
      // Handle or log the error as needed
    }
  }
  
    // else{
    //   setLoading(true)
    //   console.log("object223");
    //   (async()=>{
    //     const response= await fetch(`http://127.0.0.1:8000/profile/sellersprofileform/${userDetails.user_id}/`, requestOptions)
    //     console.log(response, "object224");
    //     let res= await response.json();
    //     console.log(res, "object224");
    //    if(response.status===400){
    //     setLoading(false)
    //     setUnsuccessful(true)
    //     // window.location.reload()
    //   }else if(response.status===200){
    //     setLoading(false)
    //     setUnsuccessful(false)
    //     setResponseData(res.data)
    //     window.location.reload()
    //   }else if(response.status===226){
    //     setLoading(false)
    //     setAlreadyAseller(true)
    //     window.location.reload()
    //   }
    //   else{
    //     setLoading(false)
    //     setUnsuccessful(true)

    //   }
    //   })()                  
    // }  

  return (
    <>
    <Modals>
      {unsuccessful && <Message 
      value={"Sorry, request failed"}
      code={"error"}
      fn={setUnsuccessful}
       />}

      {responseData && <Message 
      value={"Successful"}
      code={"success"}
      fn={setResponseData}
       />  } 
      {alreadyAseller && <Message 
      value={"Already a seller"}
      code={"success"}
      fn={setResponseData}
       />  } 

       <div className={theme?styles["form-holder-dark"]:styles["form-holder"]}>
          <div className={styles.cancel} onClick={()=>props.setProfileFormstate(false)}>
          &#10005;
          </div>
          <div className={styles.input}>
              <input type="text"
              name='BankAccount'
              placeholder='Bank account'
              onChange={change} />
              {accountname && 
            <div className={styles.incorrectpassword}>
              <p>Bank account incorrect</p>
            </div>}

              <input type="text"
              name='AccountNumber'
              placeholder='Account number'
              onChange={change} />
              {accountnunber && 
            <div className={styles.incorrectpassword}>
              <p>Account number incorrect</p>
            </div>}

              <input type="text"
              name='PhoneNumber'
              placeholder='Phone number'
              onChange={change} />
            {UnCorrectPassword && 
            <div className={styles.incorrectpassword}>
              <p>Phone number not complete</p>
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
      {loading && <Loading />}

    </Modals>
    </>
  )
}

export default ProfileForm