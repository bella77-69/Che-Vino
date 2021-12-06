import React from "react";
import "./Comments.scss";

export default function Comments (comments) {
console.log(comments)
  return (
    <section className="hero" key={comments.id}>
    <div className="hero-wrapper">
    <h2 className="hero-title">{comments.comments.wine}</h2>
    <p className="hero-style">Style:   {comments.comments.style}</p>
    <p className="hero-rating">Rating:  {comments.comments.rating}</p>
   
    <p className="hero-price">{comments.comments.price}</p>
  <video
    className="hero-img"
    poster={comments.comments.image}
    alt="wine"
  ></video>
  </div>
    <div className="hero-card">Wine Review:
        <h2 className="hero-review">{comments.comments.review}</h2>
        <h2 className="hero-comments">{comments.comments.name}</h2>
      </div>
</section>
  );
};

