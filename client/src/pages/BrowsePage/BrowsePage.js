import React, { Component } from 'react';
import NavBar from '../../components/NavBar';
import Search from '../../components/Search';

class BrowsePage extends Component {
    render() {
      return (
        <div>
          <NavBar/>
          <Search/>
        </div>
      );
    }
}
  
export default BrowsePage;