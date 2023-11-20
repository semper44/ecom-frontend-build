import React, {useContext, useEffect} from 'react'
import useFetch from '../../usequery/useFetch'
import Loading from './Loading'
import styles from "../profiles/followesandfollowing/followersandfollowing.module.css"
import { Link} from 'react-router-dom'
import RatingProfile from './RatingsProfile'
import { ThemeData } from '../../App'


function AllSellers() {
    const {data, loading, error}= useFetch(`${process.env.REACT_APP_URLS}/profile/sellers/`)
    const {theme}= useContext(ThemeData)


  useEffect(()=>{document.title="All Sellers"
  },[])
    console.log(theme);
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
        <div className={theme?styles.followersdark:styles.followers}>
        <h2>{datum.name}</h2>  
        <RatingProfile value={datum.ratings_value}/>
        <p>{datum.location}</p>  
        <p>{`${datum.followers.length} Follower`}</p>  
        <p>{datum.businessName}</p>  
        </div>
      </Link>
    )})}
    </div></>: <Loading />
    
    }
    </>
    
    
  )
}

export default AllSellers