// import { Component } from "react";
// import WinePage from "WinePage";

// import React from "react";


// class WelcomePage extends Component {

// constructor() {
//     super();
//     this.state = {
//         wine: "",
//     };
// };

//     getRandomImage =() => {
//         axios
//         .get("https://api.sampleapis.com/wines/reds")
//         .then(response => {
//           this.setState({
//             wine: response.data
//           });
//         })
//         .catch(err => {
//           console.log("error fetching image:", err);
//         })
//     }
  
//     componentDidMount() {
//       this.getRandomImage();
//     }

//     render () {
//         const { wine } = this.state;
//         return (
//             <section className="main">
//                 <div className="main-box">
//                         <img src={wine} alt="random-wine" className="wine-img"/>
//                         <p className="main-box__title"></p>
                  
//                 </div>
//             </section>
//         )
//     }
//     }
    
//     export default WinePage;