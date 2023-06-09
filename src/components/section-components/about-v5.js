import React, { Component } from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";

class AboutV5 extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";

    return (
      <div className="ltn__about-us-area pb-115 go-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 align-self-center">
              <div className="about-us-img-wrap ltn__img-shape-left  about-img-left">
                <img
                  src={publicUrl + "assets/img/service/services.jpg"}
                  alt="Image"
                />
              </div>
            </div>
            <div className="col-lg-7 align-self-center">
              <div className="about-us-info-wrap">
                <div className="section-title-area ltn__section-title-2--- mb-20">
                  <h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">
                    Services
                  </h6>
                  <h1 className="section-title">
                    The Leading Professional Estate Management Service
                    <span>.</span>
                  </h1>
                  <p>Welcome to Quion Managment's Services!</p>
                </div>
                <div className="about-us-info-wrap-inner about-us-info-devide---">
                  <p>
                    We provide a comprehensive range of services to help
                    property owners and investors manage their properties
                    efficiently and effectively.
                  </p>
                </div>
                <div className="about-us-info-wrap-inner about-us-info-devide---">
                  <p>
                    At Quion Management, we strive to provide our clients with
                    the highest level of service and support. We understand that
                    managing a property can be a challenging and time-consuming
                    task, which is why we are here to help. Let us handle the
                    day-to-day management of your property, so you can focus on
                    your other priorities. Contact us today to learn more about
                    our services and how we can help you manage your property.
                  </p>
                </div>
                <div className="btn-wrapper animated">
                  <Link
                    to="/contact"
                    className="theme-btn-1 btn btn-effect-1 text-uppercase"
                  >
                    Contact Us
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

export default AboutV5;
