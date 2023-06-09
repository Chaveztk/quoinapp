import React, { Component } from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";

class Map extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";

    return (
      <div className="google-map mb-120">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.5025095115393!2d-0.017145284230152016!3d51.50399627963451!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487602b07f609f1f%3A0xba1bf1aadad8462!2s30%20Churchill%20Pl%2C%20London%20E14%205EU!5e0!3m2!1sen!2suk!4v1681519353455!5m2!1sen!2suk"
          width="600"
          width="100%"
          height="100%"
          frameBorder={0}
          allowFullScreen
          aria-hidden="false"
          tabIndex={0}
        />
      </div>
    );
  }
}

export default Map;
