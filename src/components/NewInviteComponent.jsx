import React, { Component } from "react";
import { isEmpty } from "lodash";
const intitalState = {
  to: "",
  toError: false,
  message: "",
  messageError: false,
  from: "",
  fromError: false
};
class NewInviteComponent extends Component {
  constructor(props) {
    super(props);
    this.state = intitalState;
  }
  onUserType = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  addInvite = () => {
    let toError = false;
    let messageError = false;
    let fromError = false;
    if (isEmpty(this.state.to)) toError = true;
    if (isEmpty(this.state.message)) messageError = true;
    if (isEmpty(this.state.from)) fromError = true;
    if (toError || messageError || fromError)
      this.setState({ toError, messageError, fromError });
    else {
      this.props.saveInvite(this.state.to, this.state.message, this.state.from);
      this.setState(intitalState);
    }
  };
  render() {
    const { to, toError, message, messageError, from, fromError } = this.state;
    return (
      <div className="row centerForm">
        <form>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput">To:</label>
            <input
              type="text"
              className={`form-control ${toError ? "error" : ""}`}
              id="formGroupExampleInput"
              placeholder="To"
              name="to"
              value={to}
              onChange={this.onUserType}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlTextarea1">
              Invitation Text:
            </label>
            <textarea
              className={`form-control ${messageError ? "error" : ""}`}
              name="message"
              id="Invitation Text"
              rows="3"
              value={message}
              onChange={this.onUserType}
            />
          </div>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput2">By:</label>
            <input
              type="text"
              className={`form-control ${fromError ? "error" : ""}`}
              id="formGroupExampleInput2"
              placeholder="By"
              name="from"
              value={from}
              onChange={this.onUserType}
            />
          </div>
          <button
            type="button"
            className="btn btn-primary"
            onClick={this.addInvite}
          >
            Add Invitation
          </button>
        </form>
      </div>
    );
  }
}

export default NewInviteComponent;
