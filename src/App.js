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
import Erfolgsgeschichten_anton from "./components/Erfolgsgeschichten_anton";
import Erfolgsgeschichten_jonas from "./components/Erfolgsgeschichten_jonas";
import Erfolgsgeschichten_arthur from "./components/Erfolgsgeschichten_arthur";
import Erfolgsgeschichten_max from "./components/Erfolgsgeschichten_max";
import Erfolgsgeschichten_lenas from "./components/Erfolgsgeschichten_lenas";
import Erfolgsgeschichten_andreas from "./components/Erfolgsgeschichten_andreas";
import Services from "./components/Services";

function App() {
  return (
    <Router>
      <Switch>
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
            <Erfolgsgeschichten_andreas />
            <Footer />
          </div>
        </Route>
        <Route path="/erfolgsgeschichten_lenas">
          <div className="app">
            <Subheader />
            <Header />
            <Erfolgsgeschichten_lenas />
            <Footer />
          </div>
        </Route>
        <Route path="/erfolgsgeschichten_max">
          <div className="app">
            <Subheader />
            <Header />
            <Erfolgsgeschichten_max />
            <Footer />
          </div>
        </Route>
        <Route path="/erfolgsgeschichten__arthur">
          <div className="app">
            <Subheader />
            <Header />
            <Erfolgsgeschichten_arthur />
            <Footer />
          </div>
        </Route>
        <Route path="/erfolgsgeschichten__jonas">
          <div className="app">
            <Subheader />
            <Header />
            <Erfolgsgeschichten_jonas />
            <Footer />
          </div>
        </Route>
        <Route path="/erfolgsgeschichten__anton">
          <div className="app">
            <Subheader />
            <Header />
            <Erfolgsgeschichten_anton />
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
