function sortedFrequency(arr, num) {
    let min = 0;
    let max = arr.length - 1;
    let counter = 0;
    let last = 0

    while(min <= max) {
        let middle = Math.floor((min + max) / 2);
        let currentElement = arr[middle];
        console.log('middle while', middle)
        if(arr[middle] > num) {
            min = middle + 1;
            counter++
            console.log('min', min)
        } else if(arr[middle] <= num) {
            console.log('middle >=', middle)
            if(arr[middle] < num) {
                console.log('arr[middle]', arr[middle])
            }
            counter++
            max = middle - 1;
            console.log('max', max)
        } else {
            return middle
        }
    }
    return counter
}

console.log(sortedFrequency([1,1,2,2,2,2,3],2))

// sortedFrequency([1,1,2,2,2,2,3],2) // 4 
// sortedFrequency([1,1,2,2,2,2,3],3) // 1 
// sortedFrequency([1,1,2,2,2,2,3],1) // 2 
// sortedFrequency([1,1,2,2,2,2,3],4) // -1