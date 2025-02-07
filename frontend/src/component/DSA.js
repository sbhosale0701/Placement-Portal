import React from "react";
import "./DSA.css";

const DSA = () => {
    const largeCompanies = [
        { name: "C++ DSA COURSE BY BABBAR", link: "https://youtube.com/playlist?list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&si=drQ1dJWzkhtvCNA5" },
        { name: "C++ DSA COURSE BY Apna College", link: "https://youtube.com/playlist?list=PLfqMhTWNBTe137I_EPQd34TsgV6IO55pt&si=upq5YvY-Ee3zhr8C" },
        { name: "6 COMPANIES 30 DAYS CHALLENGE BY ARSH", link: "https://www.proelevate.in/dsa-practice/6-companies-30-days" },
        { name: "DSA SHEET BY STRIVER", link: "https://youtu.be/FwBsi9HEG1Y?si=NJZihZ6o1vcZ3jXT" },
        { name: "PRACTICE LEETCODE", link: "https://leetcode.com/" },
        { name: "PRACTICE GFG", link: "https://www.geeksforgeeks.org/" },
    ];

    const smallCompanies = [
        { name: "Naukri", link: "https://www.naukri.com/" },
        { name: "Indeed", link: "https://in.indeed.com/" },
        { name: "Unstop", link: "https://unstop.com/" },
        { name: "Cuvette Tech", link: "https://cuvette.tech/" },
        { name: "Foundit", link: "https://www.foundit.in/user" },
        { name: "AccioJob", link: "https://placement.acciojob.com/candidate-portal/dashboard/" },
    ];

    return (
        <div className="company-logos">
            {/* Practice DSA Section */}
            <h2 className="section-title">Practice DSA</h2>
            <div className="large-logos">
                {largeCompanies.map((company, index) => (
                    <div key={index} className="logo-container large">
                        <h3>{company.name}</h3>
                        <a href={company.link} target="_blank" rel="noopener noreferrer">
                            <button className="get-started-btn">Get Started</button>
                        </a>
                    </div>
                ))}
            </div>

            {/* Get Touch with OFF Campus Hiring Section */}
            <h2 className="section-title">Get Touch with Off Campus Hiring</h2>
            <div className="small-logos">
                {smallCompanies.map((company, index) => (
                    <div key={index} className="logo-container small">
                        <h3>{company.name}</h3>
                        <a href={company.link} target="_blank" rel="noopener noreferrer">
                            <button className="get-started-btn">Get Started</button>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DSA;