import React, { Component } from 'react';
import Navi from '../../components/Navi';
import Jumbo from '../../components/Jumbo';
import Carousel from '../../components/Carousel';
import About from '../../components/About';
import Testimony from '../../components/Testimony';
import Footer from '../../components/Footer';
import Request from '../../components/Request'

class IndexPage extends Component {
  render() {
    return (
      <div>
        <Navi/>
        <Jumbo/>
        <Carousel />
        <About/>
        <Request/>
        <Testimony/>
        <Footer/>
      </div>
    );
  }
}

export default IndexPage;