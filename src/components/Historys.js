import React from "react";
import "./Historys.css";
import BannerPrincipal from "./BannerPrincipal";
import photo1 from "./../static/images/foto2.jpeg";
import photo2 from "./../static/images/foto3.jpeg";
import photo3 from "./../static/images/foto4.jpeg";
import photo4 from "./../static/images/foto5.jpeg";
import photo5 from "./../static/images/foto6.jpeg";
import photo6 from "./../static/images/foto7.jpeg";
import { Link } from "react-router-dom";

function Historys() {
  return (
    <div className="historys">
      <BannerPrincipal title="Erfolgsgeschichten" subtitle="" />
      <div className="history__container">
        <div className="history__containerfoto">
          <div className="historys__foto1" data-aos="zoom-out-right">
            <p>Anton Makarenko</p>
            <img src={photo1} alt="fotoanton" />
            <button>
              <Link className="historys__links" to="/erfolgsgeschichten__anton">
                Mehr info
              </Link>
            </button>
            {/* foto */}
            {/* title */}
            {/* button */}
          </div>
          <div className="historys__foto1" data-aos="zoom-out-down">
            <p>Jonas</p>
            <img src={photo2} alt="jonasfoto" />
            <button>
              <Link className="historys__links" to="/erfolgsgeschichten__jonas">
                Mehr info
              </Link>
            </button>
            {/* foto */}
            {/* title */}
            {/* button */}
          </div>
          <div className="historys__foto1" data-aos="zoom-out-left">
            <p>Artur</p>
            <img src={photo3} alt="arthurfoto" />
            <button>
              <Link
                className="historys__links"
                to="/erfolgsgeschichten__arthur"
              >
                Mehr info
              </Link>
            </button>
            {/* foto */}
            {/* title */}
            {/* button */}
          </div>
        </div>
        <div className="history__containerfoto">
          <div className="historys__foto1" data-aos="zoom-out-right">
            <p>Max</p>
            <img src={photo4} alt="maxfoto" />
            <button>
              <Link className="historys__links" to="/erfolgsgeschichten_max">
                Mehr info
              </Link>
            </button>
            {/* foto */}
            {/* title */}
            {/* button */}
          </div>
          <div className="historys__foto1" data-aos="fade-up">
            <p>Lenas</p>
            <img src={photo5} alt="lenasfoto" />
            <button>
              <Link className="historys__links" to="/erfolgsgeschichten_lenas">
                Mehr info
              </Link>
            </button>
            {/* foto */}
            {/* title */}
            {/* button */}
          </div>
          <div className="historys__foto1" data-aos="zoom-out-left">
            <p>Andreas </p>
            <img src={photo6} alt="andreasfoto" />
            <button>
              <Link
                className="historys__links"
                to="/erfolgsgeschichten_andreas"
              >
                Mehr info
              </Link>
            </button>
            {/* foto */}
            {/* title */}
            {/* button */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Historys;
