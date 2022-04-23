import {
  Sun,
  MoonStars,
  BrandGithub,
  BrandLinkedin,
  BrandInstagram,
} from "tabler-icons-react";
import { ActionIcon } from "@mantine/core";
import styles from "../../styles/Navbar.module.scss";

const Navbar = () => {
  return (
    <div className={styles.nav}>
      <div className={styles.nav_left}>
        <div className={styles.nav_icons}>
          <div className={styles.github_icon}>
            <BrandGithub size={30} strokeWidth={1.5} color={"#000000"} />
          </div>

          <div className={styles.linkedin_icon}>
            <BrandLinkedin size={30} strokeWidth={1.5} color={"#000000"} />
          </div>
          <div className={styles.instagram_icon}>
            <BrandInstagram size={30} strokeWidth={1.5} color={"#000000"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
