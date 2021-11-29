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

  

