import React from "react";
import "./Comments.scss";

export default function Comments (props) {

  return (
    <section className="hero">
    <div className="hero-wrapper">
    <h2 className="hero-title">{props.comments.wine}</h2>
    <p className="hero-style">Style:   {props.comments.style}</p>
    <p className="hero-rating">Rating:  {props.comments.rating}</p>
   
    <p className="hero-price">{props.comments.price}</p>
  <video
    className="hero-img"
    poster={props.comments.image}
    alt="wine"
  ></video>
  </div>
    <div className="hero-card">Wine Review:
        <h2 className="hero-review">{props.comments.review}</h2>
      </div>
</section>
  );
};

