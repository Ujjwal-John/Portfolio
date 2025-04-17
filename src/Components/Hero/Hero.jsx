import React from 'react'
import profileimage from "../../assets/profileimage.png"

const Hero = () => {
return (
        <div>
                <div className="container py-5">
                        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                                <div className="col-10 col-sm-8 col-lg-6 mx-auto text-center">
                                        <img src={profileimage} className="d-block mx-lg-auto img-fluid" alt="Profile" width="500" height="200" loading="lazy" />
                                </div>
                                <div className="col-lg-6">
                                        <h1 className="display-5 fw-bold text-warning text- lh-1 mb-3">Hi!</h1>
                                        <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">I am a Frontend Web developer</h1>
                                        <p className="lead">I am also a MERN Stack and Full-Stack Developer with a strong passion for building responsive, dynamic, and user-friendly websites and applications.</p>
                                        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                                                <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">
                                                        <a href="#Contacts" className="text-white text-decoration-none">Resume</a>
                                                </button>
                                                <button type="button" className="btn btn-outline-secondary btn-lg px-4">
                                                        <a href="#Contacts" className="text-decoration-none">Contacts</a>
                                                </button>
                                        </div>
                                </div>
                        </div>
                </div>
        </div>
)
}

export default Hero
