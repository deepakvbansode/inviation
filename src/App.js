import React, { Component } from "react";

import { HomeComponent } from "./components/HomeComponent";
import { SideBarComponent } from "./components/SideBarComponent";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFullWidth: true
    };
  }
  toggleView = () => {
    this.setState(prevStage => {
      return {
        isFullWidth: !prevStage.isFullWidth
      };
    });
  };
  render() {
    const { isFullWidth } = this.state;
    return (
      <div className="container-fluid">
        <div className="row">
          <HomeComponent
            isFullWidth={isFullWidth}
            toggleView={this.toggleView}
          />
          <SideBarComponent show={!isFullWidth} />
        </div>
      </div>
    );
  }
}

export default App;
