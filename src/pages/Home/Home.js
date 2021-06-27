import React from "react";
import { About } from "../../components/AboutMe/About";
import { Contact } from "../../components/Contact/Contact";
import { Footer } from "../../components/Footer/Footer";
import { Jumbotron } from "../../components/Jumbotron/Jumbotron";
import Navbar from "../../components/Navbar/Navbar";
import { Portofolio } from "../../components/Portofolio/Portofolio";

export default function Home() {
  return (
    <div className="home">
      <>
        <Navbar />
        <Jumbotron />
        <About />
        <Portofolio />
        <Contact />
        <Footer />
      </>
    </div>
  );
}
