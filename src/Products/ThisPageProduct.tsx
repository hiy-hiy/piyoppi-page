import React from 'react';

import styles from './Products.module.css';

const ThisPageProduct: React.FC = () => {

  return (
    <div style={{ height: '70vh' }}>
        <div className={styles.centerFadeIn}>
            <header>ThisPage</header>

            <h2>概要</h2>
            <div className={styles.textContainer}>
                <div className={styles.description}>
                まさに、このページ、このポートフォリオです。私を構成する技術と創造力を一つのページにしました。
                </div>
            </div>
            <h2>使用技術</h2>
            <div className={styles.textContainer}>
                <div className={styles.description}>
                TypeScript, React, CSS
                </div>
            </div>
        </div>
    </div>
  );
};

export default ThisPageProduct;