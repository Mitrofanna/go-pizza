import React from 'react';

import styles from './EmptyBlock.module.scss';

function EmptyBlock() {
  return (
    <div className={styles.root}>
      <h2>К сожалению, ничего не найдено</h2>
    </div>
  );
}

export default EmptyBlock;
