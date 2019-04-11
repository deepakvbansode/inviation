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
      invitation: {
        id: "288d16a0-5b7f-11e9-b38f-6dd391983701",
        message:
          "I would appreciate your presence at my special event – my wedding with the person I love and treasure. Without you, the wedding ceremony will not be the same. I will be extremely grateful if you decide to come and celebrate this happy occasion together with me! ",
        to: "Dear Manish",
        by: "Deepak Bansode"
      },
      showInvitation: false
    };
  }
  componentDidMount() {
    let { id } = this.props.match.params;
    if (id) {
      //this.getInvitations(id);
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
