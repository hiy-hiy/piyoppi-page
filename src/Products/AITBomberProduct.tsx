import React, { useRef } from 'react';

import AITBomberImg from "../assets/productsImages/AITBomber.png";

import styles from './Products.module.css';
import { motion } from 'framer-motion';

const AITBomberProduct: React.FC = () => {

  const ref = useRef<HTMLDivElement>(null);

  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div ref={ref} className={styles.productContainer} style={{background: '#61787b'}}>
        {/* テキスト（画像と並行して左から出現） */}
        <motion.div
          className={styles.leftContainer}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.9 }} // 一度だけ実行する（true）、毎回実行したいなら false
          transition={{ duration: 1.5 }}
        >
          <div className={styles.headerA}>AITBomber</div>

          <h2>概要</h2>
          <div className={styles.textContainer}>
            <div className={styles.description}>
              講義、「オブジェクト指向プログラミング及び演習２」<br />
              の中で制作したゲームです。時間が足らず、<br />AITと言っておきながら
              某爆弾男ゲームの丸パクリに<br />しかならなかったのは残念でした。
            </div>
          </div>
          <h2>使用技術</h2>
          <div className={styles.textContainer}>
            <div className={styles.description}>
              javascript, HTML, CSS, <br />Python, Flask, Socket.io, GitHub
            </div>
          </div>
        </motion.div>
        
        
        <motion.div
          className={styles.rightContainer}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.9 }} // 一度だけ実行する（true）、毎回実行したいなら false
          transition={{ duration: 1.5 }}
        >
          <video
            controls
            autoPlay
            muted
            loop
            playsInline
            ref={videoRef}
          >
            <source src="/videos/AITBomber.mp4" type="video/mp4" />
            <p>Your browser does not support the video tag.</p>
          </video>

          {/* イメージ */}
          <img
            src={AITBomberImg}
            alt="AITBomberImg"
          />

        </motion.div>
      
    </div>
  );
};


export default AITBomberProduct;
 