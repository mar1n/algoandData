function findPair(arr, n) {
    let result = false
    let run = 0;
    let pointer = 0;

    if(!arr.length) {
        return result
    }
    while(run < arr.length) {
        if(run !== pointer) {
            if(arr[run] - arr[pointer] === n) {
                result = true
            }
        }
        if(run === arr.length - 1) {
            run = 0
            pointer++
        } else {
            run++
        }
        if(pointer === arr.length - 1 && run === arr.length - 1) {
            break
        }
    }

    return result
}

console.log(findPair([-4,4], -8))

// findPair([6,1,4,10,2,4], 2) // true
// findPair([8,6,2,4,1,0,2,5,13],1) // true
// findPair([4,-2,3,10],-6) // true
// findPair([6,1,4,10,2,4], 22) // false
// findPair([], 0) // false
// findPair([5,5], 0) // true
// findPair([-4,4], -8) // true
// findPair([-4,4], 8) // true
// findPair([1,3,4,6],-2) // true
// findPair([0,1,3,4,6],-2) // true
// findPair([1,2,3], 0) // false