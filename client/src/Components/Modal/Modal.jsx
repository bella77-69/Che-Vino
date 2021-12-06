import React from "react";
import { Link } from "react-router-dom";
import "./Modal.scss";
import close from "../../assets/icon/close.png";
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
        <div className="modal--wrapper">
          <img
            className="modal-close"
            src={close}
            alt="close-btn"
            onClick={this.props.onClose}
          />
        </div>
        <div className="modal-container">
          <Link to="/wines/reds" className="modal-link">
            <h2 className="modal-title">Red Wines</h2>
            <img className="modal-img" src={red} alt="wine-img" />
          </Link>
          <div className="modal-content">{this.props.children}</div>
        </div>
        <div className="modal-container">
          <div className="modal-body"></div>
          <Link to="/wines/whites" className="modal-link">
            <h2 className="modal-title">White Wines</h2>
            <img className="modal-img" src={white} alt="wine-img" />
          </Link>
          <div className="modal-content">{this.props.children}</div>
        </div>
        <div className="modal-container">
          <div className="modal-body"></div>
          <Link to="/wines/sparkling" className="modal-link">
            <h2 className="modal-title">Sparkling Wines</h2>
            <img className="modal-img" src={sparkling} alt="wine-img" />
          </Link>
          <div className="modal-content">{this.props.children}</div>
        </div>
        <div className="modal-container">
          <div className="modal-body"></div>
          <Link to="/wines/port" className="modal-link">
            <h2 className="modal-title">Port Wines</h2>
            <img className="modal-img" src={port} alt="wine-img" />
          </Link>
          <div className="modal-content">{this.props.children}</div>
        </div>

        <div className="modal-container">
          <div className="modal-body"></div>
          <Link to="/wines/rose" className="modal-link">
            <h2 className="modal-title">Rose Wines</h2>
            <img className="modal-img" src={rose} alt="wine-img" />
          </Link>
          <div className="modal-content">{this.props.children}</div>
        </div>
        <div className="modal-container">
          <div className="modal-body"></div>
          <Link to="/wines/dessert" className="modal-link">
            <h2 className="modal-title">Dessert Wines</h2>
            <img className="modal-img" src={dessert} alt="wine-img" />
          </Link>
          <div className="modal-content">{this.props.children}</div>
        </div>
      </div>
    );
  }
}
