import React from "react";
import { Link } from "react-router-dom";
import "./Modal.scss";
import close from "../../assets/icon/close.png"
import red from "../../assets/images/red.png";
import white from "../../assets/images/white.png";
import rose from "../../assets/images/rose.png";
import sparkling from "../../assets/images/sparkling.png";
import port from "../../assets/images/port.png";
import dessert from "../../assets/images/dessert.png";

export default class Modal extends React.Component {
  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <div className="modal">
        <div className="modal-container">
         <img className="modal-close" src={close} alt="close-btn" onClick={this.props.onClose}/>
            {/* <p className="modal-description">Search for Red Wines</p> */}
          <Link to="/wines/reds" className="card-link">
             <h2 className="modal-title">Red Wines</h2>
          <img className="modal-img" src={red} alt="wine-img"/>
          {/* <button className="modal-button">Red Wine</button> */}
          </Link>
          <div className="modal-content">{this.props.children}</div>
          {/* <button className="modal-button__close"onClick={this.props.onClose}>Exit</button> */}
        </div>
        <div className="modal-container">
          <div className="modal-body">
          
            {/* <p className="modal-description">Search for White Wines</p> */}
          </div>
          <Link to="/wines/whites" className="card-link">
          <h2 className="modal-title">White Wines</h2>
            <img className="modal-img" src={white} alt="wine-img"/>
          {/* <button className="modal-button">White Wine</button> */}
          </Link>
          <div className="modal-content">{this.props.children}</div>
          {/* <button onClick={this.props.onClose}>Exit</button> */}
        </div>
        <div className="modal-container">
          <div className="modal-body">
         
            {/* <p className="modal-description">Search for Sparkling Wines</p> */}
          </div>
          <Link to="/wines/sparkling" className="card-link">
          <h2 className="modal-title">Sparkling Wines</h2>
            <img className="modal-img" src={sparkling} alt="wine-img"/>
          {/* <button className="modal-button">Sparkling Wine</button> */}
          </Link>
          <div className="modal-content">{this.props.children}</div>
          {/* <button onClick={this.props.onClose}>Exit</button> */}
        </div>
        <div className="modal-container">
          <div className="modal-body">
     
            {/* <p className="modal-description">Search for Port Wines</p> */}
          </div>
          <Link to="/wines/port" className="card-link">
          <h2 className="modal-title">Port Wines</h2>
            <img className="modal-img" src={port} alt="wine-img"/>
          {/* <button className="modal-button">Port Wine</button> */}
          </Link>
          <div className="modal-content">{this.props.children}</div>
          {/* <button onClick={this.props.onClose}>Exit</button> */}
        </div>

        <div className="modal-container">
          <div className="modal-body">
          
            {/* <p className="modal-description">Search for Rose Wines</p> */}
          </div>
          <Link to="/wines/rose" className="card-link">
          <h2 className="modal-title">Rose Wines</h2>
            <img className="modal-img" src={rose} alt="wine-img"/>
          {/* <button className="modal-button">Rose Wine</button> */}
          </Link>
          <div className="modal-content">{this.props.children}</div>
          {/* <button onClick={this.props.onClose}>Exit</button> */}
        </div>
        <div className="modal-container">
          <div className="modal-body">
         
            {/* <p className="modal-description">Search for Dessert Wines</p> */}
          </div>
          <Link to="/wines/dessert" className="card-link">
          <h2 className="modal-title">Dessert Wines</h2>
            <img className="modal-img" src={dessert} alt="wine-img"/>
          {/* <button className="modal-button">Dessert Wine</button> */}
          </Link>
          <div className="modal-content">{this.props.children}</div>
          {/* <button onClick={this.props.onClose}>Exit</button> */}
        </div>
       </div>
    );
  
  }
}
