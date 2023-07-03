import React from 'react';
import styles from './App.module.scss';
import { Button } from './components/Button';

function App() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.calcBody}>
        <div className={styles.gridContainer}>
          <div className={styles.resultArea}>
            <div className={styles.resultAreaCalculated}>0</div>
            <div className={styles.resultAreaResult}>0</div>
          </div>
          <div className={styles.line} />
          <div className={styles.gridContainerBtn}>
            {Array(20)
              .fill('')
              .map((_, index) => (
                <Button
                  value={'0'}
                  key={index}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
