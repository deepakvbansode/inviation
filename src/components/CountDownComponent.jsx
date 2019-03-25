import React from "react";

export class CountDownComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      days: 60,
      hours: 23,
      minutes: 55,
      seconds: 30,
      fold: false
    };
  }

  componentDidMount(){
    setTimeout(() => this.setState({fold: true}), 5000);
  }
  render() {
    const { fold } = this.state;
    let backDeckClasses = fold ? "deckCard back unfold" : "deckCard back";
    let frontDeckClasses = fold ? "deckCard front fold" : "deckCard front";
    return (
      <div className="cardContainer">
        <div className={backDeckClasses}>
          <div className="upperCard"><span>8</span></div>
          <div className="lowerCard"><span>8</span></div>
        </div>
        <div className={frontDeckClasses}>
          <div className="upperCard"><span>9</span></div>
          <div className="lowerCard"><span>9</span></div>
        </div>
      </div>
    );
  }
}
