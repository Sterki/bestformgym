import React from "react";
import "./Footer.css";
import NaviFooter from "./NaviFooter";
import { Facebook, Instagram } from "@material-ui/icons";
import CopyrightIcon from "@material-ui/icons/Copyright";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__title">
        <h1 className="footer__blue">Best</h1>
        <h1 className="footer__orange">Form</h1>
        <h1 className="footer__blue">Gym</h1>
      </div>

      <div className="footer__navifooter">
        <NaviFooter />
      </div>
      <div className="footer__daten">
        <p>Datenschutzerklärung</p>
        <p>Agbs</p>
        <p>Impresum</p>
      </div>
      <div className="footer__social">
        <p>Folgen Sie Uns</p>
        <div className="footer__socialIcons">
          <Facebook />
          <Instagram />
        </div>
      </div>
      <div className="footer__copyright">
        <span>
          BestFormGym &copy;, All rights reserved, created by Alex Rodriguez
        </span>
      </div>
      {/* icons social media */}
      {/* copyright */}
    </div>
  );
}

export default Footer;
