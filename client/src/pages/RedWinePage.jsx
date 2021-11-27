import React, { useEffect, useState } from "react";
import './winePages.scss';

export default function RedWinePage () {
    const [data, setData] = useState([]); //hook for all wines
    const [oneData, fetchOneWine] = useState(''); //another hook for current wine
   console.log(data);


    useEffect(() => {
      const fetchWine = async () => {
        try {
          const getWine = await fetch('http://localhost:8080/wines/reds');
          const data = await getWine.json();
  
          setData(data);
        } catch (err) {
          console.log(err);
        }
      };
      fetchWine();
    }, []);
  
    //randomly select one wine object and display onClick
    const handleClick = () => {
      const random = data[Math.floor(Math.random() * data.length)];
      fetchOneWine(random);
    };
   
    return (
      <section className="wine">
          <div className="wine-container">
          <h1 className="wine-title">{oneData.winery}</h1>
          <h2 className="wine-info">{oneData.wine}</h2>
          <p className="wine-location">{oneData.location}</p>
         </div>
          <div className="wine-img__box">
          <img src={oneData.image} className="wine-img"/>
 
        <button className="wine-button" onClick={handleClick}>Wine Generator</button>
      </div>
      </section>
    );
  }

    








