import React from "react";

const WEBDEV = {
  classNames: "skill-section",
  imageUrl: "https://github.com/KokuKUSIAKU/HOME/blob/master/images/web_dev.png?raw=true",
  imageDescription: "web development illustration with html, css and JavaScript coding",
  text: "I craft a cutting-edge single page website with accessilbity for all, bringing your design to life!",
  title: "WEB DEVELOPMENT",
};

const RESPONSIVE = {
  classNames: "skill-section skill-section-responsive",
  imageUrl: "https://github.com/KokuKUSIAKU/HOME/blob/master/images/web_dev_responsive.png?raw=true",
  imageDescription: "web development illustration with html, css and JavaScript coding",
  text: "Your website avalaible on any support regardless its' size",
  title: "RESPONSIVITY",
};

const SkillSection = (props) => (
  <article className={props.classNames}>
    <div className="skill-section-item skill-section-illustration skill-section-text-bginverse">
      <h3 className="skill-section-title">{props.title}</h3>
      <div className="skill-image-wrapper-outer">
        <div className="skill-image-wrapper-inner">
          <img className="fullwidth-img" src={props.imageUrl} alt={props.imageDescription} />
        </div>
      </div>
    </div>
    <div className="skill-section-item skill-section-text  skill-section-bginverse ">
      <p className="skill-text">{props.text}</p>
    </div>
  </article>
);


const Skills = () => (
  <section id="skills" >
    <h2 className="section-title">My Services</h2>
    <div className="container-fluid">
      <SkillSection {...WEBDEV} />
      <SkillSection {...RESPONSIVE} />
    </div>
  </section >
);

export default Skills;

