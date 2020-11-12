import React from "react";
import BannerPrincipal from "./BannerPrincipal";
import "./Training.css";

function Training() {
  return (
    <div className="training">
      <BannerPrincipal title=" Kalender / Terminbuchung" subtitle="" />
      <div className="training__container">
        <div className="training__login">
          <iframe src="https://optioffice.eu/optioffice/login/app.php?s=1009&c=303161843"></iframe>
        </div>
        <div className="training__content">
          <iframe src="https://optioffice.eu/optioffice/login/homepagemodul.php?s=1009&c=303161843&color=fa6e05&background=1d5efc"></iframe>
        </div>
      </div>
    </div>
  );
}

export default Training;
