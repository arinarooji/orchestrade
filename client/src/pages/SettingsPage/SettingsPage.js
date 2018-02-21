import React, { Component } from "react";
import Navi from "../../components/Navi";
import Footer from "../../components/Footer";
import SettingsContainer from "../../components/SettingsContainer";
import "./SettingsPage.css";

class Settings extends Component {
  state = {
    page: ""
  };

  // this funcion is being passed as a prop to the settings container
  // it sets the state equal the specific link that is clicked
  clickedPage = event => {
    const linkClicked = event.currentTarget.dataset.value;
    this.setState({page: linkClicked}, function(){
      const something = this.state.page;
      this.pageChange(something);
    })
  }

  pageChange = function(whichState){
    return whichState;
  }
  render() {
    const thisPage = this.state.page;
    return (
      <div>
        <Navi />
        <div className="addSpace">
          <SettingsContainer aLinkClicked={this.clickedPage} yourValue={this.state.page} pageToRender={thisPage}/>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Settings;
