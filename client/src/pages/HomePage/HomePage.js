import React, { Component } from 'react';
import Navi from '../../components/Navi';
import Tilt from 'react-tilt';
import About from '../../components/About';
import './HomePage.css'

class HomePage extends Component {
  render() {
    return (
      <div>
        <Navi/>
        <Tilt className="Tilt" options={{ max : 25 }} >
          <section className="text-center Tilt-inner jumbotron">
            <div className ="orgName">
              <h1>Orchestrade</h1>
              <p className="lead">Musica Vivit In Aeternum</p>
            </div>
          </section>
        </Tilt>
        <section className="part2">
          <hr/>
        </section>
      </div>
      );
  }
}

export default HomePage;