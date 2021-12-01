import React from "react";
import { Link } from "react-router-dom";
import "./Modal.scss";

//remove exit buttons on all except one!!!


export default class Modal extends React.Component {
  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <div className="modal">
        <div className="modal-container">
          <div className="modal-body">
            <h2 className="modal-title">Red Wines</h2>
            <img className="modal-img" src={this.props.image} alt="wine-img"/>
            <p className="modal-description">Search for Red Wines</p>
          </div>
          <Link to="/wines/reds" className="card-link">
          <button className="modal-button">Red Wine</button>
          </Link>
          <div className="modal-content">{this.props.children}</div>
          <button className="modal-button__close"onClick={this.props.onClose}>Exit</button>
        </div>
        <div className="modal-container">
          <div className="modal-body">
            <h2 className="modal-title">White Wines</h2>
            <p className="modal-description">Search for White Wines</p>
          </div>
          <Link to="/wines/whites" className="card-link">
          <button className="modal-button">White Wine</button>
          </Link>
          <div className="modal-content">{this.props.children}</div>
          <button onClick={this.props.onClose}>Exit</button>
        </div>
        <div className="modal-container">
          <div className="modal-body">
            <h2 className="modal-title">Sparkling Wines</h2>
            <p className="modal-description">Search for Sparkling Wines</p>
          </div>
          <Link to="/wines/sparkling" className="card-link">
          <button className="modal-button">Sparkling Wine</button>
          </Link>
          <div className="modal-content">{this.props.children}</div>
          <button onClick={this.props.onClose}>Exit</button>
        </div>
        <div className="modal-container">
          <div className="modal-body">
            <h2 className="modal-title">Port Wines</h2>
            <p className="modal-description">Search for Port Wines</p>
          </div>
          <Link to="/wines/port" className="card-link">
          <button className="modal-button">Port Wine</button>
          </Link>
          <div className="modal-content">{this.props.children}</div>
          <button onClick={this.props.onClose}>Exit</button>
        </div>

        <div className="modal-container">
          <div className="modal-body">
            <h2 className="modal-title">Rose Wines</h2>
            <p className="modal-description">Search for Rose Wines</p>
          </div>
          <Link to="/wines/rose" className="card-link">
          <button className="modal-button">Rose Wine</button>
          </Link>
          <div className="modal-content">{this.props.children}</div>
          <button onClick={this.props.onClose}>Exit</button>
        </div>
        <div className="modal-container">
          <div className="modal-body">
            <h2 className="modal-title">Dessert Wines</h2>
            <p className="modal-description">Search for Dessert Wines</p>
          </div>
          <Link to="/wines/dessert" className="card-link">
          <button className="modal-button">Dessert Wine</button>
          </Link>
          <div className="modal-content">{this.props.children}</div>
          <button onClick={this.props.onClose}>Exit</button>
        </div>
       </div>
    );
  
  }
}
