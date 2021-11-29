import "./Footer.scss";
import { SocialIcon } from "react-social-icons";
import logo from '../../assets/logo/logo3.png';
export default function Footer() {

    return (
        <section className="footer">
            <div className="footer-main">
      <div className="footer-social">
           <SocialIcon className ="footer-social__icon" url="https://www.instagram.com/" bgColor="rgba(0,0,0,0)"
              fgColor="#FFF"/>
           <SocialIcon className="footer-social__icon"  url="https://www.facebook.com/" bgColor="rgba(0,0,0,0)"
              fgColor="#FFF"/>
           <SocialIcon className="footer-social__icon"  url="https://twitter.com/" bgColor="rgba(0,0,0,0)"
              fgColor="#FFF"/>
        </div>
        </div>
        <div className="nav">
            <div className="nav--wrapper">
                <ul className="nav-list">
                    <li className="nav-list__item">Chantelle Mckenzie</li>
                    <li className="nav-list__item">Che Vino CEO</li>
                </ul>
                <ul className="nav-list">
                    <li className="nav-list__item">1234 Main Street</li>
                    <li className="nav-list__item">Vancouver, BC</li>
                </ul>
                <ul className="nav-list">
                    <li className="nav-list__item">info@chevino.com</li>
                </ul>
        </div>
        </div>
        <section className="logo">
            <figure className="logo-container">
                <img src={logo} className="logo-container__image" alt="che-vino-logo"  />
                <p className="logo-container__text">Copyright Che Vino © 2021 All Rights Reserved</p>
            </figure>
        </section>
      

    
        </section>
    );
};
