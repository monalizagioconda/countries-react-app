import { useCallback } from 'react'
import { ArrowBackOutline as ArrowBackOutlineIcon } from "react-ionicons";
import { useNavigate } from 'react-router-dom'
import styles from './BackButton.module.css'

const BackButton = () => {
  const navigate = useNavigate();
  const onBack = useCallback(() => navigate(-1), [navigate])

  return (
    <a href="#" className={`shadow-button ${styles.back}`} onClick={onBack}>
      <ArrowBackOutlineIcon className={styles.arrow} height="16px" color="currentColor" />
      <span>Back</span>
    </a>
  );
};

export default BackButton;
