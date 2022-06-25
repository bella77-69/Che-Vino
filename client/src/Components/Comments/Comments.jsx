import React from "react";
import "./Comments.scss";
import Title from '../Title/Title'


export default function Comments({ comments }) {
  const commentsArray = comments.comments;
  const newDate = new Date(comments.timestamp);
  
  return (
    <section className="heros">
       <div className="text-center">
      <Title title="Wine Reviews"></Title>
      </div>
    <div className="container" key={comments.id}>
      <div className="heros-wrapper">
        <h2 className="heros-title">{comments.wine}</h2>
        <p className="heros-style">Style: {comments.style}</p>
        <p className="heros-rating">Rating: {comments.rating}</p>

        <p className="heros-price">Price: {comments.price}</p>
        <video className="heros-img" poster={comments.image} alt="wine"></video>
        <div className="heros-box">
          <h2 className="heros-heading">Reviews:</h2>
          <h2 className="heros-review">{comments.review}</h2>
        </div>
        <div className="heros-comments">
          {commentsArray?.map((data) => (
            <div className="heros-card">
              <h3 className="heros-name">{data.name}</h3>
              {/* <p className="heros-date">{newDate.toDateString()}</p>    */}
              <p className="heros-posting">{data.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    </section>
  );
}
