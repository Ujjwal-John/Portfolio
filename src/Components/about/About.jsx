import React from 'react'
import "./About.css"
import mvlu from "../../assets/mvlu logo.jpg"
import kcml from "../../assets/kcm logo.jpg"

const About = () => {
    return (
        <div>
            <div className="container py-5">
                <div className="row align-items-center">
                    
                    <div className="col-lg-6">
                        <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">About Me</h1>
                        <p className="lead"> Passionate MERN Stack Developer with hands-on experience in building responsive and dynamic
            web applications. Eager to leverage my strong skills in MongoDB, Express.js, React.js, and Node.js
            to contribute to innovative projects in a collaborative team environment.</p>
                    </div>
                    <div className="col-10 col-sm-8 col-lg-6 mx-auto text-center">
                        <div className="timeline">
                            <div className="Containertimeline left_container">
                                <img src={mvlu} alt="MVLU College Logo" />
                                <div className="text-box">
                                    <h2>MVLU College</h2>
                                    <small>(2021 - 2023)</small>
                                    <p>B.Sc in Information Technology</p>
                                    <span className="left-container-arrow"></span>
                                </div>
                            </div>
                            <div className="Containertimeline right_container">
                                <img src={kcml} alt="KCM College Logo" />
                                <div className="text-box">
                                    <h2>KCM College</h2>
                                    <small>(2018 - 2019)</small>
                                    <p>12th with PCM</p>
                                    <span className="right-container-arrow"></span>
                                </div>
                            </div>
                            <div className="Containertimeline left_container">
                                <img src={kcml} alt="KCM School Logo" />
                                <div className="text-box">
                                    <h2>KCM School</h2>
                                    <small>(2018 - 2019)</small>
                                    <p>10th with Science</p>
                                    <span className="left-container-arrow"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
