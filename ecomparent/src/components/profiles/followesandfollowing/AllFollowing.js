import React, {useEffect} from 'react'
import useFetch from '../../../usequery/useFetch'
import Loading from '../../extra comp/Loading'
import styles from "./followersandfollowing.module.css"
import { Link } from 'react-router-dom'
import { Box } from '@mui/material'
import {useParams } from 'react-router-dom';


function AllFollowing() {
  const{username}= useParams()
  const {data, loading, error}= useFetch(`${process.env.REACT_APP_URLS}/profile/allfollowing/${username}/`)
    
    
    useEffect(()=>{document.title="Following"
  },[])
    return (
    <>
     {!loading ? 
     <>
     {(!data && error )&& <h1 style={{display: "flex", justifyContent: "center", alignItems: "center", padding:" 15% 0", color: "cyan",}}>
     {error}
   </h1> }
    <div className={styles.parent}>
     {data?.map((datum)=>{return(
      <Link to={`/profile/${datum.name}`}>
        <Box sx={{display:"flex", alignItems:"center", gap:"1rem"}}>
          <img src={datum.pics} alt="" style={{borderRadius:"50%", width:"100px", height:"100px"}}/>
          <h2 style={{color:"cyan"}}>{datum.name}</h2>  
        </Box>
        <div className={styles.followers}>
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