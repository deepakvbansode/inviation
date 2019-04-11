import React, { Component } from "react";

class InvitationListComponent extends Component {
  render() {
    let invites = this.props.invitations.map((invite, index) => {
      return (
        <tr key={index}>
          <td>{index + 1}</td>
          <td>{invite.to}</td>
          <td>{invite.message}</td>
          <td>{invite.by}</td>
          <td>{`${window.location.origin}/${invite.id}`}</td>
        </tr>
      );
    });
    return (
      <div className="row">
        <table className="table table-hover">
          <thead>
            <tr>
              <th>sr.no</th>
              <th>To</th>
              <th>Message</th>
              <th>By</th>
              <th>Url</th>
            </tr>
          </thead>
          <tbody>{invites}</tbody>
        </table>
      </div>
    );
  }
}

export default InvitationListComponent;
