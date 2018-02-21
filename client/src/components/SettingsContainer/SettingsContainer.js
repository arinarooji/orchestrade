import React from "react";
import "./SettingsContainer.css";
import SideNavi from "../SideNavi";
import PrivacyPolicy from "../PrivacyPolicy";
import AccountDetail from "../Account";

const SettingsContainer = props => {
  // this variable is equal to the function clickedPage from the parent
  // it is passed down to the sideNavi component
  const theLink = props.aLinkClicked;
  let Page = props.pageToRender;
  console.log(Page);
  const pageRender = function(Page){
    // if (Page === "privacy"){
    //   return <PrivacyPolicy/>
    // }else {
    //   return <AccountDetail/>
    // }
    console.log(Page)
  }

  return (
    <div className="settings">
      <div className="row">
        <SideNavi className="col-md-4" whichLink={theLink} />
        <section className="display col-md-8">
          {this.pageRender}
        </section>
      </div>
    </div>
  );
};

export default SettingsContainer;
