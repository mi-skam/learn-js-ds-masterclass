const sumElements = (arr, n, start = 0) => {
  return arr.slice(start, n).reduce((acc, cur) => (acc += cur), 0);
};

function maxSubarraySum(arr, nr) {
  let maxSum;
  let tempSum;
  // not enough elements in the array
  if (nr > arr.length) return null;
  // nr equals 0
  if (nr === 0) return null;

  // loop until i is nr steps away from the end of arr
  for (let i = 0; i <= arr.length - nr; i++) {
    if (i === 0) {
      // sum the first nr elements
      tempSum = maxSum = sumElements(arr, nr);
    } else {
      // update tempSum by 
      // 1. reducing the most left element
      // 2. adding the outer right element
      tempSum = tempSum - arr[i - 1] + arr[i + nr - 1];
      maxSum = maxSum > tempSum ? maxSum : tempSum;
    }
  }
  return maxSum;
}

console.log(maxSubarraySum([100, 200, 300, 400], 2)); // 700
console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); // 39
console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)); // 5
console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)); // 5
console.log(maxSubarraySum([2, 3], 3)); // null
