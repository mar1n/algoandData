function minSubArrayLen(arr, r) {
  let left = 0;
  let sum = 0
  let counter = 0
  let result = Infinity
  for (let right = 0; right < arr.length; right++) {
    // expand window
    sum += arr[right]
    counter++
    while (sum >= 7) {
      console.log('counter', counter)
      // shrink window
      sum -= arr[left]
      console.log('sum', sum)
      result = Math.min(result, right - left + 1)
      console.log('result', result)
      console.log('left', left)
      left++;
    }

    // update answer
  }
  console.log('result', result)
}

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7));

// minSubArrayLen([2,3,1,2,4,3], 7) // 2 -> because [4,3] is the smallest subarray
// minSubArrayLen([2,1,6,5,4], 9) // 2 -> because [5,4] is the smallest subarray
// minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52) // 1 -> because [62] is greater than 52
// minSubArrayLen([1,4,16,22,5,7,8,9,10],39) // 3
// minSubArrayLen([1,4,16,22,5,7,8,9,10],55) // 5
// minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11) // 2
// minSubArrayLen([1,4,16,22,5,7,8,9,10],95) // 0
