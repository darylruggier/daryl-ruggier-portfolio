import {
  Sun,
  MoonStars,
  BrandGithub,
  BrandLinkedin,
  BrandInstagram,
} from "tabler-icons-react";
import { ActionIcon } from "@mantine/core";
import { useTheme } from "next-themes";
import styles from "../../styles/Navbar.module.scss";

const Navbar = () => {
  const { theme, setTheme } = useTheme("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className={styles.nav}>
      <div className={styles.nav_left}>
        <div className={styles.nav_icons}>
          <div className={styles.nav_github_icon}>
            <a href="https://github.com/darylruggier" target="_blank">
              <BrandGithub size={30} strokeWidth={1.5} />
            </a>
          </div>
          <div className={styles.nav_linkedin_icon}>
            <a
              href="https://www.linkedin.com/in/daryl-ruggier-4204b1208/"
              target="_blank"
            >
              <BrandLinkedin size={30} strokeWidth={1.5} />
            </a>
          </div>
          <div className={styles.nav_instagram_icon}>
            <a href="https://www.instagram.com/ruggierdaryl/" target="_blank">
              <BrandInstagram size={30} strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </div>
      <div className={styles.nav_right}>
        <div className={styles.theme_icon} onClick={() => toggleTheme()}>
          <Sun size={30} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
