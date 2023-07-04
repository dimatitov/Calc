import classNames from 'classnames';
import React from 'react';
import { ButtonSize } from 'src/constants';
import styles from './Button.module.scss';

interface Props {
  title: string;
  handleClick: () => void;
  size: ButtonSize;
}

export const Button: React.FC<Props> = ({ title, handleClick, size }) => {
  return (
    <button
      className={classNames(styles.btn, {
        [styles.long]: size === ButtonSize.LONG,
      })}
      onClick={handleClick}
    >
      {title}
    </button>
  );
};
