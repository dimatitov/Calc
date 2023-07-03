import React from 'react';
import styles from './App.module.scss';
import { Button } from './components/Button';

function App() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.calculator}>
        <div className={styles.resultArea}>
          <div className={styles.calculated}>0</div>
          <div className={styles.result}>0</div>
        </div>

        <div className={styles.line} />

        <div className={styles.calculatorButtons}>
          {Array(20)
            .fill('')
            .map((_, index) => (
              <Button
                key={index}
                value={'0'}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
