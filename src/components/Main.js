import React from "react";
import projects from "../data/projects";

import ProjectList from "./ProjectList";
import Skills from "./Skills"; 

const Main = () => (
  <main id="main" >
    <Skills/>
    <ProjectList projectlist = {projects}/>
  </main>
);

export default Main; 