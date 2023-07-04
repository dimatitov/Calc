import React from 'react';
import styles from 'src/components/Display/Display.module.scss';

interface Props {
  result: string;
}

export const Display: React.FC<Props> = ({ result }) => {
  return (
    <div className={styles.resultArea}>
      <div className={styles.calculated}>{result}</div>
      <div className={styles.result}>{result}</div>
    </div>
  );
};
