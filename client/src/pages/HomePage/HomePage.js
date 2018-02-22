import React, { Component } from "react";
import Navi from "../../components/Navi";
import Tilt from "react-tilt";
import Carousel from "../../components/Carousel";
import About from "../../components/About";
import Testimony from "../../components/Testimony";
import Footer from "../../components/Footer";
// import "./HomePage.css";

class HomePage extends Component {
  render() {
    return (
      <div>
        <Navi />
        <div className="fadeIn">
          <Tilt className="Tilt" options={{ max: 10, scale: 1 }}>
            <section className="text-center Tilt-inner jumbotron">
              <div className="orgName">
                <h1>Orchestrade</h1>
                <p className="lead">Musica Vivit In Aeternum</p>
                <div className="startBtn">
                  <a className="btn btn-primary" href="/login">
                    Get Started
                  </a>
                </div>
              </div>
            </section>
          </Tilt>
          <Carousel />
          <About />
          <Testimony />
          <Footer />
        </div>
      </div>
    );
  }
}

export default HomePage;
