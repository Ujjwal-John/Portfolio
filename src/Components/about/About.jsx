import React from 'react'
import './About.css'

const educationTimeline = [
  {
    id: 1,
    school: 'MVLU College',
    period: '(2021 - 2023)',
    qualification: 'B.Sc in Information Technology',
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=200&q=80',
    alignment: 'left_container',
    arrowClass: 'left-container-arrow',
    alt: 'MVLU College campus building',
  },
  {
    id: 2,
    school: 'KCM College',
    period: '(2018 - 2019)',
    qualification: '12th with PCM',
    logo: 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=200&q=80',
    alignment: 'right_container',
    arrowClass: 'right-container-arrow',
    alt: 'KCM College academic building',
  },
  {
    id: 3,
    school: 'KCM School',
    period: '(2017 - 2018)',
    qualification: '10th with Science',
    logo: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=200&q=80',
    alignment: 'left_container',
    arrowClass: 'left-container-arrow',
    alt: 'KCM School classroom building',
  },
]

const About = () => {
  return (
    <section className="container py-5">
      <div className="row align-items-center g-5">
        <div className="col-lg-6">
          <p className="about-kicker">About Me</p>
          <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Building products with clean UI and practical engineering</h1>
          <p className="lead about-copy">
            Passionate MERN Stack Developer with hands-on experience in building responsive and
            dynamic web applications. I enjoy turning product ideas into fast, maintainable, and
            user-friendly interfaces using React, JavaScript, Node.js, and modern frontend
            patterns.
          </p>
          <p className="about-copy-secondary mb-0">
            I focus on delivering web experiences that are accessible, mobile-first, and easy to
            scale as product requirements grow.
          </p>
        </div>

        <div className="col-12 col-lg-6 mx-auto text-center">
          <div className="timeline" aria-label="Education timeline">
            {educationTimeline.map((item) => (
              <div key={item.id} className={`Containertimeline ${item.alignment}`}>
                <img src={item.logo} alt={item.alt} loading="lazy" />
                <div className="text-box">
                  <h2>{item.school}</h2>
                  <small>{item.period}</small>
                  <p>{item.qualification}</p>
                  <span className={item