import React from 'react'

const profileImageUrl =
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80'

const Hero = () => {
  return (
    <section className="container py-5">
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5 min-vh-100">
        <div className="col-10 col-sm-8 col-lg-6 mx-auto text-center">
          <img
            src={profileImageUrl}
            className="d-block mx-lg-auto img-fluid rounded-4 shadow-lg hero-profile-image"
            alt="Ujjwal John portrait"
            width="500"
            height="520"
            loading="eager"
          />
        </div>

        <div className="col-lg-6">
          <p className="text-primary fw-semibold text-uppercase mb-2">
            Hello, I&apos;m Ujjwal John
          </p>
          <h1 className="display-4 fw-bold text-warning lh-1 mb-3">Frontend Web Developer</h1>
          <h2 className="h3 fw-semibold text-body-emphasis mb-3">
            MERN Stack and Full-Stack Developer building responsive digital products
          </h2>
          <p className="lead text-secondary mb-4">
            I design and develop user-friendly websites and applications with a strong focus on
            performance, responsive UI, and maintainable code. My work spans React, JavaScript,
            Node.js, and modern frontend architecture.
          </p>

          <div className="d-flex flex-column flex-sm-row gap-3">
            <a href="#Contacts" className="btn btn-primary btn-lg px-4">
              Contact Me
            </a>
            <a href="#Project" className="btn btn-outline-secondary btn-lg px-4">
              View Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
