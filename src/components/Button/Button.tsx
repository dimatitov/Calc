import React from 'react';
import styles from './Button.module.scss';

interface Props {
  value: string;
}

export const Button: React.FC<Props> = ({ value }) => {
  return <button className={styles.btn}>{value}</button>;
};
