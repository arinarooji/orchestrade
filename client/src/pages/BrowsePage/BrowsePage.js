import React, { Component } from 'react';
import NavBar from '../../components/NavBar';
import Search from '../../components/Search';
import InstrumentCard from '../../components/InstrumentCard';
import Footer from '../../components/Footer';

class BrowsePage extends Component {
    render() {
      return (
        <div>
            <NavBar/>
            <Search/>
            <div className="col-12 px-0 mx-0">
                <ul className="list-inline list-unstyled px-0 mx-0">
                    <li className="list-inline-item col-xs-12 col-sm-6 col-md-4 px-0 mx-0">
                        <InstrumentCard/>
                    </li>
                    <li className="list-inline-item col-xs-12 col-sm-6 col-md-4 px-0 mx-0">
                        <InstrumentCard/>
                    </li>
                    <li className="list-inline-item col-xs-12 col-sm-6 col-md-4 px-0 mx-0">
                        <InstrumentCard/>
                    </li>
                </ul>
            </div>
            <Footer/>
        </div>
      );
    }
}
  
export default BrowsePage;