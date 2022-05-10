import styles from "../styles/About.module.scss";

const About = () => {
  // TODO: Make Notion page work. if react-notion-x too problematic try something easier?
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 id="about">About</h1>
      </div>
    </div>
  );
};

export default About;
