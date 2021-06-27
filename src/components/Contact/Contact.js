import React from "react";
import "./Contact.css";
import * as Icon from "react-bootstrap-icons";
import { animatescroll } from "../Animations/TextControl/AnimateTextScroll";
export const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container" ref={() => animatescroll()}>
        <div className="row text-center">
          <div className="col mb-3">
            <h2>Contact Me</h2>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-5">
            <div className="card">
              <div className="card-header">You can contact me on my social media below</div>
              <ul className="list-group list-group-flush">
                <a href="mailto:aknadif58@gmail.com">
                  <li className="list-group-item">
                    <Icon.Envelope /> Email : aknadif58@gmail.com
                  </li>
                </a>
                <a href="https://www.instagram.com/aknadhif/">
                  <li className="list-group-item">
                    <Icon.Instagram /> Instagram : aknadhif
                  </li>
                </a>
                <a href="https://github.com/aknadif">
                  <li className="list-group-item">
                    <Icon.Github /> Github : aknadif
                  </li>
                </a>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
