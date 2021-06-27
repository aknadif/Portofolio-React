import React from "react";
import "./Jumbotron.css";
import Typing from "../Animations/Typing/Typing";

export const Jumbotron = () => {
  return (
    <section className="jumbotron text-center" id="jumbotron">
      <img src="/img/foto.jpg" alt="Nadhif" className="rounded-circle img-thumbnail" />
      <h1 className="display-4">A.K Nadhif</h1>
      <Typing />
      <a href="/Blogs" className="btn btn-outline-info">
        My Blogs
      </a>
    </section>
  );
};
