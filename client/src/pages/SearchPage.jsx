import  axios from "axios";
import React, { Component, useState, useEffect } from "react";
import "./SearchPage.scss";

;
export default function SearchPage() {

  const [data, setData]=useState([]);
  const [oneData, fetchOneWine]=useState('');
  useEffect(() => {
    const fetchWine = async () => {
      try {
        const getWine = await fetch('http://localhost:8080/wines/rose');
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
    <section className="search">
        <div className="search-container">
        <h1 className="search-title">{oneData.winery}</h1>
        <h2 className="search-info">{oneData.wine}</h2>
        <p className="search-location">{oneData.location}</p>
       </div>
        <div className="wine-img__box">
        <img src={oneData.image} className="search-img" alt="red-wine"/>

      <button className="search-button" onClick={handleClick}>Wine Generator</button>
    </div>
    </section>

  );
}
  
  // state = {
  //   items: [],
  //   currentItem: null,
  //   index: 0
  // };


// componentDidMount() {
//   axios.get('http://localhost:8080/wines/rose')
//   .then(response => {
//     console.log(response)
//     return response
    
//       // console.log(response);
    
//   })
//   .then(response => {
//  return ({ items: response.data.id, currentItem: response.data.id[0], index: 0 });
//   })
//   .catch(error => {
//     console.log(error);
//   });
// }

// handleNext = () => {
//     const { index, data } = this.state;
//     const nextQuestion = index + 1;

//     this.setState({ currentItem: data[nextQuestion], index: nextQuestion });
// }

//     render() { 
//       const { currentItem } = this.state;
//        return (
//         <div>
//           <button className="btn" onClick={this.handleNext}>Next</button>
//           <ul>
//           <li ></li>
//           </ul>
//           </div>
//        )
//     }

// }
  // const [data, setData] = useState(null);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);
  // useEffect(() => {
  // getData()
  // }, []);
  
  // async function getData() {
  //   await axios('http://localhost:8080/wines/port')
  //   .then((response) => {
  //   setData(response.data);
  //   console.log(response.data)
  //   })
  //   .catch((error) => {
  //   console.error("Error fetching data: ", error);
  //   setError(error);
  //   })
  //   .finally(() => {
  //   setLoading(false);
  //   });
  //   }
  //   if (loading) return "Loading...";
  //   if (error) return "Error!";
  //   return (
  //   <>
  //   <img src={data.results} alt="random user" />
  //   <pre>{data, null, 2}</pre>
  //   </>
  //   );}


// export default function SearchPage(slides) {
//   const [current, setCurrent] = useState(0);
//   const length = slides.length;
//   console.log("length:", length);

//   const nextSlide = () => {
//   setCurrent(current === length -1 ? 0 : current + 1);
//   };

//   const prevSlide = () => {
//     setCurrent(current === 0 ? length -1 : current -1);
//   };
//   console.log('currentPrev', current);


//   const [APIData, setAPIData] = useState([])
//     useEffect(() => {
//         axios.get('http://localhost:8080/wines/whites')
//             .then((response) => {
//                 setAPIData(response.data);
//             })
//     }, [])

//     return (
//       <section className="search">
//         <div className="search-box">
//         </div>
//         {APIData.map((data, index) => {
//               return (
//                 <div
//                   key={index}
//                   className={index === current ? "search active" : "search"}
//                 >
//                   {index === current && (
//                     <div>
//                     <div className="search-title">{data.wine}</div>
//                     <div className="search-area">{data.winery}</div>
//                     {/* <img className="search-image" src={data.winery} alt="current-wine"/> */}
//                     <button className="search-left" onClick={prevSlide}>Left</button>
//                     <button className="search-right" onClick={nextSlide}>Right</button>
//                     </div>
                    
//                   )}
                         
//                 </div>
//               );
//             })}
//           </section>
//         )
//       }

    

