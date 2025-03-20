import React from "react";
import "../CSS/footer.css";
import Logo from "../assets/Logo.svg";
import { FaLinkedin,FaTwitter, FaDiscord  } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="social-handles">
          <img src={Logo} alt="Logo" className="logo" />
          <p>
            Want to build the future with us? <br />
            follow T²C and make an impact!
          </p>
          <div className="social-links">
            <a href="#"> <FaLinkedin color="#4f4f4f" size={30} /> </a>
            <a href="#"> <FaTwitter color="#4f4f4f" size={30} /> </a>
            <a href="#"> <FaDiscord  color="#4f4f4f" size={30} /> </a>
            <a href="#"> <FaDiscord  color="#4f4f4f" size={30} /> </a>
          </div>
        </div>
        <div className="footer-navs">
            <ul>
                <span>Product</span>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Why Choose</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            <ul>
                <span>Company</span>
                <li><a href="#">Vision</a></li>
                <li><a href="#">Mission</a></li>
                <li><a href="#">Values</a></li>
                <li><a href="#">Team</a></li>
            </ul>
        </div>
      </div>
      <div className="trademarks">
        <p>© 2024 TSquaredC  |  All Rights Reserved.</p>
        <p>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
