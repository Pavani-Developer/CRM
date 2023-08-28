import React from "react";
import './projectk.css';

function Projectk() {
  return (
    <div className="page">
      <div className="top-section">
        <h1 className="company-name">V Cube Software Solutions</h1>
      <button>Enroll now</button>
      <button>login</button>

      </div>
      <div className="center-boxes">
        <div className="center-box1">
          <h1 className="blinking-text">Explore Knowledge, Ignite Innovation,<br />and Shape Tomorrow with VCubes Institution's Transformative Courses.</h1>
        </div>
        <div className="center-box2">
          <h1>Enroll here</h1>
        <label htmlFor="firstName">First Name:</label>
          <input type="text" id="firstName" placeholder="Enter your first name" name="First name" />

          <label htmlFor="lastName">Last Name:</label>
          <input type="text" id="lastName" placeholder="Enter your last name" name="Last name" />

          <label htmlFor="email">Email:</label>
          <input type='text' id="email" placeholder='Enter your email' name='Email' />

          <label htmlFor="contactNumber">Contact Number:</label>
          <input type='text' id="contactNumber" placeholder='Enter your mobile number' name='Contact number' />

          <label htmlFor="course">Course:</label>
          <input type='text' id="course" placeholder='Enter your course' name='Course name' />

          <button onClick={() => {}}>Enroll</button>
        </div>
      </div>
      <div className="left-section">

      <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Courses</a></li>
          <li><a href="#">Demo</a></li>
          <li><a href="#">Interview Questions</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">About</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Projectk;
