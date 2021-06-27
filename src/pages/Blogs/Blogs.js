import React from "react";
import Accordions from "../../components/Accordions/Accordions";
import { Footer } from "../../components/Footer/Footer";

export default function Blogs() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-9">
          <Accordions />
        </div>
        <div className="col-sm-3">
          <h1 className="text-center mt-4">Sisi Kanan</h1>
        </div>
      </div>
      <Footer />
    </div>
  );
}
