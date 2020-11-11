import React from "react";
import BannerPrincipal from "./BannerPrincipal";
import "./Services.css";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";

function Services() {
  return (
    <div className="services">
      <BannerPrincipal title="Services" subtitle="" />
      <div className="services__container">
        <div className="services__info">
          <div className="services__title">
            <h2>Gruppentraining</h2>
            <span>im BestForm Gym</span>
            <span>
              <strong>PREIS AUF ANFRAGE</strong>
            </span>
          </div>
          <div className="services__content">
            <p className="services__text">
              <ArrowRightIcon /> 2-3 Trainingseinheiten pro Woche in
              Kleingruppen, zu festen Zeiten unter Anleitung eines Coaches
            </p>
            <p className="services__text">
              <ArrowRightIcon /> Inkl. Trainingsplan, der alle 6-8
              Trainingseinheiten geändert wird
            </p>
            <p className="services__text">
              <ArrowRightIcon /> Wasser während dem Training
            </p>
            <p className="services__text">
              <ArrowRightIcon /> Proteinshake nach dem Training
            </p>
            <p className="services__text">
              <ArrowRightIcon /> 1x Hautfaltenmessungen inkl.
              Ernährungsanpassung und Schlafoptimierung
            </p>
            <p className="services__text">
              <ArrowRightIcon />
              12 Wochenpaket, ganz ohne Vertragsbindung möglich
            </p>
            <p className="services__text">
              <ArrowRightIcon /> An-/ bzw. Abmelden mit App über dein Smartphone
              oder PC
            </p>
            <p className="services__text">
              <ArrowRightIcon /> 10er Karte ebenfalls möglich
            </p>
          </div>
          <div className="services__button">
            <button>Kontakt</button>
          </div>

          {/* title */}
          {/* content */}
          {/* button */}
        </div>
        <div className="services__info">
          <div className="services__title">
            <h2>Personal Training</h2>
            <span>mit einem der Head Coaches des BestForm Gym</span>
            <span>
              <strong>PREIS AUF ANFRAGE</strong>
            </span>
          </div>
          <div className="services__content">
            <p className="services__text">
              <ArrowRightIcon /> Einzeltraining oder mit Partner zusammen unter
              der Anleitung eines festen Head Coaches
            </p>
            <p className="services__text">
              <ArrowRightIcon /> Variable Trainingszeiten
            </p>
            <p className="services__text">
              <ArrowRightIcon /> Individueller Trainingsplan alle 4-6
              Trainingseinheiten
            </p>
            <p className="services__text">
              <ArrowRightIcon /> Hautfaltenmessung inkl. Supplementprotokolle
              anhand der Messung
            </p>
            <p className="services__text">
              <ArrowRightIcon /> Individuelle Ernährungsberatung
            </p>
            <p className="services__text">
              <ArrowRightIcon /> Wasser während dem Training
            </p>
            <p className="services__text">
              <ArrowRightIcon /> Proteinshake nach dem Training
            </p>
            <p className="services__text">
              <ArrowRightIcon /> 12 Wochen Paket, keine Vertragsbindung
            </p>
            <p className="services__text">
              <ArrowRightIcon /> Preis nach Trainingshäufigkeit und
              Personenanzahl
            </p>
          </div>
          <div className="services__button">
            <button>Kontakt</button>
          </div>

          {/* title */}
          {/* content */}
          {/* button */}
        </div>
        <div className="services__info">
          <div className="services__title">
            <h2>Trainingskonzept für dein Gym</h2>
            <span>
              <strong>PREIS AUF ANFRAGE</strong>
            </span>
          </div>
          <div className="services__content">
            <p className="services__text">
              <ArrowRightIcon /> Du bist bereits Mitglied in einem Studio oder
              wohnst weiter weg und willst nach unserem Konzept trainieren? Dann
              ist dieses Programm genau das richtige für dich!
            </p>
            <p className="services__text">
              <ArrowRightIcon />5 Termine (1 Haupttermin + 4 Kontrolltermine)
            </p>
            <p className="services__text">
              <ArrowRightIcon /> 5x Hautfaltenmessungen inkl.
              Supplementprotokoll
            </p>
            <p className="services__text">
              <ArrowRightIcon /> Individuelle Ernährungsberatung
            </p>
            <p className="services__text">
              <ArrowRightIcon /> Individueller Trainingsplan bei jedem Termin
            </p>
            <p className="services__text">
              <ArrowRightIcon /> Intervalltraining nach Wunsch
            </p>
            <p className="services__text">
              <ArrowRightIcon /> Alle Trainingspläne werden mit einem Trainer
              bei uns im Gym 1x durchtrainiert, damit die Übungsausführung
              verständlich ist
            </p>
          </div>
          <div className="services__button">
            <button>Kontakt</button>
          </div>

          {/* title */}
          {/* content */}
          {/* button */}
        </div>
      </div>
    </div>
  );
}

export default Services;
