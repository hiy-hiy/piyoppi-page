import React from 'react';

import styles from './Products.module.css';
import { motion } from 'framer-motion';

const ThisPageProduct: React.FC = () => {

  return (
    <div style={{ height: '70vh' }}>
      <motion.div
        className={styles.centerContainer}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.9 }} // 一度だけ実行する（true）、毎回実行したいなら false
        transition={{ duration: 1.5 }}
      >
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
            TypeScript, React, CSS, FramerMotion
            </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ThisPageProduct;