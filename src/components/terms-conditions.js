import React, { Component } from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";

import Navbar from "./global-components/navbar-v4";
import PageHeader from "./global-components/page-header";

import CallToActionV1 from "./section-components/call-to-action-v1";
import SponsorV2 from "./section-components/sponsor-v2";
import Footer from "./global-components/footer";

class TermsConditions extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";

    return (
      <div>
        <Navbar />
        <PageHeader headertitle="Terms and Conditions of Use" />

        <div className="ltn__page-details-area ltn__service-details-area mb-105">
          <div className="container">
            <div className="row">
              <div className="">
                <div className="ltn__page-details-inner ltn__service-details-inner">
                  <h3> Effective Date: 18/05/2023</h3>
                  <p>
                    {" "}
                    These Terms and Conditions ("Agreement") govern your use of
                    the website <Link>
                      {" "}
                      https://www.quoinmanagement.com{" "}
                    </Link>{" "}
                    and the services provided by Quoin Management ("Company").
                    By accessing or using the Website and its services, you
                    agree to be bound by this Agreement. If you do not agree to
                    these terms and conditions, you may not use the Website.
                  </p>
                  <ol>
                    <li>Acceptance of Terms</li>
                    <ol>
                      <li>
                        By accessing and using the Website, you affirm that you
                        are at least 18 years old and capable of entering into a
                        legally binding agreement.
                      </li>
                      <li>
                        You agree to comply with all applicable laws, rules, and
                        regulations while using the Website.
                      </li>
                    </ol>
                    <li>Use of the Website</li>
                    <ol>
                      <li>
                        The Company grants you a limited, non-exclusive,
                        non-transferable, and revocable license to access and
                        use the Website for personal, non-commercial purposes.
                      </li>
                      <li>
                        You agree not to use the Website for any unlawful or
                        prohibited activities. This includes, but is not limited
                        to, engaging in any form of illegal activity, infringing
                        intellectual property rights, transmitting harmful or
                        malicious code, or interfering with the Website's
                        functionality.
                      </li>
                      <li>
                        The Company reserves the right to modify, suspend, or
                        discontinue any aspect of the Website at any time
                        without notice.
                      </li>
                    </ol>

                    <li>Intellectual Property</li>
                    <ol>
                      <li>
                        The Website and its content, including but not limited
                        to text, graphics, logos, images, and software, are the
                        property of the Company or its licensors and are
                        protected by intellectual property laws.
                      </li>
                      <li>
                        You may not copy, reproduce, modify, distribute,
                        transmit, display, perform, or create derivative works
                        of any part of the Website without the prior written
                        consent of the Company.
                      </li>
                    </ol>
                    <li>Privacy Policy</li>
                    <ol>
                      <li>
                        The Company's Privacy Policy governs the collection,
                        use, and disclosure of personal information provided by
                        users of the Website. By using the Website, you consent
                        to the collection, use, and disclosure of your personal
                        information as described in the Privacy Policy.
                      </li>
                    </ol>
                    <li>Links to Third-Party Websites</li>
                    <ol>
                      <li>
                        The Website may contain links to third-party websites
                        that are not owned or controlled by the Company. The
                        Company is not responsible for the content or practices
                        of any linked third-party websites.
                      </li>
                      <li>
                        The inclusion of any third-party links on the Website
                        does not imply endorsement or association with the
                        linked website. Your use of any third-party websites is
                        at your own risk.
                      </li>
                    </ol>
                    <li>Limitation of Liability</li>
                    <ol>
                      <li>
                        To the maximum extent permitted by applicable law, the
                        Company and its affiliates, directors, officers,
                        employees, and agents shall not be liable for any
                        direct, indirect, incidental, consequential, or punitive
                        damages arising out of or in connection with your use of
                        the Website.
                      </li>
                      <li>
                        The Company does not warrant the accuracy, completeness,
                        or reliability of any information provided on the
                        Website. You acknowledge and agree that any reliance on
                        such information is at your own risk.
                      </li>
                    </ol>
                    <li>Indemnification</li>
                    <ol>
                      <li>
                        You agree to indemnify and hold the Company and its
                        affiliates, directors, officers, employees, and agents
                        harmless from any claims, demands, liabilities, damages,
                        losses, costs, and expenses, including reasonable
                        attorneys' fees, arising out of or in connection with
                        your use of the Website or any violation of this
                        Agreement.
                      </li>
                    </ol>
                    <li>Modifications to the Agreement</li>
                    <ol>
                      <li>
                        The Company reserves the right to modify or amend this
                        Agreement at any time. Any changes to this Agreement
                        will be effective immediately upon posting on the
                        Website. Your continued use of the Website after the
                        posting of any changes constitutes your acceptance of
                        the modified Agreement.
                      </li>
                    </ol>
                    <li>Termination</li>
                    <ol>
                      <li>
                        The Company may, at its sole discretion, suspend or
                        terminate your access to the Website for any reason,
                        including but not limited to violation of this
                        Agreement.
                      </li>
                      <li>
                        Upon termination, the provisions of this Agreement that
                        by their nature should survive termination shall remain
                        in effect.
                      </li>
                    </ol>
                    <li>Governing Law and Jurisdiction</li>
                    <ol>
                      <li>
                        This Agreement shall be governed by and construed in
                        accordance with the laws of the jurisdiction in which
                        the Company is located, without regard to its conflict
                        of law principles.
                      </li>
                      <li>
                        Any legal action or proceeding arising out of or
                        relating to this Agreement shall be brought exclusively
                        in the competent courts of the jurisdiction in which the
                        Company is located.
                      </li>
                    </ol>
                    <li>Severability</li>
                    <ol>
                      <li>
                        If any provision of this Agreement is held to be
                        invalid, illegal, or unenforceable, the validity,
                        legality, and enforceability of the remaining provisions
                        shall not in any way be affected or impaired.
                      </li>
                    </ol>
                    <li>Entire Agreement</li>
                    <ol>
                      <li>
                        This Agreement constitutes the entire agreement between
                        you and the Company regarding the use of the Website and
                        supersedes any prior or contemporaneous agreements,
                        communications, and understandings, whether oral or
                        written, relating to the subject matter of this
                        Agreement.
                      </li>
                    </ol>
                  </ol>
                  <p>
                    By using the Website, you acknowledge that you have read,
                    understood, and agree to be bound by this Agreement. If you
                    have any questions regarding these terms and conditions,
                    please contact us at info@quoinmanagement.com
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

export default TermsConditions;
