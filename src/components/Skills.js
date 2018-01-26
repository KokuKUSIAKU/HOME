import React from "react";
import reverseArray from "../scripts/reverseArray";

const TRANSLATIONS = ["translateLeft", "translateRight"];

const WEBDEV = {
  id: "web-development",
  classNames: "skill-section",
  imageUrl: "https://github.com/KokuKUSIAKU/HOME/blob/master/images/web_dev.png?raw=true",
  imageDescription: "web development illustration with html, css and JavaScript coding",
  text: "I craft a cutting-edge single page website with accessilbity for all, bringing your design to life!",
  title: "WEB DEVELOPMENT",
};

const RESPONSIVE = {
  id: "web-responsive",
  classNames: "skill-section skill-section-responsive",
  imageUrl: "https://github.com/KokuKUSIAKU/HOME/blob/master/images/web_dev_responsive.png?raw=true",
  imageDescription: "web development illustration with html, css and JavaScript coding",
  text: "Your website avalaible on any support regardless its' size",
  title: "RESPONSIVE",
};
const text = " It has survived not only five centuries, but also the leap into electronic";

const SkillSection = (props) => (
  <article id={props.id} className={props.classNames}>
    <div className={`skill-section-item skill-section-illustration 
    skill-section-text-bginverse ${props.transforms[0]}`} >
      <h3 className="skill-section-title">{props.title}</h3>
      <div className="skill-image-wrapper-outer">
        <div className="skill-image-wrapper-inner">
          <img className="fullwidth-img" src={props.imageUrl} alt={props.imageDescription} />
        </div>
      </div>
    </div>
    <div className={`skill-section-item skill-section-text  
    skill-section-bginverse ${props.transforms[1]}`}>
      <p className="skill-text">{props.text}</p>
    </div>
  </article>
);

const Section = ({ header, description, icon }) => (
  <section className="skill-section">
    <div className="skill-section-icon">
      <img src={icon} alt="service-icon" />
    </div>
    <div className="skill-section-header">
      <h3>{header}</h3>
    </div>
    <article className="skill-section-description">
      <p>{description}</p>
    </article>
  </section>
);

const Skills = () => {
  return (
    <section id="skills" >
      <h2 className="section-title">MY SERVICES</h2>
      <p className="skill-section-annonce">Your web application avalaible on any platform regardless its size</p>

      <div className="container">
        <div className="row">
          <div className="skill-section-item col-md-6 col-lg-4">
            <Section header="DEVELOPMENT" description={text}
              icon="../../images/svg_test_web.svg" />
          </div>
          <div className=" skill-section-item col-md-6 col-lg-4">
            <Section header="RESPONSIVE"
              description="By using bootstrap or handcoded CSS, I ensure most projects work cross device out of the box"
              icon="../../images/responsive_copy.svg" />
          </div>
          <div className="skill-section-item col-md-6 col-lg-4">
            <Section header="ACCESSIBILITY" description={text}
              icon="../../images/svg_test_web.svg" />
          </div>
        </div>
      </div>
    </section >
  );
};



/*const Skills = () => { 
  return(
    <section id="skills" >
      <h2 className="section-title">My Services</h2>
      <div className="container-fluid">
        <SkillSection {...WEBDEV} transforms={ TRANSLATIONS}/>
        <SkillSection {...RESPONSIVE} transforms={reverseArray(TRANSLATIONS)}/>
      </div>
    </section >
  );
};*/

export default Skills;

