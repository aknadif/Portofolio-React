import React from 'react'
import MyGallery  from '../Animations/Gallery/Gallery';
import './Portofolio.css'

export const Portofolio = () => {
    return (
    <section id="projects" className="projects">
        <div className="container">
            <div className="row text-center text-dark mb-2">
            <div className="col">
                <h2>My Projects</h2>
            <MyGallery />
            </div>
        </div>
        
        </div>
    </section>
    )
}
