import React from "react"
import axios from "axios";


export default class WinePage extends React.Component {
    render () {
        return (
            <div>wine....</div>
        )
    }
}


// const wine = "https:localhost:8080/wines/red"
// class WinePage extends React.Component {

    
          
//     constructor() {
//         super();
//         this.state = {
//             wine: "",
//         };
//     };

//         // getRandomImage =() => {
//         //     axios
//         //     .then(response => {
//         //       this.setState({
//         //         wine: response.data
//         //       });
//         //     })
//         //     .catch(err => {
//         //       console.log("error fetching image:", err);
//         //     })
//         // }
      
//         // componentDidMount() {
//         //   this.getRandomImage();
//         // }

//         render () {
//             const { wine } = this.state;
   
// // function WinePage({wine}) {
//     return (
//         <section className="main">
//             <div className="main-box">
//                     <img src={wine} alt="random-wine" className="wine-img"/>
//                     <p className="main-box__title"></p>
              
//             </div>
//         </section>
//     )
// }
// }

// export default WinePage;

// // {(wine && wine.image) || defaultImage}