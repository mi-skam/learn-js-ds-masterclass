import { NumberObject } from "./NumberObject";
import { StringNums } from "./StringNums";

export function determineValueFrequency(input: StringNums): NumberObject {
  //transform arr to an object. the keys are the values. the values the frequency in the array
  let numbers: NumberObject = {};

  // We borrow foreach from the Array object, in case input is of type string
  Array.prototype.forEach.call(input, (elem) => {
    numbers[elem.toString()] = ++numbers[elem.toString()] || 1;
  });
  return numbers;
}
