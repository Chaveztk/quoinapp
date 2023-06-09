import React, { Component } from "react";
import "../../assets/sass/portfolio-one-details.scss";
import { Link } from "react-router-dom";
import parse from "html-react-parser";

import Navbar from "../global-components/navbar-v4";
import PageHeader from "../global-components/page-header";

import CallToActionV1 from "../section-components/call-to-action-v1";
import SponsorV2 from "../section-components/sponsor-v2";
import Footer from "../global-components/footer";
import PhotoGallery from "./portfolio1Gallery";

import PortfolioSlider from "./portfolio-slider-v1";

class PortfolioOne extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";

    return (
      <div>
        <div className="portfolio-one-details ltn__page-details-area ltn__portfolio-one-details-area mb-105">
          <Navbar />
          <div className="portfolio-one-details__portfolio-one-header">
            <h5 className="portfolio-one-details__portfolio-one-year">2022</h5>
            <h1 className="portfolio-one-details__portfolio-one-title">
              Portfolio 1
            </h1>
            <h4 className="portfolio-one-details__project-brief">
              This is a brief description of the project
            </h4>
          </div>

          {/* <PageHeader headertitle="Portfolio 1" /> */}

          <div className="portfolio-one-details__container container w-100">
            <div className="row">
              {/* <div className="col-lg-6">
                <div className="ltn__page-details-inner ltn__service-details-inner"> */}
              {/* <div className="portfolio-details__img-div ltn__blog-grid-img">
                    <img
                      src={publicUrl + "assets/img/service/block-1.jpg"}
                      alt="Image"
                    />
                  </div> */}
              <div class="col-sm mb-5">
                <h2>Portfolio 1</h2>
                <h4>Project Brief</h4>

                <p>Brief</p>
                <p>Lorem ipsum, dolor sit amet consectetur</p>
                <p>Objective</p>
                <p>Our Objective is to </p>
                <p>Budget</p>
                <p>£100,000.00</p>

                <Link className="btn btn-effect-3 btn-white" to="/contact">
                  Get Quote <i className="icon-next" />
                </Link>
              </div>
              <div class="col-sm">
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veniam libero aut enim repellendus assumenda vel fugiat.
                  Dolore, mollitia dolorum voluptatum sequi accusantium a ab
                  voluptas neque asperiores placeat earum modi.
                </p>
              </div>
              <div class="col-sm">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi
                  illo minus earum, autem ipsa consequatur temporibus, esse
                  fugiat quo expedita pariatur perspiciatis dignissimos hic,
                  consequuntur natus exercitationem minima praesentium vero?
                </p>
              </div>
              {/* </div>
              </div> */}
            </div>
            <PhotoGallery />
            <div class="col-sm mb-5"></div>
            <PortfolioSlider />
          </div>
          <SponsorV2 />
          <CallToActionV1 />
          <Footer />
        </div>
      </div>
    );
  }
}

export default PortfolioOne;
