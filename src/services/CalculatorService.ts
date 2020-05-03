/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable class-methods-use-this */
import ExpressionHandler from '../handlers/ExpressionHandler';
import { ResultHandler } from '../handlers/ResultHandler';

export default class ActionHandler {
  #expressionHandler: ExpressionHandler;

  #resultHandler: ResultHandler;

  constructor(expressionHandler: ExpressionHandler, resultHandler: ResultHandler) {
    this.#expressionHandler = expressionHandler;
    this.#resultHandler = resultHandler;
  }

  // eslint-disable-next-line no-unused-vars
  addDigit(digit: string | number) {}

  addDot() {}

  addSign() {}

  backspace() {}

  clear() {}

  closeBracket() {}

  openBracket() {}

  result() {}

  output() {}
}
