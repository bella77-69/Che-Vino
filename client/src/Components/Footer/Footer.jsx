import React from "react";
import "./footer.scss";
import logo from "../../assets/logo/che.png";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
  FaMapMarker,
  FaPhone,
  FaMailBulk,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-header">
        <img src={logo} className="footer-img" alt="footer-logo-pic" />
        <section className="footer-section">
          <span className="footer-span">
            <i className="footer-icon">
              <FaMapMarker />
            </i>
          </span>
          <span>1234 Main Street, Vancouver, BC</span>
        </section>
        <section className="footer-section">
          <span className="footer-span">
            <i className="footer-icon">
              <FaPhone />
            </i>
          </span>
          <span>(604) 123 4567</span>
        </section>
        <section className="footer-section">
          <span className="footer-span">
            <i className="footer-icon">
              <FaMailBulk />
            </i>
          </span>
          <span>chevino@gmail.com</span>
        </section>
      </div>
      <span className="footer-border"></span>
      <div>
        <section className="footer-bottom">
          <a href="https://www.facebook.com/" className="footer-social">
            <FaFacebookSquare />
          </a>
          <a href="http://www.instagram.com/" className="footer-social">
            <FaInstagramSquare />
          </a>
          <a href="https://wwww.twitter.com" className="footer-social">
            <FaTwitterSquare />
          </a>
        </section>
      </div>
      <div className="footer-copyright">
        Copyright © 2021 Che Vino. - All rights reserved
      </div>
    </footer>
  );
}
export default Footer;
