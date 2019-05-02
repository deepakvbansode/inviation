import React, { Component } from "react";
import { HomeComponent } from "../components/HomeComponent";
import { SideBarComponent } from "../components/SideBarComponent";
import API from "../shared/utitlity/restUtils";
import API_ENDPOINTS from "./../settings";
import { isMobileDevice } from "../shared/utitlity/common";

class InvitationContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFullWidth: !isMobileDevice(),
      invitation: null,
      showInvitation: false
    };
  }
  componentDidMount() {
    let { id } = this.props.match.params;
    if (id) {
      this.getInvitations(id);
      setTimeout(() => this.setState({ showInvitation: true }), 6000);
    }
  }
  getInvitations(id) {
    let url = API_ENDPOINTS.formatUrl(API_ENDPOINTS.getInvite, id);
    API.fetch(url)
      .then(response => {
        this.setState({
          invitation: response.data
        });
      })
      .catch(err => console.log("eeror", err));
  }
  toggleView = () => {
    this.setState(prevStage => {
      return {
        isFullWidth: !prevStage.isFullWidth
      };
    });
  };
  closeInvitation = () => {
    this.setState({ showInvitation: false });
  };
  render() {
    const { isFullWidth, invitation, showInvitation } = this.state;
    return (
      <div className="container-fluid">
        <div className="row">
          <HomeComponent
            isFullWidth={isFullWidth}
            toggleView={this.toggleView}
            invitation={invitation}
            showInvitation={showInvitation}
            closeInvitation={this.closeInvitation}
          />
          <SideBarComponent show={!isFullWidth} />
        </div>
      </div>
    );
  }
}

export default InvitationContainer;
