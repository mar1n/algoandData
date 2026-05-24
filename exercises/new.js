function neww(arr) {
    let right = 4
    let left = 0
    let sum = 0
    for(let i = right; right< arr.length; right++) {
        console.log('value', arr[right])
        sum += arr[right]
        left++
        if(sum >= 13) {
            right = arr.length - left
            sum = 0
            left= 0
        }
    }
    console.log('left', left)

}

console.log(neww([1,2,3,4,5,6,7]))