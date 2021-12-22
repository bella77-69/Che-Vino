import React from "react";
import "./Comments.scss";

export default function Comments ({comments}) {
  const commentsArray = comments.comments;
  const newDate = new Date (comments.timestamp);
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
  <div className="hero-box">
    <h2 className="hero-heading">Reviews:</h2>
   <h2 className="hero-review">{comments.review}</h2>
   </div>
      <div className="hero-comments">
          {commentsArray?.map((data)=>(
            
            <div className="hero-card">
       <h3 className="hero-name">{data.name}</h3>
       {/* <p className="hero-date">{newDate.toDateString()}</p>    */}
        <p className="hero-posting">{data.comment}</p>
         
            </div> 
        
          )
          )

}
</div>
      </div>
</section>
    )
    }

