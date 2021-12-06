import React from "react";
import "./Contact.scss";
import background from "../../assets/images/pour.png";

export default function Contact({ comment }) {
  return (
    <div className="contact">
      <div className="contact-box">
        <img
          className="contact-background"
          src={background}
          alt="wine-bottle"
        />
        <h1 className="contact-title">Recent Comments</h1>
      </div>
      <div className="contact-container" key={comment.id}>
        <h4 className="contact-name">{comment.name}</h4>
        <p className="contact-review">{comment.comment}</p>

        <h4 className="contact-name">Mike McKinnon</h4>
        <p className="contact-review">
          When it comes to wine, this can mean a few different things: learn
          more about wine, helping you chose better wine, record your tasting
          experiences, get a better deal/price for your plonk, find expert
          ratings, or pick the best vintage..
        </p>
        <p className="contact-time">posted 5 minute ago</p>

        <h4 className="contact-name">Suzan Karen</h4>
        <p className="contact-review">
          This is a complete app to manage your wine list, graphically display
          your cellar, to record both your tastings and pro ratings and to match
          dishes to your wines. The app is perfect for beginners who can use the
          main fields but it also caters for experts who can play with its
          infinite possibilities.
        </p>
        <p className="contact-time">posted 10 minute ago</p>

        <h4 className="contact-name">Jessie Lee</h4>
        <p className="contact-review">
          This is a critically-acclaimed free app that helps you get access to
          the world’s best wine. Keep track of your favorites and learn more
          about wine, Buy wines you love from your phone.
        </p>
        <p className="contact-time">posted 12 minute ago</p>
        <h4 className="contact-name">Kyle Smith</h4>
        <p className="contact-review">
          This app is a search engine for wine, containing price information of
          up to many million wine offers, and allowing to check for global
          availability of your favorite wine. You can use the label recognition
          to find the best place for buying.
        </p>
        <p className="contact-time">posted 1 day ago</p>
      </div>
    </div>
  );
}
