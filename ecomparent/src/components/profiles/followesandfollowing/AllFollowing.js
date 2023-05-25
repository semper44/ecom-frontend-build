import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../../../usequery/useFetch'
import Loading from '../../extra comp/Loading'
import styles from "./followersandfollowing.module.css"
import { Link } from 'react-router-dom'

function AllFollowing() {
    const{id} = useParams()
    console.log(id)
    const {data, loading, error}= useFetch(`http://127.0.0.1:8000/profile/allfollowing/${id}/`)
    
  return (
    <>
    {error && <h1>{error}</h1> }
    {!loading ? 
    <div className={styles.parent}>
     {data?.map((datum)=>{return(
      <Link to={`/profile/${datum.id}`}>
        <div className={styles.followers}>
        <h2>{datum.name}</h2>  
        <p>{datum.location}</p>  
        <p>{datum.country}</p>  
        <p>{datum.businessName}</p>  
        </div>
      </Link>
    )})}
    </div>: <Loading />
    
    }
    </>
    
    
  )
}

export default AllFollowing