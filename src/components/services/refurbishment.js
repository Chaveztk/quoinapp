import React, { Component } from "react";
import "../../assets/sass/refurbishment.scss";
import { Link } from "react-router-dom";
import parse from "html-react-parser";

import Navbar from "../global-components/navbar-v4";
import PageHeader from "../global-components/page-header";

import CallToActionV1 from "../section-components/call-to-action-v1";
import SponsorV2 from "../section-components/sponsor-v2";
import Footer from "../global-components/footer";

class Refurbishment extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";

    return (
      <div>
        <div className="refurbishment-details-page ltn__page-details-area ltn__refurbishment-details-page-area mb-105">
          <Navbar />
          <div className="refurbishment-details-page__refurbishment-details-page-header">
            <h1 className="refurbishment-details-page__project-title">
              Refurbishment
            </h1>
          </div>

          {/* <PageHeader headertitle="Portfolio 1" /> */}

          <div className="refurbishment-details-page__container container w-100">
            <div className="row">
              <p>
                {" "}
                <span className="ltn__first-letter">Q</span>uion property
                management understands the importance of maintaining and
                improving the properties they manage. They provide expert
                refurbishment help to their clients to ensure that their
                properties are well-maintained, functional, and attractive to
                tenants.
              </p>
              {/* <p>
                {" "}
                Here are some ways Quion property management provides
                refurbishment help:
              </p> */}
            </div>
            <div className="row mt-4 mb-4 reverse-columns">
              <div className="col-lg-6">
                <img
                  src={publicUrl + "assets/img/service/refurb-1.jpg"}
                  alt="image"
                />
              </div>
              <p className="col-lg-6">
                <h1> Property Inspections </h1>
                Quion property management conducts regular property inspections
                to identify areas that require refurbishment or repair. This
                includes assessing the condition of the building, identifying
                any maintenance issues, and determining whether any upgrades or
                renovations are necessary.
              </p>
            </div>
            <div className="row mt-3 mb-5">
              <p className="col-lg-6 ">
                <h1> Budget Planning </h1>
                Quion property management works with clients to develop a budget
                for refurbishment projects. They provide cost estimates for
                different options, helping clients make informed decisions about
                how to allocate their refurbishment budget.
              </p>
              <div className="col-lg-6">
                <img
                  src={publicUrl + "assets/img/service/refurb-2.jpg"}
                  alt="image"
                />
              </div>
            </div>
            <div className="row mt-4 mb-4 reverse-columns">
              <div className="col-lg-6">
                <img
                  src={publicUrl + "assets/img/service/refurb-3.jpg"}
                  alt="image"
                />
              </div>
              <p className="col-lg-6">
                <h1> Upgrades and Renovations</h1>
                Quion property management manages refurbishment projects from
                start to finish, ensuring that the work is completed on time,
                within budget, and to the highest standard. They liaise with
                contractors, obtain necessary permits and approvals, and
                supervise the work to ensure that it meets the client's
                expectations.
              </p>
            </div>
            <div className="row mt-3 mb-5">
              <p className="col-lg-6 ">
                <h1> Sustainable Improvements </h1>
                Quion property management works with clients to develop a budget
                for refurbishment projects. They provide cost estimates for
                different options, helping clients make informed decisions about
                how to allocate their refurbishment budget.
              </p>
              <div className="col-lg-6">
                <img
                  src={publicUrl + "assets/img/service/refurb-4.jpg"}
                  alt="image"
                />
              </div>
            </div>
            <p>
              Quion property management provides expert refurbishment help to
              their clients. They conduct property inspections, assist with
              budget planning, manage refurbishment projects, identify areas for
              upgrades and renovations, and help clients make sustainable
              improvements to their properties. By doing so, they ensure that
              their clients' properties are well-maintained, functional, and
              attractive to tenants.
            </p>
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

export default Refurbishment;
