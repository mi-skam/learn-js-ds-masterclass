import { NumberObject } from "./NumberObject";

//  // true same ([1,2,3], [1,9]) // false
// same([1, 2, 1], [4, 4, 1]); // false (must be same frequency)

function determineValueFrequency(arr: Number[]): NumberObject {
  //transform arr to an object. the keys are the values. the values the frequency in the array
  let numbers: NumberObject = {};
  arr.forEach((elem) => {
    numbers[elem.toString()] = ++numbers[elem.toString()] || 1;
  });
  return numbers;
}

function anagram(arr1: Number[], arr2: Number[]): Boolean {
  let numbers1 = determineValueFrequency(arr1);
  let numbers2 = determineValueFrequency(arr2);

  // check if every key in arr1 has the same frequeny of the squared key in arr2, if so return true
  for (let key in numbers1) {
    // return false, if one of the keys of numbers1 has not the same values as the squared ones in numbers2
    if (numbers1[key] !== numbers2[(+key * +key).toString()]) {
      return false;
    }
  }

  return true;
}

console.log(anagram([1, 2, 3], [4, 1, 9]));
console.log(anagram([1, 2, 1], [4, 4, 1]));
