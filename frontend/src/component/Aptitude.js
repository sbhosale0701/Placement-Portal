import React from "react";
import "./Aptitude.css";
import w from "../assets/img/wipro.png";
import ac from "../assets/img/acce.png";
import am from "../assets/img/ama.png";
import c from "../assets/img/co.jpeg";
import g from "../assets/img/google.png";
import h from "../assets/img/hcl.jpeg";
import i from "../assets/img/ibm.png";
import inf from "../assets/img/info.png";
import t from "../assets/img/tcs.png";
import te from "../assets/img/tech.png";

const Aptitude = () => {
  const aptitudeCompanies = [
    { name: "Mock Test", logo: w, link: "https://www.prepbytes.com/mock-tests/wipro-mock-test" },
    { name: "Mock Test", logo: ac, link: "https://www.prepbytes.com/mock-tests/accenture-mock-test" },
    { name: "Mock Test", logo: am, link: "https://www.prepbytes.com/mock-tests/amazon-mock-test" },
    { name: "Mock Test", logo: c, link: "https://www.prepbytes.com/mock-tests/cognizant-mock-test" },
    { name: "Mock Test", logo: g, link: "https://www.prepbytes.com/mock-tests/google-mock-test" },
    { name: "Mock Test", logo: h, link: "https://www.prepbytes.com/mock-tests/hcl-mock-test" },
    { name: "Mock Test", logo: i, link: "https://www.prepbytes.com/mock-tests/ibm-mock-test" },
    { name: "Mock Test", logo: inf, link: "https://www.prepbytes.com/mock-tests/infosys-mock-test" },
    { name: "Mock Test", logo: t, link: "https://www.prepbytes.com/mock-tests/tcs-mock-test" },
    { name: "Mock Test", logo: te, link: "https://www.prepbytes.com/mock-tests/techmahindra-mock-test" },
    // Add more companies if needed
  ];

  const domainResources = [
    { name: "Full Stack Development Roadmap", link: "https://www.geeksforgeeks.org/full-stack-developer-roadmap/" },
    { name: "Data Science Roadmap", link: "https://www.geeksforgeeks.org/data-scientist-roadmap/" },
    { name: "Flutter Development Roadmap", link: "https://www.geeksforgeeks.org/how-to-become-a-flutter-developer/" },
    { name: "Software Testing Roadmap", link: "https://www.geeksforgeeks.org/how-to-become-a-software-tester/" },
    { name: "DevOps Roadmap", link: "https://www.geeksforgeeks.org/devops-roadmap/" },
  ];

  return (
    <div className="aptitude-container">
      {/* Practice Aptitude Section */}
      <h2 className="section-title">Practice Aptitude Company-Wise</h2>
      <div className="aptitude-grid">
        {aptitudeCompanies.map((company, index) => (
          <div key={index} className="aptitude-card">
            <img src={company.logo} alt={company.name} className="company-logo" />
            <h3>{company.name}</h3>
            <a href={company.link} target="_blank" rel="noopener noreferrer">
              <button className="get-started-btn">Get Started</button>
            </a>
          </div>
        ))}
      </div>

      {/* Domain Resources Section */}
      <h2 className="section-title">Domain Resources</h2>
      <div className="domain-resources">
        {domainResources.map((resource, index) => (
          <div key={index} className="resource-card">
            <h3>{resource.name}</h3>
            <a href={resource.link} target="_blank" rel="noopener noreferrer">
              <button className="get-started-btn">Get Started</button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Aptitude;