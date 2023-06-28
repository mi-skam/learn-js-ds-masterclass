import { StringNums } from "./StringNums";
import { determineValueFrequency } from "./determineValueFrequency";

export function anagram(arr1: StringNums, arr2: StringNums): Boolean {
  let numbers1 = determineValueFrequency(arr1);
  let numbers2 = determineValueFrequency(arr2);

  // check if every key in arr1 has the same frequeny of the squared key in arr2, if so return true
  for (let key in numbers1) {
    // return false, if one of the keys of numbers1 has not the same values as the squared ones in numbers2
    if (numbers1[key] !== numbers2[key]) {
      return false;
    }
  }

  return true;
}
