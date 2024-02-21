import React from "react";
import { Form } from "react-router-dom";

const Contact = () => {
  return (
    <div className="contact_div">
      <div className="container">
        <div className="contact_left">
          <h3>Get in touch</h3>
          <p>
            If you have any questions or just want to say hello, please don’t
            hesitate to contact me. You can also connect with me on my favorite
            social media where I post on a daily basis.
          </p>
          <ul>
            <li>
              <img src="twit.png" alt="" />
            </li>
            <li>
              <img src="linkedin.png" alt="" />
            </li>
            <li>
              <img src="spotify.png" alt="" />
            </li>
            <li>
              <img src="youtube.png" alt="" />
            </li>
          </ul>
        </div>
        <div className="contact_right">
          <form>
            <div className="form_group">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" />
            </div>
            <div className="form_group">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" />
            </div>
            <div className="form_group">
              <label htmlFor="subject">Subject</label>
              <input type="text" name="subject" />
            </div>
            <div className="form_group">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="" cols="30" rows="10"></textarea>
            </div>
            <button className="submit_btn">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
