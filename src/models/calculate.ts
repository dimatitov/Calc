import { ButtonSize, NUMBERS, SYMBOL } from 'src/constants';
import { ICalculate } from 'src/types/calculates';

export class Calculate implements ICalculate {
  public result = '0';

  public getButtonsMap = () => {
    return {
      [`SYMBOL.CLEAR`]: {
        key: SYMBOL.CLEAR,
        title: SYMBOL.CLEAR,
        handler: () => console.log('SYMBOL.CLEAR', SYMBOL.CLEAR),
        size: ButtonSize.SMALL,
      },
      [`SYMBOL.PERCENT`]: {
        key: SYMBOL.PERCENT,
        title: SYMBOL.PERCENT,
        handler: () => console.log('SYMBOL.PERCENT', SYMBOL.PERCENT),
        size: ButtonSize.SMALL,
      },
      [`SYMBOL.DELETE`]: {
        key: SYMBOL.DELETE,
        title: SYMBOL.DELETE,
        handler: () => console.log('SYMBOL.DELETE', SYMBOL.DELETE),
        size: ButtonSize.SMALL,
      },
      [`SYMBOL.DIVISION`]: {
        key: SYMBOL.DIVISION,
        title: SYMBOL.DIVISION,
        handler: () => console.log('SYMBOL.DIVISION', SYMBOL.DIVISION),
        size: ButtonSize.SMALL,
      },
      [`NUMBERS.ONE`]: {
        key: NUMBERS.ONE,
        title: NUMBERS.ONE,
        handler: () => this.setValue(NUMBERS.ONE),
        size: ButtonSize.SMALL,
      },
      [`NUMBERS.TWO`]: {
        key: NUMBERS.TWO,
        title: NUMBERS.TWO,
        handler: () => this.setValue(NUMBERS.TWO),
        size: ButtonSize.SMALL,
      },
      [`NUMBERS.THREE`]: {
        key: NUMBERS.THREE,
        title: NUMBERS.THREE,
        handler: () => this.setValue(NUMBERS.THREE),
        size: ButtonSize.SMALL,
      },
      [`SYMBOL.MULTIPL`]: {
        key: SYMBOL.MULTIPL,
        title: SYMBOL.MULTIPL,
        handler: () => console.log('SYMBOL.MULTIPL', SYMBOL.MULTIPL),
        size: ButtonSize.SMALL,
      },
      [`NUMBERS.FOUR`]: {
        key: NUMBERS.FOUR,
        title: NUMBERS.FOUR,
        handler: () => this.setValue(NUMBERS.FOUR),
        size: ButtonSize.SMALL,
      },
      [`NUMBERS.FIVE`]: {
        key: NUMBERS.FIVE,
        title: NUMBERS.FIVE,
        handler: () => this.setValue(NUMBERS.FIVE),
        size: ButtonSize.SMALL,
      },
      [`NUMBERS.SIX`]: {
        key: NUMBERS.SIX,
        title: NUMBERS.SIX,
        handler: () => this.setValue(NUMBERS.SIX),
        size: ButtonSize.SMALL,
      },
      [`SYMBOL.PLUS`]: {
        key: SYMBOL.PLUS,
        title: SYMBOL.PLUS,
        handler: () => console.log('SYMBOL.PLUS', SYMBOL.PLUS),
        size: ButtonSize.SMALL,
      },
      [`NUMBERS.SEVEN`]: {
        key: NUMBERS.SEVEN,
        title: NUMBERS.SEVEN,
        handler: () => this.setValue(NUMBERS.SEVEN),
        size: ButtonSize.SMALL,
      },
      [`NUMBERS.EIGHT`]: {
        key: NUMBERS.EIGHT,
        title: NUMBERS.EIGHT,
        handler: () => this.setValue(NUMBERS.EIGHT),
        size: ButtonSize.SMALL,
      },
      [`NUMBERS.NINE`]: {
        key: NUMBERS.NINE,
        title: NUMBERS.NINE,
        handler: () => this.setValue(NUMBERS.NINE),
        size: ButtonSize.SMALL,
      },
      [`SYMBOL.MINUS`]: {
        key: SYMBOL.MINUS,
        title: SYMBOL.MINUS,
        handler: () => console.log('SYMBOL.MINUS', SYMBOL.MINUS),
        size: ButtonSize.SMALL,
      },
      [`SYMBOL.POINT`]: {
        key: SYMBOL.POINT,
        title: SYMBOL.POINT,
        handler: () => console.log('SYMBOL.POINT', SYMBOL.POINT),
        size: ButtonSize.SMALL,
      },
      [`NUMBERS.ZERO`]: {
        key: NUMBERS.ZERO,
        title: NUMBERS.ZERO,
        handler: () => this.setValue(NUMBERS.ZERO),
        size: ButtonSize.SMALL,
      },
      [`SYMBOL.RESULT`]: {
        key: SYMBOL.RESULT,
        title: SYMBOL.RESULT,
        handler: () => this.setValue(SYMBOL.RESULT),
        size: ButtonSize.LONG,
      },
    };
  };

  private setValue = (value: string) => {
    this.result = value;
    console.log('this.result', this.result);
  };
}
