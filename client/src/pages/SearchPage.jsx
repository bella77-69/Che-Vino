import axios from "axios";
import React, { Component, useState, useEffect } from "react";
import "./SearchPage.scss";

export default function SearchPage(slides) {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  console.log("length:", length);
  const nextSlide = () => {
  setCurrent(current === length -1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length -1 : current -1);
  };
  console.log('currentPrev', current);


  const [APIData, setAPIData] = useState([])
    useEffect(() => {
        axios.get('http://localhost:8080/wines/reds')
            .then((response) => {
                setAPIData(response.data);
            })
    }, [])

    return (
      <section className="search">
        <div className="search-box">
        <button className="search-left" onClick={prevSlide}>Left</button>
        <button className="search-right" onClick={nextSlide}>Right</button>
        </div>
        {APIData.map((data, index) => {
              return (
                <div
                  key={index}
                  className={index === current ? "search active" : "search"}
                  
                >
                  {index === current && (
                    <div>
                    <div className="search-title">{data.wine}</div>
                    <img className="search-image" src={data.image} alt="current-wine"/>
                    </div>
                  )}
                </div>
              );
            })}
          </section>
        )
      }

    

