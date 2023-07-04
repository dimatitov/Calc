import React from 'react';
import { Calculator } from 'src/components/Calculator/Calculator';
import { Calculate } from 'src/models/calculate';
import { initalizer } from 'src/models/initalizer';
import { IButtonMap } from 'src/types/calculates';
import styles from './App.module.scss';

const { result, getButtonsMap } = initalizer<Calculate>(Calculate);

const App = () => {
  const buttonsMap = Object.values(getButtonsMap()) as Array<IButtonMap>;
  return (
    <div className={styles.wrapper}>
      <Calculator
        result={result}
        buttons={buttonsMap}
      />
    </div>
  );
};

export default App;
