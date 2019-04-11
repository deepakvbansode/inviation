import React, { Component } from "react";
import NewInviteComponent from "../components/NewInviteComponent";
import InvitationListComponent from "../components/InvitationListComponent";
import API from "../shared/utitlity/restUtils";
import API_ENDPOINTS from "./../settings";
import uuidv1 from "uuid/v1";
class AdminContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      isSavingInvite: false,
      invitations: []
    };
  }
  saveInvite = (to, message, by) => {
    this.setState({ isSavingInvite: true });
    API.save(API_ENDPOINTS.saveIntvite, {
      to,
      message,
      by,
      id: uuidv1()
    }).then(response => {
      if (response.status === 200) this.getAllInvites();
    });
  };
  componentDidMount() {
    this.getAllInvites();
  }
  getAllInvites() {
    API.fetch(API_ENDPOINTS.getAllInvitations)
      .then(response => {
        this.setState({
          invitations: response.data
        });
      })
      .catch(err => console.log("eeror", err));
  }
  render() {
    const { isLoading, invitations, isSavingInvite } = this.state;
    return (
      <div className="container-fluid admin">
        <NewInviteComponent
          saveInvite={this.saveInvite}
          isSavingInvite={isSavingInvite}
        />
        <InvitationListComponent
          isLoading={isLoading}
          invitations={invitations}
        />
      </div>
    );
  }
}

export default AdminContainer;
