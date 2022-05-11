import styles from "../styles/About.module.scss";

const About = () => {
  // TODO: Make Notion page work. if react-notion-x too problematic try something easier?
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 id="about">About</h1>
      </div>
      <div className={styles.body}>
        <h1>Hi &#128075; I'm Daryl!</h1>
        <h2>
          I'm a Frontend Developer and Computer Science Student at the
          University of Malta. In my free time I enjoy learning about anything
          and everything Web Dev, eSports and Powerlifting &#127947;
        </h2>
        <h2>
          This website is one of the many projects I've worked on in order to
          gain further knowledge in the Frontend Development sphere. You can
          find more information about the projects I've worked on{" "}
          <a
            href="https://github.com/darylruggier/"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a>
          !
        </h2>
      </div>
    </div>
  );
};

export default About;
