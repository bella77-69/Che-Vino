import axios from "axios";
import React, { useState, useEffect } from "react";
import "./SearchPage.scss";

export default function SearchPage () {
  const [data, setData] = useState([]);
  const [repos, setRepos] = useState(data);

  useEffect(() => {
    const fetchData = async () => {
      const respWines = await axios("http://localhost:8080/wines/all");
 

      setData(respWines.data);
      console.log("All Wines",respWines)
    
    };

    fetchData();
  }, []);

  const handleSearch = (event) => {
    let value = event.target.value;
    let result = [];
    console.log("Handle Search", value);
    result = data.filter((data) => {
      // console.log("handle Search", data)
      return data.wine.search(value) !== -1;
    });

    setRepos(result);
    console.log(result);
  };

  if (data) {
    console.log(data, repos);
  }

  return (
    <div className="search">
      <div className="search-card">
        <label className="search-year">Search By Year</label>
        <input
          className="search-input"
          type="text"
          placeholder="Year"
          onChange={(event) => handleSearch(event)}
        />
      </div>
      <div className="search-card">
        {repos.map((value) => {
          return (
            <div className="search-box" key={value.id}>
              <img className="search-box__img" src={value.image} alt="wine" /> 
              
            
              <div className="search-list">
                <p className="search-name">Wine: {value.wine}</p>
                <p className="search-location">Location: {value.location}</p>
                <p className="search-rating">
                  Average Rating: {value.rating.average}
                </p>
              </div>
          </div>
          );
        })}
      </div>
    </div>
  );
}

  
 

