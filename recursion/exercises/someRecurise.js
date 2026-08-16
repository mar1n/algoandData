// SAMPLE INPUT / OUTPUT
// const isOdd = val => val % 2 !== 0;

// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false
var counter = 0;
function someRecursive(arr, isOdd) {
  if (counter === arr.length) return false;
  if (isOdd(arr[counter])) return true;
  console.log("counter", counter);
  counter++;
  // add whatever parameters you deem necessary - good luck!
  return someRecursive(arr, isOdd);
}

console.log(someRecursive([4, 6, 8], (val) => val > 10));
