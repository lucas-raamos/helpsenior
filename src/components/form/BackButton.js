import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './BackButton.module.css';

const BackButton = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/home'); // Navega de volta uma página
    window.scrollTo({ top: 0, behavior: 'smooth' });

  };

  return (
    <div className={styles.button}>
      <button className={styles.btn} onClick={handleBack}>Voltar</button>
    </div>
  );
};

export default BackButton;
