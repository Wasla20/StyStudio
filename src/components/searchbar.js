//import React, { useState } from 'react';
import { IconContext } from 'react-icons';
import {FaSearch} from 'react-icons/fa'
import React, { useState ,useEffect, useRef} from "react";

export function SearchBar(){

    const [isClicked,setIsClicked] = useState(false);
    const [isbuttonClicked, setIsButtonClicked] = useState(false);
    const searchRef = useRef(null);

    useEffect(() => {
        if (isClicked) {
          searchRef.current.focus();
        }
      }, [isClicked]);

    //handler fuction
    const handleClick = () =>{
        setIsButtonClicked(!isbuttonClicked);
        setIsClicked(!isClicked);
    }
    

   


    return (
        <div className="listing-text">
            <p>Find best salons in your area</p> 


            <div className='search-container'>

             
        <IconContext.Provider  value = {{ color : 'white', size : '30px', backgroundColor: '#07794D'}}>

        <button className={`search-btn ${isClicked ? "" : "active"}`} onClick = {handleClick}>< FaSearch/></button>
        </IconContext.Provider>
        <input className={`search-bar ${isClicked ? "active" : ""}`}
            type="text"
            placeholder="Search"
            ref = {searchRef}
            //value={searchTerm}
           // onChange={handleSearchInputChange}
          />
          </div>
          </div>
      
      );
}


