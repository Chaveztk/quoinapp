import React from "react";
import Navbar from "./global-components/navbar-v4";
import PageHeader from "./global-components/page-header";
import AboutV5 from "./section-components/about-v5";
import ServiceV1 from "./section-components/service-v1";
import BlogSlider from "./blog-components/blog-slider-v1";
import CallToActionV1 from "./section-components/call-to-action-v1";
import SponsorV2 from "./section-components/sponsor-v2";
import Footer from "./global-components/footer";

const Service_V1 = () => {
  return (
    <div>
      <Navbar />
      <PageHeader headertitle="Our Services" subheader="Service" />
      <AboutV5 />
      <ServiceV1 />
      {/* <BlogSlider sectionClass="pt-120" /> */}
      <SponsorV2 />
      <CallToActionV1 />
      <Footer />

    </div>
  );
};

export default Service_V1;
