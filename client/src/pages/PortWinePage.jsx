import React, { useEffect, useState } from "react";
import './winePages.scss';


export default function PortWinePage () {
    const [data, setData] = useState([]); //hook for all wines
    const [oneData, fetchOneWine] = useState(''); //another hook for current wine
   console.log(data);


    useEffect(() => {
      const fetchWine = async () => {
        try {
          const getWine = await fetch('http://localhost:8080/wines/port');
          const data = await getWine.json();
  
          setData(data);
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
    };
   
    return (
      <section className="wine">
          <div className="wine-container">
          <h1 className="wine-title">{oneData.winery}</h1>
          <h2 className="wine-info">{oneData.wine}</h2>
          <p className="wine-location">{oneData.location}</p>
          <p className="wine-review">{oneData.id}</p>
         </div>
          <div className="wine-img__box">
          <img src={oneData.image} className="wine-img" alt="red-wine"/>
 
        <button className="wine-button" onClick={handleClick}>Wine Generator</button>
      </div>
      </section>
 
    );
  }






// import axios from "axios";
// import React from "react";

// export default class PortWinePage extends React.Component {
// constructor(props){
//     super(props);
//     this.state ={
//         items: [],
//     }
//     this.toggleContent = this.toggleContent.bind(this)
// }

//     //lifecycle
//     componentDidMount() {
//         this.fetchWine();
//        }

// fetchWine = () => {
//     axios.get('http://localhost:8080/wines/port')
//     .then((response) => {
//         this.setState ({
//             items: response.data,
//         })
//         console.log(response.data)
//     })
//     .catch((error) => {
//     console.log(error)
//     });
// }

// toggleContent(event) {
//     event.preventDefault();
//     this.fetchWine();
//     console.log(this.props)
//     }

// render () {
//     const { items } =this.state;
//     return (
//         <section>
//     <div>
//         <ul>{items.map(item => (
//             <li key={item.id}> 
//             <img src={item.image} alt="wine-img"/>
//             <h3 className="wine-title">{item.wine}
//             </h3>
//             <p className ="wine-info">{item.winery}</p>
//             <p className="wine-location">{item.location}</p>
//             <p className="wine-rating">{item.rating.average}</p>
//             <p className="wine-review">{item.rating.reviews}</p>
//             <button className="button" onClick={this.toggleContent}>
//                  <span>WINE GENERATOR</span>
//          </button>
//             </li>
//         ))};
//         </ul>
// </div>
// </section>
//     );
// }
// }

