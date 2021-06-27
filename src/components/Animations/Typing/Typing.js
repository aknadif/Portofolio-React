import React from "react";
import words from "./Words";
import Typed from "react-typed";

const Typing = () =>{
  return (
    <div>
      <p className="lead">
          <Typed 
          strings = {words}
          typeSpeed = {60}
          backSpeed = {60}
          loop = {false}
          />
        </p>
    </div>
  )
} 
export default Typing;