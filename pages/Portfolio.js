import Navbar from "../components/navbar/Navbar";
import Projects from "../components/Projects";
import styles from "../styles/Portfolio.module.scss";
import Link from "next/link";

const Portfolio = () => {
  return (
    <div className={styles.portfolio}>
      <div className={styles.firstscroll}>
        <div className={styles.navbar}>
          <Navbar />
        </div>
        <div className={styles.content}>
          <div className={styles.content_header}>
            <Link href="/cv">
              <a className={styles.name}>Daryl Ruggier</a>
            </Link>
            <h2 className={styles.desc}>
              Frontend Developer & Computer Science Student
            </h2>
          </div>
        </div>
      </div>
      <div className={styles.secondscroll}>
        <div className={styles.projects}>
          <Projects />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
