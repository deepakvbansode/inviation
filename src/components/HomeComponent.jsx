import React from "react";
import { FlipClock } from "./FlipClockComponent";
import InviteModalComponent from "./InviteModalComponent";

export class HomeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showContent: false
    };
    this.marriageDate = new Date(2019, 4, 11, 12, 30);
  }

  showContent = () => {
    this.setState({ showContent: true });
  };
  render() {
    const {
      isFullWidth,
      toggleView,
      closeInvitation,
      showInvitation,
      invitation
    } = this.props;
    const { showContent } = this.state;
    let homeClasses = isFullWidth
      ? "mainWrapper col-12"
      : "mainWrapper col-md-6";
    let contentClasses = showContent ? "contentWrapper" : "d-none";
    let toggleBtnClass = showContent ? "toggleBtn" : "d-none";

    return (
      <div className={homeClasses}>
        <InviteModalComponent
          invitation={invitation}
          toggle={closeInvitation}
          isOpen={showInvitation}
        />
        <div className="image" onAnimationEnd={this.showContent} />
        <div className={`content ${showContent ? "show" : ""}`}>
          <div className={contentClasses}>
            <div className="marriageTitle">
              <span className="l1">W</span>
              <span className="l2">E</span>
              <span className="l3">&nbsp;</span>
              <span className="l4">A</span>
              <span className="l5">R</span>
              <span className="l6">E</span>
              <span className="l7">&nbsp;</span>
              <span className="l8">G</span>
              <span className="l9">E</span>
              <span className="l10">T</span>
              <span className="l11">T</span>
              <span className="l12">I</span>
              <span className="l13">N</span>
              <span className="l14">G</span>
              <span className="l15">&nbsp;</span>
              <span className="l16">M</span>
              <span className="l17">A</span>
              <span className="l18">R</span>
              <span className="l19">R</span>
              <span className="l20">I</span>
              <span className="l21">E</span>
              <span className="l22">D</span>
            </div>
            <div className="logo" />
            <div className="brideGroom">
              Deepak <span>&</span> Vaibhavi
            </div>
            <div className="countdown">Countdown To Wedding Day</div>

            <FlipClock marriageDate={this.marriageDate} />

            <div className="marriageDate">
              11<span>.</span>05<span>.</span>2019
            </div>
            <div className="saveTitle">
              <span className="l1">S</span>
              <span className="l2">A</span>
              <span className="l3">V</span>
              <span className="l4">E</span>
              <span className="l5">&nbsp;</span>
              <span className="l6">T</span>
              <span className="l7">H</span>
              <span className="l8">E</span>
              <span className="l9">&nbsp;</span>
              <span className="l10">D</span>
              <span className="l11">A</span>
              <span className="l12">T</span>
              <span className="l13">E</span>
            </div>
            <i className="glyphicon glyphicon-arrow-down" />
            <button className="btn btn-info" onClick={toggleView}>
              More info
            </button>
          </div>
        </div>
      </div>
    );
  }
}
