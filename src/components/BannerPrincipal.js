import React from "react";
import "./About.css";

function BannerPrincipal({ title, subtitle }) {
  return (
    <div className="about__banner">
      <h1>{title}</h1>
      <h3>{subtitle}</h3>
    </div>
  );
}

export default BannerPrincipal;
