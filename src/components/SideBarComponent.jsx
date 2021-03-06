import React from "react";
import { FlipComponent } from "./FlipComponent";
import groomImage from "./../assets/images/deepak.jpg";
import brideImage from "./../assets/images/vaibhavi.jpg";
import firstMeeting from "./../assets/images/valentine.jpg";
import firstDate from "./../assets/images/first-date-final.jpg";
import engagement from "./../assets/images/engagement-final.jpg";
import valentine from "./../assets/images/my-valentine.jpg";
import AdressContainer from "../containers/AdressContainer";

export const SideBarComponent = ({ show }) => {
  let siderBarClasses = show ? "col-md-6 sideBar" : "d-none";
  return (
      <div className={siderBarClasses}>
        <div className="storyTitle">
          <h2>HAPPY COUPLE</h2>
        </div>
        <div className="bridalContainer row">
          <div className="col-6 groom">
            <FlipComponent profile={groomImage}>
              <div>
                <h3>Deepak Bansode (M.Sc. Computer)</h3>
                <p>
                  Basically from Tugaon, Tal. Aland and currently living in
                  Vishal nagar pune. Works as Senior Software developer in
                  Webonise Lab pvt.ltd
                </p>
              </div>
            </FlipComponent>
          </div>
          <div className="col-6 bride">
            <FlipComponent profile={brideImage}>
              <div>
                <h3>Vaibhavi Kamble (B.E. Computer)</h3>
                <p>
                  Born and brought up in wagholi, Tal. Haweli, Pune. Works as
                  Technical Support Engineer in Perpetuiuity technosoft pvt.ltd
                </p>
              </div>
            </FlipComponent>
          </div>
        </div>

        <div className="storyTitle">
          <h2>LOVE STORY</h2>
          <div className="storySection">
            <div className="storyLine hidden-xs" />
            <div className="row">
              <div className="time col-md-6 col-sm-6 col-xs-12">
                <div className="storyContent left">
                  <div className="storyCBlock">
                    <div className="col-md-12">
                      <h3>We met for the first time</h3>
                      <span className="storyDate">
                        25<sup>th</sup> Nov 2018
                      </span>
                    </div>
                    <div className="col-md-12">
                      <img
                        src={firstMeeting}
                        alt=""
                        className="responsiveImage"
                      />
                    </div>
                  </div>
                  <p>
                    Before we met each other, we never knew what it was like to
                    be able to look at someone special and smile for no reason.
                  </p>
                </div>
              </div>
              <div className="date col-md-6 col-sm-6 col-xs-12">
                <div className="storyContent right animated">
                  <div className="storyCBlock">
                    <div className="col-md-12">
                      <img src={firstDate} alt="" className="responsiveImage" />
                    </div>
                    <div className="col-md-12">
                      <h3 className="pull-right">Our first date</h3>
                      <span className="storyDate">
                        13<sup>th</sup> Jan 2019
                      </span>
                    </div>
                  </div>
                  <p>
                    It was indeed a pleasant shock to know that we resemble each
                    other so much in so many ways. The biggest surprise is
                    knowing that your partner has the same quirks as you do :)
                    and knowing each other has been like a journey of exploring
                    the self in greater depths and getting newer insights with
                    every passing moment. Since our journeys were so alike we
                    decided that we will trod them together as one although in
                    two different bodies.
                  </p>
                </div>
              </div>
              <div className="together col-md-6 col-sm-6 col-xs-12">
                <div className="storyContent left animated">
                  <div className="storyCBlock">
                    <div className="col-md-12">
                      <h3>Our Engagement</h3>
                      <span className="storyDate">
                        03<sup>rd</sup> Feb 2019
                      </span>
                    </div>
                    <div className="col-md-12">
                      <img
                        src={engagement}
                        alt=""
                        className="responsiveImage"
                      />
                    </div>
                  </div>
                  <p>
                    When we realized that we wanted to spend the rest of our
                    lives together , we knew this would be the best phase
                    awaiting us.
                  </p>
                </div>
              </div>
              <div className="offer col-md-6 col-sm-6 col-xs-12">
                <div className="storyContent right animated">
                  <div className="storyCBlock">
                    <div className="col-md-12">
                      <img src={valentine} alt="" className="responsiveImage" />
                    </div>
                    <div className="col-md-12">
                      <h3 className="pull-right">First Valentine</h3>
                      <span className="storyDate">
                        14<sup>th</sup> Feb 2019
                      </span>
                    </div>
                  </div>
                  <p>
                    It was the first milestone of love that we achieved together
                    thereby making our bond of love stronger than ever and our
                    commitment to each other more sacred and holy. The pleasure
                    of being together on a special day was an experience beyond
                    words and a memory to cherish for lifetime.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="storyTitle">
          <h2>Wedding Location</h2>
          <div className="row">
            <div className="col addressContainer">
              <AdressContainer />
            </div>
          </div>
        </div>
        <div className="storyTitle">
          <h2>Note</h2>
          <div className="row">
            <div className="col">
              Thank you for helping us to save trees by accepting this online
              inviation. Please, no gifts. Your presence is the best gift we can
              hope to receive.
            </div>
          </div>
        </div>
      </div>)
};
