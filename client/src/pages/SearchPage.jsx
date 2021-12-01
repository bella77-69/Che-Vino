import axios from "axios";
import React, { useState, useEffect } from "react";
import "./SearchPage.scss";

export default function SearchPage() {
  const [allReviews, setAllReviews] = useState([]);
  const [filterReviews, setFilterReview] = useState(allReviews);

  useEffect(() => {
    axios("http://localhost:8080/wines/review/")
      .then((response) => {
        console.log(response.data);
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
    console.log(value);
    result = allReviews.filter((data) => {
      return data.wine.search(value) !== -1;
    });

    setFilterReview(result);
  };
  return (
    <div className="search">
      <div className="search-card">
        <label>Search By Year:</label>
        <input type="text" onChange={(event) => handleSearch(event)} />
      </div>
      <div>
        {filterReviews.map((value, index) => {
          return (
            <ul key={value.id}>
              <li>
                {value.wine} | {value.price} | {value.style}
              </li>
            </ul>
          );
          
        })}
      </div>
    </div>
    
  );
 
}

// /   state = {/
//     post: [],
//     allPosts: []
// };

// componentDidMount() {
//     axios
//         .get("http://localhost:8080/wines/review", {
//         })
//         .then(({ data }) => {
//             this.setState({
//                 post: data,
//                 allPosts: data // array data from JSON stored in these
//             });
//         })
//         .catch((err) => {});
// }

// onKeyUp = (e) => {
//     // filter post list by title using onKeyUp function
//     const post = this.state.allPosts.filter((item) =>
//         item.id.rendered
//             .toLowerCase()
//             .includes(e.target.value.toLowerCase())
//     );
//     this.setState({ post });
// };

// render() {
//     return (
//         <div className="container">
//             <div className="search-outer">
//                 <form
//                     role="search"
//                     method="get"
//                     id="searchform"
//                     className="searchform"
//                     action=""
//                 >
//                     {/* input field activates onKeyUp function on state change */}
//                     <input
//                         type="search"
//                         onChange={this.onKeyUp}
//                         name="s"
//                         id=" "
//                         placeholder="Search"
//                     />
//                     <button type="submit" id="searchsubmit">
//                         <i className="fa fa-search" aria-hidden="true" />
//                     </button>
//                 </form>
//             </div>
//             <ul className="data-list">
//                 {/* post items mapped in a list linked to onKeyUp function */}
//                 {this.state.post.map((item, index) => (
//                     <li className={"block-" + index}>
//                         <a className="title" href={item.id}>
//                             <h3>{item.id.rendered}</h3>
//                             <img src={item.image}/>
//                         </a>
//                         <a className="link" href={item.wine}>
//                             Read more
//                         </a>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// }
// }

//   constructor() {
//     super();
//     this.state = {
//       items: [],
//       error: ""
//     }
//   }

// componentDidMount() {
// var items = this.state.items;
// axios.get('http://localhost:8080/wines/review')
//   .then(response => {
//      if (this.unmounted) return;
//      this.setState({items: response.data});
//       console.log(response);
//   },
//         (error) => {
//       let failedRequest = "Error: fetching API data was not successful";
//       this.setState({error: failedRequest});
//        console.log(error);
//    }
// )}

// componentWillUnmount() {
//  this.unmounted = true;
// }

// render() {
// var items = this.state.items;
// return(<div>
//      {items.map(item =>
//         <ul key={item.name}>
//           <img src ={item.image}/>
//             <li>{item.wine}</li>
//             <li>{item.style}</li>
//             <li>{item.review}</li>
//         </ul>
//       )}
//         <p id="error">{this.state.error}</p>
//       </div>
//       ) //return
//   } //render
// } //component

//////////////////////////////////

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
