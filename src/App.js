import React from "react";
import "./App.css";
import Header from "./components/Header";
import Subheader from "./components/Subheader";
import Carousel from "./components/Carousel";
import Home from "./components/Home";
import Mapa from "./components/Mapa";
import Footer from "./components/Footer";
import Historys from "./components/Historys";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/About";
import ErfolgsgeschichtenAnton from "./components/ErfolgsgeschichtenAnton";
import ErfolgsgeschichtenJonas from "./components/ErfolgsgeschichtenJonas";
import ErfolgsgeschichtenArthur from "./components/ErfolgsgeschichtenArthur";
import ErfolgsgeschichtenMax from "./components/ErfolgsgeschichtenMax";
import ErfolgsgeschichtenLenas from "./components/ErfolgsgeschichtenLenas";
import ErfolgsgeschichteAndreas from "./components/ErfolgsgeschichtenAndreas";
import Services from "./components/Services";
import Training from "./components/Training";
import Kontakt from "./components/Kontakt";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/kontakt">
          <div className="app">
            <Subheader />
            <Header />
            <Kontakt />
            <Footer />
          </div>
        </Route>
        <Route path="/trainingszeiten">
          <div className="app">
            <Subheader />
            <Header />
            <Training />
            <Footer />
          </div>
        </Route>
        <Route path="/service">
          <div className="app">
            <Subheader />
            <Header />
            <Services />
            <Footer />
          </div>
        </Route>
        <Route path="/erfolgsgeschichten_andreas">
          <div className="app">
            <Subheader />
            <Header />
            <ErfolgsgeschichteAndreas />
            <Footer />
          </div>
        </Route>
        <Route path="/erfolgsgeschichten_lenas">
          <div className="app">
            <Subheader />
            <Header />
            <ErfolgsgeschichtenLenas />
            <Footer />
          </div>
        </Route>
        <Route path="/erfolgsgeschichten_max">
          <div className="app">
            <Subheader />
            <Header />
            <ErfolgsgeschichtenMax />
            <Footer />
          </div>
        </Route>
        <Route path="/erfolgsgeschichten__arthur">
          <div className="app">
            <Subheader />
            <Header />
            <ErfolgsgeschichtenArthur />
            <Footer />
          </div>
        </Route>
        <Route path="/erfolgsgeschichten__jonas">
          <div className="app">
            <Subheader />
            <Header />
            <ErfolgsgeschichtenJonas />
            <Footer />
          </div>
        </Route>
        <Route path="/erfolgsgeschichten__anton">
          <div className="app">
            <Subheader />
            <Header />
            <ErfolgsgeschichtenAnton />
            <Footer />
          </div>
        </Route>
        <Route path="/erfolgsgeschichten">
          <div className="app">
            <Subheader />
            <Header />
            <Historys />
            <Footer />
          </div>
        </Route>
        <Route path="/uber">
          <div className="app">
            <Subheader />
            <Header />
            <About />
            <Footer />
          </div>
        </Route>
        <Route path="/">
          <div className="app">
            <Subheader />
            <Header />
            <Carousel />
            <Home />
            <Mapa />
            <Footer />
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
