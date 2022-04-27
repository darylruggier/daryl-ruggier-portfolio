import Navbar from "../components/navbar/Navbar";
import Projects from "../components/Projects";
import About from "../components/About";
import styles from "../styles/Portfolio.module.scss";
import Link from "next/link";
import pdf from "./static/Daryl_Ruggier_CV.pdf";

const Portfolio = () => {
  //TODO: Populate Projects and About sections
  //TODO: Fix PDF not loading (use react-pdf?)
  return (
    <div className={styles.portfolio} id="nameheader">
      <div className={styles.firstscroll} id="firstscroll">
        <div className={styles.navbar}>
          <Navbar />
        </div>
        <div className={styles.content}>
          <div className={styles.content_header}>
            <Link href="/cv">
              <a
                className={styles.name}
                href={pdf}
                target="_blank"
                rel="noreferrer noopener"
              >
                Daryl Ruggier
              </a>
            </Link>
            <h2 className={styles.desc}>
              Frontend Developer & Computer Science Student
            </h2>
          </div>
        </div>
      </div>
      <div className={styles.secondscroll} id="secondscroll">
        <div className={styles.projects}>
          <Projects />
        </div>
      </div>
      <div className={styles.thirdscroll} id="thirdscroll">
        <div className={styles.about}>
          <About />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
