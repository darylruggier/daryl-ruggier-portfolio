import Navbar from "../components/navbar/Navbar";
import styles from "../styles/Portfolio.module.scss";
import Link from "next/link";
import { useTheme } from "next-themes";

const Portfolio = () => {
  const { theme, setTheme } = useTheme("light");
  return (
    <div className={styles.portfolio}>
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
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          ></button>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
