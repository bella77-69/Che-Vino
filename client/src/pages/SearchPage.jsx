import axios from "axios";
import React, { useState, useEffect } from "react";
import "./SearchPage.scss";

export default function SearchPage() {
  const [allReviews, setAllReviews] = useState([]);
  const [filterReviews, setFilterReview] = useState(allReviews);
  console.log("all reviews", allReviews)
  console.log("filter reviews", filterReviews)

  useEffect(() => {
    axios("http://localhost:8080/wines/reds/")
      .then((response) => {
        console.log("use effect",response.data);
        setAllReviews(response.data);
        setFilterReview(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleSearch = (event) => {
    let value = event.target.value.toLowerCase();
    let result = [];
    console.log("Handle Search", value);
    result = allReviews.filter((data) => {
      console.log("handle Search", data)
      return data.wine.search(value) !== -1;
    });

    setFilterReview(result);
    console.log(result)
  };
  return (
    <div className="search">
      <div className="search-card">
        <label className="search-year">Search By Year:</label>
        <input className="search-input" type="text" placeholder="Year"onChange={(event) => handleSearch(event)} />
      </div>
      <div className="search-card">
        {filterReviews.map((value, index) => {
          return (
            <ul className="search-box" key={value.id}>
              <li className="search-list">
                {value.wine} | {value.price} | {value.style}
              </li>
            </ul>
          );
          
        })}
      </div>
    </div>
    
  );
 
}
