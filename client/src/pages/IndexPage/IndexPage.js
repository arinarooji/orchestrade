import React, { Component } from 'react';
import NavBar from '../../components/NavBar';
import Jumbo from '../../components/Jumbo';
import Carousel from '../../components/Carousel';
import About from '../../components/About';
import Testimony from '../../components/Testimony';
import Footer from '../../components/Footer';

class IndexPage extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <Jumbo/>
        <Carousel />
        <About/>
        <Testimony/>
        <Footer/>
      </div>
    );
  }
}

export default IndexPage;