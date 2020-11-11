import React from "react";
import "./Navi.css";
import { NavLink } from "react-router-dom";

function Navi() {
  return (
    <nav className="navi">
      <NavLink to="/" className="navi__link" exact activeClassName="active">
        Home
      </NavLink>
      <NavLink to="/uber" className="navi__link" activeClassName="active">
        Über uns
      </NavLink>
      <NavLink
        to="/erfolgsgeschichten"
        className="navi__link"
        activeClassName="active"
      >
        Erfolgsgeschichten
      </NavLink>
      <NavLink to="/service" className="navi__link" activeClassName="active">
        Service
      </NavLink>
      <NavLink
        to="/trainingszeiten"
        className="navi__link"
        activeClassName="active"
      >
        Trainingszeiten
      </NavLink>
      <NavLink to="/kontakt" className="navi__link" activeClassName="active">
        Kontakt
      </NavLink>
    </nav>
  );
}

export default Navi;
