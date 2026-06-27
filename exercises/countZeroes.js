function countZereoes(arr) {
  let min = 0;
  let max = arr.length - 1;
  let middle = 0;

  while (min <= max) {
    middle = Math.floor((min + max) / 2);
    let currentElement = arr[middle];
    console.log('currentElement', currentElement)
    if (arr[middle] > 0) {
      min = middle + 1;
    } else if (arr[middle] <= 0) {
      max = middle - 1;
    } 
  }
  
  if (arr[middle] === 1) {
    return arr.length - (middle + 1);
  }
  return arr.length - middle;
}

console.log(countZereoes([1,0,0,0,0]));

// countZeroes([1,1,1,1,0,0]) // 2
// countZeroes([1,0,0,0,0]) // 4
// countZeroes([0,0,0]) // 3
// countZeroes([1,1,1,1]) // 0
