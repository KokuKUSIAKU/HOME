import React from "react";
import Stack from "./Stack/Stack";
const Skills = () => (
  <section id="skills">
    <div className="container">
      <div className="row">
        <article className="introduction skill-section col-md-6">
          <div className="icon">
            <i className="fa fa-chevron-left" aria-hidden="true"></i>
            <span>/</span>
            <i className="fa fa-chevron-right" aria-hidden="true"></i>
          </div>
          <p>
            I will bring your idea, project to live with a robust product.<br />
            I typically build a website from scratch using HTML5, CSS3 and JavaScript <br />
            following last web development standards and using cutting edge tools.
          </p>
        </article>
        <aside className="skill-section col-md-6">
          <div className="icon">
            <i className="fa fa-cogs" aria-hidden="true"></i>
          </div>
          <ul className="skill-section-aside">
            <li className="ps-even"> Web standards </li>
            <li className="ps-odd"> Responsive development </li>
            <li className="ps-even"> Accesibility </li>
            <li className="ps-odd"> High perfomance </li>
            <li className="ps-even"> Single page application</li>
          </ul>
        </aside>
      </div>
    </div>
    <div className="tech-stack">
      <div className="container">
        <div className="row">
          <div className="stack-introduction col-md-4">
            <p className="stact-introduction-text">I work with and possess grounded expertise on these technologies</p>
          </div>
          <div className="stack-container col-md-8">
            <Stack />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Skills; 