import React from 'react';
import { motion } from 'framer-motion';

import styles from './Main.module.css';
import togetherImg from "../assets/images/together.png";

//制作のインポート
import BBKeyProduct from '../Products/BBKeyProducts';
import BlenderProduct from '../Products/BlenderProducts';
import AITBomberProduct from '../Products/AITBomberProduct';
import ThisPageProduct from '../Products/ThisPageProduct';

// アイコンフォルダの画像を全部読み込んで全部表示（自動）
const iconsContext = require.context('../assets/stackIcons', false, /\.(png|jpe?g|svg)$/);

type TechIcon = {
  src: string;
  alt: string;
};

const techIcons: TechIcon[] = iconsContext.keys().map((key) => {
  const src = iconsContext(key) as string;
  const fileName = key.replace('./', '').replace(/\.[^/.]+$/, '');
  return { src, alt: fileName };
});


const Main: React.FC = () => {
  
  const returnTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <main>
      <section className={styles.titleSection}>
        <h1>Piyoppi</h1>
        <p>Portfolio</p>
          <img
            src={togetherImg}
            alt="背景画像"
            className={styles.backgroundImage}
          />
      </section>

      <section className={styles.aboutSection}>
        <h2>About</h2>
        <div className={styles.textContainer}>
          <div className={styles.description}>
            愛知工業大学３年生
          </div>
        </div>
      </section>

      <section className={styles.stackSection}>
        <h2>Tech Stack</h2>
        <div className={styles.textContainer}>
          <div className={styles.description}>
            <div className={styles.iconContainer}>
              {techIcons.map((icon: { src: string; alt: string }, index: number) => (
                <img key={index} src={icon.src} alt={icon.alt} className={styles.icon} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.productSection}>
        <h2>Products</h2>
        <BBKeyProduct />
        <BlenderProduct />
        <AITBomberProduct />
        <ThisPageProduct />
      </section>


      <section className={styles.endSection}>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          style={{
            marginTop: '3rem',
            padding: '2rem 2rem',
            fontSize: '1.2rem',
            backgroundColor: 'rgba(255, 255, 255, 0.45)', 
            color: '#333',
            border: 'none',
            borderRadius: '20px',
            cursor: 'pointer',
            minWidth: '300px',
          }}
          onClick={returnTop}
        >
          <h2>ページ上部へもどる</h2>
        </motion.button>
      
      </section>
    </main>
  );
}

export default Main;