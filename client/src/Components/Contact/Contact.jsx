import React, { useState, useEffect } from "react";
import "./Contact.scss";
import axios from "axios";
import Title from "../Title/Title";

export default function Contact() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/wines/contact").then((response) => {
      console.log(response);
      setComments(response.data);
    });
  }, []);

  return (
    <div className="wine">
      <div className="container">
      <div className="col-lg-7 mx-auto ">
          <Title title="Recent Comments" />
        </div>
     
      </div>
      <div className="media align-items-lg-center flex-column" key={comments.id}>
        {comments.map((comment, index) => (
          <div>
            <h4 className="contact-name pb-2" key={index}>
              {comment.name}
            </h4>
            <p className="contact-review contact-input">{comment.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
