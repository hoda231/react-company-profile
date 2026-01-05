import React from "react";
import { FaFacebookF } from "react-icons/fa";
import "../styles/Footer.css";
import { FaYoutube } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer class="footer">
    <div class="container">
      <div class="row">
      <div class="footer-col">
        <h4>get help</h4>

             <ul>

             <li><a href="#">FAQ</a></li>
       <li><a href="#">our view</a></li>
       <li><a href="#">contact</a></li>
       <li><a href="#"> status</a></li>
       <li><a href="#">payment options</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>company</h4>
      <ul>
        <li><a href="#">call us</a></li>
      
      
      </ul>
    </div>
    <div class="footer-col">
      <h4>follow us</h4>
      <div class="social-links">
       <a> <FaFacebookF  className="bag-icon" /></a>
          <a ><FaYoutube /></a>
          <a href="#"><FaInstagram /></a>
      </div>
      </div>
      </div>
    </div>
  </footer>
  );
}

export default Footer;
