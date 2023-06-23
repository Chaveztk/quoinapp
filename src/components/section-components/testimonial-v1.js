import React, { Component } from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";

class Testimonial extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    let imagealt = "image";

    return (
      <div
        className="ltn__testimonial-area section-bg-1--- bg-image-top pt-115 pb-70"
        data-bs-bg={publicUrl + "assets/img/bg/20.jpg"}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title-area ltn__section-title-2--- text-center">
                <h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">
                  Our Testimonial
                </h6>
                <h1 className="section-title">Clients Feedback</h1>
              </div>
            </div>
          </div>
          <div className="row ltn__testimonial-slider-5-active slick-arrow-1">
            <div className="col-lg-4">
              <div className="ltn__testimonial-item ltn__testimonial-item-7">
                <div className="ltn__testimoni-info">
                  <p>
                    <i className="flaticon-left-quote-1" />I recently had the
                    pleasure of working with the exceptional Quoin management
                    company, and I can't recommend them highly enough. From
                    start to finish, their team went above and beyond to ensure
                    that my rental property was well-maintained and efficiently
                    managed.
                  </p>
                  <div className="ltn__testimoni-info-inner">
                    <div className="ltn__testimoni-img">
                      {/* <img
                        src={publicUrl + "assets/img/testimonial/jacob.jpg"}
                        alt="#"
                      /> */}
                    </div>
                    <div className="ltn__testimoni-name-designation">
                      <h5>Jacob William</h5>
                      <label>Client</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="ltn__testimonial-item ltn__testimonial-item-7">
                <div className="ltn__testimoni-info">
                  <p>
                    <i className="flaticon-left-quote-1" />
                    Their customer service was exceptional, always responding
                    promptly to my inquiries and concerns, and keeping me
                    updated on any developments or issues. Their team was also
                    extremely knowledgeable and professional, offering valuable
                    insights and advice on property management best practices
                    and strategies.
                  </p>
                  <div className="ltn__testimoni-info-inner">
                    <div className="ltn__testimoni-img">
                      {/* <img
                        src={publicUrl + "assets/img/testimonial/kelian.jpg"}
                        alt="#"
                      /> */}
                    </div>
                    <div className="ltn__testimoni-name-designation">
                      <h5>Kelian Anderson</h5>
                      <label>Client</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="ltn__testimonial-item ltn__testimonial-item-7">
                <div className="ltn__testimoni-info">
                  <p>
                    <i className="flaticon-left-quote-1" />
                    The team at Quoin management is knowledgeable, responsive,
                    and always available to answer any questions or concerns
                    that I had. They went above and beyond to ensure that my
                    property was well-maintained, and that my tenants were happy
                    and satisfied. Their dedication to their work is truly
                    commendable, and I am so grateful for their expertise.
                  </p>
                  <div className="ltn__testimoni-info-inner">
                    <div className="ltn__testimoni-img">
                      {/* <img
                        src={publicUrl + "assets/img/testimonial/adam.jpg"}
                        alt="#"
                      /> */}
                    </div>
                    <div className="ltn__testimoni-name-designation">
                      <h5>Adam Joseph</h5>
                      <label>Client</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/*  */}
          </div>
        </div>
      </div>
    );
  }
}

export default Testimonial;
