import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import styles from "./reviews.module.css"
import CriticalRating from "../../extra comp/CriticalRating"
import Loading from '../../extra comp/Loading'

function Positive() {
  const[data, setData]=useState()
  const[error, setError]=useState(null)
  const[loading, setLoading]=useState(true)
    const {username}= useParams()

    
    useEffect(()=>{
      let errorStatus=false
      let url= `${process.env.REACT_APP_URLS}/profile/positiverating/${username}/`
      let method = "GET"
      fetch(url,
        {method:method,
        headers:{
        'Content-Type':'application/json',
        }})
        .then((response)=>{
            if(!response.ok){
                setLoading(false)
                if(response.status===417){
                    errorStatus=true
                }else{
                    throw Error("Couldn't fetch data, please retry")
                }
            }
            if (response.status===200){
                setLoading(false)
            }       
            ;     
            return response.json()
        })
        .then((data)=>{
            if(errorStatus){
                setError(data.msg)
            }else{
                setData(data)
            }
        })
        .catch(err=>{
            setLoading(false)
            setError(err.message)
    })  }, [username])
    
    useEffect(()=>{document.title="Positive Reviews"
    },[])

  return (
    <>
    {!loading?
      <div className={styles.parent}>
      {error && <h1 style={{display: "flex", justifyContent: "center", alignItems: "center", padding:" 15% 0", color: "cyan",}}>
        {error}
      </h1>}
        {data && data.map((item)=>{
        return(
            <>
            <div className={styles["container"]}>
                <div className={styles.pics}>
                    <img src={item?.image_url} alt="" />
                </div>
                <div>
                    <p style={{color:'cyan'}}>{item?.sender_name}</p>
                    <div className={styles.rated}>
                        <CriticalRating value={item?.value}/>
                    </div>
                </div>
            </div>
            <div className={styles["rating-text"]}>
                {item?.text}
            </div>
            </>
        )
    })}
    </div>: <Loading />}
        </>
  )
}

export default Positive