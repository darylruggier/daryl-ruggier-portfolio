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
    // TODO: Navbar icon colour to orange on hover
    <div className={styles.nav}>
      <div className={styles.nav_left}>
        <div className={styles.nav_icons}>
          <div className={styles.github_icon}>
            <BrandGithub size={30} strokeWidth={1.5} />
          </div>

          <div className={styles.linkedin_icon}>
            <BrandLinkedin size={30} strokeWidth={1.5} />
          </div>
          <div className={styles.instagram_icon}>
            <BrandInstagram size={30} strokeWidth={1.5} />
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
