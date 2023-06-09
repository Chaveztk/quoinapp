import React, { Component } from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";

import Navbar from "../global-components/navbar-v4";
import PageHeader from "../global-components/page-header";

import CallToActionV1 from "../section-components/call-to-action-v1";
import SponsorV2 from "../section-components/sponsor-v2";
import Footer from "../global-components/footer";

class PropertyManagement extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";

    return (
      <div>
        <Navbar />
        <PageHeader headertitle="Property Management" />

        <div className="ltn__page-details-area ltn__service-details-area mb-105">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="ltn__page-details-inner ltn__service-details-inner">
                  <div className="ltn__blog-grid-img">
                    <img
                      src={publicUrl + "assets/img/service/property-1.jpeg"}
                      alt="Image"
                    />
                  </div>
                  <p>
                    Quoin Management are highly experienced service providers
                    for blocks of flats, properties and estates.
                  </p>
                  <h1>
                    Big or small we have a list of properties under management.
                  </h1>
                  <p>
                    {" "}
                    <span className="ltn__first-letter">W</span>hen it come to
                    our property block management or the management of our
                    clients units, we specialise in having all managed sites to
                    be customised to suit their individual needs. Quion
                    management has grown successfully over the years with our
                    key knowledge in property and experience in learning to
                    adopt and adapt through the personal growth between
                    ourselves and our clients. We pay close attention to detail
                    making sure you are always kept updated with all legislation
                    and changes that can affect you and your property assests.
                  </p>
                  <p>
                    We have a detailed understanding of the complex laws that
                    can affect property owners and as a firm of Chartered
                    Surveyors, we have the additional benefit of understanding
                    the technical issues involved in building construction and
                    property maintenance.{" "}
                  </p>
                  <div className="row">
                    <div className="col-lg-6">
                      <img
                        src={publicUrl + "assets/img/service/property-2.jpeg"}
                        alt="image"
                      />
                      <label>Image caption here.</label>
                    </div>
                    <div className="col-lg-6">
                      <img
                        src={publicUrl + "assets/img/service/property-3.jpeg"}
                        alt="image"
                      />
                    </div>
                  </div>
                  <h2>Our property and block management service includes:</h2>
                  <ul>
                    <li>
                      Day to day management of programmed and reactive
                      maintenance
                    </li>
                    <li>On-site caretakers</li>
                    <li>Collection of service charges and ground rents</li>
                    <li>
                      Preparation of annual income and expenditure accounts
                    </li>
                    <li>Manage and maintain a ‘ring fenced’ client account</li>
                    <li>
                      Retain accounts records in line with the RICS Service
                      Charge Residential Management Code (3rd Edition)
                    </li>
                    <li>
                      Dealing with leasehold enquiries and lease interpretations
                    </li>
                    <li>Project management on major works</li>
                    <li>Section 20 consultations and project management</li>
                    <li>Carrying out quarterly property inspections</li>
                    <li>
                      Assisting with the ‘Right to Manage’ process and
                      collective enfranchisement
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4">
                <aside className="sidebar-area ltn__right-sidebar">
                  {/* Menu Widget */}
                  <div className="widget-2 ltn__menu-widget ltn__menu-widget-2 text-uppercase">
                    <ul className="go-top">
                      <li className="active">
                        <Link to="/property-management">
                          Property Management{" "}
                          <span>
                            <i className="fas fa-arrow-right" />
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/residential-management">
                          Residential Management{" "}
                          <span>
                            <i className="fas fa-arrow-right" />
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/commercial-management">
                          Commercial Management{" "}
                          <span>
                            <i className="fas fa-arrow-right" />
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/compliance-management">
                          Compliance Management{" "}
                          <span>
                            <i className="fas fa-arrow-right" />
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/legal">
                          Legal{" "}
                          <span>
                            <i className="fas fa-arrow-right" />
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/emergency-response">
                          Emergency Response{" "}
                          <span>
                            <i className="fas fa-arrow-right" />
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/refurbishment">
                          Refurblishment{" "}
                          <span>
                            <i className="fas fa-arrow-right" />
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/block-management">
                          Block Management{" "}
                          <span>
                            <i className="fas fa-arrow-right" />
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  {/* Newsletter Widget */}
                  <div className="widget ltn__search-widget ltn__newsletter-widget">
                    <h6 className="ltn__widget-sub-title">// subscribe</h6>
                    <h4 className="ltn__widget-title">Get Newsletter</h4>
                    <form action="#">
                      <input type="text" name="search" placeholder="Search" />
                      <button type="submit">
                        <i className="fas fa-search" />
                      </button>
                    </form>
                    <div className="ltn__newsletter-bg-icon">
                      <i className="fas fa-envelope-open-text" />
                    </div>
                  </div>
                  {/* Banner Widget */}
                  <div className="widget ltn__banner-widget go-top">
                    {/* <Link to="/shop">
                      <img
                        src={publicUrl + "assets/img/banner/banner-1.jpg"}
                        alt="Banner Image"
                      />
                    </Link> */}
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </div>
        <SponsorV2 />
        <CallToActionV1 />
        <Footer />
      </div>
    );
  }
}

export default PropertyManagement;
