import Navbar from "../components/navbar/Navbar";
import Projects from "./Projects";
import About from "./About";
import styles from "../styles/Portfolio.module.scss";
import Link from "next/link";
// import pdf from "./static/Daryl_Ruggier_CV.pdf";
import { ArrowBigTop } from "tabler-icons-react";

const Portfolio = () => {
  //TODO: Fix PDF not loading (use react-pdf?)
  //TODO: Make scroll to top arrow for small screens show
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
                // href={pdf}
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
      <div className={styles.scrolltotopbutton}>
        <ArrowBigTop
          size={60}
          strokeWidth={2}
          color={"black"}
          onClick={() =>
            window.scroll({
              top: 0,
              left: 0,
              behavior: "smooth",
            })
          }
        />
      </div>
      <div className={styles.secondscroll} id="secondscroll">
        <div className={styles.about}>
          <About />
        </div>
      </div>
      <div className={styles.thirdscroll} id="thirdscroll">
        <div className={styles.projects}>
          <Projects />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
