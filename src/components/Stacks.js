import React from "react";

const STACK_REGISTRY = [
  { name: "HTML5", icon:{url:"../../images/javascript-plain.svg", alt:"html language icon"}}, 
  { name: "CSS3", icon:{url:"../../images/css3-plain.svg", alt:"CSS language icon"}}, 
  { name: "Bootstrap", icon:{url:"../../images/bootstrap-plain.svg", alt:"Bootstrap framework icon"}},
  { name: "JavaScript", icon:{url:"../../images/javascript-plain.svg", alt:"JavaScript language icon"}}, 
  { name: "React", icon:{url:"../../images/react-original.svg", alt:"React framework icon"}}, 
  { name: "Redux", icon:{url:"../../images/javascript-plain.svg", alt:"Redux framework icon"}}, 
  { name: "Jasmine", icon:{url:"../../images/jasmine-plain.svg", alt:"Jasmine testing framework icon"}}, 
  { name: "Webpack", icon:{url:"../../images/webpack-plain.svg", alt:"Webpack tool icon"}}, 
  { name: "Git", icon:{url:"../../images/git-plain.svg", alt:"Git tool icon"}}, 
];

const StackItem = ({ name, icon }) => (
  <div className="stack-item">
    <div className="stack-item-icon">
      <img src={icon.url} alt={icon.alt} />
    </div>
    <div className="stack-item-name">
      <p className="no-margin">{name}</p>
    </div>
  </div>
);

const Stack = () => (
  <section id="stack" className="stack-background">
    <div className="stack-wrapper stack-background">
      <div className="container">
        <h2 className="section-title">My Stack </h2>
        <div className="row">
          <div className="stack-introduction col-md-4">
            <p className="stack-introduction-text">I work with and I possess grounded expertise on these technologies</p>
          </div>
          <div className="stack-container col-md-8">
            <div className="stack-list">
              {STACK_REGISTRY.map( (item, index) => <StackItem {...item } key={index}/>)}
            </div>
          </div>
        </div>
      </div>
    </div>

  </section>
);
export default Stack;