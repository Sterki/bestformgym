import React from "react";
import "./Home.css";
import DoneAllIcon from "@material-ui/icons/DoneAll";

function Home() {
  return (
    <div className="home">
      <h1>BestFormGym</h1>
      <div className="home__container">
        <div className="home__info1" data-aos="zoom-in">
          <div className="home__parraf">
            <DoneAllIcon />
            <p>
              Personal Training, Training in einer Kleingruppe oder
              Trainingspläne für dein Fitnesstudio. Wir Finden für jeden die
              passende individuelle Lösung
            </p>
          </div>
          <div className="home__parraf">
            <DoneAllIcon />
            <p>
              BioSignature Körperfettmessung und individuell aufgestellte
              Ernährungs- und Supplementpläne anhand der Messergebnisse
            </p>
          </div>
          <div className="home__parraf">
            <DoneAllIcon />
            <p>Training im bestausgestattesten Studio der Region</p>
          </div>

          {/* info1 */}
          {/* info1 */}
        </div>
        <div className="home__info1" data-aos="zoom-in">
          <div className="home__parraf">
            <DoneAllIcon />
            <p>
              Strukturiertes kraft- und Konditionstraining angepasst an die
              Ziele des Kunden
            </p>
          </div>
          <div className="home__parraf">
            <DoneAllIcon />
            <p>Keine Vertragsbingung</p>
          </div>
          <div className="home__parraf">
            <DoneAllIcon />
            <p>Wir liefern Ergebnisse!</p>
          </div>

          {/* info1 */}
          {/* info1 */}
        </div>
      </div>
      <button>zum kontakt</button>
    </div>
  );
}

export default Home;
