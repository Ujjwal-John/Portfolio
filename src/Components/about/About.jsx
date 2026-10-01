import React from "react";
import "./About.css";

const educationItems = [
  {
    id: "mvlu",
    name: "Maharshi Ved Vyas Lalit University",
    degree: "Bachelor's Degree",
    description:
      "Built a strong foundation in software engineering, web development, and problem-solving through academic projects and practical coursework.",
    logo: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=300&q=80",
    alt: "University campus building",
  },
  {
    id: "kcml",
    name: "KCML",
    degree: "Professional Training",
    description:
      "Focused on hands-on development practices, modern tooling, and building production-ready applications with clean architecture.",
    logo: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=300&q=80",
    alt: "Students collaborating in a learning environment",
  },
];

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-title">
        <h1>About Me</h1>
      </div>

      <div className="about-sections">
        <div className="about-right">
          <div className="about-para">
            <p>
              I am a software developer focused on building responsive,
              user-friendly, and maintainable web applications. I enjoy turning
              ideas into products that work reliably in production, not just in
              demos.
            </p>
            <p>
              My work centers on clean UI implementation, practical
              problem-solving, and continuous improvement through real project
              experience. I prefer solutions that are simple to maintain and
              resilient under change.
            </p>
          </div>

          <div className="about-education">
            {educationItems.map((item) => (
              <article key={item.id} className="education-card">
                <img
                  src={item.logo}
                  alt={item.alt}
                  className="education-logo"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="education-content">
                  <h2>{item.name}</h2>
                  <h3>{item.degree}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
