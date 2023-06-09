import React, { Component } from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";

class AboutV2 extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";

    return (
      <div className="ltn__about-us-area pt-120 pb-90 ">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <div className="about-us-info-wrap">
                <div className="section-title-area ltn__section-title-2--- mb-30">
                  <h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">
                    About Us
                  </h6>
                  <h1 className="section-title">Who We Are</h1>
                  <p>
                    Our experts at Quoin Management have been providing
                    professional estate management services all over the UK
                    since 2008.
                  </p>
                  <p>
                    First starting in London and then expanding widely across
                    the UK, we at Quoin management have now become an online
                    management company increasing the value we bring for our
                    clients across the UK.
                  </p>
                  <p>
                    One of Quoin Managements core principles is ensuring you
                    have peace of mind. This core principle is achieved by the
                    personal touch that all our clients receive.
                  </p>
                </div>
                <ul className="ltn__list-item-2 ltn__list-item-2-before--- ltn__list-item-2-img mb-50">
                  <li>
                    <a
                      href={publicUrl + "assets/img/img-slide/about-4.jpg"}
                      data-rel="lightcase:myCollection"
                    >
                      <img
                        src={publicUrl + "assets/img/img-slide/about-4.jpg"}
                        alt="Image in side a home near the stairs."
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href={publicUrl + "assets/img/img-slide/about-3.jpg"}
                      data-rel="lightcase:myCollection"
                    >
                      <img
                        src={publicUrl + "assets/img/img-slide/about-3.jpg"}
                        alt="Image"
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href={publicUrl + "assets/img/img-slide/about-2.jpg"}
                      data-rel="lightcase:myCollection"
                    >
                      <img
                        src={publicUrl + "assets/img/img-slide/about-2.jpg"}
                        alt="Image"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="about-us-img-wrap about-img-right">
                <img
                  src={publicUrl + "assets/img/others/stairway.jpg"}
                  alt="Image in side a home near the stairs.Image in side a home near the stairs."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutV2;
