import React from "react";
import { FlipUnitContainer } from "../containers/FlipUnitContainer";

export class FlipClock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      days: 0,
      daysShuffle: true,
      hours: 0,
      hoursShuffle: true,
      minutes: 0,
      minutesShuffle: true,
      seconds: 0,
      secondsShuffle: true
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.updateTime(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  updateTime() {
    // get new date
    const currentTime = new Date();
    let timeDiffInSec = Math.round(
      (this.props.marriageDate.getTime() - currentTime.getTime()) / 1000
    );
    // set time units
    const days = Math.floor(timeDiffInSec / (3600 * 24));
    let hoursRemaining = timeDiffInSec % (3600 * 24);

    const hours = Math.floor(hoursRemaining / 3600);
    let minRemaining = hoursRemaining % 3600;

    const minutes = Math.floor(minRemaining / 60);
    const seconds = minRemaining % 60;

    // on days chanage, update hours and shuffle state
    if (days !== this.state.days) {
      const daysShuffle = !this.state.daysShuffle;
      this.setState({
        days,
        daysShuffle
      });
    }
    // on hour chanage, update hours and shuffle state
    if (hours !== this.state.hours) {
      const hoursShuffle = !this.state.hoursShuffle;
      this.setState({
        hours,
        hoursShuffle
      });
    }
    // on minute chanage, update minutes and shuffle state
    if (minutes !== this.state.minutes) {
      const minutesShuffle = !this.state.minutesShuffle;
      this.setState({
        minutes,
        minutesShuffle
      });
    }
    // on second chanage, update seconds and shuffle state
    if (seconds !== this.state.seconds) {
      const secondsShuffle = !this.state.secondsShuffle;
      this.setState({
        seconds,
        secondsShuffle
      });
    }
  }

  render() {
    // state object destructuring
    const {
      days,
      hours,
      minutes,
      seconds,
      daysShuffle,
      hoursShuffle,
      minutesShuffle,
      secondsShuffle
    } = this.state;

    return (
      <div className={"flipClock"}>
        <FlipUnitContainer unit={"days"} digit={days} shuffle={daysShuffle} />
        <FlipUnitContainer
          unit={"hours"}
          digit={hours}
          shuffle={hoursShuffle}
        />
        <FlipUnitContainer
          unit={"minutes"}
          digit={minutes}
          shuffle={minutesShuffle}
        />
        <FlipUnitContainer
          unit={"seconds"}
          digit={seconds}
          shuffle={secondsShuffle}
        />
      </div>
    );
  }
}
