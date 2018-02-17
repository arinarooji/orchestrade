import React, { Component } from "react";
import Navi from "../../components/Navi";
import Add from "../../components/Add";
import InstrumentCard from "../../components/InstrumentCard";
import Footer from "../../components/Footer";
import API from "../../utils/API";

//We still need to work on the search input/tabs... Also the search tabs need to be made responsive 
class AddPage extends Component {
  // the state of the inventory will be stored here
  state = {
    buttonSearch: "",
    inventory: [],
    filteredInventory:[]
  };

  componentDidMount() {
    this.getInstrumentTemplates();
  }

  // reach for our inventory and update our state
  getInstrumentTemplates = event => {
    API.getInstrumentTemplates().then(results => {
      this.setState({
        inventory: results.data
      });
    });
  };

  // looping through the inventory state and passing the inventory properties to each item defined
  renderInventory = (inventory) => {
    if(inventory.length !== undefined) {
      return (
        <div className="inventorySect col-12 px-0 mx-0">
          <ul className="list-inline list-unstyled px-0 mx-0">
            {inventory.map(inv => (
              <li className="list-inline-item col-xs-12 col-sm-6 col-md-4 px-0 mx-0">
                <InstrumentCard
                  key={inv._id}
                  uniqueId={inv._id}
                  link={inv.image}
                  instrument={inv.instrumentName}
                  action="Add Instrument" //The innerHTML of the button
                  clickEvent={this.handleAddClick} //The button's page specific click event (adding intruments)
                />
              </li>
            ))}
          </ul>
        </div>
      );
    }
  };

  //Category click event that is passed an instrumentType from Manage.js (string value, ie "Brass")
  handleClick = (instrumentType) => {

    //Filter the inventory with the instrumentType string
    let filteredInventory = this.state.inventory.filter(item => item.type == instrumentType);

    //Set the button search state to equal instrument type
    this.setState({ 
      buttonSearch: instrumentType, //buttonSearch state now equals selected instrument type (string value in instrumentType, ie "Brass")
      filteredInventory: filteredInventory //filteredInventory now equals the filteredInventory array created above
    });
  }

  //Add Instrument click event
  handleAddClick = (event) => {
    console.log("add instrument");
    //...
  }

  //This function renders either the entire user inventory, or the filtered inventory
  shouldRender = () => {
    //If the buttonSearch state is blank, render entire inventory
    if (this.state.buttonSearch == "") {
      return this.renderInventory(this.state.inventory)
    }
    //Else, render the filteredInventory stored in the state
    else {
      return this.renderInventory(this.state.filteredInventory);
    }
  }

  render() {
    return (
      <div>
        <Navi />
        <Add handleClick={this.handleClick} />
        {this.shouldRender()}
        <Footer />
      </div>
    );
  }
}

export default AddPage;
