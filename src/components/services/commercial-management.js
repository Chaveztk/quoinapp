import React, { Component } from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";

import Navbar from "../global-components/navbar-v4";
import PageHeader from "../global-components/page-header";
import CallToActionV1 from "../section-components/call-to-action-v1";
import SponsorV2 from "../section-components/sponsor-v2";
import Footer from "../global-components/footer";


class CommercialManagement extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";

    return (
      <div>
        <Navbar />
        <PageHeader headertitle="Commercial Management" />

        <div className="ltn__page-details-area ltn__service-details-area mb-105">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="ltn__page-details-inner ltn__service-details-inner">
                  <div className="ltn__blog-grid-img">
                    <img
                      src={publicUrl + "assets/img/service/residential-1.jpeg"}
                      alt="Image"
                    />
                  </div>
                  <p>
                    No matter the size of your commercial property large or
                    small, its important to Quoin that you feel confident that
                    your property is under full control.
                  </p>
                  <h1>
                    Big or small we have a list of properties under management.
                  </h1>
                  <p>
                    {" "}
                    <span className="ltn__first-letter">O</span>ur commercial
                    services to landlords include a variety ranging from shops,
                    industrial units to mixed-used properties.
                  </p>
                  <p>
                    Quoin Management understands that dealing with issues such
                    as rent arrears and tenants failing to meet the lease
                    agreement in place can be challenging. With Quoin
                    Managements experienced commercial property team we are
                    confident in giving the best advice to our clients on how to
                    deal with these issues at hand.{" "}
                  </p>
                  <p>
                    We stay on top of our timed scheduled visits and general
                    maintenance to make sure all problems as well as building
                    issues can be dealt with efficiently at a lower cost. We
                    understand that every client has different needs. That is
                    what makes the service here at Quoin successful because we
                    work round the clock to enable the satisfaction of our
                    clients.{" "}
                  </p>
                  <div className="row">
                    <div className="col-lg-6">
                      <img
                        src={
                          publicUrl + "assets/img/service/residential-2.jpeg"
                        }
                        alt="image"
                      />
                      <label>Image caption here.</label>
                    </div>
                    <div className="col-lg-6">
                      <img
                        src={publicUrl + "assets/img/service/residential-3.jpg"}
                        alt="image"
                      />
                    </div>
                  </div>
                  <h2>Our commercial property management service includes:</h2>
                  <ul>
                    <li>Everyday repairs and maintenance</li>
                    <li>Half yearly property inspections</li>
                    <li>Serving of relevant notices</li>
                    <li>General health and safety checks</li>
                    <li>Financial services</li>
                    <li>Leasehold enquiries and lease interpretations</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4">
                <aside className="sidebar-area ltn__right-sidebar">
                  {/* Menu Widget */}
                  <div className="widget-2 ltn__menu-widget ltn__menu-widget-2 text-uppercase">
                    <ul className="go-top">
                      <li>
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
                      <li className="active">
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

export default CommercialManagement;
