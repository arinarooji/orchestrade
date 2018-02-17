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
    buttonSearch: "",
    buttonInventory: [],
    inputSearch: "",
    inputInventory: []
  };

  componentDidMount() {
    this.getInventory();
    // this.shouldRender();
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
    this.setState(
      { buttonSearch: event.currentTarget.dataset.value },
      function() {
        console.log(this.state.buttonSearch);
        API.getByCat(this.state.buttonSearch).then(results =>
          this.setState({
            buttonInventory: results.data
          })
        );
      }
    );
  };

// handle conditional rendering based on the state of each component
 shouldRender = () => {
    if (this.state.buttonInventory.length !== 0 && this.state.inputInventory.length === 0){
      return this.renderCategory()
    }else if(this.state.inputInventory.length !== 0){
      return this.renderInst()
    }else {
      return this.renderInventory()
    }
  }

  // Handles updating component state when the user types into the input field
  handleInputChange = event => {
    this.setState({ inputSearch: event.target.value }, function(){
      console.log(this.state.inputSearch)
    });
  };

  // handles when the search button is clicked
  handleInstSearch = (event) => {
    const instToSearch = this.state.inputSearch;
    API.getByInst(instToSearch)
    .then((response) => this.setState({
      inputInventory: response.data
    }))
  };
  // looping through the inventory state and passing the inventory properties to each item defined
  renderInventory = () => {
    return (
      <div className="inventorySect col-12 px-0 mx-0">
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
  };

  renderCategory = () => {
    return (
      <div className="inventorySect col-12 px-0 mx-0">
        <ul className="list-inline list-unstyled px-0 mx-0">
          {this.state.buttonInventory.map(cat => (
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
  };

  renderInst = () => {
    return (
      <div className="inventorySect col-12 px-0 mx-0">
        <ul className="list-inline list-unstyled px-0 mx-0">
          {this.state.inputInventory.map(cat => (
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
  };

  render() {
    return (
      <div>
        <Navi />
        <Search
          btnClick={this.btnSearch}
          yourValue={this.state.inputSearch}
          handleChange={this.handleInputChange}
          clickSearch={this.handleInstSearch}
        />
        {this.shouldRender()}
        <Footer />
      </div>
    );
  }
}

export default BrowsePage;
