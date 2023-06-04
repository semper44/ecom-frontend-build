import React, {useContext, useEffect} from 'react'
import useFetch from '../../../usequery/useFetch'
import Loading from '../../extra comp/Loading'
import styles from "./followersandfollowing.module.css"
import { Link } from 'react-router-dom'
import { AuthContext } from '../login/LoginFetch'
import jwt_decode from "jwt-decode";

function AllFollowing() {
  const users= useContext(AuthContext)
  let userDetails;
  if(users.user){
    userDetails=jwt_decode(users?.user?.access)
  }
    const {data, loading, error}= useFetch(`http://127.0.0.1:8000/profile/allfollowing/${userDetails.user_id}/`)
    useEffect(()=>{document.title="Following"
  },[])
    return (
    <>
     {!loading ? 
     <>
     {error && <h1 style={{display: "flex", justifyContent: "center", alignItems: "center", padding:" 15% 0", color: "cyan",}}>
     {error}
   </h1> }
    <div className={styles.parent}>
     {data?.map((datum)=>{return(
      <Link to={`/profile/${datum.name}`}>
        <div className={styles.followers}>
        <h2>{datum.name}</h2>  
        <p>{datum.location}</p>  
        <p>{datum.country}</p>  
        <p>{datum.businessName}</p>  
        </div>
      </Link>
    )})}
    </div></>: <Loading />
    
    }
    </>
    
    
  )
}

export default AllFollowing