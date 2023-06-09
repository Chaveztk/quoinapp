import React, { useEffect, useState } from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";
// import InputField from "../ui/InputField";

const CustomForm = ({ status, message, onValidation }) => {
  const [email, setEmail] = useState("");
  const [emailValid, setEmailValid] = useState(false);

  useEffect(() => {
    if (status === "success") clearFields();
  }, [status]);

  const clearFields = () => {
    setEmail("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    email.indexOf("@") > -1 && onValidation({ EMAIL: email });
  };

  return (
    <form className="mc__form" onSubmit={(e) => handleSubmit(e)}>
      <h3 className="mc__title">
        {status === "success"
          ? "Success!"
          : "Subscribe to our weekly Newsletter and receive updates via email."}
      </h3>

      {status === "sending" && (
        <div className="mc__alert mc__alert--sending">sending...</div>
      )}
      {status === "error" && (
        <div
          className="mc__alert mc__alert--error"
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      {status === "success" && (
        <div
          className="mc__alert mc__alert--success"
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}

      {status !== "success" ? (
        <div className="mc__field-container">
          <div className="mc__email">
            <label htmlFor="email">
              Enter email address
              <input
                type="text"
                placeholder="youremail@email.com"
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
          </div>

          <input label="subscribe" type="submit" />
        </div>
      ) : null}

      {status === "success" ? (
        <button
          // onClick={() => setModalOpen(false)}
          className="g__justify-self-center"
        >
          Close
        </button>
      ) : (
        <input
          label="subscribe"
          type="submit"
          // formValues={[email, firstName, lastName]}
        />
      )}
    </form>
  );
};

const MailchimpForm = () => {
  const POST_URL =
    "https://quoinmanagement.us21.list-manage.com/subscribe?u=ff9ad23486fb8954700220354&id=9cb597d97c";

  return (
    <div className="mc__form-container">
      <MailchimpSubscribe
        url={POST_URL}
        // render={({ subscribe, status, message }) => (
        //   <CustomForm
        //     status={status}
        //     message={message}
        //     onValidation={(formData) => subscribe(formData)}
        //   />
        // )}
      />
    </div>
  );
};

export default MailchimpForm;
