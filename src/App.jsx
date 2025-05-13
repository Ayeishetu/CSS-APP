
import React, { useState } from 'react';
import './App.css';
import {
  FaFacebook,
  FaTwitter,
  FaEnvelope,
  FaHome,
  FaBook,
  FaUserTie,
  FaBullhorn,
  FaPhone
} from 'react-icons/fa';

import headerImage from './assets/department-banner.jpg';
import faculty1 from './assets/faculty1.jpg';
import faculty2 from './assets/faculty2.jpg';


function App() {
  const [activePage, setActivePage] = useState('home');
  const [expandedLevels, setExpandedLevels] = useState({});

  const navigate = (page) => {
    setActivePage(page);
  };

  const toggleLevel = (level) => {
    setExpandedLevels((prev) => ({
      ...prev,
      [level]: !prev[level]
    }));
  };

  const pages = ['home', 'courses', 'faculty', 'news', 'contact'];

  const coursesByLevel = {
    "Level 100": [
      "CSC101 - Introduction to Computer Science",
      "MTH101 - Mathematics for Computing",
      "ENG101 - Communication Skills"
    ],
    "Level 200": [
      "CSC202 - Data Structures and Algorithms",
      "MTH204 - Discrete Mathematics",
      "CSC208 - Computer Architecture"
    ],
    "Level 300": [
      "CSC301 - Operating Systems",
      "CSC303 - Database Systems",
      "CSC306 - Software Engineering"
    ],
    "Level 400": [
      "CSC401 - Artificial Intelligence",
      "CSC403 - Machine Learning",
      "CSC499 - Final Year Project"
    ]
  };

  const getIcon = (page) => {
    switch (page) {
      case 'home': return <FaHome />;
      case 'courses': return <FaBook />;
      case 'faculty': return <FaUserTie />;
      case 'news': return <FaBullhorn />;
      case 'contact': return <FaPhone />;
      default: return null;
    }
  };

  const capitalize = (word) => word.charAt(0).toUpperCase() + word.slice(1);

  return (
    <div className="app-container">
      <header className="header">
        <img src={headerImage} alt="CS Department Banner" className="banner" />
        <h1>Computer Science Department</h1>
        <h3>Faculty of Physical</h3>
        <h4>University of Development Studies</h4>
        <nav>
          <ul className="nav-list">
            {pages.map((page) => (
              <li key={page}>
                <button
                  className={`nav-button ${activePage === page ? 'active' : ''}`}
                  onClick={() => navigate(page)}
                >
                  {getIcon(page)} {capitalize(page)}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="main-content">
        {activePage === 'home' && (
          <section>
            <h2>Welcome To CS Department</h2>
            <p>
              Explore the Computer Science Department at UDS: Discover our programs, meet the faculty, and stay up to date
              with departmental events and announcements.
            </p>
          </section>
        )}

        {activePage === 'courses' && (
          <section>
            <h2>Courses Offered</h2>
            {Object.entries(coursesByLevel).map(([level, courses]) => (
              <div key={level}>
                <button className="toggle-button" onClick={() => toggleLevel(level)}>
                  {expandedLevels[level] ? 'Hide' : 'Show'} {level}
                </button>
                {expandedLevels[level] && (
                  <ul className="list">
                    {courses.map((course, index) => (
                      <li key={index}>{course}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </section>
        )}

        {activePage === 'faculty' && (
          <section>
            <h2>Faculty Directory</h2>
            <div className="card-list">
              <div className="card">
                <img src={faculty1} alt="Prof.Alhassan" />
                <p><strong>Prof.A B Alhassan</strong><br />
                  <small>Head of Department</small><br />
                  Email: alhassan@uds.edu.gh<br />
                  Phone: +233 20 000 0001
                </p>
              </div>
              <div className="card">
                <img src={faculty2} alt="Prof. Lawerence" />
                <p><strong>Prof. Lawerence Tandoh</strong><br />
                  <small>Lecturer</small><br />
                  Email: ltandoh@uds.edu.gh<br />
                  Phone: +233 20 000 0002
                </p>
              </div>
              <div className="card">
                <img src="/images/faculty3.jpg" alt="Dr. Abena Asare" />
                <p><strong>Dr. Abena Asare</strong><br />
                  <small>Senior Lecturer</small><br />
                  Email: aasare@uds.edu.gh<br />
                  Phone: +233 20 000 0003
                </p>
              </div>
              <div className="card">
                <img src="/images/faculty4.jpg" alt="Dr.Salamudeen" />
                <p><strong>Dr.Salamudeen Alhassan</strong><br />
                  <small>Assistant Lecturer</small><br />
                  Email: dowusu@uds.edu.gh<br />
                  Phone: +233 20 000 0004
                </p>
              </div>
            </div>
          </section>
        )}

        {activePage === 'news' && (
          <section>
            <h2>News & Announcements</h2>
            <div className="news">
              <p>📢 <strong>Exam Timetable</strong> is out. Check the notice board or app timetable.</p>
              <p>🗓 <strong>Department Seminar</strong> on 12th May at 10AM in LT2.</p>
            </div>
          </section>
        )}

        {activePage === 'contact' && (
          <section>
            <h2>Contact Us</h2>
            <form className="contact-form">
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <textarea placeholder="Your Message" required></textarea>
              <button type="submit">Send Message</button>
            </form>
          </section>
        )}
      </main>

      <footer className="footer">
        <p>Follow us:</p>
        <div className="socials">
          <a href="#"><FaFacebook /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaEnvelope /></a>
        </div>
        <p>&copy; 2025 Computer Science Department</p>
      </footer>
    </div>
  );
}

export default App;
