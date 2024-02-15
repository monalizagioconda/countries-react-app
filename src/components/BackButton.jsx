import { ArrowBackOutline as ArrowBackOutlineIcon } from "react-ionicons";
import styles from './BackButton.module.css'

const BackButton = () => {
  return (
    <a className={`shadow-button ${styles.back}`} href=".">
      <ArrowBackOutlineIcon className={styles.arrow} height="16px" color="currentColor" />
      <span>Back</span>
    </a>
  );
};

export default BackButton;
