import React, { Component } from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";

class ServiceV5 extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";

    return (
      <div className="ltn__service-area section-bg-1 pt-115 pb-70 go-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title-area ltn__section-title-2--- text-center">
                <h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">
                  Our Services
                </h6>
                <h1 className="section-title">Our Core Services</h1>
              </div>
            </div>
          </div>
          <div className="row  justify-content-center">
            <div className="col-lg-4 col-sm-6 col-12">
              <div className="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1">
                <div className="ltn__feature-icon">
                  <span>
                    <i className="flaticon-house" />
                  </span>
                </div>
                <div className="ltn__feature-info">
                  <h3>
                    <Link to="/property-management">Property Management</Link>
                  </h3>
                  <p>
                    We stand by our policy for the peace of our clients, working
                    together with all parties to know the building in-depth,
                    ensuring all aspects of the building are covered.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-12">
              <div className="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1">
                <div className="ltn__feature-icon">
                  <span>
                    <i className="flaticon-mortgage" />
                  </span>
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
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-12">
              <div className="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1">
                <div className="ltn__feature-icon">
                  <span>
                    <i className="flaticon-operator" />
                  </span>
                </div>
                <div className="ltn__feature-info">
                  <h3>
                    <Link to="/commercial-management">
                      Commercial Management
                    </Link>
                  </h3>
                  <p>
                    Quoin commercial department endeavor to make sure that our
                    clients reach maximum potential using a personalised
                    tailored plan specially designed by our team of experts.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-12">
              <div className="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1">
                <div className="ltn__feature-icon">
                  <span>
                    <i className="flaticon-house-1" />
                  </span>
                </div>
                <div className="ltn__feature-info">
                  <h3>
                    <Link to="/compliance-management">
                      Compliance Management
                    </Link>
                  </h3>
                  <p>
                    At Quoin we take pride in keeping up to date with the latest
                    legislation and regulations changes for the benefit of our
                    clients within the property industry.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-12">
              <div className="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1">
                <div className="ltn__feature-icon">
                  <span>
                    <i className="flaticon-house-3" />
                  </span>
                </div>
                <div className="ltn__feature-info">
                  <h3>
                    <Link to="/legal">Legal</Link>
                  </h3>
                  <p>
                    Quoins legal experts work alongside our management
                    department therefore ensuring that you receive an integrated
                    support package from our team.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-12">
              <div className="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1">
                <div className="ltn__feature-icon">
                  <span>
                    <i className="flaticon-official-documents" />
                  </span>
                </div>
                <div className="ltn__feature-info">
                  <h3>
                    <Link to="/emergency-response">Emergency Response</Link>
                  </h3>
                  <p>
                    Here at Quion management we understand that emergencies do
                    happen, so we take it on board to offer 24 hour service for
                    all emergencies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ServiceV5;
