import React from 'react';
import { Button } from 'src/components/Button';
import styles from 'src/components/Calculator/Calculator.module.scss';
import { Display } from 'src/components/Display/Display';
import { IButtonMap } from 'src/types/calculates';

interface Props {
  result: string;
  buttons: Array<IButtonMap>;
}

export const Calculator: React.FC<Props> = ({ result, buttons }) => {
  console.log('results', result);
  return (
    <div className={styles.calculator}>
      <Display result={result} />

      <div className={styles.line} />

      <div className={styles.calculatorButtons}>
        {buttons.map((button) => (
          <Button
            key={button.key}
            title={button.title}
            handleClick={button.handler}
            size={button.size}
          />
        ))}
      </div>
    </div>
  );
};
