import React, { Component } from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";

class AboutV1 extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";

    return (
      <div className="ltn__about-us-area pt-120 pb-90 ">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <div className="about-us-img-wrap about-img-left">
                <img
                  src={publicUrl + "assets/img/about/about.jpg"}
                  alt="About Us Image"
                />
                <div className="about-us-img-info about-us-img-info-2 about-us-img-info-3">
                  <div className="ltn__video-img ltn__animation-pulse1">
                    {/* <img
                      src={publicUrl + "assets/img/others/8.png"}
                      alt="video popup bg image"
                    /> */}
                    {/* <a
                      className="ltn__video-icon-2 ltn__video-icon-2-border---"
                      href="https://www.youtube.com/embed/X7R-q9rsrtU?autoplay=1&showinfo=0"
                      data-rel="lightcase:myCollection"
                    >
                      <i className="fa fa-play" />
                    </a> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="about-us-info-wrap">
                <div className="section-title-area ltn__section-title-2--- mb-20">
                  <h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">
                    About Us
                  </h6>
                  <h1 className="section-title">
                    The Leading Professional Estate Management Service
                    <span>.</span>
                  </h1>
                  <p>
                    It is Quoin Estates mission to help our clients from
                    investment companies to home owners across a variety of
                    buildings, from large blocks of flats to converted terraced
                    properties. The services we offer are highly valued by all
                    our clients, tenants and landlords.
                  </p>
                </div>
                <ul className="ltn__list-item-half clearfix">
                  <li>
                    <i className="flaticon-home-2" />
                    Residential Management
                  </li>
                  <li>
                    <i className="flaticon-mountain" />
                    Commercial Management
                  </li>
                  <li>
                    <i className="flaticon-heart" />
                    Property Management
                  </li>
                  <li>
                    <i className="flaticon-secure" />
                    Compliance Management
                  </li>
                  <li>
                    <i className="flaticon-secure" />
                    Legal
                  </li>
                  <li>
                    <i className="flaticon-secure" />
                    Emergency Response
                  </li>
                </ul>
                <div className="ltn__callout bg-overlay-theme-05  mt-30">
                  <p>
                    "Thank you for providing such exceptional Estate Management
                    services. Your attention to detail, professionalism, and
                    dedication to ensuring our property is well-maintained is
                    truly appreciated. We couldn't be happier with your team's
                    work and the peace of mind you've given us knowing that our
                    property is in good hands."{" "}
                  </p>
                </div>
                <div className="btn-wrapper animated go-top">
                  <Link to="/service" className="theme-btn-1 btn btn-effect-1">
                    OUR SERVICES
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutV1;
