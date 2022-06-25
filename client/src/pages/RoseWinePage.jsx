import React, { useEffect, useState } from "react";
import "./winePages.scss";
import Title from "../Components/Title/Title";

export default function RoseWinePage() {
  const [data, setData] = useState([]);
  const [oneData, fetchOneWine] = useState("");

  useEffect(() => {
    const fetchWine = async () => {
      try {
        const getWine = await fetch("http://localhost:8080/wines/rose");
        const data = await getWine.json();

        setData(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchWine();
  }, []);

  const handleClick = () => {
    const random = data[Math.floor(Math.random() * data.length)];
    fetchOneWine(random);
  };

  return (
    <section className="wine">
      <div className="d-flex justify-content-center container">
        <div className="card p-3 text-white">
          <Title title="Rose Wine"></Title>

          <div className="about-product text-center mt-2">
            <img src={oneData.image} width="50" />
            <div className="mt-0 mt-4 ">
              <h4>{oneData.wine}</h4>
              <h6>Wine #: {oneData.id}</h6>
            </div>
          </div>
          <div className="stats mt-2 text-center text-wrap">
            <div className="d-flex justify-content-center">
              <span className="text-center font-weight-bold">Winery: </span>
              &nbsp;&nbsp;
              <span>{oneData.winery}</span>
            </div>
            <div className="d-flex justify-content-center">
              <span className="font-weight-bold">Location:</span>&nbsp;&nbsp;
              <span>{oneData.location}</span>
            </div>
          </div>
          <div className="d-flex justify-content-center mt-4">
            <button className="btn mx-2" onClick={handleClick}>
              Wine Generator
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
