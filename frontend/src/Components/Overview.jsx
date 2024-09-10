import React, { useState } from 'react';
import './Overview.css';

function CourseDetail() {
  const [activeIndices, setActiveIndices] = useState([]);

  const toggleDropdown = (index) => {
    setActiveIndices(prevActiveIndices => {
      if (prevActiveIndices.includes(index)) {
        // Remove the index if it's already active
        return prevActiveIndices.filter(i => i !== index);
      } else {
        // Add the index if it's not active
        return [...prevActiveIndices, index];
      }
    });
  };

  return (
    <div className="CourseDetail">
      <section className="course-overview">
        <h1>Full-Stack Web Development</h1>
        <div className="course-meta">
          <span>Duration: 10 Weeks</span>
        </div>
        <p className="course-description">
          Learn how to build complete web applications from scratch using modern technologies like React, Node.js, and MongoDB.
        </p>
        <button className="cta">Enroll Now</button>
      </section>

      <section className="course-content">
        <h2>Course Content</h2>
        <ul className="content-list">
          {[
            'Module 1: Introduction to Web Development',
            'Module 2: Frontend Basics',
            'Module 3: Advanced JavaScript and React',
            'Module 4: Backend Development with Node.js',
            'Module 5: Databases and MongoDB',
            'Module 6: Full-Stack Project'
          ].map((module, index) => (
            <li
              key={index}
              className={activeIndices.includes(index) ? 'active' : ''}
              onClick={() => toggleDropdown(index)}
            >
              {module}
              <span className="toggle-arrow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="button-icon"
                >
                  <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
                  <path
                    d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"
                    className="invisible"
                  />
                  <path d="M0 0h24v24H0z" fill="none" />
                </svg>
              </span>
              {activeIndices.includes(index) && (
                <div className="submodules">
                  <div className="submodule">Submodule {index + 1}.1</div>
                  <div className="submodule">Submodule {index + 1}.2</div>
                  <div className="submodule">Submodule {index + 1}.3</div>
                </div>
              )}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default CourseDetail;
