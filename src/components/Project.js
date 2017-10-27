import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Project = (props) => {
  return (
    <div className="project col-md-4">
      <div className="project-image">
        <img className="fullwidth-img" src={props.project.image} alt="" />
      </div>
      <Link to={props.project.pageLink} style={{ textDecorationLine: "none" }}>
        <h3 className="project-title bold1">{props.project.name}</h3>
      </Link>
      <p className="project-description">{props.project.description}</p>
      <div className="project-links ">
        <div className="container-fluid">
          <div className="row">
            <button className="project-bt col-xm-2 col-md-3">
              <Link to={props.project.pageLink} style={{ textDecorationLine: "none" }}>Site</Link>
            </button>
            <button className=" project-bt  offset-md-6  col-md-3">
              <Link to={props.project.codeLink} style={{ textDecorationLine: "none" }}>Code</Link>
            </button>
          </div>
        </div>
      </div>
    </div>

  );
};
Project.propTypes = {
  project: PropTypes.object.isRequired,
};
export default Project;