import styles from "../../styles/CV.module.scss";
import { Document } from "react-pdf";

//TODO: react-pdf not working - either make that work or find another way to display CV pdf; either display the data on a page and style it or find a way to display pdfs
const CV = () => {
  return (
    <div className={styles.cv_container}>
      <Document file="/static/Daryl_Ruggier_CV.pdf" />
    </div>
  );
};

export default CV;
