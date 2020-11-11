import React from "react";
import photo2 from "./../static/images/foto3.jpeg";
import "./Erfolgsgeschichten_anton.css";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { useHistory } from "react-router-dom";

function Erfolgsgeschichten_jonas() {
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
        <h2>Jonas</h2>
        <img
          className="erfolgsgeschichten_anton__img"
          src={photo2}
          alt="foto jonas"
        />
        <p>
          Jonas ist Profi Eishockeyspieler. Er spielt in der 1. Deutschen
          Eishockeyliga und ist Torwart bei den Ice Tigers Nürnberg. Seine
          Aufgabe für die Off-Season war es sich so gut wie möglich auf die
          anstehende Season vorzubereiten. Dafür hatten wir nicht viel Zeit.
          Insgesamt waren es 8 Wochen, wobei wir nur 5 Wochen für Krafttraining
          hatten. ZIn diesen 5 Wochen haben wir das maximale herausgeholt und
          Jonas körperlich bestens für das kommende Jahr vorbereitet. Die
          größten Herausforderungen waren hierbei die muskuläre Balance und
          Haltungsoptimierung. Wir schafften es, Jonas Kniebeugenleistung auf
          sein 1,25-Faches Körpergewicht zu bringen und verdoppelten somit seine
          Maximalkraft. Durch diese Kraftsteigerung ist Jonas schneller und
          explosiver geworden, was für seinen Sport Goldwert ist. Ein weiterer
          Vorteil von mehr Kraft ist, Jonas ist nicht mehr so
          verletzungsanfällig. Sein Körper kann höhere Kräfte absorbieren und
          sich schneller davon regenerieren. Wir freuen uns Jonas in seiner
          nächsten Vorbereitungsphase in unserem Gym willkommen zu heißen.
        </p>
        {/* titulo */}
        {/* imagen */}
        {/* texto */}
      </div>
    </div>
  );
}

export default Erfolgsgeschichten_jonas;
