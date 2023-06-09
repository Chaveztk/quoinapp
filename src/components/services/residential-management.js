import React, { Component } from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";

import Navbar from "../global-components/navbar-v4";
import PageHeader from "../global-components/page-header";

import CallToActionV1 from "../section-components/call-to-action-v1";
import SponsorV2 from "../section-components/sponsor-v2";
import Footer from "../global-components/footer";


class ResidentialManagement extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";

    return (
      <div>
        <Navbar />
        <PageHeader headertitle="Residential Management" />

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
                    {" "}
                    We understand that renting out a residential property can be
                    overwhelming....
                  </p>

                  <h1>Quoin residential management For Your Property Needs</h1>
                  <p>
                    {" "}
                    <span className="ltn__first-letter">A</span>s one of
                    online's most diverse professional serviced property
                    management companies, we pride ourselves in the value we
                    bring towards clients as well as tenants. The loyalty built
                    with our tenants brings longer term tenancies which is
                    beneficial towards maximising our clients return on
                    investments.
                  </p>
                  <p>
                    No matter the condition of the property we are confident
                    Quoin Management can help. From refurbishment to meeting
                    legal guidlines Quoin will have you covered. We understand
                    that there can be issues that can arise, but with our local
                    teams and contractors we do regular property checks to avoid
                    many costly maintenance issues. Quoin Emergency teams are
                    available 24 hours a day for the general safety of our
                    clients and tenants.{" "}
                  </p>
                  <p>
                    We send our clients catered statements that shows where and
                    when rent was collected and fixtures/replacements to the
                    property keeping clients updated to have a full hands-off
                    experience.{" "}
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
                  <h2>Our Residential Management Services</h2>
                  <p>
                    Clients know our Residential management team strives to
                    ensure that clients properties are looked after as if it was
                    their own. Our regular supervision of the property keeps
                    your building to its highest standard which enables current
                    tenants to feel secure.{" "}
                  </p>
                  <p>Our services include:</p>
                  <li>Single let</li>
                  <li>HMO</li>
                  <li>End of tenancy cleaning</li>
                  <li>Refurbishment</li>
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
                      <li className="active">
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

export default ResidentialManagement;
