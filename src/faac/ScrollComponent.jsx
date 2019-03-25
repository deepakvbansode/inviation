import React, { Component } from "react";

export default class ScrollComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position: null
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = event => {
    debugger;
    //const scrollTop = event.srcElement.body.scrollTop;
    const scrollTop = document.scrollingElement.scrollTop;
    this.setState({ position: scrollTop });
  };
  render() {
    return <div>{this.props.children(this.state.position)}</div>;
  }
}
