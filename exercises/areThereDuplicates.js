function areThereDuplicates(...values) {
    if(values.length === 0 ) {
        return false;
    }
    let frequencyCounter = {}
    for(let value of values.join('')) {
        frequencyCounter[value] = (frequencyCounter[value] || 0) + 1
    }
    for(let value in frequencyCounter) {
        if(frequencyCounter[value] > 1) {
            return true
        }
    }

    return false
}

console.log(areThereDuplicates())
console.log(areThereDuplicates(1, 2, 3))
console.log(areThereDuplicates(1, 2, 2))
console.log(areThereDuplicates('a', 'b', 'c', 'a'))
// areThereDuplicates(1, 2, 3) // false
// areThereDuplicates(1, 2, 2) // true 
// areThereDuplicates('a', 'b', 'c', 'a') // true 