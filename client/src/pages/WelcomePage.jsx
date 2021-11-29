import React from "react";
import "./WelcomePage.scss";
import { Link } from "react-router-dom";

export default function WelcomePage() {
  return (
      <section className="main">
          <div className="main-container">
          <div className="main-title">Buying wine can be overwhelming, due to the variety of wines on the shelves.  
              The Che Vino helps take the guess work out of making that decision.  
              Chi Vino determines a bottle of wine at random.  You have the choice of the different types of wine avaiable, such as Red, White, Dessert, Port, Rose, or Sparkling Wine.
              Enjoy, and remember to drink responsible!
           </div>
          </div>
     

    <section className="card">
      <div className="card-wrapper">
        <Link to="/wines/reds" className="card-link">
          <div className="card-body">
            <h2 className="card-title">Red Wines</h2>
            <p className="card-description">Search for Red Wines</p>
          </div>

          <button className="card-button">View Wines</button>
        </Link>
      </div>
      <div className="card-wrapper">
        <Link to="wines/whites" className="card-link">
          <div className="card-body">
            <h2 className="card-title">White Wines</h2>
            <p className="card-description">Search for White Wines</p>
          </div>

          <button className="card-button">View Wines</button>
        </Link>
      </div>
      <div className="card-wrapper">
        <div className="card-body">
          <h2 className="card-title">Sparkling Wines</h2>
          <p className="card-description">Search for Sparkling Wines</p>
        </div>
        <Link to="/wines/sparkling" className="card-link">
          <button className="card-button">View Wines</button>
        </Link>
      </div>
      <div className="card-wrapper">
        <div className="card-body">
          <h2 className="card-title">Port Wines</h2>
          <p className="card-description">Search for Port Wines</p>
        </div>
        <Link to="/wines/port" className="card-link">
          <button className="card-button">View Wines</button>
        </Link>
      </div>
      <div className="card-wrapper">
        <div className="card-body">
          <h2 className="card-title">Rose Wines</h2>
          <p className="card-description">Search for Rose Wines</p>
        </div>
        <Link to="/wines/rose" className="card-link">
          <button className="card-button">View Wines</button>
        </Link>
      </div>
      <div className="card-wrapper">
        <div className="card-body">
          <h2 className="card-title">Dessert Wines</h2>
          <p className="card-description">Search for Dessert Wines</p>
        </div>
        <Link to="/wines/dessert" className="card-link">
          <button className="card-button">View Wines</button>
        </Link>
      </div>
    </section>
    </section>
  );
}
