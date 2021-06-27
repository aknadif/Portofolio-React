import React from 'react'
import "./About.css"
import { animatescroll } from '../Animations/TextControl/AnimateTextScroll';

export const About = () => {
  return (
    <section id="about" className="about">
      <div className="container" ref={()=>animatescroll()}>
        <div className="row text-center mb-3">
          <div className="col tb"><h2>About Me</h2></div>
        </div>
        <div className="row justify-content-center fs-5 text-center" >
          <div className="col-md-4 kiri"><p>I'm student and website developer, i learn some programming language like html, css, javascirpt, php, java and designing some android project.</p></div>
          <div className="col-md-4 kanan"><p>I've some certification like 'learn basic website programming' from dicoding and 'Finalist' from PUSPIPTEK Motion Graphic Competition 2020</p></div>
        </div>
      </div>
    </section>
    )
}
