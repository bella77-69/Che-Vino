import React from "react";
import './WelcomePage.scss';
import { Link } from "react-router-dom";
import red from "../assets/images/red.jfif";
import white from "../assets/images/white.jfif";
import port from "../assets/images/port.jpg";
import dessert from "../assets/images/dessert.jpg";
import rose from "../assets/images/rose.jpg";
import sparkling from "../assets/images/sparkling.jpg";

export default function WelcomePage () {

        return (
           
            <section className="card"> 
             <Link to="/wines/reds">        
            <div className="card-wrapper">
                <div className="card-body">
                    <img className="card-img" src={red} alt="red-wine" />
                    <h2 className="card-title">Red Wines
                    </h2>
                    <p className="card-description">a description</p>
                </div>
               
                <button className="card-button">View Wines</button> 
            </div>
            </Link >
            <div className="card-wrapper">
                <div className="card-body">
                    <img className="card-img" src={white} alt="white-wine" />
                    <h2 className="card-title">White Wines
                    </h2>
                    <p className="card-description">a description</p>
                </div>
                <Link to="wines/whites">
                <button className="card-button">View Wines</button></Link>
            </div>
            <div className="card-wrapper">
                <div className="card-body">
                    <img className="card-img" src={sparkling} alt="sparkling-wine"/>
                    <h2 className="card-title">Sparkling Wines
                    </h2>
                    <p className="card-description">a description</p>
                </div>
                <Link to="/wines/sparkling">
                <button className="card-button">View Wines</button></Link >
            </div>
            <div className="card-wrapper">
                <div className="card-body">
                    <img className="card-img" src={port} alt="port-wine" />
                    <h2 className="card-title">Port Wines
                    </h2>
                    <p className="card-description">a description</p>
                </div>
                <Link to="/wines/port" >
                <button className="card-button">View Wines</button></Link >
            </div>
            <div className="card-wrapper">
                <div className="card-body">
                    <img className="card-img" src={rose} alt="rose-wine" />
                    <h2 className="card-title">Rose Wines
                    </h2>
                    <p className="card-description">a description</p>
                </div>
                <Link to="/wines/rose" >
                <button className="card-button">View Wines</button></Link >
            </div>
            <div className="card-wrapper">
                <div className="card-body">
                    <img className="card-img" src={dessert} alt="dessert-wine" />
                    <h2 className="card-title">Dessert Wines
                    </h2>
                    <p className="card-description">a description</p>
                </div>
                <Link to="/wines/dessert">
                <button className="card-button">View Wines</button></Link >
            </div>
            </section>   
            
        )
    }
