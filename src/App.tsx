import React from 'react';
import { Button } from 'src/components/Button';
import { Calculate } from 'src/models/calculate';
import { initalizer } from 'src/models/initalizer';
import styles from './App.module.scss';

function App() {
  const { result, getButtonsMap } = initalizer<Calculate>(Calculate);

  return (
    <div className={styles.wrapper}>
      <div className={styles.calculator}>
        <div className={styles.resultArea}>
          <div className={styles.calculated}>{result}</div>
          <div className={styles.result}>{result}</div>
        </div>

        <div className={styles.line} />

        <div className={styles.calculatorButtons}>
          {Object.values(getButtonsMap()).map((button) => (
            <Button
              key={button.key}
              title={button.title}
              handleClick={button.handler}
              size={button.size}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
