import React from 'react';
import './Overview.css';

function CourseDetail() {
  return (
    <div className="CourseDetail">
      {/* <header className="header">
        <nav>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#courses">Courses</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header> */}

      <section className="course-overview">
        <h1>Full-Stack Web Development</h1>
        <div className="course-meta">
          {/* <span>Instructor: John Doe</span>
          <span>Rating: ★★★★☆ (4.5)</span> */}
          <span>Duration: 10 Weeks</span>
        </div>
        <p className="course-description">
          Learn how to build complete web applications from scratch using modern technologies like React, Node.js, and MongoDB.
        </p>
        <button className="cta">Enroll Now</button>
      </section>

      <section className="course-learn">
        <h2>What You'll Learn</h2>
        <div className="learn-items">
          <div className="learn-item">Build responsive websites with HTML, CSS, and JavaScript</div>
          <div className="learn-item">Create dynamic user interfaces with React</div>
          <div className="learn-item">Develop server-side applications with Node.js and Express</div>
          <div className="learn-item">Work with databases using MongoDB and Mongoose</div>
        </div>
      </section>

      <section className="course-content">
        <h2>Course Content</h2>
        <ul className="content-list">
          <li>Module 1: Introduction to Web Development</li>
          <li>Module 2: Frontend Basics</li>
          <li>Module 3: Advanced JavaScript and React</li>
          <li>Module 4: Backend Development with Node.js</li>
          <li>Module 5: Databases and MongoDB</li>
          <li>Module 6: Full-Stack Project</li>
        </ul>
      </section>

      {/* <section className="instructor-bio">
        <h2>About the Instructor</h2>
        <p>John Doe is a seasoned web developer with over 10 years of experience. He has worked with various tech companies and is passionate about teaching web development.</p>
      </section> */}

      {/* <section className="student-reviews">
        <h2>Student Reviews</h2>
        <div className="review">
          <p>"This course was amazing! I learned so much and feel confident in my skills." - Jane Smith</p>
          <span>★★★★★</span>
        </div>
        <div className="review">
          <p>"John is an excellent instructor. The course content is very well-structured." - Bob Johnson</p>
          <span>★★★★☆</span>
        </div>
      </section> */}

   
    </div>
  );
}

export default CourseDetail;
