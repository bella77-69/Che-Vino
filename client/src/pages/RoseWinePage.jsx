import axios from "axios";
import React, { useEffect, useState } from "react";


export default function RoseWinePage() {
    const [data, setData] = useState([]);
    const [oneData, fetchOneWine] = useState('');

    useEffect(() => {
        fetch('http://localhost:8080/wines/rose')
        .then((res) => res.json())
        .then((data) => {
            setData(data);
        })
        .catch((err) => {
            console.log(err)
        });
    }, []);

    const handleClick = () => {
        const random = data[Math.floor(Math.random() * data.length)];
        fetchOneWine(random);
    }
    return (
        <ul>
            {data.map((item) => (
                     <section className="wine" key={item.id}>
                     <div className="wine-container">
                     <h1 className="wine-title">{item.winery}</h1>
                     <h2 className="wine-info">{item.wine}</h2>
                     <p className="wine-location">{item.location}</p>
                    </div>
                     <div className="wine-img__box">
                     <img src={item.image} className="wine-img" alt="red-wine"/>
            
                   <button className="wine-button" onClick={handleClick}>Wine Generator</button>
                 </div>
                 </section>
            ))}
        </ul>
    );
}

