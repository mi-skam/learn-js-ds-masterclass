function minSubArrayLen(arr, num) {
  let minLength = Infinity;
  // current range and sum of sliding window
  let [start, end, currentSum] = [0, 0, 0];

  // expanding the current window
  while (end < arr.length) {
    currentSum += arr[end];
    end += 1;

    while (start < end && currentSum >= num) {
      currentSum -= arr[start];
      start += 1;

      // Update the minLength if this is shorter
      // than the current value
      minLength = Math.min(minLength, end - start + 1);
    }
  }
  return minLength;
}

console.log(minSubArrayLen([1, 2, 3, 5, 6, 8], 9));
console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)); // 2 -> because [4,3] is the smallest subarray
console.log(minSubArrayLen([2, 1, 6, 5, 4], 9)); // 2 -> because [5,4] is the smallest subarray
console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)); // 1 -> because [62] is greater than 52
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39)); // 3
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)); // 5
console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11)); // 2
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95)); // 0
