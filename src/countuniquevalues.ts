export function countUniqueValues(arr: Number[]): Number {
  //pointer1 and pointer2 are starting in the first two positions
  let pointer1 = 0;
  let pointer2 = 1;

  // return 0, if arr is empty
  if (arr.length === 0) return 0;

  while (pointer2 < arr.length) {
    if (arr[pointer1] !== arr[pointer2]) {
      // if they are different, move pointer1 by one and
      // update the value at pointer1 with the value at pointer2 is currently poiting at.
      pointer1 += 1;
      arr[pointer1] = arr[pointer2];
    }
    pointer2 += 1;
  }
  // now, pointer1 points to the highest unique number, which are sorted from the beginning of the array to the current pos.
  return pointer1 + 1;
}
