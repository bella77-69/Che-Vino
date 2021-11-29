import React, { useState } from "react";
import './ContactPage.scss';



export default function ContactPage() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const email =event.target.email;
    const value = event.target.value;

    setInputs(values => ({...values, [name]: value, [email]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  }

  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="form-container">
  
      <input className="form-input"
        type="text" 
        name="username"
        placeholder="Enter your name." 
        value={inputs.username || ""} 
        onChange={handleChange}
      />

        <input className="form-input"
          type="text" 
          name="email"
          placeholder="Enter your email" 
          value={inputs.email || ""} 
          onChange={handleChange}
        />
   
        <input className="form-input form-comment"
          type="text" 
          name="comment"
          placeholder="Comments...." 
          value={inputs.comment || ""} 
          onChange={handleChange}
        />
    
        <button className="form-button"onSubmit={handleChange}>Submit</button>
       </div>
    </form>
  )
}





 


//   render() {


//     return (
//       <form className="contact" onSubmit={this.validateForm} onChange={this.handleChange}>
//         <div className="contact-container">
//           <input clas="form-input" name="name" placeholder="Name" value={this.state.name} onChange={this.handleChange}/>
//           {/* <input className="form-input" name="lastName" placeholder="Last Name" value={this.state.lastName} onChange={this.handleInputChange} /> */}
//           <input className="form-input" name="email" placeholder="Email" value={this.state.email} onChange={this.handleChange}/>
         
//         </div>
// <button className="contact-btn" value="submit" onClick={this.handleSumbit}>Submit</button>
//       </form>
//       // <div className="ContactView">
//       //   <h1 className="ContactView-title">Contacts</h1>
//       //   <ul className="ContactView-list">
//       //     {/* {contacts.map(contact => <Contact key={contact.name} {...contact} />)} */}
//       //   </ul>
//       //   <form className="ContactForm">
//       //     <input onChange={this.handleChange} name="name" type="text" value={name} placeholder="Name (required)" />
//       //     <input onChange={this.handleChange} name="email" type="email" value={email} placeholder="Email (required)" />
//       //     <textarea onChange={this.handleChange} name="description" value={description} placeholder="Enter a description" />
//       //     <button type="button" onClick={this.handleSubmit}>Add Contact</button>
//       //   </form>
//       // </div>
//     );
//   }
// }
  // state={
  //   id: " ",
  //   wine: " ",
  //   winery: " ",
  //   location: "",
  //   rating: " ",
  //     average: " ",
  //     reviews: " ",
  //   };
  
  //   componentDidMount() {
  //     this.getItem(this.props.match.params.id);
  //   }

  //   getItem = (id) => {
  //     axios
  //       .get(`http://localhost:8080/wines/rose/${id}`)
  //       .then((response) =>
  //         this.setState({
  //           id: response.data.id,
  //           wines: response.data.wine,
  //           winery: response.data.winery,
  //           location: response.data.location,
  //           rating: response.data.rating,
  //           reviews: response.data.reviews,
  //           average: response.data.average,
  //         })
  //       )
  //       .catch((err) => console.error(err));
  //   };

  
      
 
      
  //   render() {
  //     const { wines, winery, location, rating, reviews, average} = this.state;
  //     return (
  //       <div className="contact">
  //       <div className="contact-container">
  //       <div className="item-details__container">
  //         <div className="item-details__description-category-container">
  //           <label className="item-details__label">Item description:</label>
  //           <p className="item-details__info">{wines}</p>
  //           <label className="item-details__label">Category:</label>
  //           <p className="item-details__info">{winery}</p>
  //         </div>
  //     </div>
  //       </div>
  //       </div>
  //     )
  //   }
  // }
  

