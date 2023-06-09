import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";

const MailchimpForm2 = () => {
  return (
    <div>
      <Link
        href="//cdn-images.mailchimp.com/embedcode/classic-071822.css"
        rel="stylesheet"
        type="text/css"
      />

      <div id="mc_embed_signup">
        <form
          action="https://quoinmanagement.us21.list-manage.com/subscribe/post?u=ff9ad23486fb8954700220354&amp;id=9cb597d97c&amp;f_id=00e251e1f0"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          class="validate"
          target="_blank"
          novalidate
        >
          <div id="mc_embed_signup_scroll">
            <h2>Subscribe</h2>
            <div class="indicates-required">
              <span class="asterisk">*</span> indicates required
            </div>
            <div class="mc-field-group">
              <label for="mce-EMAIL">
                Email Address <span class="asterisk">*</span>
              </label>
              <input
                type="email"
                value=""
                name="EMAIL"
                class="required email"
                id="mce-EMAIL"
                required
              />
              <span id="mce-EMAIL-HELPERTEXT" class="helper_text"></span>
            </div>
            <div id="mce-responses" class="clear foot">
              <div
                class="response"
                id="mce-error-response"
                style="display:none"
              ></div>
              <div
                class="response"
                id="mce-success-response"
                style="display:none"
              ></div>
            </div>
            {/* <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups--> */}
            <div style="position: absolute; left: -5000px;" aria-hidden="true">
              <input
                type="text"
                name="b_ff9ad23486fb8954700220354_9cb597d97c"
                tabindex="-1"
                value=""
              />
            </div>
            <div class="optionalParent">
              <div class="clear foot">
                <input
                  type="submit"
                  value="Subscribe"
                  name="subscribe"
                  id="mc-embedded-subscribe"
                  class="button"
                />
                <p class="brandingLogo">
                  <a
                    href="http://eepurl.com/iriXxo"
                    title="Mailchimp - email marketing made easy and fun"
                  >
                    <img src="https://eep.io/mc-cdn-images/template_images/branding_logo_text_dark_dtp.svg" />
                  </a>
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
      <script
        type="text/javascript"
        src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"
      ></script>
    </div>
  );
};

export default MailchimpForm2;
