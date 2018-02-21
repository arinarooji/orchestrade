import React, { Component } from "react";
import Navi from "../../components/Navi";
import Jumbo from "../../components/Jumbo";
import Carousel from "../../components/Carousel";
import About from "../../components/About";
import Testimony from "../../components/Testimony";
import Footer from "../../components/Footer";

class IndexPage extends Component {
  render() {
    return (
      <div>
        <Jumbo />
        <Carousel />
        <About />
        <Testimony />
        <Footer />
      </div>
    );
  }
}

export default IndexPage;
