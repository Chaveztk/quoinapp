import React from "react";
import Navbar from "./global-components/navbar-v4";
import PageHeader from "./global-components/page-header";
import blog-gridGrid from "./blog-grid-components/blog-grid";
import CallToActionV1 from "./section-components/call-to-action-v1";
import Footer from "./global-components/footer";

const blog-gridGridPage = () => {
  return (
    <div>
      <Navbar />
      <PageHeader headertitle="News" />
      <blog-gridGrid />
      <CallToActionV1 />
      <Footer />
    </div>
  );
};

export default blog-gridGridPage;
