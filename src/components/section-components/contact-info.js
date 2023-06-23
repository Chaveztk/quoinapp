import React, { Component } from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";

class ContactInfo extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";

    return (
      <div className="ltn__contact-address-area mb-90">
        <div className="container">
          <div className="">
            <div className="ltn__contact-address-icon"></div>
            <h3>Where We Operate</h3>
            <p>
              The strength of our company is in that we're an online run
              management company, this has given us the ability to communicate
              with our client more effectively across the UK.
            </p>
            <p>
              Our team work 24/7 ensuring our clients can rest assured that
              their property is in safe hands. As a new customer, our team at
              Quoin management would be glad to answer any of your requests.
              Please use the form below or send us an email to get in touch.{" "}
            </p>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="ltn__contact-address-item ltn__contact-address-item-3 box-shadow">
                <div className="ltn__contact-address-icon">
                  <img
                    src={publicUrl + "assets/img/icons/10.png"}
                    alt="Icon Image"
                  />
                </div>

                <h3>Email Address</h3>
                <p>
                  info@quoinmanagement.com <br /> <br />
                  {/* chavez.king@quoinmanagement.com */}
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="ltn__contact-address-item ltn__contact-address-item-3 box-shadow">
                <div className="ltn__contact-address-icon">
                  <img
                    src={publicUrl + "assets/img/icons/11.png"}
                    alt="Icon Image"
                  />
                </div>
                <h3>Phone Number</h3>
                <p>
                  0​208 614 0767 <br /> 0740 386 0672
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="ltn__contact-address-item ltn__contact-address-item-3 box-shadow">
                <div className="ltn__contact-address-icon">
                  <img
                    src={publicUrl + "assets/img/icons/12.png"}
                    alt="Icon Image"
                  />
                </div>
                <h3>Office Address</h3>
                <p>
                  30 Churchill Place <br />
                  London, E14 5NR
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactInfo;
