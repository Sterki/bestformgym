import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./NaviFooter.css";

function NaviFooter() {
  return (
    <div className="navifooter">
      <NavLink to="/" exact className="navifooter__link">
        Home
      </NavLink>
      <NavLink to="/uber" className="navifooter__link" activeClassName="active">
        Uber uns
      </NavLink>
      <NavLink
        to="/erfolgsgeschichten"
        className="navifooter__link"
        activeClassName="active"
      >
        Erfolgsgeschichten
      </NavLink>
      <NavLink
        to="/service"
        className="navifooter__link"
        activeClassName="active"
      >
        Service
      </NavLink>
      <NavLink
        to="/trainingszeiten"
        className="navifooter__link"
        activeClassName="active"
      >
        Trainingszeiten
      </NavLink>
      <NavLink
        to="/kontakt"
        className="navifooter__link"
        activeClassName="active"
      >
        Kontakt
      </NavLink>
    </div>
  );
}

export default NaviFooter;
