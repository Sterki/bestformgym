import React from "react";
import photo5 from "./../static/images/foto6.jpeg";
import "./Erfolgsgeschichten_anton.css";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { useHistory } from "react-router-dom";

function ErfolgsgeschichtenLenas() {
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
        <h2>Lenas</h2>
        <img
          className="erfolgsgeschichten_anton__img"
          src={photo5}
          alt="foto lenas"
        />
        <p>
          Lenas Ziel war es abzunehmen und einen strafferen Körper zu bekommen.
          Ihre größte Herausforderung war, dass Sie vorher noch nie richtig
          Sport gemacht hatte und fast von Null anfangen musste. Nach bereits 5
          Monaten verlor Lena 7% Körperfett und konnte ihre Muskelmasse komplett
          beibehalten. Die Körperhaltung hat sich deutlich verbessert und die
          Reaktionen aus ihrem Freundeskreis sind alle durchweg positiv. Ihre
          Kraftwerte haben sich fast bei allen Übungen verdoppelt. Am Anfang
          schaffte Sie keinen einzigen Klimmzug. Nun schafft sie einen Klimmzug
          mit 10kg Zusatzgewicht. Wie viele Frauen kennst Du, die einen Klimmzug
          können? Lena trainiert nun seit 2 Jahren unter unserer Anleitung und
          kann sich ein Leben ohne Sport nicht vorstellen. Vereinbare jetzt ein
          Beratungsgespräch
        </p>
        {/* titulo */}
        {/* imagen */}
        {/* texto */}
      </div>
    </div>
  );
}

export default ErfolgsgeschichtenLenas;
