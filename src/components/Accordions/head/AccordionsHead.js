import React from "react";

export default function AccordionsHead(props) {
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="flush-headingOne">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#" + props.id} aria-expanded="false" aria-controls={props.id}>
          <h6>{props.head}</h6>
        </button>
      </h2>
    </div>
  );
}

AccordionsHead.defaultProps = {
  head: "Head",
};
