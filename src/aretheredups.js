function areThereDuplicates(...input) {
  // counts element of an arr, as a frequency map
  // returns false if there is a key already in the frequency counter
  let frequencyCounter = {};
  let result = false;

  for (let elem of input) {
    if (elem in frequencyCounter) {
      result = true;
      break;
    } else {
      frequencyCounter[elem] = 1;
    }
  }
  return result;
}

console.log(areThereDuplicates(1, 1, 3));
console.log(areThereDuplicates(1, 2, 3));
