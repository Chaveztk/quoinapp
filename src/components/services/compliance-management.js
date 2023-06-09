import React, { Component } from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";

import Navbar from "../global-components/navbar-v4";
import PageHeader from "../global-components/page-header";
import CallToActionV1 from "../section-components/call-to-action-v1";
import SponsorV2 from "../section-components/sponsor-v2";
import Footer from "../global-components/footer";


class ComplianceManagement extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";

    return (
      <div>
        <Navbar />
        <PageHeader headertitle="Emergency Response" />

        <div className="ltn__page-details-area ltn__service-details-area mb-105">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="ltn__page-details-inner ltn__service-details-inner">
                  <div className="ltn__blog-grid-img">
                    <img
                      src={publicUrl + "assets/img/service/emergency-1.jpg"}
                      alt="Image"
                    />
                  </div>
                  <p>
                    {" "}
                    <span className="ltn__first-letter">C</span>ompliance
                    management is an essential aspect of property management,
                    and Quion property management is committed to providing
                    their clients with expert assistance in this area. They
                    understand the importance of staying up-to-date with
                    regulations and ensuring that their clients are in
                    compliance with all applicable laws.
                  </p>
                  <p>
                    {" "}
                    Here are some ways Quion property management provides
                    compliance management help:
                  </p>
                  <ul>
                    <li>
                      Regulatory compliance: Quion property management helps
                      clients comply with all relevant regulations, including
                      zoning, safety, and environmental regulations. They keep
                      up-to-date with changes in regulations and make sure that
                      their clients are aware of any new requirements.
                    </li>
                    <li>
                      Lease compliance: Quion property management assists
                      clients in complying with the terms of their leases. This
                      includes ensuring that rent is collected on time, that
                      tenants are meeting their obligations under the lease, and
                      that the property is being maintained according to the
                      lease agreement.
                    </li>
                    <li>
                      Tenant screening: Quion property management conducts
                      thorough background checks on prospective tenants to
                      ensure that they are qualified to rent the property. This
                      includes verifying income, checking credit reports, and
                      conducting criminal background checks.
                    </li>
                    <li>
                      Documentation management: Quion property management helps
                      clients maintain accurate and up-to-date documentation,
                      including lease agreements, rental applications, and
                      financial records. This ensures that clients have the
                      necessary documentation in case of legal disputes or
                      audits.
                    </li>
                    <li>
                      5. Training and education: Quion property management
                      provides training and education to their clients on
                      compliance management best practices. This includes
                      information on regulations, lease compliance, and tenant
                      screening.
                    </li>
                  </ul>
                  <div className="row">
                    <div className="col-lg-6">
                      <img
                        src={publicUrl + "assets/img/service/emergency-2.jpg"}
                        alt="image"
                      />
                      <label>Image caption here.</label>
                    </div>
                    <div className="col-lg-6">
                      <img
                        src={publicUrl + "assets/img/service/emergency-3.jpg"}
                        alt="image"
                      />
                    </div>
                  </div>
                  <p>
                    Quion property management provides comprehensive compliance
                    management help to their clients. They assist with
                    regulatory compliance, lease compliance, tenant screening,
                    documentation management, and provide training and education
                    on compliance management best practices. By doing so, they
                    help their clients stay in compliance with regulations,
                    minimize risk, and avoid legal disputes.
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
                      <li className="active">
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

export default ComplianceManagement;
