import {
  Sun,
  BrandGithub,
  BrandLinkedin,
  BrandInstagram,
} from "tabler-icons-react";
import { useTheme } from "next-themes";
import styles from "../../styles/Navbar.module.scss";
import AnchorLink from "react-anchor-link-smooth-scroll-v2";
import { HideOn, HideBetween } from "react-hide-on-scroll";
import { Link } from "next/link";

const Navbar = () => {
  const { theme, setTheme } = useTheme("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  // TODO: Make theme button show on small screen
  return (
    <div className={styles.nav}>
      <div className={styles.nav_left}>
        <div className={styles.nav_icons}>
          <div className={styles.nav_github_icon}>
            <a
              href="https://github.com/darylruggier"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BrandGithub size={30} strokeWidth={1.5} />
            </a>
          </div>
          <div className={styles.nav_linkedin_icon}>
            <a
              href="https://www.linkedin.com/in/daryl-ruggier-4204b1208/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BrandLinkedin size={30} strokeWidth={1.5} />
            </a>
          </div>
          <div className={styles.nav_instagram_icon}>
            <a
              href="https://www.instagram.com/ruggierdaryl/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BrandInstagram size={30} strokeWidth={1.5} />
            </a>
          </div>
        </div>
        <HideOn divID="firstscroll" inverse>
          <div className={styles.nav_left_name}>
            <p
              onClick={() =>
                window.scroll({
                  top: 0,
                  left: 0,
                  behavior: "smooth",
                })
              }
            >
              Daryl Ruggier
            </p>
          </div>
        </HideOn>
      </div>
      <div className={styles.nav_right}>
        <div className={styles.anchorlinks}>
          <div className={styles.anchorlink}>
            <AnchorLink offset="100" href="#projects">
              <h3>Projects</h3>
            </AnchorLink>
          </div>
          <div className={styles.anchorlink}>
            <AnchorLink offset="100" href="#about">
              <h3>About</h3>
            </AnchorLink>
          </div>
        </div>
        <div className={styles.theme_icon}>
          <Sun size={30} onClick={() => toggleTheme()} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
