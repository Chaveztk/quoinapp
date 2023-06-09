import React, { Component } from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";

import Navbar from "./global-components/navbar-v4";
import PageHeader from "./global-components/page-header";

import CallToActionV1 from "./section-components/call-to-action-v1";
import SponsorV2 from "./section-components/sponsor-v2";
import Footer from "./global-components/footer";

class Privacy extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";

    return (
      <div>
        <Navbar />
        <PageHeader headertitle="Privacy Policy" />

        <div className="ltn__page-details-area ltn__service-details-area mb-105">
          <div className="container">
            <div className="row">
              <div className="">
                <div className="ltn__page-details-inner ltn__service-details-inner">
                  <h3> Effective Date: 18/05/2023</h3>
                  <p>
                    {" "}
                    This Privacy Policy explains how Quoin Management ("we,"
                    "us," or "our") collects, uses, shares, and protects
                    personal information obtained from users ("you" or "your")
                    of the website{" "}
                    <Link> https://www.quoinmanagement.com </Link> ("Website").
                    We are committed to safeguarding your privacy and ensuring
                    the security of the personal information you provide to us.
                  </p>
                  <ol>
                    <li>Information We Collect</li>
                    <ol>
                      <li>
                        Personal Information: We may collect personal
                        information that you voluntarily provide to us when you
                        visit our Website, register an account, fill out forms,
                        subscribe to our newsletter, or interact with our
                        services. This information may include your name, email
                        address, phone number, mailing address, and any other
                        information you choose to provide.
                      </li>
                      <li>
                        Automatically Collected Information: When you visit our
                        Website, we may automatically collect certain
                        information about your device and browsing activity.
                        This information may include your IP address, browser
                        type, operating system, referring URLs, pages visited,
                        and the dates and times of your visits. We may use
                        cookies, web beacons, and similar tracking technologies
                        to collect this information.
                      </li>
                    </ol>
                    <li>Use of Information</li>
                    <ol>
                      <li>
                        Provision of Services: We use the information we collect
                        to provide and improve our services, respond to your
                        inquiries, process transactions, and communicate with
                        you. This includes sending you important information
                        about your account, updates, newsletters, and
                        promotional materials related to our services.
                      </li>
                      <li>
                        We process your personal information based on your
                        consent, the necessity of fulfilling our contractual
                        obligations, compliance with legal obligations, and our
                        legitimate interests in providing and improving our
                        services and maintaining the security of our Website.
                      </li>
                    </ol>

                    <li>Information Sharing</li>
                    <ol>
                      <li>
                        Third-Party Service Providers: We may engage trusted
                        third-party service providers to assist us in operating
                        our Website and delivering our services. These service
                        providers may have access to your personal information
                        only to perform tasks on our behalf and are obligated to
                        protect and handle your information in accordance with
                        this Privacy Policy.
                      </li>
                      <li>
                        Business Transfers: In the event of a merger,
                        acquisition, or sale of all or a portion of our assets,
                        your personal information may be transferred to the
                        acquiring entity. We will notify you via email or
                        prominent notice on our Website before your personal
                        information is transferred and becomes subject to a
                        different privacy policy.
                      </li>
                      <li>
                        Legal Requirements: We may disclose your personal
                        information if required by law, court order, or
                        government regulation, or if we believe such disclosure
                        is necessary to protect our rights, property, or safety,
                        or the rights, property, or safety of others.
                      </li>
                    </ol>
                    <li>Data Retention</li>
                    <p>
                      {" "}
                      We retain your personal information for as long as
                      necessary to fulfill the purposes outlined in this Privacy
                      Policy, unless a longer retention period is required or
                      permitted by law. We will securely delete or anonymize
                      your personal information when it is no longer needed for
                      the purposes for which it was collected.
                    </p>
                    <li>Data Security</li>
                    <p>
                      {" "}
                      We implement appropriate technical and organizational
                      measures to protect your personal information against
                      unauthorized access, disclosure, alteration, or
                      destruction. However, please be aware that no method of
                      transmission over the internet or electronic storage is
                      completely secure. Therefore, while we strive to protect
                      your personal information, we cannot guarantee its
                      absolute security.
                    </p>
                    <li>Your Rights</li>
                    <p>
                      {" "}
                      You have certain rights regarding your personal
                      information, including:
                    </p>
                    <ol>
                      <li>
                        Right to Access and Rectify: You have the right to
                        access and update your personal information held by us.
                        You can review and edit your account information by
                        logging into your account on our Website. If you need
                        assistance or have specific requests, please contact us
                        using the information provided below.
                      </li>
                      <li>
                        Right to Withdraw Consent: If you have provided your
                        consent for the processing of your personal information,
                        you have the right to withdraw your consent at any time.
                        This will not affect the lawfulness of the processing
                        based on consent before its withdrawal.
                      </li>
                      <li>
                        Right to Object: You have the right to object to the
                        processing of your personal information for certain
                        purposes, such as direct marketing. We will comply with
                        your request unless we have compelling legitimate
                        grounds for the processing that override your interests,
                        rights, and freedoms.
                      </li>
                      <li>
                        Right to Erasure: You have the right to request the
                        deletion or erasure of your personal information in
                        certain circumstances. We will comply with your request,
                        subject to any legal obligations or legitimate interests
                        that require us to retain certain information.
                      </li>
                      <li>
                        Right to Lodge a Complaint: If you believe that we have
                        violated your privacy rights, you have the right to
                        lodge a complaint with a supervisory authority or data
                        protection authority.
                      </li>
                    </ol>
                    <li>Third-Party Websites</li>
                    <p>
                      {" "}
                      Our Website may contain links to third-party websites that
                      are not operated by us. We have no control over the
                      content, privacy policies, or practices of these websites.
                      We encourage you to review the privacy policies of any
                      third-party websites you visit.
                    </p>
                    <li>International Data Transfers</li>
                    <p>
                      {" "}
                      We may transfer and store your personal information
                      outside of your country of residence, including to
                      jurisdictions that may not provide the same level of data
                      protection as your home country. We will take appropriate
                      measures to ensure that such transfers comply with
                      applicable data protection laws and that your personal
                      information remains protected.
                    </p>
                    <li>Changes to this Privacy Policy</li>
                    <p>
                      {" "}
                      We reserve the right to modify or update this Privacy
                      Policy at any time. We will notify you of any material
                      changes by posting the revised Privacy Policy on our
                      Website and updating the "Effective Date" at the top of
                      this page. We encourage you to review this Privacy Policy
                      periodically to stay informed about how we collect, use,
                      and protect your personal information.
                    </p>
                    <li>Contact Us</li>
                    <p> Email: info@quoinmanagement.com</p>
                    <p> Phone: 0208 614 0767</p>
                    <p>
                      {" "}
                      Address: Quoin Management, 30 Churchill Place, E14 5EU
                    </p>
                  </ol>
                  <p>
                    We will respond to your inquiries and requests in a timely
                    manner.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <SponsorV2 />
        <CallToActionV1 />
        <Footer />
      </div>
    );
  }
}

export default Privacy;
