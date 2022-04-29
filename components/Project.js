import styles from "../styles/Project.module.scss";
import { useState } from "react";
import { Modal } from "@mantine/core";

const Project = ({ title, projectImg, linkToProject, projectDescription }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.project_container}>
      <Modal
        withCloseButton={false}
        opened={open}
        onClose={() => setOpen(false)}
        title="Introduce yourself!"
      >
        {projectDescription}
      </Modal>
      <div className={styles.project} onClick={() => setOpen(true)}>
        <div className={styles.project_header}>
          <h1>{title}</h1>
        </div>
        <div className={styles.project_desc}>
          <p>{projectDescription}</p>
        </div>
      </div>
    </div>
  );
};

export default Project;
