import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const CircularSkillbar = ({ skill, percentage, size = 160 }) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prev) => (prev < percentage ? prev + 1 : prev));
    }, 20);
    return () => clearInterval(interval);
  }, [percentage]);

  const radius = size / 2 - 10;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (circumference * counter) / 100;

  return (
    <div className="d-flex flex-column align-items-center">
      <div
        className="position-relative"
        style={{ width: size, height: size }}
      >
        {/* SVG Circle */}
        <svg width={size} height={size}>
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="#e9ecef"
            strokeWidth="10"
            fill="none"
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="blue"
            strokeWidth="10"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            style={{ transition: "stroke-dashoffset 0.5s ease" }}
          />
        </svg>

        {/* Percentage Counter */}
        <div
          className="position-absolute top-50 start-50 translate-middle fw-bold fs-5"
          style={{ color: "#000" }}
        >
          {counter}%
        </div>
      </div>

      {/* Skill Name */}
      <h5 className="mt-3 text-center">{skill}</h5>
    </div>
  );
};

export default CircularSkillbar;
