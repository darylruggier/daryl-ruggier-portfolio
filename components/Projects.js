import styles from "../styles/Projects.module.scss";
import Project from "./Project.js";
import { Modal } from "@mantine/core";
import { useState } from "react";

const Projects = () => {
  //TODO: Put pictures on project cards
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 id="projects">Projects</h1>
      </div>
      <div className={styles.gridcontainer}>
        <div className={styles.project_1}>
          <Project title="Project" />
        </div>
        <div className={styles.project_2}>
          <Project title="Project2" />
        </div>
        <div className={styles.project_3}>
          <Project title="Project3" />
        </div>
        <div className={styles.project_4}>
          <Project title="Projec4t" />
        </div>
        <div className={styles.project_5}>
          <Project title="Projec4t" />
        </div>
        <div className={styles.project_6}>
          <Project title="Projec4t" />
        </div>
      </div>
    </div>
  );
};

export default Projects;
