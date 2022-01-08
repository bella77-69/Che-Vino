import React, { useEffect, useState } from "react";
import "./winePages.scss";

export default function RedWinePage() {
  const [data, setData] = useState([]); //hook for all wines
  const [oneData, fetchOneWine] = useState(""); //another hook for current wine
  console.log("data", data);
  console.log("one data", oneData);

  useEffect(() => {
    const fetchWine = async () => {
      try {
        const getWine = await fetch("http://localhost:8080/wines/reds");
        const data = await getWine.json();
        setData(data);
        console.log("useEffect", data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchWine();
  }, []);

  //randomly select one wine object and display onClick
  const handleClick = (event) => {
    event.preventDefault();
    const random = data[Math.floor(Math.random() * data.length)];
    fetchOneWine(random);
    console.log(random);
  };

  return (
    <section className="wine">
      <div className="wine-container--left">
        <img src={oneData.image} className="wine-img" alt="wine" />
      </div>
      <div className="wine-container--right">
        <h1 className="wine-title">{oneData.wine}</h1>
        <h2 className="wine-info">Winery:  {oneData.winery}</h2>
        
        <p className="wine-location">Location:  {oneData.location}</p>
        <p className="wine-review">Wine number:  {oneData.id}</p>
        
        <button className="wine-button" onClick={handleClick}>
          Wine Generator
        </button>
      </div>
    </section>
  );
}
