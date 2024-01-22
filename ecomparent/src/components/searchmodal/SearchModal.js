// SearchComponent.jsx

import React, { useState , useContext} from 'react';
import axios from 'axios';
import Modals from '../extra comp/Modals';
import styles from  "./searchmodal.module.css"
import {ThemeData} from "../../App"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Loading from '../extra comp/Loading';
import { Link } from 'react-router-dom';
import CriticalRating from "../extra comp/CriticalRating"



const SearchComponent = (props) => {
  const {theme}= useContext(ThemeData)
  const [selectedOptions, setSelectedOptions] = useState({
    query:'',
    size: '',
    color: '',
    price: '',
  });
  const [searchResults, setSearchResults] = useState([]);
  const [searchResultShow, setSearchResultShow] = useState(false);
  const [searchContainer, setSearchContainer] = useState(true);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true)
    try {
      // Create a new object with only non-empty values
      const filteredOptions = Object.fromEntries(
        Object.entries(selectedOptions).filter(([key, value]) => value !== '')
      );
  
      const response = await axios.get(`${process.env.REACT_APP_URLS}/product/api/search/`, {
        params: { query: selectedOptions.query, ...filteredOptions },
      });
      if(response.data){
        setSearchResults(response.data);
        setLoading(false)
        setSearchContainer(false)
        setSearchResultShow(true)
      }

    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };
  
  function Change(e){
    setSelectedOptions({...selectedOptions, [e.target.name]:e.target.value})
  }
  function goBackFn(){
    setSearchResultShow(false)
    setSearchContainer(true)
  }
  function goToProfile(profile){
    window.location.pathname =`/profile/${profile?.name}`
    props.hide()
  }
  function goToProduct(item){
    window.location.pathname =`/productdetails/${item.id}`
    props.hide()
  }
  
  return (
    <Modals>
      {loading && <div className={styles.loadingdiv}>
        <Loading />
      </div> }
      <div className={theme?styles["theme-dark"]:styles['all-items']}>
        <div className="buttons">
          {searchResultShow && <ArrowBackIcon sx={{cursor:'pointer'}} onClick={goBackFn}/>}
          <button id={styles.cancel} onClick={props.onHide}>&#10005;</button>
        </div>
       {searchContainer &&<div className="searchcontainer">
          <div className={styles['parent-hold']}>
            <div className={styles['search-items']}>
              <div className={styles.first}>
              <input
                type="text"
                onChange={Change}
                name='query'
                placeholder="Search..."
              />
            </div>
            <div className={styles.first}>
              <input
                type="text"
                placeholder="max-size (optional)"
                name = 'size'
                // checked={selectedOptions === 'size'}
                onChange={Change}
              />
            </div>
            
            <div className={styles.first}>
              <input
                type="text"
                placeholder="color (optional)"
                name='color'              
                onChange={Change}
              />
              </div>
              <div className={styles.first}>
              <input
                type="text"
                placeholder="max-price (optional)"
                name='price'
                onChange={Change}
              />
              </div>
            </div>
          </div>

          <div className={styles["send-button"]}>
            <button className={styles.search} onClick={handleSearch}>Search</button>
          </div>
        </div>}

        {searchResultShow && ((searchResults.profiles.length>0 || searchResults.products.length>0) ?<div className={styles['search-results']}>
          {searchResults.profiles && (searchResults.profiles.length>0 && searchResults.profiles.map((result) => (
              <div className={styles["container"]} onClick={()=>goToProfile(result)}>
                <div className={styles.pics}>
                    <img src={result?.image_url} alt="" />
                </div>
                 <div>
                    <p style={{color:'cyan'}}>{result?.name}</p>
                    {result.tags === 'seller' && <div className={styles.rated}>
                      <CriticalRating value={result?.ratings_value}/>
                    </div>}
                </div>
              </div>
          )))}
          {searchResults.products && (searchResults.products.length>0 && searchResults.products.map((result) => (
            <div className={styles["container"]} onClick={()=>goToProduct(result)}>
                <div className={styles.pics}>
                    <img src={result?.image_url} alt="" />
                </div>
                 <div >
                  <p style={{color:'cyan'}} >{result.category}</p> 
                  <p className={theme?styles.category:styles['dark-category']}>${result.price}</p>
              </div>
            </div>
          )))}
        </div>: <div className={styles['noting']}>oops 😥 <br /><br /> Nothing found, please check your keywords</div>)}
      </div>

    </Modals>
  );
};

export default SearchComponent;
