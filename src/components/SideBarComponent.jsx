import React from "react";
import { FlipComponent } from "./FlipComponent";
import { CubeComponent } from "./CubeComponent";
import groomImage from "./../assets/images/deepak.jpg";
import brideImage from "./../assets/images/vaibhavi.jpg";
import firstMeeting from "./../assets/images/gallery/first-met.jpeg";
import firstDate from "./../assets/images/gallery/first-date.jpeg";
import engagement from "./../assets/images/gallery/engagement.jpeg";
import valentine from "./../assets/images/gallery/valentine.jpeg";

export const SideBarComponent = ({ show }) => {
  let siderBarClasses = show ? "col-6 sideBar" : "d-none";
  if (show)
    return (
      <div className={siderBarClasses}>
        <div className="storyTitle">
          <h2>HAPPY COUPLE</h2>
        </div>
        <div className="bridalContainer row">
          <div className="col-xs-12 col-md-6 groom">
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
          <div className="col-xs-12 col-md-6 bride">
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
          <div class="storySection">
            <div class="storyLine hidden-xs" />
            <div class="row">
              <div class="time col-md-6 col-sm-6 col-xs-12">
                <div class="storyContent left">
                  <div class="storyCBlock">
                    <div class="col-md-6 col-sm-6">
                      <h3>We met for the first time</h3>
                      <span class="storyDate">25th November 2018</span>
                    </div>
                    <div class="col-md-6 col-sm-6">
                      <img src={firstMeeting} alt="" class="responsiveImage" />
                    </div>
                  </div>
                  <p class="textRight">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text.Lorem Ipsum is simply dummy text of the
                    printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text.
                  </p>
                </div>
              </div>
              <div class="date col-md-6 col-sm-6 col-xs-12">
                <div class="storyContent right animated">
                  <div class="storyCBlock">
                    <div class="col-md-6 col-sm-6">
                      <img src={firstDate} alt="" class="responsiveImage" />
                    </div>
                    <div class="col-md-6 col-sm-6">
                      <h3 class="pull-right">Our first date</h3>
                      <span class="storyDate">13th Jan 2019</span>
                    </div>
                  </div>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text.Lorem Ipsum is simply dummy text of the
                    printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text.
                  </p>
                </div>
              </div>
              <div class="together col-md-6 col-sm-6 col-xs-12">
                <div class="storyContent left animated">
                  <div class="storyCBlock">
                    <div class="col-md-6 col-sm-6">
                      <h3>Our Engagement</h3>
                      <span class="storyDate">03rd Feb 2019</span>
                    </div>
                    <div class="col-md-6 col-sm-6">
                      <img src={engagement} alt="" class="responsiveImage" />
                    </div>
                  </div>
                  <p class="textRight">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text.Lorem Ipsum is simply dummy text of the
                    printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text.
                  </p>
                </div>
              </div>
              <div class="offer col-md-6 col-sm-6 col-xs-12">
                <div class="storyContent right animated">
                  <div class="storyCBlock">
                    <div class="col-md-6 col-sm-6">
                      <img src={valentine} alt="" class="responsiveImage" />
                    </div>
                    <div class="col-md-6 col-sm-6">
                      <h3 class="pull-right">First Valentine</h3>
                      <span class="storyDate">14th Feb 2019</span>
                    </div>
                  </div>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text.Lorem Ipsum is simply dummy text of the
                    printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  else return null;
};
