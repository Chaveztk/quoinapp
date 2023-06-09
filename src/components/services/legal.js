import React, { Component } from "react";
import "../../assets/sass/legal.scss";
import { Link } from "react-router-dom";
import parse from "html-react-parser";

import Navbar from "../global-components/navbar-v4";
import PageHeader from "../global-components/page-header";

import CallToActionV1 from "../section-components/call-to-action-v1";
import SponsorV2 from "../section-components/sponsor-v2";
import Footer from "../global-components/footer";

class Legal extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";

    return (
      <div>
        <div className="legal-details-page ltn__page-details-area ltn__legal-details-page-area mb-105">
          <Navbar />
          <div className="legal-details-page__legal-details-page-header">
            <h1 className="legal-details-page__project-title">Legal</h1>
          </div>

          {/* <PageHeader headertitle="Portfolio 1" /> */}

          <div className="legal-details-page__container container w-100">
            <div className="row">
              <p>
                {" "}
                <span className="ltn__first-letter">Q</span>uoin management
                provides legal assistance to their clients as part of their
                services. Legal help is an important aspect of property
                management as it can help protect the interests of both the
                property owner and the tenants. Here are some ways in which
                Quoin management can provide you legal help:
              </p>

              <p>
                Tenant Eviction: Quoin management can provide legal assistance
                to landlords who need to evict tenants. This process can be
                complex and time-consuming, so having a property management
                company handle the eviction process can save landlords a lot of
                time and stress.
              </p>
              <p>
                Tenant Disputes: Quoin management can help landlords resolve
                disputes with tenants, such as disputes over rent payments or
                property damage. They can negotiate with tenants on behalf of
                the landlord and try to resolve the dispute without going to
                court.
              </p>
              <p>
                Compliance with Local and State Laws: Compliance with local and
                state laws: Quoin management can help ensure that landlords
                comply with local and state laws. This can include laws related
                to rent control, habitability, and fair housing.
              </p>
            </div>
            <div className="row mt-4 mb-4 reverse-columns">
              <div className="col-lg-6">
                <img
                  src={publicUrl + "assets/img/service/legal-2.jpg"}
                  alt="image"
                />
              </div>
              <p className="col-lg-6">
                <h1> Drafting and reviewing leases </h1>
                Quoin management can help landlords draft and review leases that
                comply with local and state laws. This can ensure that the lease
                protects the landlord's rights and interests while also ensuring
                that tenants are aware of their obligations.
              </p>
            </div>
            <div className="row mt-3 mb-5">
              <p className="col-lg-6 ">
                <h1> Conveyancing </h1>
                At our property conveyancing service, we take pride in our
                exceptional customer service. We understand that,buying or
                selling property can be a complex and emotional process, which
                is why we're here to guide you through every step of the way.
                From property searches and legal documentation to liaising with
                real estate agents and mortgage brokers, we'll keep you informed
                and updated throughout the transaction, providing you with peace
                of mind and confidence in your property transaction.
              </p>
              <div className="col-lg-6">
                <img
                  src={publicUrl + "assets/img/service/legal-3.jpg"}
                  alt="image"
                />
              </div>
            </div>
            <div className="row mt-4 mb-4 reverse-columns">
              <div className="col-lg-6">
                <img
                  src={publicUrl + "assets/img/service/legal-4.jpg"}
                  alt="image"
                />
              </div>
              <p className="col-lg-6">
                <h1> Property Inspection</h1>
                Property Inspection: Quoin management can conduct regular
                property inspections to ensure that the property is in
                compliance with local and state laws. This can include ensuring
                that the property is safe for tenants and that it meets health
                and safety standards.
              </p>
            </div>
          </div>

          <SponsorV2 />
          <CallToActionV1 />
          <Footer />
        </div>
      </div>
    );
  }
}

export default Legal;
