import React from "react";
import "./Carousel.css";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import slider from "./../static/images/slider.png";
import slider2 from "./../static/images/slider2.jpg";
import slider3 from "./../static/images/slider3.jpg";

function Carousel() {
  const AutoplaySlider = withAutoplay(AwesomeSlider);
  return (
    <div className="carousel">
      <AutoplaySlider
        className="carousel__banner"
        play={true}
        cancelOnInteraction={false} // should stop playing on user interaction
        interval={5000}
      >
        <div className="carousel__images" data-src={slider}>
          <div className="carousel__imagesInfo">
            <div className="carousel__title">
              <h1>Bestformgym</h1>
              <h2>Kontakt</h2>
            </div>
            <div className="carousel__button">
              <button>Mehr</button>
            </div>
          </div>
        </div>
        <div className="carousel__images" data-src={slider2}>
          <div className="carousel__imagesInfo">
            <div className="carousel__title">
              <h1>Bestformgym</h1>
              <h2>Erfolgsgeschichten </h2>
            </div>
            <div className="carousel__button">
              <button>Mehr</button>
            </div>
          </div>
        </div>
        <div className="carousel__images" data-src={slider3}>
          <div className="carousel__imagesInfo">
            <div className="carousel__title">
              <h1>Bestformgym</h1>
              <h2>Service</h2>
            </div>
            <div className="carousel__button">
              <button>Mehr</button>
            </div>
          </div>
        </div>
      </AutoplaySlider>
    </div>
  );
}

export default Carousel;
