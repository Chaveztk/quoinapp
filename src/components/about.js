import React from "react";
import Navbar from "./global-components/navbar-v4";
import PageHeader from "./global-components/page-header";
import Features from "./section-components/features-v1";
import Testimonial from "./section-components/testimonial-v1";
import BlogSlider from "./blog-components/blog-slider-v1";
import CallToActionV1 from "./section-components/call-to-action-v1";
import Footer from "./global-components/footer";
import AboutV2 from "./section-components/about-v2";

const About_v1 = () => {
  return (
    <div>
      <Navbar />
      <PageHeader headertitle="About Us" />
      <AboutV2 />
      <Features customClass="ltn__feature-area section-bg-1 pt-120 pb-90 mb-120---" />
      <Testimonial />
      {/* <BlogSlider sectionClass="pt-120" /> */}
      <CallToActionV1 />
      <Footer />
    </div>
  );
};

export default About_v1;
