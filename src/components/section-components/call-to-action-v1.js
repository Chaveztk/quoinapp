import React, { Component } from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";

class CallToActonV1 extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    let imagealt = "image";

    return (
      <div className="ltn__call-to-action-area call-to-action-6 before-bg-bottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="call-to-action-inner call-to-action-inner-6 ltn__secondary-bg position-relative text-center---">
                <div className="coll-to-info text-color-white">
                  <h1>Looking for Estate Management?</h1>
                  <p>
                    Contact Quion Management today to learn more about our
                    services and how we can help you achieve your property
                    management goals. We look forward to working with you and
                    providing you with the peace of mind that comes with knowing
                    your property is in the best possible hands.
                  </p>
                </div>
                <div className="btn-wrapper go-top">
                  <Link className="btn btn-effect-3 btn-white" to="/contact">
                    Contact Us <i className="icon-next" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CallToActonV1;
