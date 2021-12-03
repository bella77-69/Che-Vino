import React, { useEffect, useState } from "react";
import './winePages.scss';


export default function DessertWinePage () {
    const [data, setData] = useState([]); //hook for all wines
    const [oneData, fetchOneWine] = useState(''); //another hook for current wine
   console.log(data);


    useEffect(() => {
      const fetchWine = async () => {
        try {
          const getWine = await fetch('http://localhost:8080/wines/dessert');
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
          <img src={oneData.image} className="wine-img" alt="wine"/>
 
        <button className="wine-button" onClick={handleClick}>Wine Generator</button>
      </div>
      </section>
 
    );
  }



// import axios from "axios";
// import React from "react";

// export default class DessertWinePage extends React.Component {
// constructor(props){
//     super(props);
//     this.state ={
//         items: [],
//         activeItems: []
//     }
//     this.toggleContent = this.toggleContent.bind(this)
// }

//     //lifecycle
//     componentDidMount() {
//         this.fetchWine();
//        }

// fetchWine = () => {
//     axios.get('http://localhost:8080/wines/dessert')
//     .then((response) => {
//         this.setState ({
//             items: response.data,
//             activeItems: response.data[0]
//         })
//         console.log(response.data)
//     })
//     .catch((error) => {
//     console.log(error)
//     });
// }
// getWineById(id) {
//     axios
//       .get(`http://localhost:8080/wines/dessert/${id}`)
//       .then((response) => {
//         console.log("message:", response.data);
//         this.setState({
//          activeItems: response.data,
//         });
//       })
//       .then((response) => {
//         console.log(this.state.activeItems);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }
//   componentDidUpdate(prevProps, prevState) {
//     const {id} = this.props.match.params
//     console.log("In component did update:", id);
//     if (id) {
//       if (prevState.activeItems && prevState.activeItems.id !== id) {
//         this.getWineById(id);
//       }
//     }
//   }

// toggleContent(event) {
//     event.preventDefault();
//     this.fetchWine();
//     console.log(this.props)
//     }
    

// render () {
//     const { items, activeItems } =this.state
//     console.log(activeItems)
//     return (
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
//     );
// }
// }
