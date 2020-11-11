import React from "react";
import photo6 from "./../static/images/foto7.jpeg";
import "./Erfolgsgeschichten_anton.css";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { useHistory } from "react-router-dom";

function Erfolgsgeschichten_andreas() {
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
        <h2>Andreas</h2>
        <img
          className="erfolgsgeschichten_anton__img"
          src={photo6}
          alt="foto andreas"
        />
        <p>
          Andreas (Name geändert) kam zu uns, da er nur noch 6 Wochen Zeit
          hatte, sich auf die Sportprüfung der Polizei vorzubereiten. Wie man
          auf den Bildern links sieht, hat Andreas vorher noch nicht viel Sport
          getrieben. Unsere Aufgabe war es in den 6 Wochen seine absoluten
          Kraftwerte für den Krafttest zu steigern, sowie seine Grundausdauer
          für einen 12-minütigen Ausdauerlauf zu maximieren. Da er nebenbei
          einen stressigen Vollzeitjob hatte, konnte die Aufgabe nicht nur mit
          der Optimierung seines Trainings bewältigt werden. Hier mussten alle
          Faktoren berücksichtigt werden, damit Andreas in den verbliebenen 6
          Wochen Vollgas geben konnte. Zum Training wurde die Ernährung
          umgestellt, um die kognitive, sowie körperliche Leistungsfähigkeit im
          Alltag zu steigern. Mit Hilfe der Hautfaltenmessung konnten wir
          individuell an Andreas angepasste Nahrungsergänzungsmittel auswählen,
          um dem Körper alle nötigen Nährstoffe bereitzustellen, die er in solch
          belastenden Zeiten braucht. Die Aufgabe haben wir gekonnt bewältigt.
          Die Sportprüfung beim Aufnahmetest der Polizei, hat Andreas keinerlei
          Schwierigkeiten bereitet. Wir wünschen viel Erfolg im Polizeidienst.
          Vereinbare jetzt ein Beratungsgespräch.
        </p>
        {/* titulo */}
        {/* imagen */}
        {/* texto */}
      </div>
    </div>
  );
}

export default Erfolgsgeschichten_andreas;
