import React, { useState } from "react";
import BannerPrincipal from "./BannerPrincipal";
import "./Kontakt.css";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneInTalkIcon from "@material-ui/icons/PhoneInTalk";
import Mapa from "./Mapa";
import emailjs from "emailjs-com";
import Alert from "@material-ui/lab/Alert";
import { CircularProgress } from "@material-ui/core";

function Kontakt() {
  const [enviando, setEnviando] = useState(false);
  const [emailsend, setEmailSend] = useState("");
  const [errorForm, saveError] = useState("");
  const [spinner, setSpinner] = useState(false);
  const [sended, setSendedEmail] = useState("");
  const [datos, setDatos] = useState({
    user_name: "",
    user_phone: "",
    user_email: "",
    subject: "",
    message: "",
  });
  const { user_name, user_email, message, subject, user_phone } = datos;
  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      user_name.trim() === "" ||
      user_email.trim() === "" ||
      user_phone.trim() === "" ||
      subject.trim() === "" ||
      message.trim() === ""
    ) {
      saveError("Alle Felder sind erforderlich!");
      setTimeout(() => {
        return saveError("");
      }, 4000);
    } else {
      setSpinner(true);
      setTimeout(() => {
        setSpinner(false);
      }, 1200);
      emailjs
        .sendForm(
          "contact_best", // YOUR SERVICE_ID
          "best-form-gym", // YOUR TEMPLATE_ID
          e.target, // YOUR DATA FROM ALL OF UR INPUTS
          "user_zvdh1HirL2WmVAx3yIl4H" // THIS IS UR USER ID I MEAN INTEGRATION ID
        )
        .then((result) => {
          setSendedEmail("Email wurde erfolgreich Versendet");
          setTimeout(() => {
            return setSendedEmail("");
          }, 3000);
        })
        .catch((error) => {
          console.log("something went wrong!!", error.text);
        });
    }
  };

  const handleChange = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="kontakt">
      <BannerPrincipal
        title="Kontakt"
        subtitle="Melde dich telefonisch oder per E-mail"
      />
      <div className="kontakt__container">
        <div className="kontakt__adress">
          <div className="kontakt__icon">
            <LocationOnIcon />
          </div>
          <div className="kontakt__adresse">
            <p>Brunnenbachstraße 18, 86157 </p>
            <p>Augsburg</p>
          </div>
          <div className="kontakt__icon">
            <PhoneInTalkIcon />
          </div>
          <div className="kontakt__adresse">
            <p>+49 15787986803 </p>
            <p>postfach@bestformgym.de</p>
          </div>
        </div>
      </div>
      <Mapa />
      <div className="kontakt__container">
        <div className="kontakt__form">
          <div className="kontakt__title">
            <h1>Kontaktformular </h1>
            <h2>Füllen Sie das folgende Formular aus</h2>
            {errorForm ? (
              <div className="contact__alert">
                <Alert severity="error">{errorForm}</Alert>
              </div>
            ) : null}
          </div>
          <form onSubmit={handleSubmit} id="best-form-gym">
            <div className="kontakt__inputs">
              <input
                type="text"
                placeholder="Ihre Name"
                name="user_name"
                value={user_name}
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder="Ihre Telefonnummer"
                name="user_phone"
                value={user_phone}
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder="Ihre E-mail-Adresse"
                name="user_email"
                value={user_email}
                onChange={handleChange}
              />
            </div>
            <div className="kontakt__inputs">
              <input
                type="text"
                placeholder="Betreff"
                name="subject"
                value={subject}
                onChange={handleChange}
              />
            </div>
            <div className="kontakt__inputs">
              <textarea
                type="text"
                placeholder="Ihre Nachricht"
                name="message"
                value={message}
                onChange={handleChange}
              />
            </div>
            <div className="contact_divsucces">
              {spinner ? <CircularProgress /> : null}
              {sended ? <Alert severity="success">{sended}</Alert> : null}
            </div>
            <div className="kontakt__button">
              <button type="submit">Sende Jetzt</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Kontakt;
