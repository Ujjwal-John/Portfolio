import React from 'react';
import CircularSkillbar from './CircularSkillbar'; // Assuming you're keeping your custom circular bars
import 'bootstrap/dist/css/bootstrap.min.css';

const Skills = () => {
  const skills = [
    { skill: "Communication", percentage: 90 },
    { skill: "Problem Solving", percentage: 80 },
    { skill: "Trouble Shooting", percentage: 75 },
    { skill: "Team Working", percentage: 50 },
  ];

  return (
    <div className="container py-5" id="SkillsLink">
      <h1 className="text-center mb-5">My Skills</h1>

      <div className="row">
        {/* Technical Skills */}
        <div className="col-md-6 mb-4">
          <h2 className="mb-4">Technical Skills</h2>

          <div className="mb-4">
            <div className="d-flex justify-content-between">
              <span>HTML</span><span>80%</span>
            </div>
            <div className="progress">
              <div className="progress-bar bg-success" style={{ width: "80%" }}></div>
            </div>
          </div>

          <div className="mb-4">
            <div className="d-flex justify-content-between">
              <span>CSS</span><span>70%</span>
            </div>
            <div className="progress">
              <div className="progress-bar bg-info" style={{ width: "70%" }}></div>
            </div>
          </div>

          <div className="mb-4">
            <div className="d-flex justify-content-between">
              <span>JavaScript</span><span>80%</span>
            </div>
            <div className="progress">
              <div className="progress-bar bg-warning" style={{ width: "80%" }}></div>
            </div>
          </div>

          <div className="mb-4">
            <div className="d-flex justify-content-between">
              <span>React</span><span>65%</span>
            </div>
            <div className="progress">
              <div className="progress-bar bg-danger" style={{ width: "65%" }}></div>
            </div>
          </div>
        </div>

        {/* Professional Skills */}
        <div className="col-md-6">
          <h2 className="mb-4">Professional Skills</h2>
          <div className="d-flex flex-wrap justify-content-center gap-4">
            {skills.map((item, index) => (
              <CircularSkillbar key={index} skill={item.skill} percentage={item.percentage} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
