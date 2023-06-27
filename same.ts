//  // true same ([1,2,3], [1,9]) // false
// same([1, 2, 1], [4, 4, 1]); // false (must be same frequency)

type NumberObject = {
  [key: string]: number;
};

function same(arr1: Number[], arr2: Number[]): Boolean {
  let numbers1: NumberObject = {};
  let numbers2: NumberObject = {};

  //transform arr1 to an object. the keys are the values. the values the frequency in the array
  arr1.forEach((elem) => {
    numbers1[elem.toString()] = ++numbers1[elem.toString()] || 1;
  });
  //transform arr2 to an object. the keys are the values. the values the frequency in the array
  arr2.forEach((elem) => {
    numbers2[elem.toString()] = ++numbers2[elem.toString()] || 1;
  });
  // check if every key in arr1 has the same frequeny of the squared key in arr2, if so return true
  for (let key in numbers1) {
    // return false, if one of the keys of numbers1 has not the same values as the squared ones in numbers2
    if (numbers1[key] !== numbers2[(+key * +key).toString()]) {
      return false;
    }
  }

  return true;
}

console.log(same([1, 2, 3], [4, 1, 9]));
console.log(same([1, 2, 1], [4, 4, 1]));
