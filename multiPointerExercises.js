function countUniqueValues(arr) {
    let left = 0;
    let right = 1;
    let count = 1
    if(arr.length === 0) {
        return 0
    }
    console.log("arr", arr)
    while(left < arr.length) {
           console.log("left",arr[left])
        console.log("right", arr[right])
        if(arr[right] === undefined) {
            break
        }
        if(arr[left] !== arr[right]) {
            console.log("adding", arr[left], arr[right])
            count++
            
        }
        
        left++
        right++
    }
    return count;
    
}
countUniqueValues([1,1,1,1,1,2])
// countUniqueValues([1,1,1,1,1,2]) // 2
// countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
// countUniqueValues([]) // 0
// countUniqueValues([-2,-1,-1,0,1]) // 4