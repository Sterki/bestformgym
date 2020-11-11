import React from "react";
import photo4 from "./../static/images/foto5.jpeg";
import "./Erfolgsgeschichten_anton.css";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { useHistory } from "react-router-dom";

function Erfolgsgeschichten_max() {
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
        <h2>Max</h2>
        <img
          className="erfolgsgeschichten_anton__img"
          src={photo4}
          alt="foto max"
        />
        <p>
          Max kam wegen zwei Problemen zu uns. Er trainierte zwar viel und
          bereits seit mehreren Jahren, machte aber trotzdem keine Fortschritte.
          Außerdem kamen mit den Jahren Probleme mit seinem Knie hinzu, die
          soweit gingen, dass eine Operation unerlässlich wurde. Trotz dieser
          Rückschläge entschied Max, dass Aufgeben keine Option ist. Wegen
          seiner Knie-OP und seines fordernden und zeitintensiven Jobs, konnte
          Max keine großen Sprünge machen. Deshalb war unser Motto, zwei
          Schritte vorwärts, einer zurück. Wenn du dich langsam nach vorne
          bewegst, bist du immer noch schneller als jemand der auf der Couch
          sitzt und große Sprüche klopft. Durch die Hautfaltenmessung passten
          wir die Nahrungsergänzungsmittel individuell an die Situation von Max
          an, und konnten die Entzündungswerte in seinem Knie soweit reduzieren,
          dass sogar ein moderates Unterkörpertraining möglich wurde. Dadurch
          hat Max kaum noch Schmerzen im Alltag und kann sich allen Aktivitäten
          widmen. Vereinbare jetzt ein Beratungsgespräch
        </p>
        {/* titulo */}
        {/* imagen */}
        {/* texto */}
      </div>
    </div>
  );
}

export default Erfolgsgeschichten_max;
