import React, { useRef } from 'react';

import styles from './Products.module.css';
import { motion } from 'framer-motion';

const BlenderProduct: React.FC = () => {

  const ref = useRef<HTMLDivElement>(null);

  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div ref={ref} className={styles.productContainer} style={{background: '#bf5c45'}}>

        {/* テキスト（画像と並行して左から出現） */}
        <motion.div
          className={styles.leftContainer}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.9 }} // 一度だけ実行する（true）、毎回実行したいなら false
          transition={{ duration: 1.5 }}
        >
          <header>Blender</header>

          <h2>概要</h2>
          <div className={styles.textContainer}>
            <div className={styles.description}>
              Blenderで作った3D作品集です。
            </div>
          </div>
          <h2>使用技術</h2>
          <div className={styles.textContainer}>
            <div className={styles.description}>
              Blender
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
          autoPlay
          muted
          loop
          playsInline
          ref={videoRef}
        >
          <source src="/videos/encodedEntei.mp4" type="video/mp4" />
          <p>Your browser does not support the video tag.</p>
        </video>
      </motion.div>
      
    </div>
  );
};


export default BlenderProduct;
 