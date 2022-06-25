import React, { useEffect, useState } from "react";
import "./winePages.scss";
import Title from "../Components/Title/Title";

export default function DessertWinePage() {
  const [data, setData] = useState([]);
  const [oneData, fetchOneWine] = useState("");

  useEffect(() => {
    const fetchWine = async () => {
      try {
        const getWine = await fetch("http://localhost:8080/wines/dessert");
        const data = await getWine.json();

        setData(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchWine();
  }, []);

  const handleClick = (event) => {
    event.preventDefault();
    const random = data[Math.floor(Math.random() * data.length)];
    fetchOneWine(random);
  };

  return (
    <section className="wine">
      <div className="d-flex justify-content-center container">
        <div className="card p-3 text-white">
          <Title title="Dessert Wine"></Title>

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

//  {/* <div className="container mt-5 mb-5">
//       <Title title="Contact Che Vino"></Title>
//       <div className="card col-12 col-lg-4 login-card mt-2 hv-center ">
//         <form onSubmit={this.handleSubmit} className="container-form">

//           <div className="form-group text-left mt-4">
//             {/* <h1 className="form-group title">Contact Che Vino</h1> */}
//             <p className="form-group text-left">
//               For Inquiries, Support Requests or General Questions
//             </p>

//      <div className="form-group text-left mt-4">
//           <label htmlFor="exampleInputEmail1">Email address</label>
//           <input
//             type="text"
//             className="form-control"
//             id="name"
//             placeholder="Enter Name"
//             value={this.name}
//             onChange={this.handleNameChange}
//           />
//           <small id="emailHelp" className="form-text text-muted">
//             We'll never share your email with anyone else.
//           </small>
//         </div>

//             <div className="form-group text-left">
//               <input
//                 className="form-control"
//                 type="text"
//                 name="email"
//                 placeholder="Enter your email"
//                 value={this.email}
//                 onChange={this.handleEmailChange}
//               />
//             </div>
//             <div className="form-group text-left">
//               <input
//                 className="form-control"
//                 type="text"
//                 name="comment"
//                 placeholder="Comments...."
//                 value={this.comment}
//                 onChange={this.handleCommentChange}
//               />
//             </div>
//             <button className="btn mb-4 border-dark ">Submit</button>
//           </div>
//         </form>

//         <div>
//           <Contact comment={this.state.comment} />
//         </div>
//       </div>
//     </div> */}
