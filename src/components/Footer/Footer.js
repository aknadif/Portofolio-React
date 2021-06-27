import React from "react";
import * as Icon from "react-bootstrap-icons";
import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="text-black pb-3 text-center">
      <p>
        Created with <Icon.HeartFill className="text-danger" /> by{" "}
        <a href="https://www.instagram.com/aknadhif/" className="fw-bold">
          aknadhif
        </a>
      </p>
    </footer>
  );
};
