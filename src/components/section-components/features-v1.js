import React, { Component } from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";

class FeaturesV1 extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";

    let customClass = this.props.customClass ? this.props.customClass : "";

    return (
      <div className={customClass}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title-area ltn__section-title-2--- text-center">
                <h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">
                  Our Services
                </h6>
                <h1 className="section-title">Our Main Focus</h1>
              </div>
            </div>
          </div>
          <div className="row ltn__custom-gutter--- justify-content-center go-top">
            <div className="col-lg-4 col-sm-6 col-12">
              <div className="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1">
                <div className="ltn__feature-icon">
                  <img
                    src={publicUrl + "assets/img/icons/icon-img/21.png"}
                    alt="#"
                  />
                </div>
                <div className="ltn__feature-info">
                  <h3>
                    <Link to="/residential-management">
                      Residential Management
                    </Link>
                  </h3>
                  <p>
                    It is within the Quoin Management teams care that our
                    clients premises remain maintained to an excellent standard
                    for the safe security of residents.
                  </p>
                  <Link
                    className="ltn__service-btn"
                    to="/residential-management"
                  >
                    Find Out More <i className="flaticon-right-arrow" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-12">
              <div className="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1 active">
                <div className="ltn__feature-icon">
                  <img
                    src={publicUrl + "assets/img/icons/icon-img/22.png"}
                    alt="#"
                  />
                </div>
                <div className="ltn__feature-info">
                  <h3>
                    <Link to="/block-management">Block Management</Link>
                  </h3>
                  <p>
                    At our property management company, we understand the unique
                    challenges associated with block management. It requires a
                    keen attention to detail, strong communication skills, and a
                    commitment to maintaining the value and functionality of the
                    properties we manage.
                  </p>
                  <Link className="ltn__service-btn" to="/block-management">
                    Find Out More <i className="flaticon-right-arrow" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-12">
              <div className="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1">
                <div className="ltn__feature-icon">
                  <img
                    src={publicUrl + "assets/img/icons/icon-img/23.png"}
                    alt="#"
                  />
                </div>
                <div className="ltn__feature-info">
                  <h3>
                    <Link to="/refurbishment">Refurbishment</Link>
                  </h3>
                  <p>
                    Our team of experts is experienced in all aspects of
                    refurbishment, from minor repairs and cosmetic upgrades to
                    complete renovations. We work closely with property owners
                    to understand their needs and goals, and then develop a
                    refurbishment plan that meets their budget and timeline.
                  </p>
                  <Link className="ltn__service-btn" to="/refurbishment">
                    Find Out More <i className="flaticon-right-arrow" />
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

export default FeaturesV1;
