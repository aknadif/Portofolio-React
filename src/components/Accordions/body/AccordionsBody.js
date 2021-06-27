import React from "react";

export default function AccordionsBody(props) {
  return (
    <>
      <tr>
        <td className="indent">
          <a href="/">{props.body} </a>
        </td>
      </tr>
    </>
  );
}
AccordionsBody.defaultProps = {
  body: "Body",
};
