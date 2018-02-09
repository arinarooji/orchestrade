import React, { Component } from 'react';
import Jumbo from '../../components/Jumbo';
import About from '../../components/About';
import Testimony from '../../components/Testimony';
import Footer from '../../components/Footer';

class IndexPage extends Component {
    render() {
      return (
        <div>
          <Jumbo/>
          <About/>
          <Testimony/>
          <Footer/>
        </div>
      );
    }
}
  
export default IndexPage;