import React from "react";
import "./About.css";
import about_inner_1 from "./../static/images/about_inner_1.png";
import DoneAllIcon from "@material-ui/icons/DoneAll";
import Demian from "./../static/images/Demian.jpg";
import Nik from "./../static/images/Nik.jpg";
import { Facebook, Instagram } from "@material-ui/icons";
import BannerPrincipal from "./BannerPrincipal";

function About() {
  return (
    <div className="about">
      <BannerPrincipal
        title="ÜBER UNS"
        subtitle="Was dich im BestForm Gym erwartet"
      />
      <div className="about__container">
        <div className="about__photo">
          <img src={about_inner_1} alt="teamfoto" />
        </div>
        <div className="about__uberuns">
          {/* some text */}
          <h1>Über uns</h1>
          <h2>BestFormGym</h2>
          <p>
            BestForm Gym steht für Qualität, nicht Quantität. Es ist kein
            gewöhnliches Fitnessstudio. Das Training findet in Kleingruppen
            statt und zu festen Uhrzeiten. Du musst dich um nichts mehr kümmern.
            Die Trainingsplanung wird von uns übernommen. Wir messen deinen
            Fortschritt mit der 13 Hautfaltenmessmethode und bringen deine
            körperliche und kognitive Leistungsfähigkeit auf die nächste Stufe.
          </p>
          <div className="about__button">
            <button>Zum kontakt</button>
          </div>
        </div>
      </div>
      <div className="about__container2">
        <div className="about__erwartet">
          <h1>Was du bei uns bekommst</h1>
          <div className="about__parraferwartet">
            <DoneAllIcon />
            <p>
              Training in einer Gruppe, Personal Training oder Trainingspläne
              für dein Fitnessstudio. Es ist für jeden was geboten.
            </p>
          </div>
          <div className="about__parraferwartet">
            <DoneAllIcon />
            <p>
              Strukturiertes Kraft- und Konditionstraining angepasst an die
              Ziele des Kunden
            </p>
          </div>
          <div className="about__parraferwartet">
            <DoneAllIcon />
            <p>
              BioSignature Körperfettmessung und individuell angepasste
              Supplementprotokolle sowie Ernährungsberatung anhand der
              Messergebnisse
            </p>
          </div>
          <div className="about__parraferwartet">
            <DoneAllIcon />
            <p>Wir bieten u.a. Verträge ohne Vertragsbindung</p>
          </div>
          <div className="about__parraferwartet">
            <DoneAllIcon />
            <p>Geräte mit einer ausgezeichneten Qualität</p>
          </div>
          <div className="about__parraferwartet">
            <DoneAllIcon />
            <p>Trainingsapp für die Anmeldung zum Gruppentraining</p>
          </div>
          <div className="about__parraferwartet">
            <DoneAllIcon />
            <p>
              Kein typisches Bodybuilding Training. Unser Ziel ist es deinen
              Körper mit funktionellen Bewegungsabläufen für die individuellen
              Anforderungen des Alltags zu stärken
            </p>
          </div>
        </div>
        <div className="about__erwartet2">
          <h1>Was du bei uns nicht bekommst</h1>
          <div className="about__parraferwartet">
            <DoneAllIcon />
            <p>Ein 24/7 Fitnessstudio</p>
          </div>
          <div className="about__parraferwartet">
            <DoneAllIcon />
            <p>
              Nicht erprobte Trainingspläne (alle Trainingspläne, die wir
              herausgeben, werden durch uns persönlich geprüft und ausprobiert)
            </p>
          </div>
          <div className="about__parraferwartet">
            <DoneAllIcon />
            <p>Schlecht ausgebildete Trainer</p>
          </div>
          <div className="about__parraferwartet">
            <DoneAllIcon />
            <p>Langes Warten auf freie Geräte</p>
          </div>
          <div className="about__parraferwartet">
            <DoneAllIcon />
            <p>Falsche Übungsausführung</p>
          </div>
          <div className="about__parraferwartet">
            <DoneAllIcon />
            <p>
              Eine unpersönliche Trainingsatmosphäre wie in den Massenstudios
            </p>
          </div>
        </div>
      </div>
      <div className="about__container3">
        <h1>Trainer</h1>
        <div className="about__trainers">
          <div className="about__trainer1">
            <img src={Demian} alt="demianfoto" />
            <div className="about__name">
              <h4>Demian Kanzler</h4>
            </div>
            <div className="about__socialicons">
              <Facebook />
              <Instagram />
            </div>
          </div>
          <div className="about__trainer1">
            <img src={Nik} alt="nikfoto" />
            <div className="about__name">
              <h4>Nikita Yagolnitser</h4>
            </div>
            <div className="about__socialicons">
              <Facebook />
              <Instagram />
            </div>
          </div>
        </div>
      </div>

      {/* trainners  with photos*/}
    </div>
  );
}

export default About;
