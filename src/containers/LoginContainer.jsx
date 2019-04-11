import React, { Component } from "react";
import session from "../shared/utitlity/sessionProvider";
class LoginContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      error: ""
    };
  }

  onUserType = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  onLogin = () => {
    if (
      this.state.username === "Deepak" &&
      this.state.password === "Vaibhavi"
    ) {
      session.setAuthToken("login");
      this.props.history.push("/admin");
    } else
      this.setState({
        error: "Invalid User"
      });
  };
  render() {
    const { username, password, error } = this.state;
    return (
      <div className="container h-100">
        <div className="d-flex justify-content-center h-100">
          <div className="user_card">
            <div className="d-flex justify-content-center links">{error}</div>
            <div className="d-flex justify-content-center form_container">
              <form>
                <div className="input-group mb-3">
                  <div className="input-group-append">
                    <span className="input-group-text">
                      <i className="fas fa-user" />
                    </span>
                  </div>
                  <input
                    type="text"
                    name="username"
                    className="form-control input_user"
                    value={username}
                    placeholder="username"
                    onChange={this.onUserType}
                  />
                </div>
                <div className="input-group mb-2">
                  <div className="input-group-append">
                    <span className="input-group-text">
                      <i className="fas fa-key" />
                    </span>
                  </div>
                  <input
                    type="password"
                    name="password"
                    className="form-control input_pass"
                    value={password}
                    placeholder="password"
                    onChange={this.onUserType}
                  />
                </div>
              </form>
            </div>
            <div className="d-flex justify-content-center mt-3 login_container">
              <button
                type="button"
                name="button"
                className="btn login_btn"
                onClick={this.onLogin}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginContainer;
