import React, { Component } from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";

import Navbar from "../global-components/navbar-v4";
import PageHeader from "../global-components/page-header";

import CallToActionV1 from "../section-components/call-to-action-v1";
import SponsorV2 from "../section-components/sponsor-v2";
import Footer from "../global-components/footer";

class BlockManagement extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";

    return (
      <div>
        <Navbar />
        <PageHeader headertitle="Block Management" />

        <div className="ltn__page-details-area ltn__service-details-area mb-105">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="ltn__page-details-inner ltn__service-details-inner">
                  <div className="ltn__blog-grid-img">
                    <img
                      src={publicUrl + "assets/img/service/block-1.jpg"}
                      alt="Image"
                    />
                  </div>
                  <p>
                    {" "}
                    <span className="ltn__first-letter">B</span>lock management
                    is a specialized form of property management that involves
                    managing multi-unit residential or commercial properties.
                    Quion property management provides expert block management
                    help to their clients, ensuring that their properties are
                    well-maintained, efficiently managed, and attractive to
                    tenants.
                  </p>
                  <p>
                    {" "}
                    Here are some ways Quion property management provides block
                    management help:
                  </p>
                  <ul>
                    <li>
                      Financial management: Quion property management provides
                      financial management services to their clients, including
                      budget planning, rent collection, and payment of expenses.
                      They ensure that clients have a clear understanding of
                      their financial obligations and that the property is
                      generating sufficient income to cover expenses and provide
                      a return on investment.
                    </li>
                    <li>
                      Maintenance and repairs: Quion property management ensures
                      that the property is well-maintained and that any
                      necessary repairs are completed promptly. They coordinate
                      with contractors and vendors to ensure that work is
                      completed to a high standard and that it is completed
                      within budget.
                    </li>
                    <li>
                      Tenant management: Quion property management manages
                      tenant relations, including screening tenants, addressing
                      tenant complaints, and ensuring that tenants are meeting
                      their lease obligations. They also handle lease renewals,
                      move-ins, and move-outs.
                    </li>
                    <li>
                      Compliance management: Quion property management ensures
                      that the property is in compliance with all applicable
                      regulations, including zoning, safety, and environmental
                      regulations. They keep up-to-date with changes in
                      regulations and make sure that clients are aware of any
                      new requirements.
                    </li>
                    <li>
                      Communication and reporting: Quion property management
                      communicates regularly with clients, providing updates on
                      property performance, financial statements, and other key
                      metrics. They also provide regular reports on maintenance,
                      repairs, and tenant relations.
                    </li>
                  </ul>
                  <div className="row">
                    <div className="col-lg-6">
                      <img
                        src={publicUrl + "assets/img/service/block-2.jpg"}
                        alt="image"
                      />
                      <label>Image caption here.</label>
                    </div>
                    <div className="col-lg-6">
                      <img
                        src={publicUrl + "assets/img/service/block-3.jpg"}
                        alt="image"
                      />
                    </div>
                  </div>
                  <p>
                    Quion property management provides comprehensive block
                    management help to their clients. They provide financial
                    management services, coordinate maintenance and repairs,
                    manage tenant relations, ensure compliance with regulations,
                    and provide regular communication and reporting. By doing
                    so, they ensure that their clients' properties are
                    well-maintained, efficiently managed, and attractive to
                    tenants.
                  </p>
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
                      <li className="active">
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
                  {/* <div className="widget ltn__banner-widget go-top">
                    <Link to="/shop">
                      <img
                        src={publicUrl + "assets/img/banner/banner-1.jpg"}
                        alt="Banner Image"
                      />
                    </Link>
                  </div> */}
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

export default BlockManagement;
