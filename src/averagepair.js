function avg(num1, num2) {
  return (num1 + num2) / 2;
}

function averagePair(input, target) {
  // add whatever parameters you deem necessary - good luck!
  let p1 = 0;
  let p2 = input.length - 1;

  while (p2 > p1) {
    let avgTemp = avg(input[p1], input[p2]);

    // match
    if (avgTemp === target) return true;

    if (avgTemp > target) p2--;
    else p1++;
  }

  return false;
}
console.log(averagePair([1, 2, 3], 2.5));
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8));
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1));
console.log(averagePair([], 4));
