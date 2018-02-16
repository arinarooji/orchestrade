import React, { Component } from "react";
import Navi from "../../components/Navi";
import Manage from "../../components/Manage";
import InstrumentCard from "../../components/InstrumentCard";
import Footer from "../../components/Footer";
import API from "../../utils/API";

class ManagePage extends Component {
  
  state = {
    schoolId: "1", //User's school ID
    buttonSearch: "", //Type of instrument searched (this is used to filter the inventory)
    userInventory: [], //User's Inventory
    filteredInventory: [] //User's filtered inventory
  };

  componentDidMount() {
    this.getInventoryBySchoolId(this.state.schoolId);
  }

  // reach for our inventory and update our state
  getInventoryBySchoolId = schoolId => {
    API.getInventoryBySchoolId(this.state.schoolId).then(results => {
      this.setState({
        userInventory: results.data
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
                  brand={inv.brand}
                  instrument={inv.instrumentName}
                  school={inv.school}
                />
              </li>
            ))}
          </ul>
        </div>
      );
    }
  };

  //Category click event
  handleClick = (event) => {

    //Filter the userInventory with the instrument type in event
    let filteredInventory = this.state.userInventory.filter(item => item.type == event);

    //Set the button search state to equal instrument type
    this.setState({ 
      buttonSearch: event, //Button search state now equals selected instrument type (string value in event, ie "Brass")
      filteredInventory: filteredInventory //filteredInventory now equals all buttonSearch types
    });
  }

  //This function renders either the entire user inventory, or the filtered inventory
  shouldRender = () => {
    //If the buttonSearch state is blank, render entire inventory (userInventory)
    if (this.state.buttonSearch == "") {
      return this.renderInventory(this.state.userInventory)
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
        <Manage handleClick={this.handleClick}/>
          {this.shouldRender()}
        <Footer />
      </div>
    );
  }
}

export default ManagePage;
