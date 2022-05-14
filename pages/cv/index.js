import { Document } from "react-pdf";

const CV = () => {
  return (
    <div className="styles.cv_container">
      <Document file={"./static/Daryl_Ruggier_CV.pdf"} />
    </div>
  );
};

export default CV;
