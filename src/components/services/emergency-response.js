import React, { Component } from "react";
import "../../assets/sass/emergency-response.scss";
import { Link } from "react-router-dom";
import parse from "html-react-parser";

import Navbar from "../global-components/navbar-v4";
import PageHeader from "../global-components/page-header";

import CallToActionV1 from "../section-components/call-to-action-v1";
import SponsorV2 from "../section-components/sponsor-v2";
import Footer from "../global-components/footer";

class EmergencyResponse extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";

    return (
      <div>
        <div className="emergency-details-page ltn__page-details-area ltn__emergency-details-page-area mb-105">
          <Navbar />
          <div className="emergency-details-page__emergency-details-page-header">
            <h1 className="emergency-details-page__project-title">
              Emergency Response
            </h1>
          </div>

          {/* <PageHeader headertitle="Portfolio 1" /> */}

          <div className="emergency-details-page__container container w-100">
            <div className="row">
              <p>
                {" "}
                <span className="ltn__first-letter">Q</span>uion property
                management recognizes the importance of emergency preparedness
                and response in ensuring the safety and well-being of their
                clients and tenants. They provide various forms of emergency
                response help to their clients to ensure that they are prepared
                for any unforeseen events.
              </p>
              <p>
                {" "}
                Here are some ways Quion property management provides emergency
                response help:
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
                  src={publicUrl + "assets/img/service/emergency-1.jpg"}
                  alt="image"
                />
              </div>
              <p className="col-lg-6">
                <h1> 24/7 Emergency Hotline </h1>
                Quion property management provides a 24/7 emergency hotline that
                tenants can call in case of emergencies. This hotline is staffed
                by trained professionals who can provide immediate assistance
                and dispatch emergency services if necessary.
              </p>
            </div>
            <div className="row mt-3 mb-5">
              <p className="col-lg-6 ">
                <h1> Emergency Preparedness Planning </h1>
                Quion property management can assist clients in developing
                emergency preparedness plans that outline the procedures to be
                followed in the event of an emergency. This includes evacuation
                plans, emergency contacts, and procedures for communication and
                coordination with emergency responders.
              </p>
              <div className="col-lg-6">
                <img
                  src={publicUrl + "assets/img/service/emergency-2.jpg"}
                  alt="image"
                />
              </div>
            </div>
            <div className="row mt-4 mb-4 reverse-columns">
              <div className="col-lg-6">
                <img
                  src={publicUrl + "assets/img/service/emergency-3.jpg"}
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
          <div className="row mt-4 mb-4"></div>
          <div className="col-lg-6"></div>
          <SponsorV2 />
          <CallToActionV1 />
          <Footer />
        </div>
      </div>
    );
  }
}

export default EmergencyResponse;
