import React from 'react'
import { useParams } from 'react-router-dom'
import styles from "./reviews.module.css"
import CriticalRating from "../../extra comp/CriticalRating"
import useFetchToken from '../../../usequery/useFetchToken'
import Message from '../../extra comp/Message'
import Loading from '../../extra comp/Loading'

function Critical() {
    // const [data, setData]= useState()
    const {id}= useParams()
    let url= `http://127.0.0.1:8000/profile/criticalrating/${id}/`
    let method = "GET"
    const {data, loading, error, setMsgFn, msgFn}= useFetchToken(url, method)

  return (
    <>
  {msgFn && <Message value={error} code={"error"} fn={setMsgFn}/>}
  { data && !loading ?<div className={styles.parent}>

    {data.map((item)=>{
        return(
            <>
            <div className={styles["container"]}>
                <div className={styles.pics}>
                    <img src={item?.pics} alt="" />
                </div>
                <p>{item?.sender_name}</p>
            <div className={styles.rated}>
                <CriticalRating value={item?.value}/>
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

export default Critical