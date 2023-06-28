import { same } from "./same";
import { anagram } from "./anagram";
import { countUniqueValues } from "./countuniquevalues";

console.log(same([1, 2, 3], [4, 1, 9]));
console.log(same([1, 2, 1], [4, 4, 1]));
console.log(anagram("aaz", "aza"));
console.log(anagram("aza", "az"));

console.log(countUniqueValues([1, 1, 1, 1, 1, 2])); // 2
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
console.log(countUniqueValues([])); // 0
console.log(countUniqueValues([-2, -1, -1, 0, 1])); // 4
