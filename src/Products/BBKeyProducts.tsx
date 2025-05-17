import React, { useRef } from 'react';

import styles from './Products.module.css';

import BBkeyImg2 from "../assets/productsImages/BBKey2.png";
import BBkeyImg3 from "../assets/productsImages/BBKey3.png";

const BBKeyProduct: React.FC = () => {

  const ref = useRef<HTMLDivElement>(null);

  return (
    <div ref={ref} className={styles.productContainer} style={{background: '#2b5278'}}>
      {/* テキスト（画像と並行して左から出現） */}
      <div className={styles.leftFadeIn}>
        <header>BBKey</header>

        <h2>概要</h2>
        <div className={styles.textContainer}>
          <div className={styles.description}>
            キーボード操作でお肉をひっくり返すゲームです。<br />
            BGMやイラストも私が用意しました。 <br />
            ハッカソン「SysHack2025」で制作しました。<br />
          </div>
        </div>
        <h2>使用技術</h2>
        <div className={styles.textContainer}>
          <div className={styles.description}>
            Unity, GitHub
          </div>
        </div>

      </div>
        

      <div className={styles.rightFadeIn}>
        <img
          src={BBkeyImg2}
          alt="BBkey画像2"
        />

        <img
          src={BBkeyImg3}
          alt="BBkey画像3"
        />
      </div>
    </div>
  );
};

export default BBKeyProduct;