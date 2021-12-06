import React from "react";
import "./Comments.scss";

export default function Comments ({comments}) {

  return (
    <section className="hero" key={comments.id}>
    <div className="hero-wrapper">
    <h2 className="hero-title">{comments.wine}</h2>
    <p className="hero-style">Style:   {comments.style}</p>
    <p className="hero-rating">Rating:  {comments.rating}</p>
   
    <p className="hero-price">{comments.price}</p>
  <video
    className="hero-img"
    poster={comments.image}
    alt="wine"
  ></video>
  </div>
    <div className="hero-card">Wine Review:
        <h2 className="hero-review">{comments.review}</h2>
      </div>
</section>
  );
};

