function binarySearch(arr, target) {
    var left = 0
    var right = arr.length - 1
    var mid = Math.floor((left + right) / 2)
    console.log('right', right)
    console.log('mid', mid)
    for(let i= 0; i < arr.length; i++) {
        if(arr[mid] === target) {
            return mid
        }
        if(arr[mid] < target) {
            left = mid + 1
            mid = Math.floor((left + right) / 2)
        } else if(arr[mid] > target) {
            right = mid - 1
            mid = Math.floor((left + right) / 2)
        }
        console.log('i', i)
    }
    return -1
}