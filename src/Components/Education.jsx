/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";

const Education = () => {
  const [isOpen, toggleOpen] = useState(false);
  const [isOpen2, toggleOpen2] = useState(false);

  return (
    <section className="education" id="education">
      <h2 className="education">Education</h2>
      <div className="education-content">
        <button className="dropdown-toggle" onClick={() => toggleOpen(!isOpen)}>
          {isOpen
            ? "▼ National University of Singapore [2023 - 2026]"
            : "▲ National University of Singapore [2023 - 2026]"}
        </button>
        {isOpen ? (
          <div className="dropdown-content open">
            <h4>Achievements</h4>
            <ul>
              <li>NUS Merit Scholarship Recipient</li>
            </ul>
            <h4>Co-Curricular</h4>
            <ul>
              <li>Hornet 9.0 Programme - Perception/Localisation Lead</li>
            </ul>
            <p>📆 Graduating May 2026</p>
          </div>
        ) : (
          <div className="dropdown-content closed">
            <h4>Achievements</h4>
            <ul>
              <li>NUS Merit Scholarship Recipient</li>
            </ul>
            <h4>Co-Curricular</h4>
            <ul>
              <li>Hornet 9.0 Programme - Perception/Localisation Lead</li>
            </ul>
            <p>📆 Graduating May 2026</p>
          </div>
        )}
      </div>

      <div className="education-content">
        <button className="dropdown-toggle" onClick={() => toggleOpen2(!isOpen2)}>
          {isOpen2
            ? "▼ Ngee Ann Polytechnic [2018 - 2021]"
            : "▲ Ngee Ann Polytechnic [2018 - 2021]"}
        </button>
        {isOpen2 ? (
          <div className="dropdown-content open">
            <h4>Achievements</h4>
            <ul>
              <li>Diploma with Merit</li>
              <li>Lien Ying Chow Scholarship Recipient</li>
              <li>Placed on Dean's List (2019, 2020)</li>
              <li>Faculty Merit Award</li>
            </ul>
            <h4>Co-Curricular</h4>
            <ul>
              <li>Archery Club - Team Captain</li>
            </ul>
          </div>
        ) : (
          <div className="dropdown-content closed">
            <h4>Achievements</h4>
            <ul>
              <li>Diploma with Merit</li>
              <li>Lien Ying Chow Scholarship Recipient</li>
              <li>Placed on Dean's List (2019, 2020)</li>
              <li>Faculty Merit Award</li>
            </ul>
            <h4>Co-Curricular</h4>
            <ul>
              <li>Archery Club - Team Captain</li>
            </ul>
          </div>
        )}
      </div>
    </section>
  );
};

export default Education;
