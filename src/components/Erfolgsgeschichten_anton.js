import React from "react";
import photo1 from "./../static/images/foto2.jpeg";
import "./Erfolgsgeschichten_anton.css";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { useHistory } from "react-router-dom";

function Erfolgsgeschichten_anton() {
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
        <h2>Anton </h2>
        <img
          className="erfolgsgeschichten_anton__img"
          src={photo1}
          alt="anton makarenko"
        />
        <p>
          Der Profifußballer, Anton Makarenko von der SpVgg Oberfranken
          Bayreuth, machte ein 6 Wochen langes Selbstexperiment. Sein Ziel war
          es Körperfett zu reduzieren und funktionelle Muskelmasse aufzubauen.
          Obwohl die Zeit begrenzt war, konnte er mit Hilfe unserer Beratung,
          herausragende Ergebnisse vorweisen. Anton hat vorher so gut wie nie
          Krafttraining gemacht. Da er mit dem Fußballtraining bereits ein
          straffes Programm hatte, war es nur 2 Mal die Woche möglich für ca. 1h
          Krafttraining zu machen. Das hört sich zwar nicht nach viel an, aber
          durch die angepasste Ernährungsweise und der Optimierung seines
          Schlafs, war in dieser kurzen Zeit ein hervorragendes Ergebnis
          möglich. Vereinbare jetzt ein Beratungsgespräch
        </p>
        {/* titulo */}
        {/* imagen */}
        {/* texto */}
      </div>
    </div>
  );
}

export default Erfolgsgeschichten_anton;
