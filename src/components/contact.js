import React from "react";
import Navbar from "./global-components/navbar-v4";
import PageHeader from "./global-components/page-header";
import ContactInfo from "./section-components/contact-info";
import ContactForm from "./section-components/contact-form";
import Map from "./section-components/map";
import CallToActionV1 from "./section-components/call-to-action-v1";
import Footer from "./global-components/footer";
import SponsorV2 from "./section-components/sponsor-v2";

const ContactV1 = () => {
  return (
    <div>
      <Navbar />
      <PageHeader headertitle="Contact Us" subheader="Contact" />
      <ContactInfo />
      <ContactForm /> 
      <Map />
      <SponsorV2 />
      <CallToActionV1 />
      <Footer />
    </div>
  );
};

export default ContactV1;
