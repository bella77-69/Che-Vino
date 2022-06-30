import axios from "axios";
import React, { useState, useEffect } from "react";
import "./SearchPage.scss";
import Title from "../Components/Title/Title";
import { FaSearch } from "react-icons/fa";

export default function SearchPage() {
  const [data, setData] = useState([]);
  const [repos, setRepos] = useState(data);

  useEffect(() => {
    const fetchData = async () => {
      const respWines = await axios("http://localhost:8080/wines/all");
      setData(respWines.data);
      console.log("All Wines", respWines);
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
    <div className="wine">
      <div className="container">
        <Title title="Search By Year"></Title>
        <div className="row height d-flex justify-content-center align-items-center">
          <div className="col-md-6">
            <div class="form">
              <label className="container-form"></label>
              <i className="fa fa-search">
                <FaSearch />
              </i>
              <input
                className="form-control form-input"
                type="text"
                placeholder="Search By Year"
                onChange={(event) => handleSearch(event)}
              />
            </div>
          </div>
        </div>
        <div className="container mt-5">
          <div className="card">
            {repos.map((value) => {
              return (
                <div class="card-columns d-flex" key={value.id}>
                  <div class="mt-0 mt-4 ml-4 d-flex align-items-center">
                    <img
                      className="img-fluid img-responsive rounded product-image"
                      src={value.image}
                      alt="wine"
                    />
                    <div class="card-body">
                      <h5 class="card-title text-white">Wine: {value.wine}</h5>
                      <h6 class="card-subtitle mb-2 text-white">
                        Winery: {value.winery}
                      </h6>
                      <p className="mt-2 mb-1 text-white">
                        Average Rating: {value.average}
                      </p>
                      <p className="mt-2 mb-1 text-white">
                        Reviews: {value.reviews}
                      </p>
                      {/* <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a> */}
                    </div>
                  </div>
                </div>
                // </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
