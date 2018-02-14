import React, { Component } from "react";
import Navi from "../../components/Navi";
import Search from "../../components/Search";
import InstrumentCard from "../../components/InstrumentCard";
import Footer from "../../components/Footer";
import API from "../../utils/API";

//We still need to work on the search input/tabs... Also the search tabs need to be made responsive 
class BrowsePage extends Component {
  // the state of the inventory will be stored here
  state = {
    inventory: [],
    buttonSearch: ""
  };

  componentDidMount() {
    this.getInventory();
  }

  // reach for our inventory and update our state
  getInventory = event => {
    API.getInventory().then(results => {
      this.setState({
        inventory: results.data
      });
    });
  };

  // search event for buttons 
  btnSearch = event => {
    this.setState({ buttonSearch: event.currentTarget.dataset.value })
    const searchItem = this.state.buttonSearch;
    API.getInventoryById(searchItem)
    .then(searchItem => console.log(searchItem))
  }

  shouldRender = () => {
    if(this.state.buttonSearch === ""){
      return this.renderInventory()
    } else {
      return <h2>Hey There</h2>
    }
  }
  // looping through the inventory state and passing the inventory properties to each item defined
  renderInventory = () => {
    return (
      <div className="inventorySect col-12 px-0 mx-0">
        <ul className="list-inline list-unstyled px-0 mx-0">
          {this.state.inventory.map(inv => (
            <li className="list-inline-item col-xs-12 col-sm-6 col-md-4 px-0 mx-0">
              <InstrumentCard
                key={inv._id}
                uniqueId={inv._id}
                link={inv.image}
                brand={inv.brand}
                instrument={inv.instrumentName}
                school={inv.school}
              />
            </li>
          ))}
        </ul>
      </div>
    );
  };

  render() {
    return (
      <div>
        <Navi />
        <Search btnSearch={this.btnSearch}/>
        {/* {this.renderInventory()} */}
        {this.shouldRender()}
        <Footer />
      </div>
    );
  }
}

export default BrowsePage;
