import React, { Component } from "react";
import Navi from "../../components/Navi";
import Manage from "../../components/Manage";
import InstrumentCard from "../../components/InstrumentCard";
import Footer from "../../components/Footer";
import API from "../../utils/API";

class ManagePage extends Component {
  // the state of the user's inventory will be stored here
  state = {
    id: "5a78f97e8d003a24bc5bec28", //User's ID
    userInventory: [] //User's Inventory
  };

  componentDidMount() {
    this.getInventoryById(this.state.id);
  }

  // reach for our inventory and update our state
  getInventoryById = id => {
    API.getInventoryById(id).then(results => {
      this.setState({
        userInventory: results.data
      });
    });
  };

  // looping through the inventory state and passing the inventory properties to each item defined
  renderInventory = () => {
    return (
      <div className="inventorySect col-12 px-0 mx-0">
        <ul className="list-inline list-unstyled px-0 mx-0">
          {this.state.userInventory.map(inv => (
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
        <Manage />
        {this.renderInventory()}
        <Footer />
      </div>
    );
  }
}

export default ManagePage;
