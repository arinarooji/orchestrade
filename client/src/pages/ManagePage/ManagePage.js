import React, { Component } from "react";
import Navi from "../../components/Navi";
import Manage from "../../components/Manage";

class ManagePage extends Component {
  render() {
    return (
      <div>
        <Navi />
        <Manage />
      </div>
    );
  }
}

export default ManagePage;
