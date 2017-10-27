import React from "react";
import Project from "./Project";
import PropTypes from "prop-types";

const ProjectList = (props) => (
  <section id="portofolio">
    <article className="project-list container">
      <div className="row">
        {props.projectlist.map((project, index) => <Project project={project} key={index} />)}
      </div>
    </article>
  </section >
);

ProjectList.propTypes = {
  projectlist: PropTypes.array.isRequired,
};
export default ProjectList;