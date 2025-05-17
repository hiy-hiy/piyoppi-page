import React, { useRef } from 'react';

import styles from './Products.module.css';

const BlenderProduct: React.FC = () => {

  const ref = useRef<HTMLDivElement>(null);

  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div ref={ref} className={styles.productContainer} style={{background: '#bf5c45'}}>

        {/* テキスト（画像と並行して左から出現） */}
        <div className={styles.leftFadeIn}>
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
        </div>

      <div className={styles.rightFadeIn}>
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
      </div>
      
    </div>
  );
};


export default BlenderProduct;
 