function isSubsequence(str1, str2) {
  // good luck. Add any arguments you deem necessary.
  let p1 = 0;
  let p2 = 0;

  while (p1 < str1.length) {
    // if the elements in str2 are exhausted return false
    if (p2 === str2.length) return false;
    // match, check for the next elem in str1
    if (str1[p1] === str2[p2]) {
      p1++;
    }
    // move forward p2
    p2++;
  }
  return true;
}

console.log(isSubsequence("hello", "hello world")); // true
console.log(isSubsequence("hello", "hello world")); // true
console.log(isSubsequence("sing", "sting")); // true
console.log(isSubsequence("abc", "abracadabra")); // true
console.log(isSubsequence("abc", "acb")); // false (order matters)
