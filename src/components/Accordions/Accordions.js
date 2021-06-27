import React from "react";
import "./Accordions.css";
import AccordionsBody from "./body/AccordionsBody";
import AccordionsHead from "./head/AccordionsHead";

export default function Accordions() {
  return (
    <div className="Accordions">
      <div className="accordion accordion-flush" id="accordionFlushExample">
        <AccordionsHead head="Persiapan Pemrograman PHP" id="flush-collapseOne" />
        <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
          <div className="accordion-body">
            <table className="table">
              <tbody>
                <AccordionsBody body="Sejarah PHP" />
                <AccordionsBody body="Instalasi PHP" />
                <AccordionsBody body="Instalasi XAMPP" />
                <AccordionsBody body="Instalasi Visual Studio Code" />
              </tbody>
            </table>
          </div>
        </div>
        <AccordionsHead head="Pemrograman Dasar PHP" id="flush-collapseTwo" />
        <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
          <div className="accordion-body">
            <table className="table">
              <tbody>
                <AccordionsBody body="Syntax" />
                <AccordionsBody body="Comments" />
                <AccordionsBody body="Variable" />
                <AccordionsBody body="Output" />
                <AccordionsBody body="Tipe Data" />
                <AccordionsBody body="String" />
                <AccordionsBody body="Math" />
                <AccordionsBody body="Operator" />
                <AccordionsBody body="If Else" />
                <AccordionsBody body="Loops" />
                <AccordionsBody body="Functions" />
                <AccordionsBody body="Arrays" />
                <AccordionsBody body="Supeglobals" />
                <AccordionsBody body="Switch" />
              </tbody>
            </table>
          </div>
        </div>

        <AccordionsHead head="Object Oriented Programming PHP" id="flush-collapseThree" />
        <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
          <div className="accordion-body">
            <table className="table">
              <tbody>
                <AccordionsBody body="Apa Itu OOP" />
                <AccordionsBody body="Class / Object" />
                <AccordionsBody body="Constructor" />
                <AccordionsBody body="Destructor" />
                <AccordionsBody body="Acces Modifier" />
                <AccordionsBody body="Inheritance" />
                <AccordionsBody body="Constants" />
                <AccordionsBody body="Abstract Class" />
                <AccordionsBody body="Intefaces" />
                <AccordionsBody body="Traits" />
                <AccordionsBody body="Static Methods" />
                <AccordionsBody body="Static Properties" />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
