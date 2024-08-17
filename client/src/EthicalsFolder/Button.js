import React from 'react';
import styles from './ethical.module.css';
import {Link} from 'react-router-dom'

const Button = () => {
  return (
    <Link to='/manual'>
    <div className={styles.boxStyleButton}>
      <button className={styles.buttonStyle}>
        Submit your paper - click here
      </button>
    </div>
    </Link>
  );
};

export default Button;
