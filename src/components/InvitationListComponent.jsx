import React, { Component } from "react";

class InvitationListComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ""
    };
  }

  onUserType = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };
  filter = (data, searchString) =>
    data.filter(invite => {
      searchString = searchString.replace(/[^\w\s\&]/gi, "");
      return new RegExp(searchString, "i").test(invite["to"]);
    });
  copyInvite = id => {
    let range = document.createRange();
    range.selectNode(document.getElementById(id));
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
  };
  render() {
    let { search } = this.state;
    let { invitations } = this.props;
    invitations = this.filter(invitations, search);

    let invites = invitations.map((invite, index) => {
      return (
        <tr key={index}>
          <td>{index + 1}</td>
          <td>{invite.to}</td>
          <td>{invite.message}</td>
          <td>{invite.from}</td>
          <td id={invite.id}>{`${window.location.origin}/${invite.id}`}</td>
          <td>
            {" "}
            <button
              className="btn btn-info"
              onClick={this.copyInvite.bind(null, invite.id)}
            >
              Copy
            </button>
          </td>
        </tr>
      );
    });
    return (
      <div className="row">
        <div className="col searchText">
          <input
            type="text"
            className="form-control"
            value={search}
            name="search"
            onChange={this.onUserType}
          />
        </div>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>sr.no</th>
              <th>To</th>
              <th>Message</th>
              <th>By</th>
              <th>Url</th>
              <th />
            </tr>
          </thead>
          <tbody>{invites}</tbody>
        </table>
      </div>
    );
  }
}

export default InvitationListComponent;
