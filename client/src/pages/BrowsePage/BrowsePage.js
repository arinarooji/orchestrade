import React, { Component } from "react";
import Navi from "../../components/Navi";
import Search from "../../components/Search";
import InstrumentCard from "../../components/InstrumentCard";
import Footer from "../../components/Footer";
import "./BrowsePage.css"
import API from "../../utils/API";

class BrowsePage extends Component {
  // the state of the inventory will be stored here
  state = {
    inventory: [],
    buttonSearch: "",
    inputSearch: "",
    searchInventory: []
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
  filterResults = (arr, wordToMatch, propToCheck) => {
    return arr.filter((instrument, i, arr) => {
      if (
        instrument[propToCheck]
          .toLowerCase()
          .indexOf(wordToMatch.toLowerCase()) !== -1
      ) {
        return true;
      } else {
        return false;
      }
    });
  };
  // handles when the search button is clicked
  handleInstSearch = event => {
    const instToSearch = this.state.inputSearch;
    const searchInventory = this.filterResults(
      this.state.inventory,
      instToSearch,
      "instrumentName"
    );
    this.setState({ searchInventory });
  };
  // looping through the inventory state and passing the inventory properties to each item defined
  renderInventory = () => {
    return (
      <div className="inventorySect col-12 px-0 mx-0">
        <h1 class="available">
          Available Instruments
        </h1>
        <ul className="list-inline list-unstyled px-0 mx-0">
          {this.state.inventory.map(cat => (
            <li className="list-inline-item col-xs-12 col-sm-6 col-md-4 px-0 mx-0">
              <InstrumentCard
                key={cat._id}
                uniqueId={cat._id}
                type={cat.type}
                link={cat.image}
                brand={cat.brand}
                instrument={cat.instrumentName}
                school={cat.school}
              />
            </li>
          ))}
        </ul>
      </div>
    );
    this.setState({ searchInventory });
  };

  // Handles updating component state when the user types into the input field
  handleInputChange = event => {
    const searchInventory = this.filterResults(
      this.state.inventory,
      event.target.value,
      "instrumentName"
    );
    this.setState({ searchInventory });
    console.log(searchInventory);
  };

  // looping through the inventory state and passing the inventory properties to each item defined
  renderInventory = theState => {
    const stateRender = theState;
    return (
      <div className="inventorySect col-12 px-0 mx-0">
        <h1 class="available">Available Instruments</h1>
        <ul className="list-inline list-unstyled px-0 mx-0">
          {stateRender.map(cat => (
            <li
              key={cat._id}
              className="list-inline-item col-xs-12 col-sm-6 col-md-4 px-0 mx-0"
            >
              <InstrumentCard
                uniqueId={cat._id}
                type={cat.type}
                link={cat.image}
                brand={cat.brand}
                instrument={cat.instrumentName}
                school={cat.school}
                action="Request Instrument" //The innerHTML of the button
                clickEvent={this.handleRequestClick} //The button's page specific click event (requesting intruments)
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
        <div className="addSpace">
          <Search
            btnClick={this.btnSearch}
            yourValue={this.state.inputSearch}
            handleChange={this.handleInputChange}
            clickSearch={this.handleInstSearch}
          />
          {this.state.searchInventory.length > 0
            ? this.renderInventory(this.state.searchInventory)
            : this.renderInventory(this.state.inventory)}
        </div>
        <Footer />
      </div>
    );
  }
}

export default BrowsePage;
