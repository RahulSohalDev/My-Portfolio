import React from "react";
import Location from "../assets/contact/map_1865269.png";
import Gmail from "../assets/contact//gmail_732200.png";

function Contact() {
  return (
    <div className="contact">
      <div className="contact-text">
        <h3>CONTACT</h3>
        <h2>Don't be shy! Hit me up!</h2>
      </div>
      <div className="location-mail">
        <div className="location">
          <img src={Location} alt="" />
          <div className="location-link">
            <h4>Location</h4>
            <p>Rajpura, Punjab</p>
          </div>
        </div>
        <div className="mail">
          <img src={Gmail} alt="" />
          <div className="mail-link">
            <h4>Mail</h4>
            <p>dhiman7571@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
