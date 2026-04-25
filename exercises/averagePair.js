function averagePair(arr, average) {
    let left = 0;
    let right = 1
    
    while(left < arr.length) {
        if(Number.isInteger(average)) {
            if(Math.floor((arr[left] + arr[right]) / 2) === average) return true
        } else {
            if(((arr[left] + arr[right]) / 2) === average) return true
        }
        left++
        right++
    }
    return false
}

console.log(averagePair([],4))

// averagePair([1,2,3],2.5) // true
// averagePair([1,3,3,5,6,7,10,12,19],8) // true
// averagePair([-1,0,3,4,5,6], 4.1) // false
// averagePair([],4) // false