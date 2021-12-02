import React from "react";
import "./Comments.scss";

export default function Comments (props) {

  return (
    <section className="hero">
    <div className="hero-wrapper">
  <video
    className="hero-img"
    poster={props.comments.image}
    alt="wine"
  ></video>
  </div>
    <div className="hero-card">
      <h2 className="hero-title">{props.comments.wine}</h2>
    
        <div className="hero-card__left">
          <h2 className="hero-rating">{props.comments.rating}</h2>
          <p className="hero-style">{props.comments.style}</p>
       </div>
        <div className="hero-card__right">
        <p className="hero-price">{props.comments.price}</p>
        <h2 className="hero-review">{props.comments.review}</h2>
      </div>
      </div>
</section>
  );
};

