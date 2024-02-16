import { ArrowBackOutline as ArrowBackOutlineIcon } from "react-ionicons";
import { Link } from "react-router-dom";
import styles from './BackButton.module.css'

const BackButton = () => {
  return (
    <Link to="/countries" className={`shadow-button ${styles.back}`}>
      <ArrowBackOutlineIcon className={styles.arrow} height="16px" color="currentColor" />
      <span>Back</span>
    </Link>
  );
};

export default BackButton;
