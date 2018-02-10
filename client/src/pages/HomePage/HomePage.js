import React, { Component } from 'react';
import Navi from '../../components/Navi';
import NewParticles from '../../components/Particles/Particles';
import About from '../../components/About';
import './HomePage.css'

class HomePage extends Component {
  render() {
    return (
      <div>
        <Navi/>
        <div className="container text-center">
          <section>
            <NewParticles/>
              <div className ="orgName">
              <h1>Orchestrade</h1>
              <p className="lead">Musica Vivit In Aeternum</p>
            </div>
          </section>
          <hr/>
          <About/>
        </div>
        <div className="quote text-center">
          <p>"Through business and strategic partnerships, we seek the growth and longevity of music programs in all school districts"</p>
        </div>
      </div>
      );
  }
}

export default HomePage;