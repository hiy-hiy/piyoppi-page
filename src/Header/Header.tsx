import React from 'react';
import styles from './Header.module.css';
import xLogo from "../assets/images/x.png";
import instaLogo from "../assets/images/insta.png";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.logoTitle}>Shunto Hiyoshi</h1>

      <div className={styles.iconContainer}>
        <a href="https://x.com/hiy_ait_kk" target="_blank" rel="noopener noreferrer">
          <img src={xLogo} alt="Twitter" className={styles.icons} />
        </a>
        <a href="https://www.instagram.com/hi_n_sh/" target='_blank' rel="noopener noreferrer">
          <img src={instaLogo} alt="Instagram" className={styles.icons} />
        </a>
        
      </div>
    </header>
  );
};

export default Header;