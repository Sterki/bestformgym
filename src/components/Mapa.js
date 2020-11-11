import React from "react";
import "./Mapa.css";

function Mapa() {
  return (
    <div className="mapa">
      <iframe
        className="mapa__iframe"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2651.0053121741535!2d10.865742215898818!3d48.36042157924179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479ea2cc1fd12c7d%3A0xa9f872f6530a03f1!2sBrunnenbachstra%C3%9Fe%2018%2C%2086157%20Augsburg!5e0!3m2!1ses!2sde!4v1604920162916!5m2!1ses!2sde"
        style={{ border: 0 }}
        title="mapa del gym"
      ></iframe>
    </div>
  );
}

export default Mapa;
