import React from "react";
import photo3 from "./../static/images/foto4.jpeg";
import "./Erfolgsgeschichten_anton.css";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { useHistory } from "react-router-dom";

function Erfolgsgeschichten_arthur() {
  const history = useHistory();
  const handleClick = () => {
    history.push("/erfolgsgeschichten");
  };
  return (
    <div className="erfolgsgeschichten_anton">
      <div className="erfolgsgeschichten_anton__zuruck">
        <ChevronLeftIcon onClick={handleClick} />
        <p>Zuruck</p>
      </div>
      <div className="erfolgsgeschichten_anton__container">
        <h2>Arthur</h2>
        <img
          className="erfolgsgeschichten_anton__img"
          src={photo3}
          alt="foto arthur"
        />
        <p>
          Artur kam zu uns und behauptete, er sei nicht in der Lage zuzunehmen.
          Er sei bereits sein Leben lang dürr und nicht in der Lage Muskeln
          aufzubauen. Durch eine Ernährungsanpassung und die Wahl der richtigen
          Nahrungsergänzungsmittel, konnte auch Artur in 10 Monaten 8,2kg
          zunehmen. Davon waren 6,7kg reine Muskelmasse. In dieser Zeit
          absolvierte Artur 3-4 Mal in der Woche Krafttraining und konnte nicht
          nur Muskeln aufbauen, sondern steigerte seine Kraftwerte enorm. Seine
          ersten Kniebeugen machte Artur mit der leeren Stange (20kg) für
          maximal 6-8 Wiederholungen. Nach ca. 10 Monaten, konnte Artur dieselbe
          Wiederholungsanzahl bereits mit knapp 75kg bewältigen. Vereinbare
          jetzt ein Beratungsgespräch
        </p>
        {/* titulo */}
        {/* imagen */}
        {/* texto */}
      </div>
    </div>
  );
}

export default Erfolgsgeschichten_arthur;
