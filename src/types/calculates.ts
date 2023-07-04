import { ButtonSize, NUMBERS, SYMBOL } from 'src/constants';

export type GetButtonsMap = () => ButtonsMapType;
export type ButtonsType = SYMBOL & NUMBERS;
export type ButtonsMapType = {
  [key in ButtonsType]: IButtonMap;
};

export interface IButtonMap {
  key: ButtonsType;
  title: ButtonsType;
  handler: () => void;
  size: ButtonSize;
}

export interface ICalculate {
  result: string;
  getButtonsMap: GetButtonsMap;
}
