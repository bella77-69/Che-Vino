import "./Footer.scss";
import { SocialIcon } from "react-social-icons";
import logo from '../../assets/logo/logo5.png';
export default function Footer() {

    return (
        <section className="footer">
            <div className="footer-main">
            <div className="footer-social">
           <SocialIcon className ="footer-social--icon" url="https://www.instagram.com/" bgColor="rgba(0,0,0,0)"
              fgColor="#f5e3d9"/>
           <SocialIcon className="footer-social--icon"  url="https://www.facebook.com/" bgColor="rgba(0,0,0,0)"
              fgColor="#f5e3d9"/>
           <SocialIcon className="footer-social--icon"  url="https://twitter.com/" bgColor="rgba(0,0,0,0)"
              fgColor="#f5e3d9"/>
        </div>
        <div className="footer-nav">
            <div className="footer-nav--wrapper">
                <ul className="footer-list">
                    <li className="footer-item">Chantelle Mckenzie</li>
                    <li className="footer-item">Che Vino CEO</li>
                </ul>
                <ul className="footer-list">
                    <li className="footer-item">1234 Main Street</li>
                    <li className="footer-item">Vancouver, BC</li>
                </ul>
                <ul className="footer-list">
                    <li className="footer-item">info@chevino.com</li>
                </ul>
        </div>
        </div>
        
        <div className="footer-logo">
        
      
        <figure className="footer-container">
                <img src={logo} className="footer-image" alt="che-vino-logo"  />
            </figure>
        </div>
        </div>

    
        </section>
    );
};