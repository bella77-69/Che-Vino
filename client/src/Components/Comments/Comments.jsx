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
</section>
  )
}
