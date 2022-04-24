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

const Navbar = () => {
  const { theme, setTheme } = useTheme("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  // const scrollToTop = () => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: "smooth",
  //   });
  // };

  return (
    // TODO: Scroll to top not scrolling fully to the top
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
        <HideBetween startDivID="secondscroll" endDivID="thirdscroll" inverse>
          <div className={styles.nav_left_name}>
            <AnchorLink href="#nameheader">
              <p>Daryl Ruggier</p>
            </AnchorLink>
          </div>
        </HideBetween>
      </div>
      <div className={styles.nav_right}>
        <div className={styles.anchorlinks}>
          <div className={styles.anchorlink}>
            <AnchorLink offset="100" href="#about">
              <h3>About</h3>
            </AnchorLink>
          </div>
          <div className={styles.anchorlink}>
            <AnchorLink offset="100" href="#projects">
              <h3>Projects</h3>
            </AnchorLink>
          </div>
        </div>
        <div className={styles.theme_icon} onClick={() => toggleTheme()}>
          <Sun size={30} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
