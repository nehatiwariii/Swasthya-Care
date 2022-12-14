import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGoogle,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import FooterCol from "./FooterCol";
import "./Footer.css";

const noNamed = [{ name: "Emergency Care", link: "/" }];
const ourAddress = [
  { name: "Chattisgarh", link: "/" },
  { name: "Jharkhand", link: "/" },
];
const goodHealth = [{ name: "Check Up", link: "/" }];
const services = [{ name: "Treatment of Personal Diseases", link: "/" }];
const Footer = () => {
  return (
    <footer className="footer-area clear-both">
      <div className="container pt-5">
        <div className="row py-5">
          <FooterCol key={1} menuTitle={"."} menuItems={noNamed} />
          <FooterCol key={2} menuTitle="Services" menuItems={services} />
          <FooterCol key={3} menuTitle="Good Health" menuItems={goodHealth} />
          <FooterCol key={4} menuTitle="Our Address" menuItems={ourAddress}>
            <ul className="social-media list-inline">
              <li className="list-inline-item">
                <a href="//facebook.com">
                  <FontAwesomeIcon
                    className="icon active-icon"
                    icon={faFacebook}
                  />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="//google.com">
                  <FontAwesomeIcon className="icon" icon={faGoogle} />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="//instagram.com">
                  <FontAwesomeIcon className="icon" icon={faInstagram} />
                </a>
              </li>
            </ul>
            <div className="mt-5">
              <h6>Call now</h6>
              <button className="btn btn-primary">+8801688815749</button>
            </div>
          </FooterCol>
        </div>
        <div className="copyRight text-center">
          <p>Copyright {new Date().getFullYear()} All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
